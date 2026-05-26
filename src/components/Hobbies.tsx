import React from 'react';
import { motion } from 'framer-motion';
import { Book, Dice5, Ghost, ShieldAlert } from 'lucide-react';

// Importación de tus assets (Asegúrate de que no marquen error en rojo)
import bloodAngelImg from '../assets/blood-angel.jpg';
import animeImg from '../assets/anime-zero.png';
import diceImg from '../assets/d20.webp';
import booksImg from '../assets/Libro.jpg';

const Hobbies: React.FC = () => {
    const hobbyData = [
        { id: 1, title: 'WH40K', img: bloodAngelImg, icon: <ShieldAlert size={22} />, desc: '9na Legión' },
        { id: 2, title: 'Anime', img: animeImg, icon: <Ghost size={22} />, desc: 'Sci-Fi / Mecha' },
        { id: 3, title: 'Juegos', img: diceImg, icon: <Dice5 size={22} />, desc: 'Tablero & D20' },
        { id: 4, title: 'Lectura', img: booksImg, icon: <Book size={22} />, desc: 'Fantasía & Tech' },
    ];

    return (
        <div className="grid grid-cols-2 gap-3 h-full">
            {hobbyData.map((hobby) => (
                <motion.div
                    key={hobby.id}
                    whileHover={{ scale: 1.02 }}
                    className="relative group overflow-hidden rounded-xl bg-slate-900/40 border border-slate-700/40 flex flex-col items-center justify-center p-4 min-h-[100px] cursor-pointer"
                >
                    <img
                        src={hobby.img}
                        alt={hobby.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

                    <div className="relative z-10 flex flex-col items-center gap-1.5 text-center">
                        <div className="text-red-500 group-hover:text-white transition-colors duration-300">
                            {hobby.icon}
                        </div>

                        <span className="text-xs font-mono uppercase font-bold tracking-wider text-slate-300 group-hover:text-red-400 transition-colors duration-300">
              {hobby.title}
            </span>

                        <span className="text-[9px] font-mono text-slate-500 group-hover:text-slate-200 transition-colors duration-300">
              {hobby.desc}
            </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default Hobbies;