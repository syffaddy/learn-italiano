"use client";

export default function Course() {
    return (
        <section className="py-20 px-4 sm:px-6 relative bg-white overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-yellow-50 via-transparent to-transparent opacity-60 pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Heading */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-4">
                        Comprehensive <span className="text-yellow-500">Learning</span>
                    </h2>
                    <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] sm:text-xs font-bold">
                        Professional Italian Mastery from Beginner to Advanced
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

                    {/* Left Side: Course Structure */}
                    <div className="lg:col-span-7 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-100">
                        <div className="mb-10">
                            <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">Course Levels</h3>
                            <div className="h-1 w-20 bg-yellow-400 mt-2 rounded-full"></div>
                        </div>

                        {/* Levels Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-12">
                            {[
                                { level: "A1", duration: "2 Months", active: true },
                                { level: "A2", duration: "2 Months", active: true },
                                { level: "B1", duration: "3 Months", active: true },
                                { level: "B2", duration: "3 Months", active: false },
                                { level: "C1", duration: "3 Months", active: false },
                                { level: "C2", duration: "3 Months", active: false },
                            ].map((item) => (
                                <div
                                    key={item.level}
                                    className={`p-5 rounded-2xl border transition-all ${item.active
                                        ? "bg-white border-yellow-200 scale-105"
                                        : "bg-slate-100 border-slate-200 opacity-60"
                                        }`}
                                >
                                    <span className={`block font-black text-2xl ${item.active ? "text-yellow-500" : "text-slate-400"}`}>
                                        {item.level}
                                    </span>
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                                        Duration: {item.duration}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Schedule & Features */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-slate-200 pt-10">
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <div className="bg-slate-900 text-white p-2 rounded-lg"><i className="fas fa-calendar-alt text-xs"></i></div>
                                    <p className="text-sm font-bold text-slate-800 uppercase">2 Classes Per Week</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="bg-slate-900 text-white p-2 rounded-lg"><i className="fas fa-clock text-xs"></i></div>
                                    <p className="text-sm font-bold text-slate-800 uppercase">1.5 Hours Each Session</p>
                                </div>
                            </div>
                            <div className="space-y-4 text-left">
                                <Feature text="Step-by-Step Training" />
                                <Feature text="24/7 WhatsApp Support" highlight />
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Pricing Card */}
                    <div className="lg:col-span-5 relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-[3rem] blur opacity-20 transition duration-1000"></div>

                        <div className="relative bg-slate-900 rounded-[2.5rem] p-8 md:p-10 text-white overflow-hidden">
                            {/* Decorative Elements */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/10 blur-3xl rounded-full"></div>

                            <div className="inline-block bg-yellow-500 text-slate-900 text-[10px] font-black px-4 py-1.5 rounded-full mb-6 uppercase tracking-widest">
                                Best Value Guarantee
                            </div>

                            <h3 className="text-xl font-bold mb-2">Monthly Subscription</h3>
                            <p className="text-slate-400 text-xs mb-8">Pay as you learn with our flexible monthly installments.</p>

                            <div className="flex items-baseline gap-2 mb-2">
                                <span className="text-slate-500 line-through text-xl font-bold">PKR 45,000</span>
                                <span className="bg-white/10 text-yellow-400 text-[10px] px-2 py-1 rounded font-bold uppercase">Save 67%</span>
                            </div>

                            <div className="flex items-baseline gap-1 mb-8">
                                <span className="text-2xl font-light text-slate-400">PKR</span>
                                <span className="text-6xl font-black text-white tracking-tighter">14,999</span>
                                <span className="text-lg text-yellow-500 font-medium tracking-tight">/Month</span>
                            </div>

                            <div className="space-y-4 mb-10 border-t border-white/10 pt-8">
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400 uppercase tracking-wider font-bold text-[10px]">Enrollment Fee</span>
                                    <span className="text-green-400 font-bold">FREE</span>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-slate-400 uppercase tracking-wider font-bold text-[10px]">Course Access</span>
                                    <span className="text-white font-bold">Unlimited</span>
                                </div>
                            </div>

                            <a
                                href="https://wa.me/601127305814"
                                className="block w-full bg-yellow-500 text-slate-900 py-5 rounded-2xl font-black text-center text-lg hover:bg-yellow-400 transition-all transform active:scale-95 uppercase tracking-tight"
                            >
                                Get Started Today
                            </a>

                            <p className="text-center text-[9px] text-slate-500 mt-6 uppercase tracking-[0.2em] font-bold">
                                Secure Payment • Immediate Access
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

/* Reusable Feature Component */
function Feature({
    text,
    highlight = false,
}: {
    text: string;
    highlight?: boolean;
}) {
    return (
        <div className="flex items-center gap-3">
            <div className={`shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${highlight ? "bg-yellow-500" : "bg-slate-200"}`}>
                <i className={`fas fa-check text-[10px] ${highlight ? "text-slate-900" : "text-slate-600"}`} />
            </div>
            <p className={`text-xs uppercase tracking-wide font-bold ${highlight ? "text-slate-900" : "text-slate-600"}`}>
                {text}
            </p>
        </div>
    );
}