import React from 'react';
import { type Certification } from '../App';

interface EducationProps {
    certifications: Certification[];
}

const Education: React.FC<EducationProps> = ({ certifications }) => {
    return (
        <section id="certificaciones" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <p className="text-red-500 font-mono tracking-widest uppercase mb-2 text-sm font-semibold">
                        &gt; Acreditaciones_
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
                        Educación y Certificados
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {certifications.map((cert) => (
                        <div key={cert.id} className="p-6 rounded-2xl bg-slate-800/40 border border-slate-700/50 hover:border-red-500/30 transition-all flex flex-col justify-center backdrop-blur-sm group">
                            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-red-400 transition-colors">
                                {cert.name}
                            </h3>
                            <p className="text-slate-400 font-medium mb-4">{cert.issuingOrganization}</p>

                            {cert.credentialUrl && (
                                <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-red-500 hover:text-red-400 transition-colors">
                                    Ver Credencial ↗
                                </a>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;