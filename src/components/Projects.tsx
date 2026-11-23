import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Database,
    ShieldCheck,
    Cpu,
    Layout,
    Bot,
    Code2,
    Sparkles,
    Layers,
    Lock,
    X,
    CheckCircle2
} from 'lucide-react';
import PortfolioTestSuiteModal from './PortfolioTestSuiteModal';

export interface ProjectItem {
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

interface ProjectsProps {
    projects?: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects = [] }) => {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language.startsWith('en');
    const [activeTab, setActiveTab] = useState<'All' | 'Hackathons' | 'Backend' | 'QA'>('All');
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
    const [isTestSuiteOpen, setIsTestSuiteOpen] = useState<boolean>(false);

    const fallbackProjects: ProjectItem[] = [
        {
            id: 1,
            title: 'BenchEngine / GreenGemma (MLH Hackathon)',
            description: isEn
                ? 'Awarded Honorable Mention (4th Place) at MLH Hackathon. Local energy benchmarking platform for open LLMs (Gemma 4) with structured Firecrawl extraction, passwordless OTP authentication, and real-time voice synthesis via ElevenLabs.'
                : 'Galardonado con Mención Honorífica (4to lugar) en MLH. Plataforma de benchmarking energético local para modelos abiertos (Gemma 4) con extracción estructurada vía Firecrawl, autenticación OTP y síntesis de voz con ElevenLabs.',
            projectUrl: 'https://github.com/ElorichV/hacktoberfest2026',
            architectureDiagramUrl: '/floorplans/benchengine.html',
            category: 'Hackathons',
            badge: '🏆 4to Lugar MLH Hackathon',
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
            title: isEn ? 'Voz Abierta — LSM 3D Real-Time Translator' : 'Voz Abierta — Traductor Bidireccional LSM 3D',
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
            title: isEn ? 'Voice2Task — Native iOS Voice to GitHub Issues' : 'Voice2Task — Agente iOS Voz a GitHub Issues',
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
            title: isEn ? 'Bakery Enterprise ERP / POS System' : 'Sistema ERP/POS de Gestión para Panaderías',
            description: isEn
                ? 'Full-Stack enterprise management platform designed under Clean Architecture with .NET 8 Web API, EF Core, and SQL Server. Multi-ingredient recipe stock control with ACID transactions and React 18 SPA.'
                : 'Ecosistema empresarial Full-Stack diseñado bajo Clean Architecture con .NET 8 Web API, Entity Framework Core y SQL Server. Implementa control de inventario multi-ingrediente con transacciones ACID y cliente SPA en React 18.',
            projectUrl: 'https://github.com/ElorichV/Sistema-de-gestion-para-panaderias',
            architectureDiagramUrl: '/floorplans/panaderia-erp.html',
            category: 'Backend',
            badge: '🏛️ Clean Architecture & ACID',
            techStack: ['.NET 8 Web API', 'C#', 'SQL Server', 'EF Core', 'Clean Architecture', 'React 18'],
            architectureNotes: isEn ? [
                'ACID Transactional Consistency: Explicit EF Core transactions deducting multi-batch ingredients atomically without race conditions.',
                'Strict Layer Decoupling: Clear boundaries across Domain, Application, Infrastructure, and Presentation layers for frictionless unit testing.',
                'SQL Query Optimization: Composite indexes that reduced report and sales query execution time by 30%.'
            ] : [
                'Consistencia Transaccional ACID: Uso de transacciones explícitas en EF Core para descontar insumos por receta y registrar ventas sin condiciones de carrera.',
                'Desacoplamiento por Capas: Separación estricta entre Dominio, Aplicación, Infraestructura y Presentación facilitando pruebas unitarias.',
                'Optimización SQL: Índices compuestos en SQL Server que redujeron el tiempo de consulta de reportes e inventario en un 30%.'
            ]
        },
        {
            id: 5,
            title: isEn ? 'Cloud Engine & Portfolio Core (.NET 8 + AWS)' : 'Portafolio Cloud Engine & API Core (.NET 8 + AWS)',
            description: isEn
                ? 'Decoupled full-stack platform hosted on AWS (S3, CloudFront, Elastic Beanstalk). Backend built in .NET 8 with native IP rate limiting, CRLF injection sanitization, and standardized RFC 7807 responses.'
                : 'Plataforma Full-Stack desacoplada desplegada sobre AWS (S3, CloudFront y Elastic Beanstalk). Backend en .NET 8 con Rate Limiting nativo por IP, sanitización AppSec contra inyección CRLF y respuestas estandarizadas RFC 7807.',
            projectUrl: 'https://github.com/ElorichV/AxelLinaresApi',
            architectureDiagramUrl: '/floorplans/portafolio-cloud.html',
            category: 'Backend',
            badge: '☁️ AWS S3 + CloudFront + .NET 8',
            techStack: ['.NET 8', 'ASP.NET Core', 'AWS S3 & CloudFront', 'SQLite', 'RFC 7807', 'React + Vite'],
            architectureNotes: isEn ? [
                'Anti-Abuse Rate Limiting: FixedWindowRateLimiter partitioned by real client IP (X-Forwarded-For) returning HTTP 429 ProblemDetails.',
                'SMTP AppSec Mitigation: Header sanitization stripping CRLF sequences to prevent header injection in email delivery pipelines.',
                'Contract Verification CI: Automated parity tests ensuring zero schema drift between ES/EN locales.'
            ] : [
                'Resiliencia Anti-Spam (Rate Limiting): Middleware FixedWindowRateLimiter particionado por IP real (X-Forwarded-For) devolviendo HTTP 429 en formato RFC 7807.',
                'Mitigación AppSec (CRLF Header Injection): Sanitización de entradas en el servicio de correo eliminando retornos de carro antes de entregarse a MailKit/SMTP.',
                'CI Verification Gate: Pruebas unitarias de contrato (Node test runner) que validan paridad estricta entre diccionarios ES/EN.'
            ]
        },
        {
            id: 6,
            title: isEn ? 'E2E Test Automation Suite & POM Framework (PINBOX)' : 'E2E Test Automation Suite & POM Framework (PINBOX)',
            description: isEn
                ? 'Black-box and regression testing architecture for Section Amarilla ADN portal using C#, Playwright, and Page Object Model (POM). Reduced QA regression cycle time by 40%.'
                : 'Suite integral de automatización E2E y pruebas de regresión para el portal comercial PINBOX (Sección Amarilla ADN) utilizando C#, .NET y Playwright bajo el patrón Page Object Model (POM). Redujo los tiempos de regresión en un 40%.',
            projectUrl: 'https://github.com/ElorichV/Playwrigt_Demo',
            architectureDiagramUrl: '/floorplans/pinbox-e2e.html',
            category: 'QA',
            badge: '🛡️ Playwright + C# POM',
            techStack: ['Playwright', 'C#', '.NET', 'Page Object Model', 'NUnit', 'Shift-Left'],
            architectureNotes: isEn ? [
                'Strict POM Encapsulation: Locators and user actions isolated in reusable Page Objects preventing selector drift.',
                'Zero Flakiness Invariant: Custom web-first assertions and auto-waiting replacing hard sleeps completely.',
                'Trace & Video Artifacts: Automated Playwright trace harvesting upon test failure for immediate defect triage.'
            ] : [
                'Desacoplamiento Estricto con POM: Encapsulación de locators y flujos de usuario en clases dedicadas eliminando fragilidad ante cambios de UI.',
                'Invariante Cero Sleeps: Uso exclusivo de auto-waiting y Web-First Assertions de Playwright garantizando determinismo absoluto.',
                'Evidencia Automatizada de Regresiones: Captura sistemática de traces y capturas en fallos facilitando triage en Jira.'
            ]
        },
        {
            id: 7,
            title: 'TaskMaster API — Modern CFML Showcase',
            description: isEn
                ? 'Modern ColdFusion / CFML enterprise task and project microservice running on Lucee / CommandBox with clean REST routing and SQL Server persistence.'
                : 'Microservicio empresarial en CFML moderno (Lucee / CommandBox) para gestión distribuida de tareas, demostrando modernización de sistemas legacy con arquitectura REST y SQL Server.',
            projectUrl: 'https://github.com/ElorichV/TaskMaster-API-Modern-CFML-Showcase',
            architectureDiagramUrl: null,
            category: 'Backend',
            badge: '⚡ Modern CFML + REST',
            techStack: ['CFML', 'Lucee', 'CommandBox', 'REST API', 'SQL Server'],
            architectureNotes: isEn ? [
                'Legacy Modernization: Transforming script-heavy ColdFusion into modular MVC REST handlers.',
                'SQL Transaction Isolation: Clean parameterized queries mitigating injection risks.'
            ] : [
                'Modernización Legacy: Migración de patrones CFML procedurales a controladores REST desacoplados.',
                'Seguridad Parametrizada: Consultas SQL con binding estricto mitigando inyección SQL.'
            ]
        },
        {
            id: 8,
            title: isEn ? 'DSA Competency & Learning Codebase' : 'Códigos de Aprendizaje y Competencia (DSA)',
            description: isEn
                ? 'Exhaustive repository containing advanced data structures, graph traversal algorithms, dynamic programming, and complexity benchmarks in C++ and Python.'
                : 'Repositorio de dominio técnico exhaustivo conteniendo algoritmos clásicos y de competencia (árboles, grafos, memoización y ordenamiento) implementados en C++ y Python.',
            projectUrl: 'https://github.com/ElorichV/Codigos-de-aprendizaje-y-competencia',
            architectureDiagramUrl: null,
            category: 'QA',
            badge: '🧠 C++ & Python DSA',
            techStack: ['C++', 'Python', 'Algorithms', 'Big-O', 'Data Structures'],
            architectureNotes: isEn ? [
                'Algorithmic Complexity: Focus on optimal O(N log N) space and time efficiency.',
                'Pointers & Memory: Strict memory management in modern C++ standard.'
            ] : [
                'Optimización Asintótica: Implementaciones con foco en complejidad temporal y espacial óptima.',
                'Gestión de Memoria en C++: Uso de punteros inteligentes y estructuras sin fugas.'
            ]
        },
        {
            id: 9,
            title: isEn ? 'Enterprise Billing & Payroll Core System' : 'Sistema de Facturación y Nómina Empresarial',
            description: isEn
                ? 'Comprehensive client-server payroll and inventory system engineered with C#, .NET Framework, Windows Forms, and SQL Server with transactional reporting.'
                : 'Sistema empresarial integral cliente-servidor desarrollado en C# y .NET Framework para la gestión transaccional de nómina, control de asistencias y timbrado fiscal.',
            projectUrl: 'https://github.com/ElorichV/Sistema-de-Facturacion-y-Ventas',
            architectureDiagramUrl: null,
            category: 'Backend',
            badge: '💼 Enterprise .NET + SQL',
            techStack: ['C#', '.NET Framework', 'Windows Forms', 'SQL Server', 'Crystal Reports'],
            architectureNotes: isEn ? [
                'Stored Procedure Optimization: Complex query refactoring reducing calculation delays by 30%.',
                'Transactional Audit Logging: Immutable database logs tracking financial records.'
            ] : [
                'Optimización de Stored Procedures: Refactorización de queries complejas que aceleró el cálculo de nómina en un 30%.',
                'Bitácora Transaccional Inmutable: Registro de auditoría para operaciones críticas de tesorería.'
            ]
        }
    ];

    const allProjects = projects && projects.length > 0 ? projects : fallbackProjects;

    const tabs: { key: 'All' | 'Hackathons' | 'Backend' | 'QA'; label: string; count: number }[] = [
        { key: 'All', label: t('tab_all', 'Todos'), count: allProjects.length },
        {
            key: 'Hackathons',
            label: t('tab_hackathons', 'AI Hackathons & Agentes'),
            count: allProjects.filter(p => (p.category || '').toLowerCase() === 'hackathons').length
        },
        {
            key: 'Backend',
            label: t('tab_backend', 'Backend & Cloud (.NET)'),
            count: allProjects.filter(p => (p.category || '').toLowerCase() === 'backend').length
        },
        {
            key: 'QA',
            label: t('tab_qa', 'QA Automation & DSA'),
            count: allProjects.filter(p => (p.category || '').toLowerCase() === 'qa').length
        }
    ];

    const filteredProjects = activeTab === 'All'
        ? allProjects
        : allProjects.filter(p => (p.category || 'Backend').toLowerCase() === activeTab.toLowerCase());

    const getVisualMeta = (project: ProjectItem) => {
        const title = project.title.toLowerCase();
        if (title.includes('benchengine') || title.includes('greengemma')) {
            return {
                icon: <Sparkles className="w-4 h-4 text-amber-400" />,
                image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('voz abierta')) {
            return {
                icon: <Bot className="w-4 h-4 text-red-400" />,
                image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('voice2task')) {
            return {
                icon: <Cpu className="w-4 h-4 text-blue-400" />,
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('panader') || title.includes('bakery')) {
            return {
                icon: <Database className="w-4 h-4 text-amber-400" />,
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('portafolio') || title.includes('cloud engine')) {
            return {
                icon: <Layout className="w-4 h-4 text-red-400" />,
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('taskmaster')) {
            return {
                icon: <Layers className="w-4 h-4 text-emerald-400" />,
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('playwright') || title.includes('pinbox') || title.includes('qa')) {
            return {
                icon: <ShieldCheck className="w-4 h-4 text-emerald-400" />,
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('aprendizaje') || title.includes('competencia') || title.includes('dsa')) {
            return {
                icon: <Code2 className="w-4 h-4 text-red-400" />,
                image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('facturacion') || title.includes('facturación') || title.includes('nomina')) {
            return {
                icon: <Database className="w-4 h-4 text-amber-400" />,
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop'
            };
        }
        return {
            icon: <Code2 className="w-4 h-4 text-red-400" />,
            image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop'
        };
    };

    return (
        <section id="proyectos" className="py-20 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                            <span className="font-mono text-xs text-amber-400/90 tracking-widest uppercase">
                                04 // {t('projects_section', '> ARCHIVOS_EJECUTABLES_')}
                            </span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
                            {t('projects_heading', 'Casos de Estudio & Arquitectura')}
                        </h2>
                    </div>

                    {/* Button to open QA Test Suite Modal */}
                    <div>
                        <button
                            onClick={() => setIsTestSuiteOpen(true)}
                            className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-slate-900 hover:bg-slate-800 border border-amber-500/40 hover:border-amber-400 text-amber-300 font-mono text-xs font-semibold tracking-wider transition-all shadow-md"
                        >
                            <ShieldCheck size={15} className="text-amber-400" />
                            <span>{isEn ? 'Inspect QA & Testing Suite' : 'Ver Suite de Pruebas & Verificación QA ⚡'}</span>
                        </button>
                    </div>
                </div>

                {/* Category Filter Tabs */}
                <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-slate-800/80">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.key;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-4 py-2 rounded text-xs font-mono tracking-wider transition-all flex items-center gap-2 border ${
                                    isActive
                                        ? 'bg-red-600 text-white border-red-500 shadow-[0_0_16px_rgba(220,38,38,0.4)] font-semibold'
                                        : 'bg-[#111318] text-slate-400 border-slate-800 hover:border-amber-500/40 hover:text-white'
                                }`}
                            >
                                <span>{tab.label}</span>
                                <span className={`px-1.5 py-0.2 rounded text-[10px] ${isActive ? 'bg-black/30 text-white' : 'bg-slate-800 text-slate-400'}`}>
                                    {tab.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Projects Grid */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => {
                            const visual = getVisualMeta(project);
                            const displayImage = project.imageUrl || visual.image;
                            const hasExternalUrl = Boolean(project.projectUrl && project.projectUrl.trim() !== '');
                            const stack = project.techStack && project.techStack.length > 0
                                ? project.techStack
                                : ['.NET 8', 'C#', 'Playwright', 'AWS'];

                            return (
                                <motion.div
                                    layout
                                    key={project.id || project.title}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.25 }}
                                    whileHover={{ y: -6 }}
                                    className="bg-[#111318]/70 border border-slate-800 rounded-lg overflow-hidden hover:border-amber-500/50 transition-all flex flex-col justify-between shadow-xl group"
                                >
                                    <div>
                                        {/* Thematic Engineering Visual Banner (Opción 1 con soporte para fotos futuras) */}
                                        <div className="relative aspect-[16/9] w-full bg-[#0a0b0e] border-b border-slate-800 overflow-hidden">
                                            <img
                                                src={displayImage}
                                                alt={project.title}
                                                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-85"
                                            />
                                            {/* Obsidian Vignette Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/30 to-transparent"></div>

                                            {/* Floating Stack Icon in Glass */}
                                            <div className="absolute top-3 left-3 p-2 rounded bg-black/75 border border-slate-800/80 backdrop-blur-md">
                                                {visual.icon}
                                            </div>

                                            {/* Project Badge */}
                                            {project.badge && (
                                                <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/85 border border-amber-500/40 rounded text-[10px] font-mono text-amber-300 font-semibold backdrop-blur-md">
                                                    {project.badge}
                                                </div>
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="p-5">
                                            <div className="flex flex-wrap gap-1.5 mb-3">
                                                {stack.slice(0, 4).map((tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-2 py-0.5 bg-[#0d0f14] border border-slate-800 rounded text-[10px] font-mono text-slate-300 uppercase"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {stack.length > 4 && (
                                                    <span className="px-1.5 py-0.5 text-[10px] font-mono text-slate-500">
                                                        +{stack.length - 4}
                                                    </span>
                                                )}
                                            </div>

                                            <h3 className="font-display text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors leading-snug">
                                                {project.title}
                                            </h3>

                                            <p className="text-slate-400 text-xs leading-relaxed line-clamp-3 font-sans">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Footer Actions */}
                                    <div className="p-5 pt-3 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 bg-[#0d0f14]/40">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="px-2.5 py-1.5 rounded bg-red-950/30 border border-red-500/40 hover:bg-red-600 hover:text-white text-red-300 font-mono text-[10px] font-semibold tracking-wider transition-all"
                                            >
                                                {t('projects_view_arch', '[ Ficha_Arquitectura ] ⚡')}
                                            </button>

                                            {project.architectureDiagramUrl && (
                                                <a
                                                    href={project.architectureDiagramUrl}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="px-2.5 py-1.5 rounded bg-slate-900 border border-slate-700 hover:border-amber-400 text-slate-300 hover:text-white font-mono text-[10px] font-semibold tracking-wider transition-all"
                                                    title="Abrir Floorplan"
                                                >
                                                    {t('projects_view_floorplan', '[ 🗺️ Floorplan ] ↗')}
                                                </a>
                                            )}
                                        </div>

                                        {hasExternalUrl ? (
                                            <a
                                                href={project.projectUrl!}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-slate-300 font-mono text-[10px] font-semibold hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                                            >
                                                <span>{t('projects_view_code', '[ Ver_Código ] ↗')}</span>
                                            </a>
                                        ) : (
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="text-slate-500 font-mono text-[10px] hover:text-amber-400 transition-colors inline-flex items-center gap-1"
                                            >
                                                <Lock size={11} className="text-red-500" />
                                                <span>{t('projects_internal_qa', '[ Caso_Equipo_QA ]')}</span>
                                            </button>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Architecture Specification Dossier Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 15 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 15 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-3xl bg-[#0d0f14] border border-amber-500/40 rounded-lg overflow-hidden shadow-2xl"
                        >
                            {/* Modal Header Bar */}
                            <div className="flex items-center justify-between px-6 py-3.5 bg-[#08090d] border-b border-slate-800">
                                <div className="flex items-center gap-2">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-600"></span>
                                    <span className="text-xs font-mono text-amber-400 uppercase tracking-widest font-semibold">
                                        {t('arch_modal_tag', '> ESPECIFICACIÓN_DE_ARQUITECTURA_')}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="text-slate-400 hover:text-white p-1 rounded hover:bg-slate-800 transition-colors"
                                >
                                    <X size={16} />
                                </button>
                            </div>

                            {/* Dossier Content */}
                            <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto font-sans">
                                <div>
                                    {selectedProject.badge && (
                                        <span className="inline-block px-2.5 py-0.5 mb-2 bg-amber-950/40 border border-amber-500/40 rounded text-xs font-mono text-amber-300">
                                            {selectedProject.badge}
                                        </span>
                                    )}
                                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-white mb-2">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                {/* Architecture Decisions */}
                                {selectedProject.architectureNotes && selectedProject.architectureNotes.length > 0 && (
                                    <div className="bg-[#111318] border border-slate-800 rounded-lg p-5">
                                        <h4 className="text-xs font-mono uppercase tracking-widest text-amber-400 mb-3 font-semibold">
                                            {t('arch_modal_decisions', 'Decisiones Técnicas, Arquitectura & Impacto (Mid-Level)')}
                                        </h4>
                                        <ul className="space-y-2.5">
                                            {selectedProject.architectureNotes.map((note, idx) => (
                                                <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-xs sm:text-sm leading-relaxed">
                                                    <CheckCircle2 size={15} className="text-red-500 shrink-0 mt-0.5" />
                                                    <span>{note}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Interactive Floorplan Preview Link */}
                                {selectedProject.architectureDiagramUrl && (
                                    <div className="bg-red-950/20 border border-red-500/30 rounded-lg p-4 flex items-center justify-between gap-4">
                                        <div>
                                            <div className="text-xs font-mono text-red-400 font-semibold mb-0.5">
                                                {t('arch_modal_diagram', 'Mapa de Arquitectura Interactivo (Floorplan)')}
                                            </div>
                                            <div className="text-[11px] text-slate-400">
                                                Nodos de subsistemas, contratos HTTP y llamadas de arquitectura.
                                            </div>
                                        </div>
                                        <a
                                            href={selectedProject.architectureDiagramUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-3 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-semibold shrink-0 transition-all"
                                        >
                                            {t('arch_modal_open_floorplan', '[ 🗺️ Abrir Floorplan ↗ ]')}
                                        </a>
                                    </div>
                                )}

                                {/* Stack Pills */}
                                <div>
                                    <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-2">
                                        {t('arch_modal_stack', 'Stack Tecnológico & Herramientas')}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.techStack?.map((tItem, tIdx) => (
                                            <span
                                                key={tIdx}
                                                className="px-2.5 py-1 rounded bg-[#08090d] border border-slate-800 text-xs font-mono text-slate-300"
                                            >
                                                {tItem}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Modal Close Footer */}
                                <div className="pt-4 border-t border-slate-800 flex items-center justify-between">
                                    <span className="text-[11px] font-mono text-slate-500">
                                        {selectedProject.projectUrl
                                            ? 'Repositorio público disponible'
                                            : t('arch_modal_confidential', 'Colaboración en equipo — Repositorio privado por confidencialidad.')}
                                    </span>
                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="px-4 py-1.5 rounded bg-slate-900 border border-slate-700 hover:border-slate-500 text-xs font-mono text-slate-300 hover:text-white transition-all"
                                    >
                                        {t('arch_modal_close', '[ Cerrar_Expediente ]')}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* QA Test Suite Modal */}
            <PortfolioTestSuiteModal
                isOpen={isTestSuiteOpen}
                onClose={() => setIsTestSuiteOpen(false)}
            />
        </section>
    );
};

export default Projects;
