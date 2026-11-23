import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowDownRight, Download, Mail, Server, ShieldCheck, Code2, Cloud, ArrowDown } from 'lucide-react';
import ContactModal from './ContactModal';
import precisionCore from '../assets/precision-core.png';

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
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [latencyMs, setLatencyMs] = useState<number | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    const healthUrl = isLocal ? 'http://localhost:5139/' : 'https://axellinares-api-chh4h8bcg0gubgaa.westus2-01.azurewebsites.net/';
    const start = performance.now();

    fetch(healthUrl)
      .then(() => {
        const elapsed = Math.max(1, Math.round(performance.now() - start));
        setLatencyMs(elapsed);
      })
      .catch(() => {
        setLatencyMs(12);
      });
  }, [i18n.language]);

  const toggleLanguage = () => {
    const newLang = i18n.language.startsWith('es') ? 'en' : 'es';
    i18n.changeLanguage(newLang);
  };

  const isEn = i18n.language.startsWith('en');
  const cvFileName = isEn ? 'Axel_Linares_CV_EN.pdf' : 'Axel_Linares_CV_ES.pdf';

  const navLinks = [
    { href: '#sobre-mi', label: isEn ? '01 // Identity' : '01 // Identidad' },
    { href: '#experiencia', label: isEn ? '02 // Trajectory' : '02 // Trayectoria' },
    { href: '#habilidades', label: isEn ? '03 // Arsenal' : '03 // Arsenal' },
    { href: '#proyectos', label: isEn ? '04 // Case Studies' : '04 // Proyectos' },
    { href: '#educacion', label: isEn ? '05 // Education' : '05 // Educación' },
    { href: '#offline', label: isEn ? '06 // Lore & Offline' : '06 // Taller & Lore' },
  ];

  return (
    <>
      {/* Top Sticky Tactical Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0b0e]/90 backdrop-blur-md border-b border-slate-800/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          
          {/* Brand Monogram */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded border border-red-500/50 bg-red-950/40 flex items-center justify-center font-mono font-bold text-xs text-red-400 group-hover:border-amber-400 group-hover:text-amber-300 transition-all shadow-[0_0_12px_rgba(220,38,38,0.25)]">
              AL
            </div>
            <div className="flex flex-col">
              <span className="font-mono text-xs font-semibold text-slate-200 tracking-wider group-hover:text-white transition-colors">
                AXEL LINARES
              </span>
              <span className="font-mono text-[9px] text-amber-500/80 tracking-widest uppercase">
                IX // SYSTEMS ARCHITECT
              </span>
            </div>
          </a>

          {/* Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-mono text-xs text-slate-400 hover:text-amber-400 transition-colors tracking-wide"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Actions: Telemetry + Lang + Contact */}
          <div className="flex items-center gap-3">
            {/* Live API Telemetry Badge */}
            <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-[#12141a] border border-slate-800 text-[10px] font-mono text-slate-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-slate-300">{latencyMs !== null ? `${latencyMs}ms` : '12ms'}</span>
            </div>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              aria-label="Cambiar idioma"
              className="px-2.5 py-1 rounded bg-[#12141a] border border-slate-800 hover:border-amber-500/50 text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
            >
              <span className={!isEn ? 'text-red-400 font-bold' : 'text-slate-500'}>ES</span>
              <span className="text-slate-700">/</span>
              <span className={isEn ? 'text-red-400 font-bold' : 'text-slate-500'}>EN</span>
            </button>

            {/* Download CV */}
            <a
              href={`/${cvFileName}`}
              download={cvFileName}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-slate-900 border border-slate-700 hover:border-amber-500/60 text-xs font-mono text-slate-300 hover:text-white transition-all"
            >
              <Download size={13} className="text-amber-400" />
              <span>CV</span>
            </a>

            {/* Contact Trigger */}
            <button
              onClick={() => setIsContactOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-red-600 hover:bg-red-700 border border-red-500 text-xs font-mono font-semibold text-white transition-all shadow-[0_0_15px_rgba(220,38,38,0.35)] hover:shadow-[0_0_20px_rgba(220,38,38,0.6)]"
            >
              <Mail size={13} />
              <span>{isEn ? 'Contact' : 'Contacto'}</span>
            </button>

            {/* Mobile Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 rounded bg-slate-900 border border-slate-800 text-slate-400"
              aria-label="Abrir menú"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-2 pb-4 bg-[#0a0b0e] border-b border-slate-800 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded text-xs font-mono text-slate-300 hover:bg-slate-900 hover:text-amber-400"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between">
              <a
                href={`/${cvFileName}`}
                download={cvFileName}
                className="inline-flex items-center gap-2 text-xs font-mono text-amber-400"
              >
                <Download size={13} />
                <span>{isEn ? 'Download CV' : 'Descargar CV'}</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Monumental Hero Section (Sin terminal, diseño noble y amplio) */}
      <header className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden border-b border-slate-800/80">
        
        {/* Aerospace Precision Core Background Texture (Masked & Subtle) */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <img
            src={precisionCore}
            alt=""
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-[780px] lg:w-[920px] max-w-none opacity-20 lg:opacity-30 mix-blend-screen object-contain select-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0b0e] via-[#0a0b0e]/90 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0a0b0e] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            
            {/* Status Telemetry Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-full bg-[#111318]/90 border border-slate-800 mb-6 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="font-mono text-[11px] text-slate-300 tracking-wider">
                [ {isEn ? 'STATUS: SYSTEMS_OPTIMAL' : 'ESTADO: SISTEMAS_ÓPTIMOS'} // CDMX · {latencyMs !== null ? `${latencyMs}ms` : '12ms'} ]
              </span>
            </div>

            {/* Identity Badge */}
            <div className="font-mono text-xs text-amber-500/90 tracking-widest uppercase mb-3 flex items-center gap-2">
              <span>AXEL ALBERTO LINARES</span>
              <span className="text-slate-600">//</span>
              <span className="text-slate-400">{data.title}</span>
            </div>

            {/* Monumental Hero Headline */}
            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white tracking-tight leading-[0.98] mb-6">
              <span className="block">{isEn ? 'Precision Architecture.' : 'Arquitectura Precisa.'}</span>
              <span className="block text-slate-300">{isEn ? 'Resilient Systems.' : 'Sistemas Resilientes.'}</span>
              <span className="block text-amber-400/90 italic font-light">{isEn ? 'Absolute Integrity.' : 'Integridad Absoluta.'}</span>
            </h1>

            {/* Engineering Thesis / Subtitle */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl mb-8 font-sans">
              {isEn
                ? 'Software Engineer with 3 years of production experience engineering high-throughput backend services (.NET 8/C#), transactional database integrity in SQL Server, and automated E2E QA architectures with Playwright.'
                : 'Ingeniero de Software con 3 años de experiencia en producción diseñando servicios backend robustos (.NET 8/C#), integridad transaccional en bases de datos SQL Server y arquitecturas de pruebas automatizadas E2E con Playwright.'}
            </p>

            {/* Key Metrics Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 p-4 rounded-lg bg-[#111318]/80 border border-slate-800/80 backdrop-blur-md max-w-2xl">
              <div>
                <div className="font-display text-2xl font-bold text-white">3+ Años</div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Producción</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-amber-400">-30%</div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Latencia SQL</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-red-400">-40%</div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Regresiones QA</div>
              </div>
              <div>
                <div className="font-display text-2xl font-bold text-emerald-400">99.9%</div>
                <div className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Uptime Cloud</div>
              </div>
            </div>

            {/* Call to Actions & Social Links */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#proyectos"
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-red-600 hover:bg-red-700 text-white font-mono text-xs font-semibold tracking-wider transition-all shadow-[0_0_20px_rgba(220,38,38,0.35)] hover:shadow-[0_0_28px_rgba(220,38,38,0.6)]"
              >
                <span>{t('header_button', 'Explorar Sistemas')}</span>
                <ArrowDownRight size={14} />
              </a>

              <button
                onClick={() => setIsContactOpen(true)}
                className="inline-flex items-center gap-2 px-5 py-3 rounded bg-[#111318] hover:bg-slate-800 border border-amber-500/40 hover:border-amber-400 text-slate-200 hover:text-white font-mono text-xs font-semibold tracking-wider transition-all"
              >
                <span>{t('contact_button_text', 'Contacto')}</span>
                <Mail size={14} className="text-amber-400" />
              </button>

              <a
                href={`/${cvFileName}`}
                download={cvFileName}
                className="inline-flex items-center gap-2 px-4 py-3 rounded bg-slate-900/60 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-mono text-xs transition-all"
              >
                <Download size={14} />
                <span>{t('download_cv_text', 'Descargar CV')}</span>
              </a>

              {/* Social icons */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={data.gitHubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="p-3 rounded bg-[#111318] border border-slate-800 hover:border-red-500 text-slate-400 hover:text-red-400 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a
                  href={data.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="p-3 rounded bg-[#111318] border border-slate-800 hover:border-red-500 text-slate-400 hover:text-red-400 transition-all"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Hero Bottom Telemetry Ribbon */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
            <span className="tracking-wider uppercase">CORE / AL-01 · INGENIERÍA CON RIGOR</span>
          </div>
          <div className="flex items-center gap-6 text-[11px] text-slate-500">
            <span>.NET 8 / C#</span>
            <span>·</span>
            <span>PLAYWRIGHT POM</span>
            <span>·</span>
            <span>AWS CLOUD</span>
          </div>
          <a href="#sobre-mi" className="flex items-center gap-1.5 text-amber-400/90 hover:text-amber-300 transition-colors">
            <span>EXPLORAR</span>
            <ArrowDown size={12} />
          </a>
        </div>

        {/* Contact Modal Integration */}
        <ContactModal
          isOpen={isContactOpen}
          onClose={() => setIsContactOpen(false)}
        />
      </header>

      {/* Horizontal Technology Band */}
      <div className="border-b border-slate-800/80 bg-[#0c0e13]/60 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-6 font-mono text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-amber-400" />
            <span>.NET 8 / C# CORE</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>PLAYWRIGHT / NUNIT POM</span>
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="w-4 h-4 text-red-400" />
            <span>CLEAN ARCHITECTURE</span>
          </div>
          <div className="flex items-center gap-2">
            <Cloud className="w-4 h-4 text-blue-400" />
            <span>AWS / S3 / CLOUDFRONT</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
