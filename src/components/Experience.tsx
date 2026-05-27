import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface WorkExperience {
    id: number;
    jobTitle?: string;
    company: string;
    dates: string;
    responsibilities: string[];
}

interface ExperienceProps {
    experiences: WorkExperience[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
    // 🛠️ LA SOLUCIÓN: El hook debe ir aquí arriba, en la zona de lógica, antes del return.
    const { t } = useTranslation();

    return (
        <section id="experiencia" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="mb-16">
                    <p className="text-red-500 font-mono tracking-widest uppercase mb-4 text-sm font-semibold">
                        {t('exp_section', '> Registro_Laboral_')}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        {t('exp_heading', 'Experiencia en Combate')}
                    </h2>
                </div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-6 space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
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
                                            <span>{exp.company}</span>
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
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Experience;;