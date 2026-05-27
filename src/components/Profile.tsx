import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Shield, Target, Zap } from 'lucide-react';

const Profile: React.FC = () => {
    const { t } = useTranslation();

    return (
        <section id="sobre-mi" className="py-24 relative overflow-hidden">
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-red-600/10 blur-[120px] rounded-full pointer-events-none"></div>

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative flex justify-center"
                    >
                        <div className="relative w-72 h-72 md:w-96 md:h-96">
                            <div className="absolute inset-0 bg-gradient-to-tr from-red-600 to-transparent rounded-3xl rotate-6 opacity-20 blur-sm"></div>
                            <div className="absolute inset-0 border border-red-500/30 rounded-3xl -rotate-3"></div>
                            <div className="relative w-full h-full bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
                                <img
                                    src="https://placehold.co/600x600/0f172a/dc2626?text=AXEL+LINARES"
                                    alt="Axel Linares"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex flex-col space-y-8">
                        <div>
                            <p className="text-red-500 font-mono tracking-widest uppercase mb-4 text-sm font-semibold">
                                {t('profile_section')}
                            </p>
                            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                                {t('profile_heading')}
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed max-w-xl">
                                {t('profile_bio')}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                            {[
                                { icon: <Shield size={20}/>, title: t('pilar1_title'), desc: t('pilar1_desc') },
                                { icon: <Target size={20}/>, title: t('pilar2_title'), desc: t('pilar2_desc') },
                                { icon: <Zap size={20}/>, title: t('pilar3_title'), desc: t('pilar3_desc') }
                            ].map((pilar, index) => (
                                <motion.div
                                    key={index}
                                    whileHover={{ x: 10 }}
                                    className="flex items-start gap-4 p-4 bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-2xl hover:border-red-500/30 transition-all"
                                >
                                    <div className="p-2 bg-red-600/10 text-red-500 rounded-lg">
                                        {pilar.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-1">
                                            {pilar.title}
                                        </h3>
                                        <p className="text-slate-500 text-xs leading-normal">
                                            {pilar.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Profile;