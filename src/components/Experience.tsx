import React from 'react';
import { type WorkExperience } from '../App';

interface ExperienceProps {
    experiences: WorkExperience[];
}

const Experience: React.FC<ExperienceProps> = ({ experiences }) => {
    return (
        <section id="experiencia" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <p className="text-red-500 font-mono tracking-widest uppercase mb-2 text-sm font-semibold">
                        &gt; Historial_Operativo_
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
                        Experiencia Profesional
                    </h2>
                </div>

                <div className="space-y-6">
                    {experiences.map((exp) => (
                        <div key={exp.id} className="p-8 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-red-500/30 transition-all group backdrop-blur-sm">
                            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 border-b border-slate-700/50 pb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-100 group-hover:text-red-400 transition-colors">
                                        {exp.jobTitle}
                                    </h3>
                                    <h4 className="text-lg text-slate-400 font-medium mt-1">{exp.company}</h4>
                                </div>
                                <span className="mt-4 md:mt-0 px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-300 text-sm font-mono">
                  {exp.dates}
                </span>
                            </div>

                            <ul className="space-y-3">
                                {exp.responsibilities.map((resp, i) => (
                                    <li key={i} className="text-slate-300 flex items-start text-base leading-relaxed">
                                        <span className="text-red-500 mr-3 mt-1">▹</span>
                                        {resp}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;