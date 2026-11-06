import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, ShieldCheck, Cpu, Layout, Bot, Code2, Sparkles, Lock, X, CheckCircle2, Layers } from 'lucide-react';

export interface ProjectItem {
    id: number;
    title: string;
    description: string;
    projectUrl?: string | null;
    category?: string;
    badge?: string;
    techStack?: string[];
    architectureNotes?: string[];
}

interface ProjectsProps {
    projects?: ProjectItem[];
}

const Projects: React.FC<ProjectsProps> = ({ projects = [] }) => {
    const { t } = useTranslation();
    const [activeTab, setActiveTab] = useState<'All' | 'Hackathons' | 'Backend' | 'QA'>('All');
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

    const fallbackProjects: ProjectItem[] = [
        {
            id: 1,
            title: 'BenchEngine / GreenGemma (MLH Hackathon)',
            description: 'Galardonado con Mención Honorífica (4to lugar) en MLH. Plataforma de benchmarking energético local para modelos abiertos (Gemma 4) con extracción estructurada vía Firecrawl, autenticación OTP y síntesis de voz con ElevenLabs.',
            projectUrl: 'https://github.com/ElorichV/hacktoberfest2026',
            category: 'Hackathons',
            badge: '🏆 4to Lugar MLH Hackathon',
            techStack: ['Ollama (Gemma 4)', 'Firecrawl', 'ElevenLabs', 'React', 'MojoAuth OTP'],
            architectureNotes: [
                'Inferencia Local vs Cloud: Ejecución de Gemma 4 sobre Ollama para medir consumo energético real por token sin latencia de red.',
                'Ingesta Web Estructurada: Integración de Firecrawl para transformar documentación técnica en contextos limpios de evaluación.',
                'Accesibilidad & Seguridad: Flujo passwordless con MojoAuth OTP y telemetría auditiva en tiempo real vía ElevenLabs API.'
            ]
        },
        {
            id: 2,
            title: 'Voz Abierta — Traductor Bidireccional LSM 3D',
            description: 'Prototipo desarrollado para el AI Hackathon por México × Clara. Traductor en tiempo real entre Lengua de Señas Mexicana (LSM) y español utilizando visión computacional con MediaPipe, avatar 3D en Three.js y Web Speech API.',
            projectUrl: 'https://github.com/ElorichV/Voz-abierta',
            category: 'Hackathons',
            badge: '🚀 AI Hackathon × Clara',
            techStack: ['MediaPipe', 'Three.js', 'Web Speech API', 'React', 'TypeScript'],
            architectureNotes: [
                'Visión Computacional Edge: Extracción de landmarks corporales y de manos a 60 FPS en el navegador con MediaPipe sin enviar video crudo a servidores externos.',
                'Motor de Animación 3D: Interpolación cinemática en Three.js para traducir texto/voz a señas fluidas en un avatar tridimensional.',
                'Impacto Cívico: Diseño de baja latencia pensado para inclusión en ventanillas de atención ciudadana y servicios financieros.'
            ]
        },
        {
            id: 3,
            title: 'Voice2Task — Agente iOS Voz a GitHub Issues',
            description: 'Aplicación nativa iOS (SwiftUI + SwiftData) que transcribe notas de voz técnicas en tiempo real con SFSpeechRecognizer, extrae tareas estructuradas mediante OpenAI (gpt-4o-mini) y las sincroniza automáticamente con GitHub Issues.',
            projectUrl: 'https://github.com/ElorichV/Voice2Task',
            category: 'Hackathons',
            badge: '📱 Native iOS + AI Agents',
            techStack: ['SwiftUI', 'SwiftData', 'OpenAI API', 'SFSpeechRecognizer', 'GitHub REST API'],
            architectureNotes: [
                'Persistencia Local-First: Almacenamiento reactivo con SwiftData garantizando cero pérdida de notas de voz aún sin conexión.',
                'Extracción Determinista con LLMs: Prompts estructurados (JSON Schema) sobre gpt-4o-mini para transformar audio libre en tickets con título, etiquetas y criterios de aceptación.',
                'Sincronización Bidireccional: Integración directa con GitHub Issues API con manejo resiliente de reintentos y rate limits.'
            ]
        },
        {
            id: 4,
            title: 'Sistema ERP/POS de Gestión para Panaderías',
            description: 'Ecosistema empresarial Full-Stack diseñado bajo Clean Architecture con .NET 8 Web API, Entity Framework Core y SQL Server. Implementa control de inventario multi-ingrediente con transacciones ACID y cliente SPA en React 18.',
            projectUrl: 'https://github.com/ElorichV/Sistema-de-gestion-para-panaderias',
            category: 'Backend',
            badge: '🏛️ Clean Architecture & ACID',
            techStack: ['.NET 8 Web API', 'C#', 'SQL Server', 'EF Core', 'Clean Architecture', 'React 18'],
            architectureNotes: [
                'Consistencia Transaccional ACID: Uso de transacciones explícitas en EF Core para descontar insumos por receta y registrar ventas sin condiciones de carrera.',
                'Desacoplamiento por Capas: Separación estricta entre Dominio, Aplicación, Infraestructura y Presentación facilitando pruebas unitarias.',
                'Optimización SQL: Índices compuestos en SQL Server que redujeron el tiempo de consulta de reportes e inventario en un 30%.'
            ]
        },
        {
            id: 5,
            title: 'Portafolio Cloud Engine & API Core (.NET 8 + AWS)',
            description: 'Plataforma Full-Stack desacoplada desplegada sobre AWS (S3, CloudFront y Elastic Beanstalk). Backend en .NET 8 con Rate Limiting nativo por IP, sanitización AppSec contra inyección CRLF y respuestas estandarizadas RFC 7807.',
            projectUrl: 'https://github.com/ElorichV/AxelLinaresApi',
            category: 'Backend',
            badge: '☁️ AWS S3 + CloudFront + .NET 8',
            techStack: ['.NET 8', 'ASP.NET Core', 'AWS S3 & CloudFront', 'SQLite', 'RFC 7807', 'React + Vite'],
            architectureNotes: [
                'Resiliencia Anti-Spam (Rate Limiting): Middleware FixedWindowRateLimiter particionado por IP real (X-Forwarded-For) devolviendo HTTP 429 en formato RFC 7807.',
                'Consultas de Baja Latencia: Lecturas optimizadas con AsNoTracking() en Entity Framework Core y negociación bilingüe en memoria (?lang=es|en).',
                'Seguridad AppSec: Sanitización estricta de cabeceras SMTP y validación por DataAnnotations para mitigar vulnerabilidades OWASP.'
            ]
        },
        {
            id: 6,
            title: 'TaskMaster API — Modern CFML Showcase',
            description: 'API RESTful de grado productivo construida 100% en cfscript moderno sobre Lucee y CommandBox. Implementa arquitectura por capas, autenticación stateless JWT (HMAC-SHA256), base de datos H2 embebida y contratos RFC 7807.',
            projectUrl: 'https://github.com/ElorichV/TaskMaster-API-Modern-CFML-Showcase',
            category: 'Backend',
            badge: '🛡️ AppSec & OWASP Top 10',
            techStack: ['Modern CFML', 'Lucee', 'JWT HMAC-SHA256', 'RFC 7807', 'H2 Database', 'CommandBox'],
            architectureNotes: [
                'Modernización de Ecosistema Legacy: Demostración de cómo llevar CFML a estándares empresariales modernos (100% cfscript, sin etiquetas acopladas a vistas).',
                'Seguridad Stateless: Implementación de tokens JWT firmados con HMAC-SHA256 y consultas 100% parametrizadas contra SQL Injection.',
                'Estandarización de Errores: Mapeo global de excepciones hacia estructuras RFC 7807 ProblemDetails.'
            ]
        },
        {
            id: 7,
            title: 'QA AI-Assistant & Enterprise Playwright Suite',
            description: 'Framework de automatización E2E en C# / .NET 9, Playwright y NUnit integrado con un asistente analítico en Python / OpenAI API que captura excepciones de ejecución en tiempo real para diagnosticar causas raíz y sugerir parches.',
            projectUrl: 'https://github.com/ElorichV/Playwrigth_Demo',
            category: 'QA',
            badge: '🤖 Playwright + OpenAI API',
            techStack: ['C#', '.NET 9', 'Playwright', 'Python', 'OpenAI API', 'NUnit', 'Browserbase'],
            architectureNotes: [
                'Diagnóstico Asistido por IA: Captura automática de stack traces, DOM snapshots y logs de Playwright enviados a modelos de OpenAI para sugerir correcciones de selectores o código.',
                'Arquitectura Resiliente (Zero-Flakiness): Implementación de Page Object Model (POM), LocatorHandlers asíncronos y fábricas de datos sintéticos con Bogus.',
                'Observabilidad E2E: Generación automática de archivos HAR de red y trazas de ejecución compatibles con sesiones cloud en Browserbase.'
            ]
        },
        {
            id: 8,
            title: 'Plataforma "Mi Primera Chamba" (Equipo QA Tester)',
            description: 'Integrante del equipo de aseguramiento de calidad (QA) ejecutando pruebas funcionales, validación de flujos críticos de usuario y reporte temprano de defectos (Shift-Left Testing) para garantizar la estabilidad previo a despliegues productivos.',
            projectUrl: null,
            category: 'QA',
            badge: '🎯 Shift-Left QA Team',
            techStack: ['Shift-Left Testing', 'QA Funcional & E2E', 'Validación de Flujos', 'Reporte de Defectos', 'Regresión'],
            architectureNotes: [
                'Aseguramiento de Calidad en Equipo (Shift-Left): Participación directa junto al equipo de desarrollo validando criterios de aceptación antes del merge a producción.',
                'Validación de Flujos Críticos: Diseño y ejecución de matrices de prueba sobre registro, autenticación, perfiles de candidatos y emparejamiento de vacantes.',
                'Trazabilidad de Defectos: Documentación estructurada de bugs con pasos reproducibles, evidencia de red/consola y verificación de hotfixes sin regresiones.'
            ]
        },
        {
            id: 9,
            title: 'Algoritmia Avanzada y Programación Competitiva (OMI)',
            description: 'Repositorio de más de 50 soluciones de alto rendimiento en C++ para la Olimpiada Mexicana de Informática (OMI) y jueces en línea, implementando estructuras de datos avanzadas y optimización de complejidad.',
            projectUrl: 'https://github.com/ElorichV/Codigos-de-aprendizaje-y-competencia',
            category: 'QA',
            badge: '⚡ C++ Advanced DSA',
            techStack: ['C++', 'Treaps', 'Persistent Segment Trees', 'Graph Theory', 'Dynamic Programming'],
            architectureNotes: [
                'Estructuras de Datos Avanzadas: Implementación desde cero de Árboles de Segmentos Persistentes, Treaps implícitos, Fenwick Trees y Disjoint Set Union (DSU).',
                'Optimización Extrema de Memoria y CPU: Soluciones diseñadas para cumplir límites estrictos de ejecución (< 1 segundo) y memoria acotada.',
                'Base algorítmica aplicada al diseño de consultas eficientes y optimización de motores backend.'
            ]
        }
    ];

    const allProjects: ProjectItem[] = projects && projects.length >= 6 ? projects : fallbackProjects;

    const filteredProjects = activeTab === 'All'
        ? allProjects
        : allProjects.filter(p => (p.category || 'Backend').toLowerCase() === activeTab.toLowerCase());

    const getVisualMeta = (project: ProjectItem) => {
        const title = project.title.toLowerCase();
        if (title.includes('benchengine') || title.includes('greengemma')) {
            return {
                icon: <Sparkles className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('voz abierta')) {
            return {
                icon: <Bot className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('voice2task')) {
            return {
                icon: <Cpu className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('panader') || title.includes('bakery')) {
            return {
                icon: <Database className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('portafolio') || title.includes('cloud engine')) {
            return {
                icon: <Layout className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('taskmaster')) {
            return {
                icon: <Layers className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('qa ai-assistant') || title.includes('playwright')) {
            return {
                icon: <ShieldCheck className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
            };
        }
        if (title.includes('chamba')) {
            return {
                icon: <ShieldCheck className="w-6 h-6" />,
                image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
            };
        }
        return {
            icon: <Code2 className="w-6 h-6" />,
            image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800&auto=format&fit=crop'
        };
    };

    const tabs: { key: 'All' | 'Hackathons' | 'Backend' | 'QA'; label: string; count: number }[] = [
        { key: 'All', label: t('tab_all', 'Todos'), count: allProjects.length },
        { key: 'Hackathons', label: t('tab_hackathons', 'AI Hackathons & Agentes'), count: allProjects.filter(p => p.category === 'Hackathons').length },
        { key: 'Backend', label: t('tab_backend', 'Backend & Cloud (.NET)'), count: allProjects.filter(p => p.category === 'Backend').length },
        { key: 'QA', label: t('tab_qa', 'QA Automation & DSA'), count: allProjects.filter(p => p.category === 'QA').length }
    ];

    return (
        <section id="proyectos" className="py-24 bg-transparent">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
                    <div>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-red-500 font-mono tracking-widest uppercase mb-4 text-sm font-semibold"
                        >
                            {t('projects_section')}
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4"
                        >
                            {t('projects_heading')}
                        </motion.h2>
                        <p className="text-slate-400 max-w-2xl text-base">
                            {t('projects_subtitle')}
                        </p>
                    </div>
                </div>

                {/* Barra de Filtros por Categoría */}
                <div className="flex flex-wrap gap-3 mb-12">
                    {tabs.map((tab) => {
                        const isActive = activeTab === tab.key;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => setActiveTab(tab.key)}
                                className={`px-4 py-2.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all flex items-center gap-2 border ${
                                    isActive
                                        ? 'bg-red-600 text-white border-red-500 shadow-[0_0_20px_rgba(220,38,38,0.4)] font-bold'
                                        : 'bg-slate-900/60 text-slate-400 border-slate-800 hover:border-red-500/40 hover:text-white'
                                }`}
                            >
                                <span>{tab.label}</span>
                                <span className={`px-1.5 py-0.5 rounded-md text-[10px] ${isActive ? 'bg-black/30 text-white' : 'bg-slate-800 text-slate-400'}`}>
                                    {tab.count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* Grid de Proyectos */}
                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => {
                            const visual = getVisualMeta(project);
                            const hasExternalUrl = Boolean(project.projectUrl && project.projectUrl.trim() !== '');
                            const stack = project.techStack && project.techStack.length > 0
                                ? project.techStack
                                : ['.NET 8', 'C#', 'Playwright', 'AWS'];

                            return (
                                <motion.div
                                    layout
                                    key={project.id || project.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.25 }}
                                    whileHover={{ y: -8 }}
                                    className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:border-red-500/50 transition-all duration-500 shadow-2xl flex flex-col justify-between"
                                >
                                    <div>
                                        <div className="relative h-52 overflow-hidden">
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/30 to-transparent z-10"></div>
                                            <img
                                                src={visual.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-55"
                                            />
                                            <div className="absolute top-5 left-5 z-20 p-3 bg-red-600/20 border border-red-500/30 rounded-xl backdrop-blur-md text-red-500">
                                                {visual.icon}
                                            </div>
                                            {project.badge && (
                                                <div className="absolute top-5 right-5 z-20 px-3 py-1 bg-slate-950/85 border border-red-500/40 rounded-full text-[11px] font-mono text-red-400 font-semibold backdrop-blur-md">
                                                    {project.badge}
                                                </div>
                                            )}
                                        </div>

                                        <div className="p-6 pb-4 relative z-20">
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {stack.map((tech, idx) => (
                                                    <span key={idx} className="px-2.5 py-0.5 bg-slate-800/80 border border-slate-700 rounded-full text-[10px] font-mono text-slate-300 uppercase tracking-wider">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-400 transition-colors leading-snug">
                                                {project.title}
                                            </h3>
                                            <p className="text-slate-400 text-sm leading-relaxed mb-4 line-clamp-4 group-hover:text-slate-300 transition-colors">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="p-6 pt-3 border-t border-slate-800/70 relative z-20 flex items-center justify-between gap-3 mt-auto">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="px-3 py-2 rounded-lg bg-red-600/15 border border-red-500/30 text-red-400 hover:bg-red-600 hover:text-white font-mono text-[11px] font-bold uppercase tracking-wider transition-all"
                                        >
                                            {t('projects_view_arch', '[ Ficha_Arquitectura ] ⚡')}
                                        </button>

                                        {hasExternalUrl ? (
                                            <a
                                                href={project.projectUrl!}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="flex items-center gap-1.5 text-slate-300 font-mono text-[11px] font-bold uppercase tracking-wider hover:text-red-400 transition-colors"
                                            >
                                                <span>{t('projects_view_code', '[ Ver_Código ] ↗')}</span>
                                            </a>
                                        ) : (
                                            <button
                                                onClick={() => setSelectedProject(project)}
                                                className="flex items-center gap-1 text-slate-400 font-mono text-[11px] uppercase tracking-wider hover:text-red-400 transition-colors"
                                            >
                                                <Lock size={12} className="text-red-500" />
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

            {/* Modal de Especificación de Arquitectura (Nivel Mid-Level) */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
                    >
                        <motion.div
                            initial={{ scale: 0.92, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.92, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="w-full max-w-2xl bg-[#0b1120] border border-red-500/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(220,38,38,0.25)]"
                        >
                            {/* Barra superior tipo terminal */}
                            <div className="flex items-center justify-between px-6 py-4 bg-slate-900/90 border-b border-slate-800">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-red-600"></span>
                                    <span className="text-xs font-mono text-red-400 uppercase tracking-widest font-bold">
                                        {t('arch_modal_tag', '> ESPECIFICACIÓN_DE_ARQUITECTURA_')}
                                    </span>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                                >
                                    <X size={18} />
                                </button>
                            </div>

                            {/* Contenido del expediente */}
                            <div className="p-6 md:p-8 space-y-6 max-h-[80vh] overflow-y-auto">
                                <div>
                                    {selectedProject.badge && (
                                        <span className="inline-block px-3 py-1 mb-3 bg-red-500/10 border border-red-500/30 rounded-full text-xs font-mono text-red-400">
                                            {selectedProject.badge}
                                        </span>
                                    )}
                                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-3">
                                        {selectedProject.title}
                                    </h3>
                                    <p className="text-slate-300 text-sm leading-relaxed">
                                        {selectedProject.description}
                                    </p>
                                </div>

                                {/* Decisiones de Arquitectura e Impacto */}
                                {selectedProject.architectureNotes && selectedProject.architectureNotes.length > 0 && (
                                    <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-5">
                                        <h4 className="text-xs font-mono uppercase tracking-widest text-red-400 mb-4 font-bold">
                                            {t('arch_modal_decisions', 'Decisiones Técnicas, Arquitectura & Impacto (Mid-Level)')}
                                        </h4>
                                        <ul className="space-y-3">
                                            {selectedProject.architectureNotes.map((note, idx) => (
                                                <li key={idx} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                                                    <CheckCircle2 size={16} className="text-red-500 shrink-0 mt-1" />
                                                    <span>{note}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Tech Stack */}
                                {selectedProject.techStack && selectedProject.techStack.length > 0 && (
                                    <div>
                                        <h4 className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-3">
                                            {t('arch_modal_stack', 'Stack Tecnológico & Herramientas')}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.techStack.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-lg text-xs font-mono text-white">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                {/* Footer del modal */}
                                <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
                                    {selectedProject.projectUrl ? (
                                        <a
                                            href={selectedProject.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="px-5 py-2.5 bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-bold uppercase tracking-wider rounded-lg transition-all shadow-[0_0_20px_rgba(220,38,38,0.4)]"
                                        >
                                            {t('projects_view_code', '[ Ver_Código ] ↗')}
                                        </a>
                                    ) : (
                                        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                                            <Lock size={14} className="text-red-500" />
                                            <span>{t('arch_modal_confidential')}</span>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => setSelectedProject(null)}
                                        className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 font-mono text-xs uppercase rounded-lg transition-colors"
                                    >
                                        {t('arch_modal_close', '[ Cerrar_Expediente ]')}
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;
