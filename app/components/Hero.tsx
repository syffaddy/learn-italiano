import React from "react";

const Hero: React.FC = () => {
    return (
        <header className="relative min-h-[90vh] flex items-center justify-center pt-24 overflow-hidden bg-white">

            {/* Background Radial Gradient */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-50/60 via-transparent to-transparent opacity-70 pointer-events-none" />

            <div className="mx-auto px-6 relative z-10 text-center">

                {/* Badge */}
                <div
                    data-aos="fade-down"
                    className="inline-flex items-center gap-3 bg-slate-50 border border-yellow-400 px-5 py-2 rounded-full mb-8 shadow-sm"
                >
                    <span className="flex h-2.5 w-2.5 rounded-full bg-yellow-400 animate-ambulance"></span>
                    <span className="text-slate-600 text-[10px] font-black uppercase tracking-[0.2em]">
                        New Batch Enrollment Open • Jan 2025
                    </span>
                </div>


                {/* Heading */}
                <h1
                    data-aos="fade-up"
                    data-aos-delay="100"
                    className="text-5xl md:text-7xl font-black text-slate-900 leading-[0.85] mb-8 tracking-tighter uppercase"
                >
                    SPEAK ITALIAN{" "}
                    <span className="text-yellow-400">LIKE A NATIVE.</span>
                </h1>

                {/* Description */}
                <p
                    data-aos="fade-up"
                    data-aos-delay="200"
                    className="text-slate-500 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed mb-12 font-medium"
                >
                    Sonia’s signature Italian language program for{" "}
                    <br className="hidden md:block" />
                    <span className="text-slate-900 font-bold decoration-yellow-200">
                        Urdu & English speakers
                    </span>
                    . Master the language in just 60 days.
                </p>

                {/* CTA */}
                <div
                    data-aos="fade-up"
                    data-aos-delay="300"
                    className="flex flex-col items-center gap-6"
                >
                    <a
                        href="https://wa.me/601127305814"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative w-full sm:w-auto bg-yellow-400 hover:bg-yellow-600 text-white 
             px-6 py-3 sm:px-12 sm:py-7 rounded-2xl font-black text-sm sm:text-xl 
             flex items-center justify-center gap-3 sm:gap-4 uppercase tracking-tighter 
             transition-all"
                    >
                        <i className="fab fa-whatsapp text-lg sm:text-2xl group-hover:rotate-12 transition-transform"></i>
                        <span className="text-sm sm:text-xl">Start Learning with Sonia</span>
                    </a>

                    {/* Stats */}
                    <div className="flex items-center gap-8 mt-4">
                        <div className="text-center">
                            <p className="text-slate-900 font-black text-xl">100%</p>
                            <p className="text-slate-400 text-[9px] uppercase font-bold tracking-widest">
                                Success Rate
                            </p>
                        </div>

                        <div className="h-8 w-[1px] bg-slate-200"></div>

                        <div className="text-center">
                            <p className="text-slate-900 font-black text-xl">LIVE</p>
                            <p className="text-slate-400 text-[9px] uppercase font-bold tracking-widest">
                                Daily Sessions
                            </p>
                        </div>

                        <div className="h-8 w-[1px] bg-slate-200"></div>

                        <div className="text-center">
                            <p className="text-slate-900 font-black text-xl">24/7</p>
                            <p className="text-slate-400 text-[9px] uppercase font-bold tracking-widest">
                                Expert Support
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </header>
    );
};

export default Hero;
