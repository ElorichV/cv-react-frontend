# Suite de Automatización E2E & Contratos — `cv-react-frontend`

Documentación técnica generada bajo los estándares **`qa-playwright-master`**, **`testing`** y **`tdd-workflow`**.

---

## 1. Qué cubre este módulo de pruebas

1. **Pruebas de Contrato y Lógica Determinista (`tests/portfolio-contracts.test.mjs`)**:
   - **Paridad Bilingüe (`ES` ↔ `EN`)**: Extrae ambos diccionarios desde [`src/i18n.ts`](../src/i18n.ts) y verifica que el 100% de las llaves coincidan sin valores vacíos (Regla 8 de `testing`: *Contratos de nombres que cruzan una frontera*).
   - **Motor de Tiradas D20 (`Hobbies.tsx`)**: Verifica las fronteras matemáticas (`1`, `2..14`, `15..19`, `20`) y el rechazo de valores fuera de rango (`0`, `21`).
   - **Verificación Negativa del Gate**: Confirma que el validador de contratos falla inmediatamente ante un diccionario incompleto (Regla 9.3 de `testing`).

2. **Suite E2E con Playwright (`e2e/`)**:
   - **`QA_PRT_01`**: Filtrado reactivo de casos de estudio por categoría (*Todos*, *AI Hackathons & Agentes*, *Backend & Cloud (.NET)*, *QA Automation & DSA*).
   - **`QA_PRT_02`**: Apertura y cierre del expediente técnico interactivo (`[ Ficha_Arquitectura ] ⚡`) y verificación de confidencialidad en casos internos (`Mi Primera Chamba`).
   - **`QA_PRT_03`**: Validación de la sección `> OFFLINE_MODE` (origen del diseño inspirado en la IX Legión Blood Angels, enlace en vivo a `https://pokedyd.online/` y mini-juego interactivo D20).
   - **`QA_PRT_04`**: Conmutación reactiva de idioma (`ES` / `EN`) sin pérdida de estado.

---

## 2. Cómo está estructurado el Page Object Model (POM)

```text
cv-react-frontend/
├── tests/
│   └── portfolio-contracts.test.mjs   # Pruebas rápidas de contrato i18n y motor D20 (< 200ms)
└── e2e/
    ├── Core/
    │   └── BaseTest.ts                # Intercepta /api/Profile con fixtures locales (0 red externa)
    ├── Pages/
    │   └── PortfolioPage.ts           # Page Object Model estricto (locators y acciones encapsuladas)
    ├── TestData/
    │   └── portfolioTestData.json     # Datos de prueba desacoplados (Data-Driven Testing)
    └── Tests/
        └── portfolio.e2e.spec.ts      # Escenarios E2E con aserciones auto-reintentables (0 sleeps)
```

---

## 3. Comandos exactos de terminal para ejecutar la suite

### Ejecutar pruebas de contrato y lógica (Gate rápido CI):
```powershell
npm test
```

### Compilar artefacto de producción (Gate de compilación TypeScript + Vite):
```powershell
npm run build
```

### Ejecutar suite E2E con Playwright:
```powershell
npx playwright test e2e/Tests/portfolio.e2e.spec.ts
```
