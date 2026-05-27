import React from 'react';
import { Shield, Tv, Dices, BookOpen, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const Hobbies: React.FC = () => {
    const { t } = useTranslation();

    // 💡 AÑADIMOS LA PROPIEDAD "image" A CADA HOBBY
    const hobbies = [
        {
            name: "WH40K",
            desc: "9na Legión",
            icon: <Shield size={16} />,
            link: null,
            image: "/blood-angel.jpg"
        },
        {
            name: "Poke D&D",
            desc: t('hobby_pokednd', 'Dev Project & RPG'),
            icon: <Dices size={16} />,
            link: "https://tudominio.com/pokednd",
            image: "/D20.webp"
        },
        {
            name: "ANIME",
            desc: "Sci-Fi / Mecha",
            icon: <Tv size={16} />,
            link: null,
            image: "/anime-zero.png"
        },
        {
            name: "LECTURA",
            desc: t('hobby_reading', 'Fantasía & Tech'),
            icon: <BookOpen size={16} />,
            link: null,
            image: "/Libro.jpg"
        }
    ];

    return (
        <section id="offline" className="py-24 relative border-t border-slate-800/30 bg-slate-950/20">
            <div className="container mx-auto px-6 md:px-12 relative z-10">

                <div className="mb-12 text-center">
                    <p className="text-red-500 font-mono tracking-widest uppercase mb-2 text-sm font-semibold">
                        {t('offline_section', '> OFFLINE_MODE')}
                    </p>
                    <h2 className="text-3xl font-bold text-white">
                        {t('offline_heading', 'Protocolos de Desconexión')}
                    </h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
                    {hobbies.map((hobby, index) => {
                        // Nuevo diseño de tarjeta con Imagen Integrada
                        const CardContent = (
                            <div className="relative w-full h-full flex flex-col">
                                {/* Bloque de Imagen Superior */}
                                <div className="relative h-32 w-full overflow-hidden rounded-t-xl">
                                    <div className="absolute inset-0 bg-slate-900/60 z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                                    <img
                                        src={hobby.image}
                                        alt={hobby.name}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />
                                    {/* Ícono Lucide como medalla táctica */}
                                    <div className="absolute top-3 left-3 z-20 bg-slate-900/80 p-2 rounded-lg text-red-500 border border-slate-700/50">
                                        {hobby.icon}
                                    </div>
                                    {/* Indicador de enlace externo si lo tiene */}
                                    {hobby.link && (
                                        <div className="absolute top-3 right-3 z-20 bg-red-500/90 p-1.5 rounded-md text-white shadow-[0_0_10px_rgba(220,38,38,0.8)]">
                                            <ExternalLink size={14} />
                                        </div>
                                    )}
                                </div>

                                {/* Bloque de Texto Inferior */}
                                <div className="p-5 flex-grow flex flex-col justify-center items-center bg-slate-900/40 rounded-b-xl">
                                    <h3 className="text-white font-bold tracking-wider mb-1 text-sm">{hobby.name}</h3>
                                    <p className="text-slate-400 text-xs font-mono">{hobby.desc}</p>
                                </div>
                            </div>
                        );

                        return hobby.link ? (
                            <motion.a
                                href={hobby.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                key={index}
                                whileHover={{ y: -5 }}
                                className="flex flex-col backdrop-blur-md border border-slate-700/50 rounded-2xl hover:border-red-500 transition-all group shadow-lg cursor-pointer hover:shadow-red-900/20"
                            >
                                {CardContent}
                            </motion.a>
                        ) : (
                            <motion.div
                                key={index}
                                whileHover={{ y: -5 }}
                                className="flex flex-col backdrop-blur-md border border-slate-700/50 rounded-2xl hover:border-slate-500/50 transition-all group shadow-lg"
                            >
                                {CardContent}
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default Hobbies;