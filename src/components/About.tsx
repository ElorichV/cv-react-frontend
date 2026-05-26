import React from 'react';

interface AboutProps {
    about: string;
}

const About: React.FC<AboutProps> = ({ about }) => {
    return (
        // Fondo transparente (usa el oscuro del App.tsx) y relleno superior/inferior
        <section id="sobre-mi" className="py-20 bg-transparent">
            <div className="container mx-auto px-6">

                {/* Título de la Sección con el prefijo Rojo Táctico */}
                <div className="mb-10">
                    <p className="text-red-500 font-mono tracking-widest uppercase mb-2 text-sm font-semibold">
                        &gt; Biografía_
                    </p>
                    {/* Cambiamos el texto del título a Blanco/Gris muy claro */}
                    <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-100">
                        Sobre Mí
                    </h2>
                </div>

                {/* Texto del párrafo: cambiamos a Gris Claro para lectura suave y profesional */}
                <div className="max-w-4xl text-lg leading-relaxed text-slate-300 space-y-4">
                    <p>{about}</p>
                </div>

            </div>
        </section>
    );
};

export default About;