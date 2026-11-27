import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { buildFallbackProjects } from '../src/lib/fallbackProjects.ts';
import { projects as dossierProjects, experience as dossierExperience, credentials as dossierCredentials } from '../src/lib/portfolio.ts';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, '..');

/**
 * Inventario canónico de repositorios públicos verificados en https://github.com/ElorichV?tab=repositories
 * (Regla 8 de testing: contratos que cruzan una frontera externa).
 */
const VERIFIED_PUBLIC_ELORICHV_REPOS = new Set([
    'Voz-abierta',
    'TaskMaster-API-Modern-CFML-Showcase',
    'Serverless-Batch-Order-Processor',
    'Sistema-de-gestion-para-panaderias',
    'cv-react-frontend',
    'nerdearla-mx-pinata',
    'AxelLinaresApi',
    'Billetazo',
    'AWS_Hackathon_Kiro_2026',
    'PokeD-D',
    'Voice2Task',
    'ElorichV',
    'hacktoberfest2026',
    'Playwrigth_Demo',
    'Codigos-de-aprendizaje-y-competencia',
    'PR-Picafresas-Request',
    'Proyecto-Aula',
    'Mohnblumen'
]);

const RETIRED_HOSTS = new Set([
    'd1xk37jjpjmwph.cloudfront.net'
]);

/**
 * Extrae las llaves de traducción de un bloque de idioma ('es' o 'en') en src/i18n.ts
 * para forzar el contrato de paridad bilingüe (Regla 8 de testing: contratos que cruzan una frontera).
 */
