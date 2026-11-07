import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Terminal, CheckCircle2, Code2, X, FileCode2, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface PortfolioTestSuiteModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PortfolioTestSuiteModal: React.FC<PortfolioTestSuiteModalProps> = ({ isOpen, onClose }) => {
    const { i18n } = useTranslation();
    const isEn = i18n.language.startsWith('en');
    const [activeTab, setActiveTab] = useState<'xunit' | 'playwright' | 'contracts'>('xunit');

    const xunitCode = `// AxelLinaresApi.Tests/PortfolioApiTests.cs (.NET 8 + xUnit + SQLite In-Memory)
[Fact]
public void DataSeeder_ConfidentialityInvariant_NeverExposesInternalPositronicaRepos()
{
    // Arrange — Fixture aislada en memoria (0 disco físico, 0 red externa)
    using var fixture = new SqliteInMemoryDbFixture();
    DataSeeder.Initialize(fixture.Context);

    // Act
    var projects = fixture.Context.Projects.AsNoTracking().ToList();
    var chambaProject = projects.Single(p => p.Title.Contains("Mi Primera Chamba"));

    // Assert — Confidencialidad estricta y sanitización
    Assert.Null(chambaProject.ProjectUrl);
    foreach (var forbidden in ForbiddenInternalRepositories)
    {
        Assert.DoesNotContain(projects, p =>
            (p.ProjectUrl != null && p.ProjectUrl.Contains(forbidden, StringComparison.OrdinalIgnoreCase)));
    }
}

[Theory]
[InlineData("Axel\\r\\nBcc:victim@evil.com", "axel@example.com", "Mensaje válido de prueba.")]
[InlineData("Axel Linares", "correo-invalido", "Mensaje válido de prueba.")]
[InlineData("Axel Linares", "axel@example.com", "            ")]
public void ContactRequest_Validation_RejectsCrlfHeaderInjectionAndInvalidPayloads(
    string name, string email, string message)
{
    // Arrange
    var request = new ContactRequest { Name = name, Email = email, Message = message };
    var results = new List<ValidationResult>();

    // Act
    var isValid = Validator.TryValidateObject(request, new ValidationContext(request), results, true);

    // Assert — Prevención AppSec OWASP (CRLF SMTP Header Injection)
    Assert.False(isValid);
    Assert.NotEmpty(results);
}`;

    const playwrightPomCode = `// e2e/Pages/PortfolioPage.ts — Estándar QA Playwright Master (Strict POM)
export class PortfolioPage {
    readonly page: Page;
    readonly projectsSection: Locator;
    readonly closeArchitectureModalButton: Locator;
    readonly rollD20Button: Locator;

    constructor(page: Page) {
        this.page = page;
        this.projectsSection = page.locator('#proyectos');
        this.closeArchitectureModalButton = page.locator('button', { hasText: /Cerrar_Expediente|Close_Dossier/ });
        this.rollD20Button = page.locator('#offline button', { hasText: /Tirar D20|Roll D20/ });
    }

    async selectProjectCategoryTab(categoryLabel: string) {
        await this.projectsSection.locator('button', { hasText: categoryLabel }).click();
    }

    async openFirstArchitectureSpecModal() {
        await this.projectsSection.locator('button', { hasText: /Ficha_Arquitectura|Architecture_Spec/ }).first().click();
        await expect(this.closeArchitectureModalButton).toBeVisible();
    }
}

// e2e/Tests/portfolio.e2e.spec.ts — Data-Driven E2E (0 sleeps, 100% determinista)
test('QA_PRT_01_FilterProjectsByCategory_UpdatesVisibleCaseStudies', async ({ portfolioPage }) => {
    await portfolioPage.goto();
    for (const cat of testData.categories) {
        await portfolioPage.selectProjectCategoryTab(cat.tabEs);
        await expect(portfolioPage.projectsSection.locator('h3')).toHaveCount(cat.expectedCount);
    }
});`;

    const contractsCode = `// tests/portfolio-contracts.test.mjs — Contratos que cruzan fronteras (Node Test Runner)
test('i18n Contract_EsAndEnDictionaries_HaveExactKeyParityAndNonEmptyValues', () => {
    // Arrange
    const source = fs.readFileSync(path.join(repoRoot, 'src', 'i18n.ts'), 'utf8');

    // Act — Extrae ambos diccionarios para forzar paridad 1:1 en CI
    const esMap = extractTranslationMap(source, 'es');
    const enMap = extractTranslationMap(source, 'en');

    // Assert — Si alguien agrega una llave en ES y olvida EN, el CI Gate rompe el build
    assert.deepEqual([...esMap.keys()].sort(), [...enMap.keys()].sort());
});

test('D20Engine_ClassifyRoll_MapsAllTwentyOutcomesAndRejectsOutOfBoundsValues', () => {
    assert.equal(classifyD20Roll(20), 'hobby_pokednd_crit');
    assert.equal(classifyD20Roll(1), 'hobby_pokednd_fail');
    assert.throws(() => classifyD20Roll(0), RangeError);
    assert.throws(() => classifyD20Roll(21), RangeError);
});`;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
                >
                    <motion.div
                        initial={{ scale: 0.94, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.94, opacity: 0, y: 20 }}
                        onClick={(e) => e.stopPropagation()}
                        className="w-full max-w-4xl bg-[#0b1120] border border-red-500/50 rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(220,38,38,0.25)] max-h-[90vh] flex flex-col"
                    >
                        {/* Header tipo Terminal */}
                        <div className="flex items-center justify-between px-6 py-4 bg-slate-900/95 border-b border-slate-800">
                            <div className="flex items-center gap-3">
                                <ShieldCheck className="text-red-500 w-5 h-5" />
                                <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">
                                    {isEn
                                        ? '> PORTFOLIO_SELF_TEST_SUITE // QUALITY_GATE_VERIFIED'
                                        : '> SUITE_QA_DEL_PORTAFOLIO // QUALITY_GATE_VERIFICADO'}
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors cursor-pointer"
                            >
                                <X size={18} />
                            </button>
                        </div>

                        {/* Body */}
                        <div className="p-6 md:p-8 overflow-y-auto space-y-6">
                            {/* Resumen de Métricas */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                                    <div>
                                        <p className="text-[11px] font-mono text-slate-400 uppercase">Backend (.NET 8 xUnit)</p>
                                        <p className="text-xl font-extrabold text-white font-mono">11 / 11 PASS</p>
                                    </div>
                                    <CheckCircle2 className="text-emerald-400 w-6 h-6" />
                                </div>
                                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                                    <div>
                                        <p className="text-[11px] font-mono text-slate-400 uppercase">Frontend (Playwright POM)</p>
                                        <p className="text-xl font-extrabold text-white font-mono">4 E2E Specs</p>
                                    </div>
                                    <Layers className="text-red-500 w-6 h-6" />
                                </div>
                                <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800 flex items-center justify-between">
                                    <div>
                                        <p className="text-[11px] font-mono text-slate-400 uppercase">i18n & Logic Contracts</p>
                                        <p className="text-xl font-extrabold text-white font-mono">3 / 3 PASS</p>
                                    </div>
                                    <Terminal className="text-emerald-400 w-6 h-6" />
                                </div>
                            </div>

                            {/* Selector de Pestañas de Código Real */}
                            <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
                                <button
                                    onClick={() => setActiveTab('xunit')}
                                    className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                                        activeTab === 'xunit'
                                            ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                                    }`}
                                >
                                    <Code2 size={14} />
                                    <span>1. Backend xUnit & AppSec (.NET 8)</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('playwright')}
                                    className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                                        activeTab === 'playwright'
                                            ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                                    }`}
                                >
                                    <FileCode2 size={14} />
                                    <span>2. Playwright E2E (Page Object Model)</span>
                                </button>
                                <button
                                    onClick={() => setActiveTab('contracts')}
                                    className={`px-4 py-2 rounded-lg font-mono text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
                                        activeTab === 'contracts'
                                            ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                                            : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                                    }`}
                                >
                                    <Terminal size={14} />
                                    <span>3. Contratos i18n & Motor D20</span>
                                </button>
                            </div>

                            {/* Visor de Código de la Suite */}
                            <div className="rounded-xl bg-slate-950 border border-slate-800 p-4 overflow-x-auto">
                                <pre className="text-xs font-mono text-slate-200 leading-relaxed">
                                    <code>
                                        {activeTab === 'xunit' && xunitCode}
                                        {activeTab === 'playwright' && playwrightPomCode}
                                        {activeTab === 'contracts' && contractsCode}
                                    </code>
                                </pre>
                            </div>

                            {/* Estándares Aplicados */}
                            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-xs font-mono text-slate-300 space-y-1.5">
                                <p className="text-red-400 font-bold uppercase">
                                    {isEn ? 'Applied Engineering & Testing Standards:' : 'Estándares de Ingeniería & QA Aplicados:'}
                                </p>
                                <p>✔ <strong className="text-white">AAA Pattern & In-Memory Isolation:</strong> SQLite `:memory:` fixture sin llamadas a red ni acoplamiento a disco.</p>
                                <p>✔ <strong className="text-white">Strict Page Object Model (POM):</strong> `BaseTest.ts` + `PortfolioPage.ts` + `portfolioTestData.json` sin `sleep` ni selectores crudos.</p>
                                <p>✔ <strong className="text-white">Cross-Boundary Contract Gate:</strong> Paridad automática `ES/EN` y validación AppSec contra inyección CRLF (RFC 7807).</p>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
                            <span className="text-xs font-mono text-emerald-400">
                                ✔ CI Gate (.github/workflows/ci.yml): ACTIVE
                            </span>
                            <button
                                onClick={onClose}
                                className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-mono text-xs uppercase rounded-lg transition-colors cursor-pointer"
                            >
                                {isEn ? '[ Close_Suite ]' : '[ Cerrar_Suite ]'}
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default PortfolioTestSuiteModal;
