export interface FallbackProjectItem {
    id: number;
    title: string;
    description: string;
    projectUrl?: string | null;
    imageUrl?: string | null;
    category?: string;
    badge?: string;
    techStack?: string[];
    architectureNotes?: string[];
    architectureDiagramUrl?: string | null;
}

export function buildFallbackProjects(isEn: boolean): FallbackProjectItem[] {
    return [
        {
            id: 1,
            title: 'BenchEngine / GreenGemma (MLH Hackathon)',
            description: isEn
                ? 'Awarded Honorable Mention (4th Place) at MLH Hackathon. Local energy benchmarking platform for open LLMs (Gemma 4) with structured Firecrawl extraction, passwordless OTP authentication, and real-time voice synthesis via ElevenLabs.'
                : 'Galardonado con Mención Honorífica (4to lugar) en MLH. Plataforma de benchmarking energético local para modelos abiertos (Gemma 4) con extracción estructurada vía Firecrawl, autenticación OTP y síntesis de voz con ElevenLabs.',
            projectUrl: 'https://github.com/ElorichV/hacktoberfest2026',
            architectureDiagramUrl: '/floorplans/benchengine.html',
            category: 'Hackathons',
            badge: isEn ? '🏆 4th Place MLH Hackathon' : '🏆 4to Lugar MLH Hackathon',
            techStack: ['Ollama (Gemma 4)', 'Firecrawl', 'ElevenLabs', 'React', 'MojoAuth OTP'],
            architectureNotes: isEn ? [
                'Local vs Cloud Inference: Benchmarking Gemma 4 on Ollama to measure real energy consumption per token without network jitter.',
                'Structured Web Ingestion: Integrated Firecrawl to transform raw technical documentation into clean evaluation contexts.',
                'Security & Accessibility: Passwordless OTP authentication flow and auditory real-time telemetry via ElevenLabs API.'
            ] : [
                'Inferencia Local vs Cloud: Ejecución de Gemma 4 sobre Ollama para medir consumo energético real por token sin latencia de red.',
                'Ingesta Web Estructurada: Integración de Firecrawl para transformar documentación técnica en contextos limpios de evaluación.',
                'Accesibilidad & Seguridad: Flujo passwordless con MojoAuth OTP y telemetría auditiva en tiempo real vía ElevenLabs API.'
            ]
        },
        {
            id: 2,
            title: isEn ? 'Voz Abierta — Bidirectional 3D Sign Language Translator' : 'Voz Abierta — Traductor Bidireccional LSM 3D',
            description: isEn
                ? 'Prototype engineered for AI Hackathon Mexico × Clara. Real-time bi-directional translator between Mexican Sign Language (LSM) and Spanish using edge computer vision with MediaPipe, 3D avatar in Three.js, and Web Speech API.'
                : 'Prototipo desarrollado para el AI Hackathon por México × Clara. Traductor en tiempo real entre Lengua de Señas Mexicana (LSM) y español utilizando visión computacional con MediaPipe, avatar 3D en Three.js y Web Speech API.',
            projectUrl: 'https://github.com/ElorichV/Voz-abierta',
            architectureDiagramUrl: '/floorplans/voz-abierta.html',
            category: 'Hackathons',
            badge: '🚀 AI Hackathon × Clara',
            techStack: ['MediaPipe', 'Three.js', 'Web Speech API', 'React', 'TypeScript'],
            architectureNotes: isEn ? [
                'Edge Computer Vision: Hands and body pose extraction at 60 FPS in-browser with MediaPipe without sending raw video off-device.',
                '3D Kinematic Engine: Skeletal interpolation in Three.js converting speech tokens to fluid LSM sign animations.',
                'Civic Impact: Low-latency accessibility designed for government citizen desks and financial services.'
            ] : [
                'Visión Computacional Edge: Extracción de landmarks corporales y de manos a 60 FPS en el navegador con MediaPipe sin enviar video crudo a servidores externos.',
                'Motor de Animación 3D: Interpolación cinemática en Three.js para traducir texto/voz a señas fluidas en un avatar tridimensional.',
                'Impacto Cívico: Diseño de baja latencia pensado para inclusión en ventanillas de atención ciudadana y servicios financieros.'
            ]
        },
        {
            id: 3,
            title: isEn ? 'Voice2Task — Native iOS Voice-to-GitHub Agent' : 'Voice2Task — Agente iOS Voz a GitHub Issues',
            description: isEn
                ? 'Native iOS app (SwiftUI + SwiftData) transcribing voice memos via SFSpeechRecognizer, parsing tasks with OpenAI (gpt-4o-mini structured JSON Schema), and synchronizing automatically with GitHub Issues.'
                : 'Aplicación nativa iOS (SwiftUI + SwiftData) que transcribe notas de voz técnicas en tiempo real con SFSpeechRecognizer, extrae tareas estructuradas mediante OpenAI (gpt-4o-mini) y las sincroniza automáticamente con GitHub Issues.',
            projectUrl: 'https://github.com/ElorichV/Voice2Task',
            architectureDiagramUrl: '/floorplans/voice2task.html',
            category: 'Hackathons',
            badge: '📱 Native iOS + AI Agents',
            techStack: ['SwiftUI', 'SwiftData', 'OpenAI API', 'SFSpeechRecognizer', 'GitHub REST API'],
            architectureNotes: isEn ? [
                'Local-First Persistence: Reactive SwiftData caching preventing audio and memo loss during connectivity dips.',
                'Deterministic LLM Extraction: JSON Schema validation against gpt-4o-mini transforming free speech into acceptance criteria tickets.',
                'Resilient API Sync: Direct GitHub REST integration handling exponential backoff and rate limits.'
            ] : [
                'Persistencia Local-First: Almacenamiento reactivo con SwiftData garantizando cero pérdida de notas de voz aún sin conexión.',
                'Extracción Determinista con LLMs: Prompts estructurados (JSON Schema) sobre gpt-4o-mini para transformar audio libre en tickets con título, etiquetas y criterios de aceptación.',
                'Sincronización Bidireccional: Integración directa con GitHub Issues API con manejo resiliente de reintentos y rate limits.'
            ]
        },
        {
            id: 4,
            title: isEn ? 'TahonaEngine · Bakery DB & Enterprise ERP/POS' : 'TahonaEngine · Sistema DB & ERP/POS para Panaderías',
            description: isEn
                ? 'Database engineering & ERP platform under .NET 8 Clean Architecture, EF Core, and SQL Server (15 tables in 3NF, 63,500+ rows across 3 years, covering indexes, ACID transactions) paired with a React 18 + WebGL observability console.'
                : 'Plataforma de ingeniería de base de datos y ERP bajo Clean Architecture (.NET 8, EF Core y SQL Server: 15 tablas en 3FN, +63,500 registros de 3 años, índices cubrientes y transacciones ACID) con consola React 18 + WebGL.',
            projectUrl: 'https://github.com/ElorichV/Sistema-de-gestion-para-panaderias',
            imageUrl: '/tahona-db-hero.jpg',
            architectureDiagramUrl: '/floorplans/panaderia-erp.html',
            category: 'Backend',
            badge: isEn ? '🏛️ 15 Tables 3NF & ACID' : '🏛️ 15 Tablas 3FN & ACID',
            techStack: ['.NET 8 Web API', 'SQL Server (3FN)', 'EF Core 8', 'Clean Architecture', 'React 18 + WebGL'],
            architectureNotes: isEn ? [
                'ACID Transactional Consistency: Explicit EF Core transactions deducting stock and recalculating weighted average cost with automatic rollback.',
                '3-Year Relational Dataset (63,503 Rows): Covering indexes (INCLUDE) and SARGable range queries resolving 36-month analytics with zero key lookups.',
                'Interactive DBA Console: Built-in Crow\'s Foot ER atlas, live endpoint latency workbench, and WebGL shader UI.'
            ] : [
                'Consistencia Transaccional ACID: Transacciones explícitas en EF Core para descuento de stock y recálculo de Costo Promedio Ponderado con rollback automático.',
                'Dataset Relacional de 3 Años (63,503 Filas): Índices cubrientes (INCLUDE) y predicados SARGables que resuelven 36 meses de analítica sin Key Lookups.',
                'Consola Interactiva DBA: Atlas E-R Crow\'s Foot integrado, laboratorio de endpoints en vivo y shader WebGL.'
            ]
        },
        {
            id: 5,
            title: isEn ? 'Cloud Portfolio Engine & API Core (.NET 8 + AWS)' : 'Portafolio Cloud Engine & API Core (.NET 8 + AWS)',
            description: isEn
                ? 'Decoupled Full-Stack platform deployed on Azure & AWS. .NET 8 backend featuring native IP rate limiting, AppSec CRLF sanitization, and standardized RFC 7807 ProblemDetails.'
                : 'Plataforma Full-Stack desacoplada desplegada en la nube. Backend en .NET 8 con Rate Limiting nativo por IP, sanitización AppSec contra inyección CRLF y respuestas estandarizadas RFC 7807.',
            projectUrl: 'https://github.com/ElorichV/AxelLinaresApi',
            architectureDiagramUrl: '/floorplans/portafolio-cloud.html',
            category: 'Backend',
            badge: '☁️ Azure + AWS + .NET 8',
            techStack: ['.NET 8', 'ASP.NET Core', 'Azure Static Web Apps', 'SQLite', 'RFC 7807', 'React + Vite'],
            architectureNotes: isEn ? [
                'Anti-Abuse Rate Limiting: FixedWindowRateLimiter partitioned by real client IP (X-Forwarded-For) returning HTTP 429 ProblemDetails.',
                'SMTP AppSec Mitigation: Header sanitization stripping CRLF sequences to prevent header injection in email delivery pipelines.',
                'Contract Verification CI: Automated parity and link contract tests ensuring zero schema drift or broken URLs.'
            ] : [
                'Resiliencia Anti-Spam (Rate Limiting): Middleware FixedWindowRateLimiter particionado por IP real (X-Forwarded-For) devolviendo HTTP 429 en formato RFC 7807.',
                'Mitigación AppSec (CRLF Header Injection): Sanitización estricta de cabeceras SMTP y validación por DataAnnotations para mitigar vulnerabilidades OWASP.',
                'CI Verification Gate: Pruebas automáticas de contrato que validan paridad ES/EN e integridad de enlaces y floorplans.'
            ]
        },
        {
            id: 6,
            title: 'TaskMaster API — Modern CFML Showcase',
            description: isEn
                ? 'Production-grade RESTful API built in 100% modern cfscript on Lucee and CommandBox. Features layered architecture, stateless HMAC-SHA256 JWT authentication, embedded H2 database, and RFC 7807 error contracts.'
                : 'API RESTful de grado productivo construida 100% en cfscript moderno sobre Lucee y CommandBox. Implementa arquitectura por capas, autenticación stateless JWT (HMAC-SHA256), base de datos H2 embebida y contratos RFC 7807.',
            projectUrl: 'https://github.com/ElorichV/TaskMaster-API-Modern-CFML-Showcase',
            architectureDiagramUrl: '/floorplans/taskmaster-cfml.html',
            category: 'Backend',
            badge: '🛡️ AppSec & OWASP Top 10',
            techStack: ['Modern CFML', 'Lucee', 'JWT HMAC-SHA256', 'RFC 7807', 'H2 Database', 'CommandBox'],
            architectureNotes: isEn ? [
                'Legacy Ecosystem Modernization: Demonstrates enterprise-grade CFML engineering using 100% pure cfscript decoupled from views.',
                'Stateless Security: HMAC-SHA256 signed JWT tokens and 100% parameterized queries preventing SQL Injection.',
                'Standardized Error Contracts: Global exception mapping into RFC 7807 ProblemDetails payloads.'
            ] : [
                'Modernización de Ecosistema Legacy: Demostración de cómo llevar CFML a estándares empresariales modernos (100% cfscript, sin etiquetas acopladas a vistas).',
                'Seguridad Stateless: Implementación de tokens JWT firmados con HMAC-SHA256 y consultas 100% parametrizadas contra SQL Injection.',
                'Estandarización de Errores: Mapeo global de excepciones hacia estructuras RFC 7807 ProblemDetails.'
            ]
        },
        {
            id: 7,
            title: 'QA AI-Assistant & Enterprise Playwright Suite',
            description: isEn
                ? 'End-to-End (E2E) automation framework in C# / .NET 9, Playwright, and NUnit integrated with a Python / OpenAI API analytical assistant that captures runtime exceptions to diagnose root causes and suggest patches in real time.'
                : 'Framework de automatización E2E en C# / .NET 9, Playwright y NUnit integrado con un asistente analítico en Python / OpenAI API que captura excepciones de ejecución en tiempo real para diagnosticar causas raíz y sugerir parches.',
            projectUrl: 'https://github.com/ElorichV/Playwrigth_Demo',
            architectureDiagramUrl: '/floorplans/qa-ai-playwright.html',
            category: 'QA',
            badge: '🤖 Playwright + OpenAI API',
            techStack: ['C#', '.NET 9', 'Playwright', 'Python', 'OpenAI API', 'NUnit', 'Browserbase'],
            architectureNotes: isEn ? [
                'AI-Assisted Diagnostics: Automatic capture of stack traces, DOM snapshots, and Playwright logs sent to OpenAI models for real-time fix suggestions.',
                'Zero-Flakiness Architecture: Implements Page Object Model (POM), async LocatorHandlers, and synthetic data factories with Bogus.',
                'E2E Observability: Automated generation of network HAR files and execution traces compatible with Browserbase cloud sessions.'
            ] : [
                'Diagnóstico Asistido por IA: Captura automática de stack traces, DOM snapshots y logs de Playwright enviados a modelos de OpenAI para sugerir correcciones de selectores o código.',
                'Arquitectura Resiliente (Zero-Flakiness): Implementación de Page Object Model (POM), LocatorHandlers asíncronos y fábricas de datos sintéticos con Bogus.',
                'Observabilidad E2E: Generación automática de archivos HAR de red y trazas de ejecución compatibles con sesiones cloud en Browserbase.'
            ]
        },
        {
            id: 8,
            title: isEn ? 'Platform \'Mi Primera Chamba\' (QA Tester Team)' : 'Plataforma "Mi Primera Chamba" (Equipo QA Tester)',
            description: isEn
                ? 'Member of the Quality Assurance (QA) team executing functional testing, critical user flow validation, and early defect reporting (Shift-Left Testing) to guarantee platform stability prior to production rollouts.'
                : 'Integrante del equipo de aseguramiento de calidad (QA) ejecutando pruebas funcionales, validación de flujos críticos de usuario y reporte temprano de defectos (Shift-Left Testing) para garantizar la estabilidad previo a despliegues productivos.',
            projectUrl: null,
            architectureDiagramUrl: '/floorplans/mi-primera-chamba.html',
            category: 'QA',
            badge: '🎯 Shift-Left QA Team',
            techStack: ['Shift-Left Testing', 'QA Funcional & E2E', 'Validación de Flujos', 'Reporte de Defectos', 'Regresión'],
            architectureNotes: isEn ? [
                'Team Quality Assurance (Shift-Left): Direct collaboration with the engineering team validating acceptance criteria prior to production merges.',
                'Critical Flow Validation: Design and execution of test matrices covering onboarding, authentication, candidate profiles, and job matching.',
                'Defect Traceability: Structured bug documentation with reproducible steps, network/console evidence, and zero-regression hotfix verification.'
            ] : [
                'Aseguramiento de Calidad en Equipo (Shift-Left): Participación directa junto al equipo de desarrollo validando criterios de aceptación antes del merge a producción.',
                'Validación de Flujos Críticos: Diseño y ejecución de matrices de prueba sobre registro, autenticación, perfiles de candidatos y emparejamiento de vacantes.',
                'Trazabilidad de Defectos: Documentación estructurada de bugs con pasos reproducibles, evidencia de red/consola y verificación de hotfixes sin regresiones.'
            ]
        },
        {
            id: 9,
            title: isEn ? 'Advanced Algorithms & Competitive Programming (OMI)' : 'Algoritmia Avanzada y Programación Competitiva (OMI)',
            description: isEn
                ? 'Repository of 50+ high-performance C++ solutions for the Mexican Olympiad in Informatics (OMI) and online judges, implementing advanced data structures and time/space complexity optimization.'
                : 'Repositorio de más de 50 soluciones de alto rendimiento en C++ para la Olimpiada Mexicana de Informática (OMI) y jueces en línea, implementando estructuras de datos avanzadas y optimización de complejidad.',
            projectUrl: 'https://github.com/ElorichV/Codigos-de-aprendizaje-y-competencia',
            architectureDiagramUrl: '/floorplans/algoritmia-omi.html',
            category: 'QA',
            badge: '⚡ C++ Advanced DSA',
            techStack: ['C++', 'Treaps', 'Persistent Segment Trees', 'Graph Theory', 'Dynamic Programming'],
            architectureNotes: isEn ? [
                'Advanced Data Structures: From-scratch implementations of Persistent Segment Trees, Implicit Treaps, Fenwick Trees, and Disjoint Set Union (DSU).',
                'Extreme CPU & Memory Optimization: Solutions engineered to pass strict execution bounds (< 1 second) and tight memory limits.',
                'Algorithmic Foundation: Applied directly to efficient SQL query design and backend engine optimization.'
            ] : [
                'Estructuras de Datos Avanzadas: Implementación desde cero de Árboles de Segmentos Persistentes, Treaps implícitos, Fenwick Trees y Disjoint Set Union (DSU).',
                'Optimización Extrema de Memoria y CPU: Soluciones diseñadas para cumplir límites estrictos de ejecución (< 1 segundo) y memoria acotada.',
                'Base algorítmica aplicada al diseño de consultas eficientes y optimización de motores backend.'
            ]
        }
    ];
}
