import React from 'react';
import { Terminal, Settings, Layers, Users } from 'lucide-react';

interface SkillsProps {
  hardSkills: string[];
  softSkills: string[];
}

const Skills: React.FC<SkillsProps> = ({ hardSkills, softSkills }) => {

  // Categoría B: DevOps y QA
  const devOpsSkills = [
    "Control de Versiones (Git/GitHub)",
    "Pipelines CI/CD",
    "Playwright Automation (E2E)",
    "Arquitectura Cloud (AWS)",
    "Unit Testing"
  ];

  // Categoría C: Metodologías
  const methodologySkills = [
    "Scrum & Metodologías Ágiles",
    "XP (Extreme Programming)",
    "Threat Management",
    "Network Defense",
    "Análisis SOC"
  ];

  // Si tu API no trae Soft Skills aún, usamos un respaldo táctico:
  const finalSoftSkills = softSkills && softSkills.length > 0
      ? softSkills
      : ["Resolución de Problemas Complejos", "Comunicación Técnica", "Trabajo bajo presión", "Análisis Táctico de Sistemas"];

  return (
      <section id="habilidades" className="py-24 relative">
        <div className="container mx-auto px-6 md:px-12 relative z-10">

          <div className="mb-16">
            <p className="text-red-500 font-mono tracking-widest uppercase mb-4 text-sm font-semibold">
              &gt; CAPACIDADES_
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
              Arsenal Técnico
            </h2>
          </div>

          {/* Grid 2x2 para equilibrio visual perfecto */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* CUADRANTE 1: Tecnologías Core */}
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:border-red-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Terminal className="text-red-500" />
                <h3 className="text-xl font-bold text-white">Tecnologías Core</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {hardSkills.map((skill, index) => (
                    <span key={index} className="px-3 py-1.5 bg-slate-800/80 border border-slate-700 rounded-lg text-sm font-mono text-slate-300 hover:border-red-500 hover:text-white transition-colors cursor-default">
                                    {skill}
                                </span>
                ))}
              </div>
            </div>

            {/* CUADRANTE 2: DevOps & QA */}
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:border-red-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Settings className="text-red-500" />
                <h3 className="text-xl font-bold text-white">QA & DevOps</h3>
              </div>
              <ul className="space-y-4">
                {devOpsSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </li>
                ))}
              </ul>
            </div>

            {/* CUADRANTE 3: Metodologías */}
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:border-red-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Layers className="text-red-500" />
                <h3 className="text-xl font-bold text-white">Metodologías de Trabajo</h3>
              </div>
              <ul className="space-y-4">
                {methodologySkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </li>
                ))}
              </ul>
            </div>

            {/* CUADRANTE 4: Soft Skills */}
            <div className="bg-slate-900/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-8 hover:border-red-500/30 transition-all">
              <div className="flex items-center gap-3 mb-6">
                <Users className="text-red-500" />
                <h3 className="text-xl font-bold text-white">Competencias Profesionales</h3>
              </div>
              <ul className="space-y-4">
                {finalSoftSkills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-3 text-slate-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-500 shrink-0"></div>
                      <span className="text-sm font-medium">{skill}</span>
                    </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>
  );
};

export default Skills;