function extractTranslationMap(i18nSource, langKey) {
    const blockRegex = new RegExp(`${langKey}:\\s*\\{[\\s\\S]*?translation:\\s*\\{([\\s\\S]*?)\\}\\s*\\}`, 'm');
    const match = i18nSource.match(blockRegex);
    assert.ok(match, `No se encontró el bloque de idioma '${langKey}' en src/i18n.ts`);

    const body = match[1];
    const entryRegex = /"([^"]+)"\s*:\s*"([^"]*)"/g;
    const map = new Map();
    let entry;
    while ((entry = entryRegex.exec(body)) !== null) {
        map.set(entry[1], entry[2]);
    }
    return map;
}

/**
 * Clasificador puro de tiradas D20 usado en Hobbies (Offline Mode).
 */
function classifyD20Roll(roll) {
    if (roll < 1 || roll > 20 || !Number.isInteger(roll)) {
        throw new RangeError('D20 roll must be an integer between 1 and 20');
    }
    if (roll === 20) return 'hobby_pokednd_crit';
    if (roll === 1) return 'hobby_pokednd_fail';
    if (roll >= 15) return 'hobby_pokednd_high';
    return 'hobby_pokednd_norm';
}

test('i18n Contract_EsAndEnDictionaries_HaveExactKeyParityAndNonEmptyValues', () => {
    // Arrange
    const i18nPath = path.join(repoRoot, 'src', 'i18n.ts');
    const source = fs.readFileSync(i18nPath, 'utf8');

    // Act
    const esMap = extractTranslationMap(source, 'es');
    const enMap = extractTranslationMap(source, 'en');

    const esKeys = [...esMap.keys()].sort();
    const enKeys = [...enMap.keys()].sort();

    // Assert
    assert.ok(esKeys.length >= 60, `Se esperaban al menos 60 llaves i18n, se encontraron ${esKeys.length}`);
    assert.deepEqual(
        esKeys,
        enKeys,
        'Desfase de contrato i18n: las llaves de español (es) e inglés (en) deben ser idénticas'
    );

    for (const [key, value] of esMap.entries()) {
        assert.ok(value.trim().length > 0, `La llave '${key}' en 'es' está vacía`);
    }
    for (const [key, value] of enMap.entries()) {
        assert.ok(value.trim().length > 0, `La llave '${key}' en 'en' está vacía`);
    }
});

test('D20Engine_ClassifyRoll_MapsAllTwentyOutcomesAndRejectsOutOfBoundsValues', () => {
    // Arrange & Act & Assert
    assert.equal(classifyD20Roll(20), 'hobby_pokednd_crit');
    assert.equal(classifyD20Roll(1), 'hobby_pokednd_fail');

    for (let r = 15; r <= 19; r++) {
        assert.equal(classifyD20Roll(r), 'hobby_pokednd_high');
    }
    for (let r = 2; r <= 14; r++) {
        assert.equal(classifyD20Roll(r), 'hobby_pokednd_norm');
    }

    assert.throws(() => classifyD20Roll(0), RangeError);
    assert.throws(() => classifyD20Roll(21), RangeError);
});

test('NegativeCheck_BrokenTranslationMap_ThrowsAssertionErrorWhenKeyIsMissing', () => {
    // Regla 9.3 de testing: probar que el verificador falla cuando falta una llave en el contrato
    const sampleBrokenSource = `
        es: { translation: { "header_hello": "Hola", "only_in_es": "Valor" } },
        en: { translation: { "header_hello": "Hello" } }
    `;
    const esKeys = [...extractTranslationMap(sampleBrokenSource, 'es').keys()];
    const enKeys = [...extractTranslationMap(sampleBrokenSource, 'en').keys()];

    assert.throws(() => {
        assert.deepEqual(esKeys, enKeys);
    });
});

test('FallbackProjects_LocalAssetsAndFloorplans_ExistAsNonEmptyFilesInPublicDir', () => {
    const publicDir = path.join(repoRoot, 'public');

    for (const isEn of [false, true]) {
        const projects = buildFallbackProjects(isEn);
        assert.equal(projects.length, 9, 'El catálogo resiliente debe contener los 9 casos de estudio');

        for (const project of projects) {
            for (const assetField of ['architectureDiagramUrl', 'imageUrl']) {
                const assetUrl = project[assetField];
                if (!assetUrl || !assetUrl.startsWith('/')) continue;

                const relativePath = assetUrl.replace(/^\/+/, '');
                const diskPath = path.join(publicDir, relativePath);
                assert.ok(
                    fs.existsSync(diskPath) && fs.statSync(diskPath).size > 0,
                    `Enlace roto (${assetField}) en '${project.title}': '${assetUrl}' no existe en public/`
                );
            }
        }
    }
});

test('FallbackProjects_ExternalGitHubUrls_TargetVerifiedPublicRepositoriesOnly', () => {
    for (const isEn of [false, true]) {
        const projects = buildFallbackProjects(isEn);

        for (const project of projects) {
            if (!project.projectUrl) continue;

            const parsed = new URL(project.projectUrl);
            assert.equal(parsed.protocol, 'https:', `URL insegura en '${project.title}'`);
            assert.equal(parsed.hostname, 'github.com', `Host inesperado en '${project.title}'`);

            const segments = parsed.pathname.split('/').filter(Boolean);
            assert.equal(segments[0], 'ElorichV', `Owner inesperado en '${project.title}'`);
            assert.ok(
                VERIFIED_PUBLIC_ELORICHV_REPOS.has(segments[1]),
                `Repositorio inexistente o con typo (HTTP 404) en '${project.title}': '${project.projectUrl}'`
            );
        }
    }

    for (const item of dossierProjects) {
        if (!item.repo) continue;
        const segments = new URL(item.repo).pathname.split('/').filter(Boolean);
        assert.ok(
            VERIFIED_PUBLIC_ELORICHV_REPOS.has(segments[1]),
            `Repositorio inexistente en dossier '${item.title[0]}': '${item.repo}'`
        );
    }
});

test('PortfolioUrls_ActiveDeployments_NeverReferenceRetiredCloudFrontDomain', () => {
    const candidateUrls = [
        ...dossierProjects.map((p) => p.live).filter(Boolean),
        ...dossierExperience.map((e) => e.url).filter(Boolean),
        ...dossierCredentials.map((c) => c.verify).filter(Boolean)
    ];

    assert.ok(candidateUrls.length > 0, 'Debe existir al menos una URL activa verificable');
    for (const rawUrl of candidateUrls) {
        const parsed = new URL(rawUrl);
        assert.equal(parsed.protocol, 'https:');
        assert.ok(
            !RETIRED_HOSTS.has(parsed.hostname),
            `Dominio retirado detectado (ERR_NAME_NOT_RESOLVED): '${rawUrl}'`
        );
    }
});
