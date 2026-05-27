import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface Certification {
    id: number;
    name: string;
    issuingOrganization: string;
    credentialUrl?: string;
}

interface EducationProps {
    certifications: Certification[];
}

const Education: React.FC<EducationProps> = ({ certifications }) => {
    const { t } = useTranslation();

    // Si no hay datos de la API, no renderizamos la sección para mantener el diseño limpio
    if (!certifications || certifications.length === 0) return null;

    return (
        <section id="educacion" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Cabecera de Sección */}
                <div className="mb-16">
                    <p className="text-red-500 font-mono tracking-widest uppercase mb-4 text-sm font-semibold">
                        {t('edu_section', '> Base_de_Conocimiento_')}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        {t('edu_heading', 'Certificaciones y Entrenamiento')}
                    </h2>
                </div>

                {/* Grid Táctico de Certificaciones */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300 group flex flex-col justify-between min-h-[200px] shadow-lg"
                        >
                            <div>
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="p-2.5 bg-red-600/10 text-red-500 rounded-xl group-hover:bg-red-500 group-hover:text-white group-hover:shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-all duration-300 shrink-0">
                                        <Award size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                                        {cert.name}
                                    </h3>
                                </div>

                                <div className="flex items-center gap-2 text-slate-400 font-medium text-sm mb-6 pl-1">
                                    <ShieldCheck size={16} className="text-slate-500" />
                                    <span>{cert.issuingOrganization}</span>
                                </div>
                            </div>

                            {/* Botón de Validación de Credencial (Solo aparece si la API manda URL) */}
                            {cert.credentialUrl && (
                                <a
                                    href={cert.credentialUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-red-500 font-mono text-xs font-bold uppercase tracking-widest hover:text-white transition-colors mt-auto w-fit"
                                >
                                    {t('edu_verify', '[ Validar_Credencial ] ↗')}
                                </a>
                            )}
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Education;