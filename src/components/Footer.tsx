import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#0b1120] text-slate-400 py-10 border-t border-slate-800 mt-12">
            <div className="container mx-auto px-6 text-center">
                <p className="font-mono text-sm mb-2">
                    <span className="text-red-500">&gt;</span> Sistema desarrollado por Axel Linares
                </p>
                <p className="text-xs text-slate-600">
                    © {new Date().getFullYear()} Todos los derechos reservados. Construido con React, .NET 8 y AWS.
                </p>
            </div>
        </footer>
    );
};

export default Footer;