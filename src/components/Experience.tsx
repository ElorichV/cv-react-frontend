import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight, ExternalLink } from 'lucide-react';
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
    const { t } = useTranslation();

    // Respaldo resiliente con los 3 puestos reales del CV si la API está en carga o fuera de línea
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
            jobTitle: 'QA Automation Intern (Servicio Social)',
            company: 'Sección Amarilla (Agencia Digital ADN)',
            dates: 'Marzo 2026 – Julio 2026',
            companyUrl: 'https://www.seccionamarilla.com.mx/',
            responsibilities: [
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
            dates: 'Agosto 2022 – Febrero 2025',
            companyUrl: 'https://www.solera.com',
            responsibilities: [
                'Desarrollo, mantenimiento y evolución de sistemas empresariales de alta transaccionalidad (Backend y Full-Stack) utilizando C#, .NET Framework, Java y CFML.',
                'Construcción y soporte continuo de aplicaciones cliente-servidor (aplicaciones de consola y Windows Forms), asegurando la integridad de la lógica de negocio y la experiencia del usuario final.',
                'Optimización profunda del rendimiento de bases de datos relacionales, refactorizando procedimientos almacenados, consultas complejas y analizando planes de ejecución en SQL Server, reduciendo los tiempos de respuesta del sistema en un 30%.',
                'Colaboración activa con equipos multidisciplinarios bajo metodologías ágiles (SCRUM) para estandarizar los pipelines de despliegue y optimizar los flujos de integración continua.'
            ]
        }
    ];

    const displayExperiences = experiences && experiences.length > 0 ? experiences : fallbackExperiences;

    return (
        <section id="experiencia" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="mb-16">
                    <p className="text-red-500 font-mono tracking-widest uppercase mb-4 text-sm font-semibold">
                        {t('exp_section', '> Registro_Laboral_')}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        {t('exp_heading', 'Experiencia Profesional')}
                    </h2>
                </div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
                    {displayExperiences.map((exp, index) => {
                        const isPositronica = exp.company.toLowerCase().includes('positronica');
                        const isSeccionAmarilla = exp.company.toLowerCase().includes('sección') || exp.company.toLowerCase().includes('seccion');
                        const isSolera = exp.company.toLowerCase().includes('solera');

                        return (
                            <motion.div
                                key={exp.id || index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative pl-8 md:pl-12 group"
                            >
                                <div className="absolute w-4 h-4 bg-slate-900 border-2 border-red-500 rounded-full -left-[9px] top-1.5 group-hover:bg-red-500 group-hover:shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-all duration-300"></div>

                                <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300">
                                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                                        <div>
                                            <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                                                {exp.jobTitle || 'Ingeniero de Software'}
                                            </h3>
                                            <div className="flex items-center gap-2 text-slate-400 font-medium mt-1">
                                                <Briefcase size={16} className="text-red-500" />
                                                {exp.companyUrl ? (
                                                    <a
                                                        href={exp.companyUrl}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="hover:text-red-400 transition-colors inline-flex items-center gap-1.5 group/link"
                                                    >
                                                        <span className="font-semibold text-white group-hover/link:text-red-400">{exp.company}</span>
                                                        <ExternalLink size={14} className="text-red-500 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                                    </a>
                                                ) : (
                                                    <span>{exp.company}</span>
                                                )}
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2 text-slate-500 font-mono text-sm bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700 w-fit">
                                            <Calendar size={14} className="text-red-500" />
                                            <span>{exp.dates}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mt-6">
                                        {exp.responsibilities.map((task, idx) => (
                                            <li key={idx} className="flex items-start gap-3 text-slate-400 leading-relaxed text-sm">
                                                <ChevronRight size={16} className="text-red-500 shrink-0 mt-0.5" />
                                                <span>{task}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {exp.companyUrl && (
                                        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                                            <a
                                                href={exp.companyUrl}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-red-500 font-mono text-xs font-bold uppercase tracking-widest hover:text-white transition-colors"
                                            >
                                                {isPositronica ? t('exp_positronica_link', '[ positronicalabs.dev ] ↗') : '[ Sitio Oficial ] ↗'}
                                            </a>
                                            <span className="px-2.5 py-0.5 bg-red-500/10 border border-red-500/30 rounded-full text-[10px] font-mono text-red-400 uppercase tracking-wider">
                                                {isPositronica ? 'Co-Founder & Applied AI' : isSeccionAmarilla ? 'QA Automation & Shift-Left' : isSolera ? 'Enterprise Software' : 'Software Engineering'}
                                            </span>
                                        </div>
                                    )}
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
