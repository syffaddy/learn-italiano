import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-slate-50 pt-20 pb-10 px-6 border-t border-slate-100">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-12 mb-16">
                    <div className="text-center md:text-left">
                        <h3 className="text-2xl font-black tracking-[0.2em] text-slate-900 uppercase leading-none">
                            LEARN ITALIANO
                        </h3>

                        <span className="block text-yellow-400 font-bold text-sm uppercase tracking-widest mt-[-2px] mb-4">
                            WITH SONIA
                        </span>

                        <p className="text-slate-500 max-w-sm leading-relaxed text-sm">
                            Master the Italian language with Sonia in Urdu & English. My
                            mission is to empower you with the skills for a successful career
                            and a better life in Italy.
                        </p>
                    </div>

                    <div className="flex flex-col items-center md:items-end gap-6">
                        <div className="flex gap-4">
                            <a
                                href="https://wa.me/601127305814"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-yellow-400 hover:border-yellow-400 hover:bg-white transition-all duration-300 shadow-sm"
                            >
                                <i className="fab fa-whatsapp text-xl"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/learnitaliano.pk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-yellow-400 hover:border-yellow-400 hover:bg-white transition-all duration-300 shadow-sm"
                            >
                                <i className="fab fa-instagram text-xl"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/learnitaliano.pk"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-yellow-400 hover:border-yellow-400 hover:bg-white transition-all duration-300 shadow-sm"
                            >
                                <i className="fab fa-facebook text-xl"></i>
                            </a>
                        </div>

                        <div className="flex flex-col items-center md:items-end gap-2">
                            <a
                                href="mailto:sonia@learnitaliano.online"
                                className="text-slate-600 hover:text-yellow-400 transition-colors flex items-center gap-3 font-bold text-sm"
                            >
                                <i className="fas fa-envelope text-yellow-400"></i>
                                sonia@learnitaliano.online
                            </a>
                            <a
                                href="https://wa.me/601127305814"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-slate-600 hover:text-green-600 transition-colors flex items-center gap-3 font-bold text-sm"
                            >
                                <i className="fab fa-whatsapp text-green-600"></i>
                                +60 11-2730 5814
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
                    <p className="text-slate-400 text-[10px] uppercase tracking-widest font-bold">
                        &copy; 2025 L&apos;Italiano Vero Language School. All rights reserved.
                    </p>
                    <p className="text-slate-400 text-[14px] font-bold">
                        Powered By{" "}
                        <a
                            href="https://shahrukhdeveloper.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-yellow-600 hover:underline"
                        >
                            Bee4wd.com
                        </a>
                    </p>
                </div>
            </div>

            <a
                href="https://wa.me/601127305814"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-10 right-10 z-[100] group"
            >
                <div className="absolute -top-14 right-0 bg-yellow-800 text-white text-[10px] font-bold px-4 py-2 rounded-full shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 whitespace-nowrap">
                    PREMIUM SUPPORT 🇮🇹
                </div>
                <div className="bg-[#25D366] text-white w-16 h-16 rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:scale-110 transition-transform">
                    <i className="fab fa-whatsapp text-3xl"></i>
                </div>
            </a>
        </footer>
    )
}

export default Footer;
