import React from 'react';
// Importamos tu nuevo componente interactivo
import Hobbies from './Hobbies';

interface SkillsProps {
  hardSkills: string[];
  softSkills: string[];
}

const Skills: React.FC<SkillsProps> = ({ hardSkills, softSkills }) => {
  return (
      <section className="py-20 bg-transparent text-white">
        <div className="container mx-auto px-6 md:px-12">

          {/* Título de la Sección */}
          <div className="mb-12">
            <p className="text-red-500 font-mono tracking-widest uppercase mb-2 text-sm font-semibold">
              &gt; Capacidades_
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
              Arsenal Técnico
            </h2>
          </div>

          {/* BENTO GRID */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* TARJETA 1 (Izquierda): Lenguajes */}
            <div className="md:col-span-2 bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-slate-200 border-b border-slate-700 pb-2">
                Tecnologías Core
              </h3>
              <div className="flex flex-wrap gap-3">
                {hardSkills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-slate-900 border border-slate-700 rounded-lg text-slate-300 text-sm font-mono hover:text-red-400 hover:border-red-500 transition-colors"
                    >
                  {skill}
                </span>
                ))}
              </div>
            </div>

            {/* TARJETA 2 (Arriba Derecha): Soft Skills */}
            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:border-red-500/30 transition-all duration-300">
              <h3 className="text-xl font-bold mb-6 text-slate-200 border-b border-slate-700 pb-2">
                Metodologías
              </h3>
              <div className="flex flex-col gap-3">
                {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-red-600"></div>
                      <span className="text-slate-300">{skill}</span>
                    </div>
                ))}
              </div>
            </div>

            {/* TARJETA 3 (Abajo Derecha): TU BÚNKER PERSONAL */}
            <div className="bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-6 hover:border-red-500/30 transition-all duration-300 flex flex-col group">
              <h3 className="text-sm font-mono text-red-500 mb-4 relative z-10 uppercase tracking-widest text-center">
                &gt; Offline_Mode
              </h3>

              {/* Aquí inyectamos tus 4 tarjetas interactivas */}
              <div className="flex-1">
                <Hobbies />
              </div>
            </div>

          </div>
        </div>
      </section>
  );
};

export default Skills;