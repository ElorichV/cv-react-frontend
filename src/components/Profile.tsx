import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Target, Zap, ArrowRight } from 'lucide-react';

interface ProfileProps {
    summary?: string;
}

const Profile: React.FC<ProfileProps> = ({ summary }) => {
    const { t } = useTranslation();
    const bioText = summary || t('profile_bio');

    const pillars = [
        {
            num: '01',
            icon: <Shield size={18} className="text-red-500" />,
            title: t('pilar1_title', 'Integridad'),
            desc: t('pilar1_desc', 'El dato es el activo más valioso. Diseño bases de datos SQL con integridad referencial absoluta y optimización de índices.')
        },
        {
            num: '02',
            icon: <Target size={18} className="text-amber-400" />,
            title: t('pilar2_title', 'Estabilidad'),
            desc: t('pilar2_desc', 'Si no está probado, está roto. Implemento suites de QA E2E con Playwright/Browserbase y Shift-Left Testing que eliminan regresiones.')
        },
        {
            num: '03',
            icon: <Zap size={18} className="text-red-400" />,
            title: t('pilar3_title', 'Escalabilidad'),
            desc: t('pilar3_desc', 'Backend diseñado para la nube. Arquitecturas Clean Architecture en .NET y orquestación de agentes listas para AWS y Render.')
        }
    ];

    return (
        <section id="sobre-mi" className="py-20 md:py-28 relative">
            {/* Ambient Background Blur */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-red-600/5 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="mb-14">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        <span className="font-mono text-xs text-amber-400/90 tracking-widest uppercase">
                            01 // {t('profile_section', '> PROTOCOLO_IDENTIDAD_')}
                        </span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight">
                        {t('profile_heading', 'Ingeniería con Propósito')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    
                    {/* Left: Axel's Portrait Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-4 flex flex-col items-center lg:items-start"
                    >
                        <div className="relative w-full max-w-sm rounded-lg overflow-hidden border border-slate-800 bg-[#0d0f14] p-3 shadow-2xl group hover:border-amber-500/40 transition-all">
                            {/* Inner Framing Accent */}
                            <div className="relative aspect-square w-full rounded overflow-hidden border border-slate-800/80 bg-slate-900">
                                <img
                                    src="/axel-profile.jpg"
                                    alt="Axel Linares"
                                    className="w-full h-full object-cover object-[center_20%] group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0b0e] via-transparent to-transparent opacity-60"></div>
                            </div>

                            {/* Card Footer Telemetry */}
                            <div className="pt-3 px-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
                                <span>ID: AL-8092</span>
                                <span className="text-amber-400/90 flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                                    ACTIVE VERIFIED
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Bio & The 3 Pillars */}
                    <div className="lg:col-span-8 flex flex-col space-y-8">
                        <div>
                            <p className="text-slate-300 text-base md:text-lg leading-relaxed font-sans">
                                {bioText}
                            </p>
                        </div>

                        {/* The 3 Pillars Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {pillars.map((pillar) => (
                                <motion.div
                                    key={pillar.num}
                                    whileHover={{ y: -4 }}
                                    className="p-5 rounded-lg bg-[#111318]/70 border border-slate-800 border-t-amber-500/40 hover:border-red-500/50 transition-all flex flex-col justify-between shadow-lg"
                                >
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <div className="p-2 rounded bg-slate-900/80 border border-slate-800">
                                                {pillar.icon}
                                            </div>
                                            <span className="font-mono text-[10px] text-slate-500 tracking-wider">
                                                {pillar.num}
                                            </span>
                                        </div>
                                        <h3 className="font-display text-xl font-semibold text-white tracking-wide mb-2">
                                            {pillar.title}
                                        </h3>
                                        <p className="text-slate-400 text-xs leading-relaxed font-sans">
                                            {pillar.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Lore Workshop Link */}
                        <div className="pt-2">
                            <a
                                href="#offline"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded bg-slate-900/60 border border-amber-500/30 hover:border-amber-400 text-xs font-mono text-amber-300 hover:text-white transition-all shadow-sm"
                            >
                                <span>{t('profile_lore_badge', 'Inspirado en la disciplina y maestría artesanal de la IX Legión →')}</span>
                                <ArrowRight size={13} />
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Profile;
