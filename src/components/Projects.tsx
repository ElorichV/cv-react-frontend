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
import { buildFallbackProjects } from '../lib/fallbackProjects';

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

    const fallbackProjects: ProjectItem[] = buildFallbackProjects(isEn);

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
        if (title.includes('panader') || title.includes('bakery') || title.includes('tahona')) {
            return {
                icon: <Database className="w-4 h-4 text-amber-400" />,
                image: '/tahona-db-hero.jpg'
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
