import React from 'react';
import Spline from '@splinetool/react-spline';

interface HeaderProps {
  data: {
    name: string;
    title: string;
    linkedInUrl: string;
    gitHubUrl: string;
  };
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
      <header className="relative min-h-[90vh] flex items-center border-b border-slate-800 bg-transparent overflow-hidden">

        {/* EL TRUCO SPARKLE: Destello rojo sangre difuminado de fondo */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-700/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

            {/* COLUMNA IZQUIERDA: Texto y Botones */}
            <div className="order-2 lg:order-1 flex flex-col justify-center text-left">
              <p className="text-red-500 font-mono tracking-widest uppercase mb-4 text-sm md:text-base font-semibold">
                &gt; Sistema en línea_
              </p>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
                <span className="block text-slate-400">Hola, soy</span>
                <span className="block text-white mt-2">{data.name}</span>
              </h1>

              <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-10 max-w-xl leading-relaxed">
                {data.title}
              </h2>

              <div className="flex flex-wrap items-center gap-6">
                <a
                    href="#experiencia"
                    className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)]"
                >
                  Explorar Perfil
                </a>

                <div className="flex gap-4">
                  <a href={data.gitHubUrl} target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700 hover:border-red-500 transition-all duration-300 text-slate-400 hover:text-red-500 group">
                    {/* Icono GitHub */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>

                  <a href={data.linkedInUrl} target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700 hover:border-red-500 transition-all duration-300 text-slate-400 hover:text-red-500 group">
                    {/* Icono LinkedIn */}
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* COLUMNA DERECHA: El Modelo 3D */}
            <div className="order-1 lg:order-2 h-[400px] lg:h-[600px] w-full flex items-center justify-center relative pointer-events-auto">
              {/* Animación de carga sutil mientras llega el 3D */}
              <div className="absolute inset-0 flex items-center justify-center -z-10">
                <div className="w-16 h-16 border-4 border-slate-800 border-t-red-600 rounded-full animate-spin"></div>
              </div>
              {/* URL de un modelo 3D tech/abstracto gratuito de la comunidad de Spline */}
              <Spline scene="https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode" />
            </div>

          </div>
        </div>
      </header>
  );
};

export default Header;