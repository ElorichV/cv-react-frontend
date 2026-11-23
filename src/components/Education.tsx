import React from 'react';
import { GraduationCap, Calendar, ExternalLink } from 'lucide-react';
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
    const { t, i18n } = useTranslation();
    const isEn = i18n.language.startsWith('en');

    const fallbackCertifications: Certification[] = [
        {
            id: 1,
            name: 'AWS Certified Cloud Practitioner (CLF-C02)',
            issuingOrganization: 'Amazon Web Services',
            credentialUrl: 'https://aws.amazon.com/certification/certified-cloud-practitioner/'
        },
        {
            id: 2,
            name: 'Cybersecurity Defense Analyst, Cyber Threat & Network Defense',
            issuingOrganization: 'Cisco Networking Academy',
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
        <section id="educacion" className="py-20 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="mb-14">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        <span className="font-mono text-xs text-amber-400/90 tracking-widest uppercase">
                            05 // {t('edu_section', '> BASE_DE_CONOCIMIENTO_')}
                        </span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
                        {t('edu_heading', 'Educación y Certificaciones')}
                    </h2>
                </div>

                {/* Degree Card */}
                <div className="mb-10">
                    <div className="p-6 md:p-8 rounded-lg bg-[#111318]/70 border border-slate-800 border-t-amber-500/30 hover:border-amber-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-xl">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-red-950/40 border border-red-500/30 text-red-400 rounded-lg shrink-0">
                                <GraduationCap size={26} />
                            </div>
                            <div>
                                <span className="font-mono text-[10px] text-amber-400 uppercase tracking-widest block mb-1">
                                    {isEn ? 'ACADEMIC DEGREE // VERIFIED' : 'GRADO ACADÉMICO // VERIFICADO'}
                                </span>
                                <h3 className="font-display text-2xl font-semibold text-white mb-1">
                                    {t('edu_degree', 'Licenciatura en Ingeniería en Sistemas de Software')}
                                </h3>
                                <p className="text-slate-400 text-sm font-sans">
                                    {t('edu_institution', 'UNITEC — Universidad Tecnológica de México')}
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-amber-300 font-mono text-xs bg-amber-950/20 border border-amber-500/30 px-3.5 py-1.5 rounded w-fit shrink-0">
                            <Calendar size={13} className="text-amber-400" />
                            <span>2021 – 2025</span>
                        </div>
                    </div>
                </div>

                {/* Certifications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
                    {displayCerts.map((cert) => (
                        <div
                            key={cert.id}
                            className="p-5 rounded-lg bg-[#111318]/70 border border-slate-800 hover:border-red-500/40 transition-all flex flex-col justify-between shadow-lg group"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                                        {cert.issuingOrganization}
                                    </span>
                                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                                </div>
                                <h4 className="font-display text-lg font-semibold text-white group-hover:text-red-400 transition-colors mb-2">
                                    {cert.name}
                                </h4>
                            </div>

                            <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
                                <span className="text-[10px] font-mono text-slate-400">
                                    {isEn ? 'Official Credential' : 'Acreditación Oficial'}
                                </span>
                                {cert.credentialUrl && (
                                    <a
                                        href={cert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-amber-400 hover:text-amber-300 text-xs font-mono inline-flex items-center gap-1.5 font-semibold"
                                    >
                                        <span>{isEn ? 'Verify' : 'Verificar'}</span>
                                        <ExternalLink size={12} />
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Direct Credly Hub Link */}
                <div className="p-4 rounded-lg bg-[#0d0f14] border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono">
                    <span className="text-slate-400">
                        {isEn
                            ? 'Looking for official Cisco & industry digital badges?'
                            : '¿Deseas auditar las insignias digitales oficiales de Cisco y la industria?'}
                    </span>
                    <a
                        href="https://www.credly.com/users/axel-alberto-linares-lorrabaquio/badges"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-amber-400 hover:text-amber-300 font-semibold inline-flex items-center gap-1.5 shrink-0"
                    >
                        <span>[ Credly Profile Hub ]</span>
                        <ExternalLink size={12} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Education;
