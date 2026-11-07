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
        <section id="offline" className="py-24 relative border-t border-slate-800/30 bg-slate-950/20">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="mb-14 text-center max-w-3xl mx-auto">
                    <p className="text-red-500 font-mono tracking-widest uppercase mb-2 text-sm font-semibold">
                        {t('offline_section')}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        {t('offline_heading')}
                    </h2>
                    <p className="text-slate-400 text-sm md:text-base leading-relaxed">
                        {t('offline_subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

                    {/* 1. WARHAMMER 40,000 — IX LEGIÓN (BLOOD ANGELS & ORIGEN DEL DISEÑO) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex flex-col backdrop-blur-md bg-slate-900/40 border border-slate-700/60 hover:border-red-500/70 rounded-2xl overflow-hidden transition-all group shadow-xl"
                    >
                        <div className="relative h-44 w-full overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10"></div>
                            <img
                                src="/blood-angel.jpg"
                                alt="Warhammer 40K Blood Angels"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-slate-950/85 px-3 py-1.5 rounded-lg text-red-500 border border-red-500/40 font-mono text-xs font-bold">
                                <Shield size={15} />
                                <span>{t('hobby_wh40k_tag')}</span>
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-extrabold tracking-wider text-lg">
                                        {t('hobby_wh40k_title')}
                                    </h3>
                                    <span className="text-xs font-mono text-red-400 bg-red-950/50 border border-red-500/30 px-2.5 py-0.5 rounded-full">
                                        {t('hobby_wh40k_sub')}
                                    </span>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                                    {t('hobby_wh40k_desc')}
                                </p>
                            </div>

                            <div className="p-3.5 rounded-xl bg-red-950/25 border border-red-500/30 text-xs text-slate-300 leading-relaxed font-mono">
                                {t('hobby_wh40k_design')}
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. POKE D&D — PLATAFORMA WEB + MINI-JUEGO D20 */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex flex-col backdrop-blur-md bg-slate-900/40 border border-slate-700/60 hover:border-red-500/70 rounded-2xl overflow-hidden transition-all group shadow-xl"
                    >
                        <div className="relative h-44 w-full overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10"></div>
                            <img
                                src="/D20.webp"
                                alt="Poke D&D RPG Platform"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-slate-950/85 px-3 py-1.5 rounded-lg text-emerald-400 border border-emerald-500/40 font-mono text-xs font-bold">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                                <span>{t('hobby_pokednd_tag')}</span>
                            </div>
                            <a
                                href="https://pokedyd.online/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute top-3 right-3 z-20 bg-red-600 hover:bg-red-500 p-2 rounded-lg text-white shadow-[0_0_12px_rgba(220,38,38,0.8)] transition-all"
                                title="pokedyd.online"
                            >
                                <ExternalLink size={15} />
                            </a>
                        </div>

                        <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-extrabold tracking-wider text-lg">
                                        {t('hobby_pokednd_title')}
                                    </h3>
                                    <span className="text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700 px-2.5 py-0.5 rounded-full">
                                        {t('hobby_pokednd')}
                                    </span>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {t('hobby_pokednd_desc')}
                                </p>
                            </div>

                            {/* Mini-Juego Interactivo D20 */}
                            <div className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 flex flex-col space-y-3">
                                <div className="flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-3">
                                        <div className={`w-11 h-11 rounded-xl flex items-center justify-center font-mono font-extrabold text-lg border transition-all ${
                                            d20Roll === 20
                                                ? 'bg-red-600/20 border-red-500 text-red-400 shadow-[0_0_15px_rgba(220,38,38,0.4)]'
                                                : d20Roll === 1
                                                ? 'bg-amber-500/10 border-amber-500/50 text-amber-400'
                                                : 'bg-slate-900 border-slate-700 text-white'
                                        }`}>
                                            {isRolling ? '...' : d20Roll}
                                        </div>
                                        <p className="text-xs font-mono text-slate-300 leading-snug">
                                            {getRollFeedback(d20Roll)}
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-2.5 pt-1">
                                    <button
                                        type="button"
                                        onClick={handleRollD20}
                                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-600 hover:border-red-500 text-white font-mono text-xs font-semibold transition-all cursor-pointer"
                                    >
                                        <Dices size={15} className={isRolling ? 'animate-spin text-red-500' : 'text-red-500'} />
                                        <span>[ {t('hobby_pokednd_roll_btn')} ]</span>
                                    </button>

                                    <a
                                        href="https://pokedyd.online/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-semibold transition-all shadow-[0_0_12px_rgba(220,38,38,0.3)]"
                                    >
                                        <span>[ {t('hobby_pokednd_visit_btn')} ]</span>
                                        <ExternalLink size={13} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. SCI-FI & MECHA — ANIME FAVORITOS */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex flex-col backdrop-blur-md bg-slate-900/40 border border-slate-700/60 hover:border-red-500/70 rounded-2xl overflow-hidden transition-all group shadow-xl"
                    >
                        <div className="relative h-44 w-full overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10"></div>
                            <img
                                src="/anime-zero.png"
                                alt="Sci-Fi & Mecha Anime"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-slate-950/85 px-3 py-1.5 rounded-lg text-red-500 border border-slate-700/60 font-mono text-xs font-bold">
                                <Tv size={15} />
                                <span>{t('hobby_anime_tag')}</span>
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-extrabold tracking-wider text-lg">
                                        {t('hobby_anime_title')}
                                    </h3>
                                    <span className="text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700 px-2.5 py-0.5 rounded-full">
                                        {t('hobby_anime_sub')}
                                    </span>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {t('hobby_anime_desc')}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-2.5 pt-1">
                                {animeList.map((anime, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-slate-950/60 border border-slate-800 hover:border-red-500/40 text-xs font-mono text-slate-200 transition-colors"
                                    >
                                        <Sparkles size={13} className="text-red-500 shrink-0" />
                                        <span className="truncate">{anime}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* 4. LECTURA — LIBRO TÉCNICO IA + SAGAS SCI-FI (EL JUEGO DE ENDER & WH40K) */}
                    <motion.div
                        whileHover={{ y: -5 }}
                        className="flex flex-col backdrop-blur-md bg-slate-900/40 border border-slate-700/60 hover:border-red-500/70 rounded-2xl overflow-hidden transition-all group shadow-xl"
                    >
                        <div className="relative h-44 w-full overflow-hidden">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent z-10"></div>
                            <img
                                src="/Libro.jpg"
                                alt="Tech & Sci-Fi Reading"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute top-3 left-3 z-20 flex items-center gap-2 bg-slate-950/85 px-3 py-1.5 rounded-lg text-red-500 border border-slate-700/60 font-mono text-xs font-bold">
                                <BookOpen size={15} />
                                <span>{t('hobby_reading_tag')}</span>
                            </div>
                        </div>

                        <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <h3 className="text-white font-extrabold tracking-wider text-lg">
                                        {t('hobby_reading_title')}
                                    </h3>
                                    <span className="text-xs font-mono text-slate-300 bg-slate-800/80 border border-slate-700 px-2.5 py-0.5 rounded-full">
                                        {t('hobby_reading')}
                                    </span>
                                </div>
                                <p className="text-slate-300 text-sm leading-relaxed">
                                    {t('hobby_reading_desc')}
                                </p>
                            </div>

                            <div className="space-y-2.5">
                                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5">
                                    <Cpu size={15} className="text-red-500 shrink-0 mt-0.5" />
                                    <div className="text-xs font-mono">
                                        <span className="text-red-400 font-bold block">{t('hobby_reading_ai_label')}</span>
                                        <span className="text-slate-200">{t('hobby_reading_ai_book')}</span>
                                    </div>
                                </div>

                                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 flex items-start gap-2.5">
                                    <BookOpen size={15} className="text-red-500 shrink-0 mt-0.5" />
                                    <div className="text-xs font-mono">
                                        <span className="text-red-400 font-bold block">{t('hobby_reading_scifi_label')}</span>
                                        <span className="text-slate-200">{t('hobby_reading_scifi_books')}</span>
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
