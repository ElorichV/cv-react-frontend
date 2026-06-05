import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useTranslation } from 'react-i18next';

// Definimos el contrato de datos para las props del componente
interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
    const { t } = useTranslation();

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    if (!isOpen) return null;

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('http://localhost:5139/api/email/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    setStatus('idle');
                    setFormData({ name: '', email: '', message: '' });
                    onClose();
                }, 3000);
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error("Falla de red:", error);
            setStatus('error');
        }
    };

    return (
        // Fondo oscuro semitransparente con desenfoque
        <div className="fixed inset-0 bg-[#000000]/70 backdrop-blur-sm flex justify-center items-center z-[100] px-4">

            {/* Contenedor principal del Modal adaptado a tus colores */}
            <div className="w-full max-w-lg bg-[#0b1120]/95 border border-slate-700/50 p-8 rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)]">

                {/* Título en rojo */}
                <h2 className="text-red-500 font-mono text-lg font-semibold mb-6 tracking-widest uppercase">
                    {t('contact_title')}
                </h2>

                {status === 'success' ? (
                    <div className="text-center py-8">
                        <p className="text-red-500 font-mono text-lg animate-pulse">{t('contact_success')}</p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                        {/* Campo de Nombre */}
                        <input
                            type="text"
                            name="name"
                            placeholder={t('contact_name')}
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#0f172a]/80 border border-slate-700/50 text-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:border-red-500 transition-colors font-mono text-sm placeholder:text-slate-600"
                        />

                        {/* Campo de Correo */}
                        <input
                            type="email"
                            name="email"
                            placeholder={t('contact_email')}
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#0f172a]/80 border border-slate-700/50 text-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:border-red-500 transition-colors font-mono text-sm placeholder:text-slate-600"
                        />

                        {/* Campo de Mensaje */}
                        <textarea
                            name="message"
                            placeholder={t('contact_message')}
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={4}
                            className="w-full bg-[#0f172a]/80 border border-slate-700/50 text-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:border-red-500 transition-colors font-mono text-sm resize-none placeholder:text-slate-600"
                        />

                        {/* Mensaje de error */}
                        {status === 'error' && (
                            <p className="text-red-500 font-mono text-sm">{t('contact_error')}</p>
                        )}

                        {/* Contenedor de Botones */}
                        <div className="flex justify-between items-center mt-4">

                            {/* Botón de Cancelar */}
                            <button
                                type="button"
                                onClick={onClose}
                                disabled={status === 'loading'}
                                className="text-slate-400 hover:text-red-400 font-mono text-sm transition-colors border-b border-transparent hover:border-red-400"
                            >
                                {t('contact_cancel')}
                            </button>

                            {/* Botón de Enviar (Idéntico a tus botones principales) */}
                            <button
                                type="submit"
                                disabled={status === 'loading'}
                                className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-[0_0_25px_rgba(220,38,38,0.6)] font-mono text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                <span>{status === 'loading' ? t('contact_sending') : t('contact_send')}</span>
                            </button>

                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default ContactModal;