import React, { useState } from 'react';
import { Shield, Tv, Dices, BookOpen, ExternalLink, Sparkles, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hobbies: React.FC = () => {
    const { t } = useTranslation();
    const [d20Roll, setD20Roll] = useState<number | null>(20);
    const [isRolling, setIsRolling] = useState<boolean>(false);

    const handleRollD20 = () => {
        if (isRolling) return;
        setIsRolling(true);
        let ticks = 0;
        const interval = setInterval(() => {
            setD20Roll(Math.floor(Math.random() * 20) + 1);
            ticks++;
            if (ticks >= 8) {
                clearInterval(interval);
                const finalRoll = Math.floor(Math.random() * 20) + 1;
                setD20Roll(finalRoll);
                setIsRolling(false);
            }
        }, 60);
    };

    const getRollFeedback = (roll: number | null) => {
        if (roll === null) return '';
        if (roll === 20) return t('hobby_pokednd_crit');
        if (roll === 1) return t('hobby_pokednd_fail');
        if (roll >= 15) return t('hobby_pokednd_high');
        return t('hobby_pokednd_norm');
    };

    const animeList = [
        "Code Geass",
        "Tengen Toppa Gurren Lagann",
        "Mobile Suit Gundam",
        "Mazinger Z"
    ];

    return (
        <section id="offline" className="py-20 md:py-28 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="mb-14">
                    <div className="flex items-center gap-2 mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
                        <span className="font-mono text-xs text-amber-400/90 tracking-widest uppercase">
                            06 // {t('offline_section', '> PROTOCOLO_OFFLINE_')}
                        </span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-semibold text-white tracking-tight mb-3">
                        {t('offline_heading', 'El Taller & Filosofía Personal')}
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-3xl font-sans">
                        {t('offline_subtitle', 'Más allá del código de producción: pasiones que forjan la disciplina, la resolución de problemas bajo presión y la búsqueda del arte en la ingeniería.')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                    {/* 1. WARHAMMER 40,000 — IX LEGIÓN (BLOOD ANGELS & ORIGEN DEL DISEÑO) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#111318]/70 border border-slate-800 hover:border-red-500/50 rounded-lg overflow-hidden transition-all flex flex-col justify-between shadow-xl group"
                    >
                        <div className="relative h-48 w-full overflow-hidden bg-[#0a0b0e]">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/40 to-transparent z-10"></div>
                            <img
                                src="/blood-angel.jpg"
                                alt="Warhammer 40K Blood Angels"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-70"
                            />
                            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-black/85 px-2.5 py-1 rounded text-red-400 border border-red-500/40 font-mono text-xs font-semibold backdrop-blur-md">
                                <Shield size={14} />
                                <span>{t('hobby_wh40k_tag')}</span>
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col justify-between space-y-4 font-sans">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-display text-2xl font-semibold text-white tracking-wide">
                                        {t('hobby_wh40k_title')}
                                    </h3>
                                    <span className="text-[10px] font-mono text-amber-300 bg-amber-950/40 border border-amber-500/30 px-2.5 py-0.5 rounded">
                                        {t('hobby_wh40k_sub')}
                                    </span>
                                </div>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-4">
                                    {t('hobby_wh40k_desc')}
                                </p>
                            </div>

                            <div className="p-3.5 rounded bg-[#0d0f14] border border-red-500/30 text-xs text-slate-300 leading-relaxed font-mono">
                                {t('hobby_wh40k_design')}
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. POKE D&D — PLATAFORMA WEB + MINI-JUEGO D20 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#111318]/70 border border-slate-800 hover:border-amber-500/50 rounded-lg overflow-hidden transition-all flex flex-col justify-between shadow-xl group"
                    >
                        <div className="relative h-48 w-full overflow-hidden bg-[#0a0b0e]">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/40 to-transparent z-10"></div>
                            <img
                                src="/D20.webp"
                                alt="Poke D&D RPG Platform"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-70"
                            />
                            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-black/85 px-2.5 py-1 rounded text-emerald-400 border border-emerald-500/40 font-mono text-xs font-semibold backdrop-blur-md">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                <span>{t('hobby_pokednd_tag')}</span>
                            </div>
                            <a
                                href="https://pokedyd.online/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-3 right-3 z-20 bg-red-600 hover:bg-red-700 p-2 rounded text-white shadow-lg transition-all"
                                title="pokedyd.online"
                            >
                                <ExternalLink size={14} />
                            </a>
                        </div>

                        <div className="p-6 flex-grow flex flex-col justify-between space-y-4 font-sans">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-display text-2xl font-semibold text-white tracking-wide">
                                        {t('hobby_pokednd_title')}
                                    </h3>
                                    <span className="text-[10px] font-mono text-slate-300 bg-[#0d0f14] border border-slate-800 px-2.5 py-0.5 rounded">
                                        {t('hobby_pokednd')}
                                    </span>
                                </div>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                    {t('hobby_pokednd_desc')}
                                </p>
                            </div>

                            {/* Mini-Juego Interactivo D20 */}
                            <div className="p-3.5 rounded bg-[#0d0f14] border border-slate-800 flex flex-col space-y-3">
                                <div className="flex items-center gap-3">
                                    <div className={`w-11 h-11 rounded flex items-center justify-center font-mono font-bold text-lg border transition-all ${
                                        d20Roll === 20
                                            ? 'bg-red-950/50 border-red-500 text-red-400 shadow-[0_0_14px_rgba(220,38,38,0.4)]'
                                            : d20Roll === 1
                                            ? 'bg-amber-950/40 border-amber-500 text-amber-400'
                                            : 'bg-slate-900 border-slate-700 text-white'
                                    }`}>
                                        {isRolling ? '...' : d20Roll}
                                    </div>
                                    <p className="text-xs font-mono text-slate-300 leading-snug">
                                        {getRollFeedback(d20Roll)}
                                    </p>
                                </div>

                                <div className="flex flex-wrap items-center gap-2 pt-1">
                                    <button
                                        type="button"
                                        onClick={handleRollD20}
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-amber-400 text-white font-mono text-xs font-semibold transition-all cursor-pointer"
                                    >
                                        <Dices size={14} className={isRolling ? 'animate-spin text-red-500' : 'text-amber-400'} />
                                        <span>[ {t('hobby_pokednd_roll_btn')} ]</span>
                                    </button>

                                    <a
                                        href="https://pokedyd.online/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-semibold transition-all shadow-md"
                                    >
                                        <span>[ {t('hobby_pokednd_visit_btn')} ]</span>
                                        <ExternalLink size={12} />
                                    </a>

                                    <a
                                        href="/floorplans/pokednd.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 hover:bg-slate-800 border border-amber-500/40 text-amber-300 hover:text-white font-mono text-xs font-semibold transition-all"
                                    >
                                        <span>[ {t('hobby_pokednd_floorplan_btn', '🗺️ Ver Floorplan')} ]</span>
                                        <ExternalLink size={12} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. SCI-FI & MECHA — ANIME FAVORITOS */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#111318]/70 border border-slate-800 hover:border-amber-500/50 rounded-lg overflow-hidden transition-all flex flex-col justify-between shadow-xl group"
                    >
                        <div className="relative h-48 w-full overflow-hidden bg-[#0a0b0e]">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/40 to-transparent z-10"></div>
                            <img
                                src="/anime-zero.png"
                                alt="Sci-Fi & Mecha Anime"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-70"
                            />
                            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-black/85 px-2.5 py-1 rounded text-red-400 border border-slate-700 font-mono text-xs font-semibold backdrop-blur-md">
                                <Tv size={14} />
                                <span>{t('hobby_anime_tag')}</span>
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col justify-between space-y-4 font-sans">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-display text-2xl font-semibold text-white tracking-wide">
                                        {t('hobby_anime_title')}
                                    </h3>
                                    <span className="text-[10px] font-mono text-slate-300 bg-[#0d0f14] border border-slate-800 px-2.5 py-0.5 rounded">
                                        {t('hobby_anime_sub')}
                                    </span>
                                </div>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                    {t('hobby_anime_desc')}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-2 pt-1">
                                {animeList.map((anime, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 px-3 py-2 rounded bg-[#0d0f14] border border-slate-800 hover:border-amber-500/40 text-xs font-mono text-slate-200 transition-colors"
                                    >
                                        <Sparkles size={12} className="text-red-500 shrink-0" />
                                        <span className="truncate">{anime}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* 4. LECTURA — LIBRO TÉCNICO IA + SAGAS SCI-FI */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="bg-[#111318]/70 border border-slate-800 hover:border-red-500/50 rounded-lg overflow-hidden transition-all flex flex-col justify-between shadow-xl group"
                    >
                        <div className="relative h-48 w-full overflow-hidden bg-[#0a0b0e]">
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111318] via-[#111318]/40 to-transparent z-10"></div>
                            <img
                                src="/Libro.jpg"
                                alt="Tech & Sci-Fi Reading"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-70"
                            />
                            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-black/85 px-2.5 py-1 rounded text-red-400 border border-slate-700 font-mono text-xs font-semibold backdrop-blur-md">
                                <BookOpen size={14} />
                                <span>{t('hobby_reading_tag')}</span>
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col justify-between space-y-4 font-sans">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="font-display text-2xl font-semibold text-white tracking-wide">
                                        {t('hobby_reading_title')}
                                    </h3>
                                    <span className="text-[10px] font-mono text-slate-300 bg-[#0d0f14] border border-slate-800 px-2.5 py-0.5 rounded">
                                        {t('hobby_reading')}
                                    </span>
                                </div>
                                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                                    {t('hobby_reading_desc')}
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="p-3 rounded bg-[#0d0f14] border border-slate-800 flex items-start gap-2.5">
                                    <Cpu size={14} className="text-red-500 shrink-0 mt-0.5" />
                                    <div className="text-xs font-mono">
                                        <span className="text-amber-400 font-semibold block">{t('hobby_reading_ai_label')}</span>
                                        <span className="text-slate-300">{t('hobby_reading_ai_book')}</span>
                                    </div>
                                </div>

                                <div className="p-3 rounded bg-[#0d0f14] border border-slate-800 flex items-start gap-2.5">
                                    <BookOpen size={14} className="text-red-500 shrink-0 mt-0.5" />
                                    <div className="text-xs font-mono">
                                        <span className="text-amber-400 font-semibold block">{t('hobby_reading_scifi_label')}</span>
                                        <span className="text-slate-300">{t('hobby_reading_scifi_books')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default Hobbies;
