import React from 'react';
import { type Project } from '../App';

interface ProjectsProps {
    projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
    // Enlaces de relleno dinámicos con tus colores (Dark Blue y Rojo)
    const placeholders = [
        "https://placehold.co/1280x720/0f172a/dc2626?text=Despliegue+.NET",
        "https://placehold.co/1280x720/0f172a/dc2626?text=Interfaz+React",
        "https://placehold.co/1280x720/0f172a/dc2626?text=Cloud+AWS"
    ];

    return (
        <section id="proyectos" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">
                <div className="mb-12">
                    <p className="text-red-500 font-mono tracking-widest uppercase mb-2 text-sm font-semibold">
                        &gt; Archivos_Ejecutables_
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
                        Proyectos Destacados
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((proj, index) => (
                        <div key={proj.id} className="group bg-slate-800/40 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-red-500/50 transition-all duration-300 flex flex-col backdrop-blur-sm hover:shadow-[0_0_30px_rgba(220,38,38,0.15)]">

                            {/* Imagen del Proyecto (Usando el Placeholder) */}
                            <div className="overflow-hidden border-b border-slate-700/50">
                                <img
                                    src={placeholders[index % placeholders.length]}
                                    alt={proj.title}
                                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="text-xl font-bold text-slate-100 mb-3 group-hover:text-red-400 transition-colors">
                                    {proj.title}
                                </h3>
                                <p className="text-slate-400 mb-6 flex-1 text-sm leading-relaxed">
                                    {proj.description}
                                </p>

                                {proj.projectUrl && (
                                    <a href={proj.projectUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-red-500 font-mono text-sm hover:text-red-400 transition-colors">
                                        [ Iniciar_Secuencia ] <span className="ml-2">↗</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;