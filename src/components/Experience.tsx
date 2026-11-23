import React from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface WorkExperience {
    id: number;
    jobTitle?: string;
    company: string;
    dates: string;
    responsibilities: string[];
    companyUrl?: string;
}

interface ExperienceProps {
    experiences: WorkExperience[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences = [] }) => {
    const { t, i18n } = useTranslation();
    const isEn = i18n.language.startsWith('en');

    // Respaldo resiliente con los 3 puestos reales del CV
    const fallbackExperiences: WorkExperience[] = [
        {
            id: 1,
            jobTitle: t('exp_positronica_role', 'Software Engineer (Co-Founder)'),
            company: 'Positronica Labs',
            dates: t('exp_positronica_dates', 'Enero 2026 - Actualidad'),
            companyUrl: 'https://positronicalabs.dev',
            responsibilities: [
                t('exp_positronica_resp1', 'Liderazgo técnico y desarrollo backend/full-stack en la fundación de Positronica Labs (positronicalabs.dev), definiendo la arquitectura base y la lógica de negocio para el lanzamiento inicial del producto.'),
                t('exp_positronica_resp2', 'Implementación de Clean Architecture para el ecosistema en .NET Core, gestionando el despliegue de infraestructura escalable en la nube mediante AWS.'),
                t('exp_positronica_resp3', 'Diseño y desarrollo de sistemas de automatización de pruebas y agentes de IA, optimizando los ciclos de despliegue y garantizando la calidad de los productos de la empresa.')
            ]
        },
        {
            id: 2,
            jobTitle: isEn ? 'QA Automation Intern (Social Service)' : 'QA Automation Intern (Servicio Social)',
            company: 'Sección Amarilla (Agencia Digital ADN)',
            dates: isEn ? 'March 2026 – July 2026' : 'Marzo 2026 – Julio 2026',
            companyUrl: 'https://www.seccionamarilla.com.mx/',
            responsibilities: isEn ? [
                'Designed and architected from scratch E2E and black-box automated test suites for the core portal "PINBOX" using C#, .NET, and Playwright.',
                'Refactored and stabilized test scripts by implementing the Page Object Model (POM) pattern to eliminate flakiness and enable maintainable scaling.',
                'Integrated Shift-Left testing practices into agile sprint cycles (Scrum), preventing critical regressions before production releases.',
                'Managed Git repositories enforcing strict version control and security policies to safeguard credentials.'
            ] : [
                'Diseño, arquitectura e implementación desde cero de suites de pruebas automatizadas E2E y de caja negra para el portal principal "PINBOX" utilizando C#, .NET y Playwright.',
                'Refactorización y estabilización de scripts de prueba, implementando patrones de diseño (Page Object Model) para reducir la fragilidad del código y facilitar su escalabilidad.',
                'Integración de prácticas de calidad (Shift-Left Testing) dentro de ciclos de desarrollo ágiles (Scrum), asegurando la detección temprana de defectos críticos y regresiones previas al despliegue en producción.',
                'Gestión de repositorios mediante Git, estableciendo políticas de control de versiones e ignorado de archivos .gitignore para proteger credenciales y mantener entornos limpios.'
            ]
        },
        {
            id: 3,
            jobTitle: 'Associate Software Engineer I',
            company: 'Solera',
            dates: isEn ? 'August 2022 – February 2025' : 'Agosto 2022 – Febrero 2025',
            companyUrl: 'https://www.solera.com',
            responsibilities: isEn ? [
                'Engineered, maintained, and evolved high-throughput enterprise systems (Backend & Full-Stack) using C#, .NET Framework, Java, and CFML.',
                'Built and supported client-server desktop and enterprise solutions (Console & Windows Forms), ensuring business logic integrity and performance.',
                'Deeply optimized relational database performance by refactoring complex stored procedures and queries in SQL Server, reducing system response times by 30%.',
                'Actively collaborated in cross-functional agile teams (Scrum) to standardize deployment pipelines and streamline continuous integration.'
            ] : [
                'Desarrollo, mantenimiento y evolución de sistemas empresariales de alta transaccionalidad (Backend y Full-Stack) utilizando C#, .NET Framework, Java y CFML.',
                'Construcción y soporte continuo de aplicaciones cliente-servidor (aplicaciones de consola y Windows Forms), asegurando la integridad de la lógica de negocio y la experiencia del usuario final.',
                'Optimización profunda del rendimiento de bases de datos relacionales, refactorizando procedimientos almacenados, consultas complejas y analizando planes de ejecución en SQL Server, reduciendo los tiempos de respuesta del sistema en un 30%.',
                'Colaboración activa con equipos multidisciplinarios bajo metodologías ágiles (SCRUM) para estandarizar los pipelines de despliegue y optimizar los flujos de integración continua.'
            ]
        }
    ];

    const displayExperiences = experiences && experiences.length > 0 ? experiences : fallbackExperiences;

    const getStationBadge = (company: string) => {
        const lower = company.toLowerCase();
        if (lower.includes('positronica')) {
            return {
                label: 'CO-FOUNDER // ARCHITECTURE',
                metric: 'Clean Architecture .NET',
                color: 'border-red-500/40 text-red-400 bg-red-950/30'
            };
        }
        if (lower.includes('sección') || lower.includes('seccion')) {
            return {
                label: 'QA AUTOMATION // E2E',
                metric: '-40% Regresiones (POM)',
                color: 'border-amber-500/40 text-amber-400 bg-amber-950/30'
            };
        }
        return {
            label: 'HIGH TRANSACTIONAL BACKEND',
            metric: '-30% Latencia SQL Server',
            color: 'border-slate-700 text-slate-300 bg-slate-900/40'
        };
    };

    return (
        <section id="experiencia" className="py-20 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="mb-14">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        <span className="font-mono text-xs text-amber-400/90 tracking-widest uppercase">
                            02 // {t('exp_section', '> REGISTRO_LABORAL_')}
                        </span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
                        {t('exp_heading', 'Experiencia Profesional')}
                    </h2>
                </div>

                {/* Vertical Timeline */}
                <div className="relative border-l border-slate-800 ml-4 md:ml-6 space-y-10">
                    {displayExperiences.map((exp, index) => {
                        const badge = getStationBadge(exp.company);

                        return (
                            <motion.div
                                key={exp.id || index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8 md:pl-10 group"
                            >
                                {/* Glowing Timeline Node */}
                                <div className="absolute w-3.5 h-3.5 bg-[#0a0b0e] border-2 border-red-500 rounded-full -left-[7px] top-2 group-hover:bg-red-500 group-hover:shadow-[0_0_14px_rgba(220,38,38,0.8)] transition-all duration-300"></div>

                                <div className="p-6 md:p-8 rounded-lg bg-[#111318]/70 border border-slate-800 hover:border-red-500/40 transition-all shadow-xl">
                                    
                                    {/* Header: Title, Company, Dates & Badges */}
                                    <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-5 border-b border-slate-800/80 pb-4">
                                        <div>
                                            <div className="flex flex-wrap items-center gap-2 mb-1.5">
                                                <h3 className="font-display text-2xl font-semibold text-white group-hover:text-red-400 transition-colors">
                                                    {exp.jobTitle || 'Ingeniero de Software'}
                                                </h3>
                                                <span className={`px-2 py-0.5 rounded text-[10px] font-mono border ${badge.color}`}>
                                                    {badge.label}
                                                </span>
                                            </div>

                                            <div className="flex items-center gap-2 text-sm text-slate-300 font-medium">
                                                <span>{exp.company}</span>
                                                {exp.companyUrl && (
                                                    <a
                                                        href={exp.companyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-amber-400 hover:text-amber-300 text-xs font-mono inline-flex items-center gap-1"
                                                    >
                                                        <span>↗</span>
                                                    </a>
                                                )}
                                            </div>
                                        </div>

                                        {/* Date & Impact Metric */}
                                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs font-mono">
                                            <div className="px-3 py-1 rounded bg-[#0d0f14] border border-slate-800 text-slate-400 flex items-center gap-1.5">
                                                <Calendar size={13} className="text-amber-400" />
                                                <span>{exp.dates}</span>
                                            </div>
                                            <div className="px-3 py-1 rounded bg-amber-950/20 border border-amber-500/30 text-amber-300 font-semibold">
                                                {badge.metric}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Responsibilities */}
                                    <ul className="space-y-3 font-sans">
                                        {exp.responsibilities.map((resp, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                                                <span className="text-red-500 font-mono text-sm leading-none mt-1">›</span>
                                                <span>{resp}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;
