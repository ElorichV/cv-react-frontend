import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
// 1. Importamos el componente del Modal de contacto
import ContactModal from './ContactModal';

interface HeaderProps {
  data: {
    name: string;
    title: string;
    linkedInUrl: string;
    gitHubUrl: string;
  };
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  const { t, i18n } = useTranslation();

  // 2. Estado para controlar si el modal está abierto o cerrado
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  // 3. Lógica dinámica para el nombre del CV según el idioma
  const cvFileName = i18n.language.startsWith('en')
      ? 'Axel_Linares_CV_EN.pdf'
      : 'Axel_Linares_CV_ES.pdf';

  return (
      <header className="relative min-h-[90vh] flex items-center border-b border-slate-800 bg-transparent overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-red-700/20 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="absolute top-8 right-6 md:right-12 z-50">
          <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-700 bg-slate-800/60 hover:bg-slate-700 hover:border-red-500 transition-all font-mono text-xs text-slate-300"
          >
            <span className={i18n.language === 'es' ? 'text-red-500 font-bold' : 'opacity-50'}>ES</span>
            <span className="text-slate-600">/</span>
            <span className={i18n.language === 'en' ? 'text-red-500 font-bold' : 'opacity-50'}>EN</span>
          </button>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="order-2 lg:order-1 flex flex-col justify-center text-left">
              <p className="text-red-500 font-mono tracking-widest uppercase mb-4 text-sm md:text-base font-semibold transition-opacity">
                {t('header_system')}
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6">
                <span className="block text-slate-400">{t('header_hello')}</span>
                <span className="block text-white mt-2">{data.name}</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-medium text-slate-300 mb-10 max-w-xl leading-relaxed">
                {data.title}
              </h2>

              {/* Contenedor principal de botones */}
              <div className="flex flex-wrap items-center gap-6">

                {/* Botón original: Explorar Perfil */}
                <a href="#experiencia" className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)]">
                  {t('header_button')}
                </a>

                {/* Íconos sociales */}
                <div className="flex gap-4">
                  <a href={data.gitHubUrl} target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700 hover:border-red-500 transition-all duration-300 text-slate-400 hover:text-red-500 group">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                  </a>
                  <a href={data.linkedInUrl} target="_blank" rel="noopener noreferrer" className="p-4 rounded-lg bg-slate-800/60 hover:bg-slate-800 border border-slate-700 hover:border-red-500 transition-all duration-300 text-slate-400 hover:text-red-500 group">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                  </a>
                </div>

                {/* 4. Nuevos botones integrados con el mismo estilo rojo */}
                <div className="flex gap-4">
                  <button
                      onClick={() => setIsContactOpen(true)}
                      className="flex items-center gap-2 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)]"
                  >
                    <span>{t('contact_button_text', 'Contacto')}</span>
                    <span>✉️</span>
                  </button>

                  <a
                      href={`/${cvFileName}`}
                      download={cvFileName}
                      className="flex items-center gap-2 px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(220,38,38,0.3)] hover:shadow-[0_0_35px_rgba(220,38,38,0.6)]"
                  >
                    <span>{t('download_cv_text', 'Descargar CV')}</span>
                    <span>📥</span>
                  </a>
                </div>

              </div>
            </div>

            {/* Terminal visual (Sin cambios, se mantiene intacta) */}
            <div className="order-1 lg:order-2 w-full flex items-center justify-center relative pointer-events-none mt-10 lg:mt-0">
              <div className="absolute inset-0 bg-red-600/5 blur-3xl rounded-full"></div>
              <div className="w-full max-w-lg bg-[#0b1120]/90 backdrop-blur-md border border-slate-700/50 rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center px-4 py-3 border-b border-slate-700/50 bg-[#0f172a]/80">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-slate-600"></div>
                    <div className="w-3 h-3 rounded-full bg-red-600"></div>
                  </div>
                  <span className="ml-4 text-xs font-mono text-slate-500">server@axel-api:~</span>
                </div>
                <div className="p-6 font-mono text-sm text-slate-300 space-y-2 text-left">
                  <p className="text-slate-400"><span className="text-red-500">❯</span> dotnet run --project CV.Api</p>
                  <p className="text-slate-500">Building...</p>
                  <p className="text-green-400 mb-4">Build succeeded.</p>
                  <p className="text-slate-400">info: Microsoft.Hosting.Lifetime[14]</p>
                  <p className="pl-4 text-slate-300">Now listening on: <span className="text-blue-400">https://localhost:5139</span></p>
                  <p className="text-slate-400 mt-2">info: Microsoft.Hosting.Lifetime[0]</p>
                  <p className="pl-4 text-slate-300">Application started. Press Ctrl+C to shut down.</p>
                  <p className="text-slate-400 mt-2">info: Microsoft.AspNetCore.Hosting.Diagnostics[1]</p>
                  <p className="pl-4 text-slate-300">Request starting HTTP/2 GET <span className="text-red-400">/api/Profile</span></p>
                  <p className="text-red-500 font-bold mt-4 animate-pulse">&gt; CONNECTION ESTABLISHED_</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 5. Se invoca el Modal al final de la estructura */}
        <ContactModal
            isOpen={isContactOpen}
            onClose={() => setIsContactOpen(false)}
        />
      </header>
  );
};

export default Header;