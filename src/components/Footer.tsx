import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="bg-[#08090d] text-slate-400 py-12 border-t border-slate-800/80 mt-16 font-mono">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
                
                {/* Brand & Doctrine */}
                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 rounded border border-red-500/50 bg-red-950/40 flex items-center justify-center font-mono font-bold text-xs text-red-400">
                        AL
                    </div>
                    <div>
                        <p className="text-xs text-slate-200 font-semibold tracking-wider">
                            AXEL LINARES // INGENIERÍA DE SISTEMAS
                        </p>
                        <p className="text-[10px] text-amber-500/80 tracking-widest uppercase">
                            PRECISIÓN TÉCNICA · ALTA DISPONIBILIDAD · IX LEGIÓN
                        </p>
                    </div>
                </div>

                {/* Tech Stack & Copyright */}
                <div className="text-center md:text-right text-[11px] text-slate-500 space-y-1">
                    <p>
                        © {new Date().getFullYear()} Axel Linares. Construido con React, TypeScript, Tailwind CSS &amp; .NET 8.
                    </p>
                    <p className="text-[10px] text-slate-600">
                        Desplegado en AWS (S3 + CloudFront) · Telemetría RFC 7807 · Playwright E2E POM
                    </p>
                </div>

                {/* Return to Top Button */}
                <button
                    onClick={scrollToTop}
                    className="p-2 rounded bg-slate-900 border border-slate-800 hover:border-amber-400 text-slate-400 hover:text-white transition-all text-xs flex items-center gap-1.5"
                    aria-label="Volver arriba"
                >
                    <ArrowUp size={13} />
                    <span className="text-[10px] uppercase tracking-wider">Top</span>
                </button>

            </div>
        </footer>
    );
};

export default Footer;
