"use client";

export default function Comparison() {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-white">
      {/* Background Blur Effect */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-yellow-50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-7xl font-black text-slate-900 tracking-tighter uppercase mb-4">
            Stop Wasting <span className="text-yellow-500">Time</span>
          </h2>
          <p className="text-slate-400 uppercase tracking-[0.3em] text-[10px] md:text-xs font-bold">
            Accelerate Your Learning with a Proven Framework
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-11 items-stretch gap-0">

          {/* Section: The Traditional Way */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-10">
                <span className="text-3xl">📉</span>
                <h3 className="text-xl font-black text-slate-700 uppercase tracking-widest underline decoration-yellow-400 decoration-4 underline-offset-8">
                  Traditional Learning
                </h3>
              </div>

              <ul className="space-y-8">
                <li className="flex items-start gap-4 text-slate-700">
                  <i className="fas fa-times-circle mt-1 text-red-400 text-lg"></i>
                  <p className="text-base md:text-lg font-bold leading-tight">
                    Overwhelming YouTube content without a clear roadmap
                  </p>
                </li>

                <li className="flex items-start gap-4 text-slate-700">
                  <i className="fas fa-times-circle mt-1 text-red-400 text-lg"></i>
                  <p className="text-base md:text-lg font-bold leading-tight">
                    Passive grammar rules that are difficult to apply in real life
                  </p>
                </li>

                <li className="flex items-start gap-4 text-slate-700">
                  <i className="fas fa-times-circle mt-1 text-red-400 text-lg"></i>
                  <p className="text-base md:text-lg font-bold leading-tight">
                    Isolation: No speaking partners or professional feedback
                  </p>
                </li>

                <li className="flex items-start gap-4 text-slate-700">
                  <i className="fas fa-times-circle mt-1 text-red-400 text-lg"></i>
                  <p className="text-base md:text-lg font-bold leading-tight">
                    Outdated academic Italian rarely used by native speakers
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-12 pt-6 border-t border-slate-200 text-center">
              <p className="text-[11px] font-black text-slate-500 uppercase tracking-[0.3em]">
                Inefficient • Slow • Frustrating
              </p>
            </div>
          </div>

          {/* VS Divider */}
          <div className="lg:col-span-1 flex justify-center items-center z-20 py-8 lg:py-0">
            <div className="w-14 h-14 rounded-full bg-slate-900 text-white font-black flex items-center justify-center shadow-xl border-4 border-white transform lg:scale-100">
              VS
            </div>
          </div>

          {/* Section: The Sonia Method */}
          <div className="lg:col-span-5 relative">
            {/* Background color solid and simple border as requested */}
            <div className="relative h-full bg-[#0B1221] rounded-[2.5rem] p-8 md:p-12 border border-slate-800 flex flex-col justify-between">

              <div>
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center">
                    <i className="fas fa-rocket text-slate-900 text-xl"></i>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white uppercase tracking-tighter">
                      The <span className="text-yellow-500">Sonia</span> Method
                    </h3>
                    <p className="text-[10px] text-yellow-500 font-bold uppercase tracking-[0.2em]">Accelerated Results</p>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    {
                      title: "Optimized Curriculum",
                      desc: "Lessons explained in Urdu & Hindi for 100% clarity.",
                    },
                    {
                      title: "Active Fluency",
                      desc: "Live speaking practice from your very first session.",
                    },
                    {
                      title: "24/7 Expert Access",
                      desc: "Direct WhatsApp support for instant feedback.",
                    },
                    {
                      title: "Career Coaching",
                      desc: "Specialized training for Citizenship & Job Interviews.",
                    }
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 transition-colors">
                      <div className="mt-1 bg-yellow-500/20 p-2 rounded-lg">
                        <i className={`fas fa-check text-yellow-500 text-[10px]`}></i>
                      </div>
                      <div>
                        <p className="text-white font-black text-sm uppercase tracking-wide">{item.title}</p>
                        <p className="text-slate-400 text-xs mt-1 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <a
                  href="https://wa.me/601127305814"
                  /* text-sm mobile ke liye, md:text-lg desktop ke liye. py-4 mobile ke liye, md:py-5 desktop ke liye */
                  className="flex items-center justify-center w-full bg-yellow-500 text-slate-900 py-4 md:py-5 rounded-2xl font-black text-sm md:text-lg hover:bg-yellow-400 transition-all active:scale-95 uppercase tracking-tighter"
                >
                  <span>Claim Your Free Trial</span>
                  <i className="fas fa-arrow-right ml-3 text-sm"></i>
                </a>
                <p className="text-center text-[10px] text-slate-500 mt-4 font-bold uppercase tracking-widest">
                  Limited Slots Available
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
