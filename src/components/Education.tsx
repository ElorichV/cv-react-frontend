import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, GraduationCap, Calendar } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export interface Certification {
    id: number;
    name: string;
    issuingOrganization: string;
    credentialUrl?: string;
}

interface EducationProps {
    certifications?: Certification[];
}

const Education: React.FC<EducationProps> = ({ certifications = [] }) => {
    const { t } = useTranslation();

    const fallbackCertifications: Certification[] = [
        {
            id: 1,
            name: 'AWS Certified Cloud Practitioner (CLF-C02)',
            issuingOrganization: 'AWS',
            credentialUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/'
        },
        {
            id: 2,
            name: 'Cybersecurity Defense Analyst, Cyber Threat & Network Defense',
            issuingOrganization: 'Cisco',
            credentialUrl: 'https://www.credly.com/users/axel-alberto-linares-lorrabaquio/badges'
        },
        {
            id: 3,
            name: 'Certified Associate (PCAP) & Entry-Level (PCEP) Programmer',
            issuingOrganization: 'Python Institute',
            credentialUrl: 'https://pythoninstitute.org/pcap'
        },
        {
            id: 4,
            name: 'Certified Professional Programmer (CPP)',
            issuingOrganization: 'C++ Institute',
            credentialUrl: 'https://cppinstitute.org/cpp'
        }
    ];

    const displayCerts = certifications && certifications.length > 0 ? certifications : fallbackCertifications;

    return (
        <section id="educacion" className="py-24 relative">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                {/* Cabecera de Sección */}
                <div className="mb-16">
                    <p className="text-red-500 font-mono tracking-widest uppercase mb-4 text-sm font-semibold">
                        {t('edu_section', '> Base_de_Conocimiento_')}
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
                        {t('edu_heading', 'Educación y Certificaciones')}
                    </h2>
                </div>

                {/* Bloque 1: Formación Académica (Grado Universitario) */}
                <div className="mb-12">
                    <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                        <GraduationCap className="text-red-500 w-4 h-4" />
                        {t('edu_academic_title', 'Formación Académica')}
                    </h3>
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 md:p-8 hover:border-red-500/40 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl"
                    >
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-red-600/10 text-red-500 rounded-xl shrink-0">
                                <GraduationCap size={28} />
                            </div>
                            <div>
                                <h4 className="text-xl md:text-2xl font-bold text-white mb-2">
                                    {t('edu_degree', 'Licenciatura en Ingeniería en Sistemas de Software')}
                                </h4>
                                <p className="text-slate-400 font-medium text-base">
                                    {t('edu_institution', 'UNITEC')}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-red-400 font-mono text-sm bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-xl w-fit">
                            <Calendar size={16} className="text-red-500" />
                            <span>{t('edu_status', 'Último Cuatrimestre')}</span>
                        </div>
                    </motion.div>
                </div>

                {/* Bloque 2: Certificaciones Profesionales */}
                <div>
                    <h3 className="text-sm font-mono uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
                        <Award className="text-red-500 w-4 h-4" />
                        {t('edu_certs_title', 'Certificaciones Internacionales')}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {displayCerts.map((cert, index) => (
                            <motion.div
                                key={cert.id || index}
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
                                        <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors leading-snug">
                                            {cert.name}
                                        </h4>
                                    </div>

                                    <div className="flex items-center gap-2 text-slate-400 font-medium text-sm mb-6 pl-1">
                                        <ShieldCheck size={16} className="text-slate-500" />
                                        <span>{cert.issuingOrganization}</span>
                                    </div>
                                </div>

                                {cert.credentialUrl && cert.credentialUrl !== 'N/A' && (
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

            </div>
        </section>
    );
};

export default Education;
