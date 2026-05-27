import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Database, ShieldCheck, Cpu, Layout } from 'lucide-react';
const Projects: React.FC = () => {
    const { t } = useTranslation();

    const projectData = [
        {
            id: 1,
            title: t('proj1_title'),
            desc: t('proj1_desc'),
            tech: ['.NET', 'SQL Server', 'C#'],
            link: 'https://github.com/ElorichV/Sistema-de-gestion-para-panaderias',
            icon: <Database className="w-6 h-6" />,
            image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
        },
        {
            id: 2,
            title: t('proj2_title'),
            desc: t('proj2_desc'),
            tech: ['Playwright', 'TypeScript', 'E2E'],
            link: 'https://github.com/ElorichV/Playwrigth_Demo',
            icon: <ShieldCheck className="w-6 h-6" />,
            image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop'
        },
        {
            id: 3,
            title: t('proj3_title'),
            desc: t('proj3_desc'),
            tech: ['.NET 8', 'AWS', 'C#'],
            link: 'https://github.com/ElorichV/AxelLinaresApi',
            icon: <Cpu className="w-6 h-6" />,
            image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop'
        },
        {
            id: 4,
            title: t('proj4_title'),
            desc: t('proj4_desc'),
            tech: ['React', 'TypeScript', 'i18n'],
            link: 'https://github.com/ElorichV/cv-react-frontend',
            icon: <Layout className="w-6 h-6" />,
            image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop'
        }
    ];

    return (
        <section id="proyectos" className="py-24 bg-transparent">
            <div className="container mx-auto px-6 md:px-12">
                <div className="mb-16">
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
                        className="text-4xl md:text-6xl font-extrabold tracking-tight text-white"
                    >
                        {t('projects_heading')}
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {projectData.map((project) => (
                        <motion.div
                            key={project.id}
                            whileHover={{ y: -10 }}
                            className="group relative bg-slate-900/40 backdrop-blur-xl border border-slate-700/50 rounded-3xl overflow-hidden hover:border-red-500/50 transition-all duration-500 shadow-2xl"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60"
                                />
                                <div className="absolute top-6 left-6 z-20 p-3 bg-red-600/20 border border-red-500/30 rounded-xl backdrop-blur-md text-red-500">
                                    {project.icon}
                                </div>
                            </div>

                            <div className="p-8 relative z-20">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="px-3 py-1 bg-slate-800/80 border border-slate-700 rounded-full text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                      {tech}
                    </span>
                                    ))}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-4 group-hover:text-slate-300 transition-colors">
                                    {project.desc}
                                </p>
                                <div className="flex items-center justify-between">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-red-500 font-mono text-xs font-bold uppercase tracking-widest hover:text-white transition-colors group/link"
                                    >
                                        {t('projects_view_code')}
                                    </a>
                                    <div className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 group-hover:border-red-500/50 group-hover:text-red-500 transition-all">
                                        <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;