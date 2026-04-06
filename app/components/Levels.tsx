import React from "react";

const Levels: React.FC = () => {
  return (
    <section id="levels" className="relative bg-white px-6 py-20 md:py-32">
      <div className="absolute top-1/4 left-0 w-72 md:w-96 h-72 md:h-96 bg-yellow-50 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-72 md:w-96 h-72 md:h-96 bg-yellow-50 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-6xl font-black text-slate-900 tracking-tighter uppercase mb-4">
            Curriculum & <span className="text-yellow-500">Milestones</span>
          </h2>
          <p className="text-slate-500 uppercase tracking-[0.2em] text-[10px] md:text-xs font-bold">
            International CEFR Standards • 3 Days/Week • 1.5 Hours Per Session
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
          <LevelCard
            level="A1"
            title="Breakthrough Beginner"
            duration="2 Months"
            delay={100}
            icon="seedling"
            points={["Foundation of Italian grammar & phonetics", "Basic social interactions & greetings", "Numbers, time, and essential vocabulary", "Personal introductions & daily routines"]}
          />

          <LevelCard
            level="A2"
            title="Waystage Elementary"
            duration="2 Months"
            delay={200}
            icon="plane"
            points={["Travel essentials & navigating Italy", "Shopping, dining, and public services", "Describing past events & future plans", "Intermediate sentence structuring"]}
          />

          <LevelCard
            level="B1"
            title="Threshold Intermediate"
            duration="3 Months"
            delay={300}
            icon="passport"
            isHighlighted={true}
            points={["Required for Italian Citizenship 🇮🇹", "Workplace communication skills", "Writing professional emails & letters", "Complex grammar & daily fluency"]}
          />

          <LevelCard
            level="B2"
            title="Vantage Upper-Intermediate"
            duration="3 Months"
            delay={400}
            icon="briefcase"
            points={["Conducting business meetings in Italian", "Technical & abstract text comprehension", "Spontaneous & fluent conversation", "Professional level writing & debate"]}
          />

          <LevelCard
            level="C1"
            title="Effective Proficiency"
            duration="3 Months"
            delay={500}
            icon="graduation-cap"
            points={["Complex academic & literary analysis", "Deep understanding of Italian culture", "Flexible language use for social/work", "High-level structured compositions"]}
          />

          <LevelCard
            level="C2"
            title="Mastery & Fluency"
            duration="3 Months"
            delay={600}
            icon="crown"
            points={["Native-level linguistic precision", "Interpreting implicit meanings & nuances", "Full professional translation capability", "The pinnacle of Italian language mastery"]}
          />
        </div>
      </div>
    </section>
  );
};

/* ---------- Reusable Card Component ---------- */

interface LevelCardProps {
  level: string;
  title: string;
  duration: string;
  delay: number;
  icon: string;
  points: string[];
  isHighlighted?: boolean;
}

const LevelCard: React.FC<LevelCardProps> = ({ level, title, duration, delay, icon, points, isHighlighted }) => {

  const phoneNumber = "601127305814";
  const message = encodeURIComponent(`Ciao Sonia Miss! I am interested in enrolling for the Italian ${level} (${title}) course. Please provide me with more details. Grazie!`);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={delay}
      className={`group relative p-8 md:p-10 rounded-[2.5rem] transition-all duration-500 flex flex-col h-full border ${isHighlighted
        ? "bg-slate-900 border-slate-800 shadow-2xl shadow-slate-200"
        : "bg-slate-50 border-slate-100 hover:border-yellow-200 hover:bg-white"
        }`}
    >
      <div className="relative z-10 flex flex-col h-full">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className={`text-4xl font-black tracking-tighter ${isHighlighted ? "text-yellow-500" : "text-yellow-500"}`}>
              {level}
            </h3>
            {/* whitespace-nowrap aur flex ka use kiya gaya hai taake duration break na ho */}
            <p className={`text-[11px] font-black uppercase tracking-widest mt-1 flex flex-wrap items-center gap-1 ${isHighlighted ? "text-slate-100" : "text-slate-900"}`}>
              <span>{title}</span>
            </p>
            <span className={`whitespace-nowrap ${isHighlighted ? "text-yellow-500" : "text-slate-400"}`}>
              {duration}
            </span>
          </div>

          <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-500 ${isHighlighted ? "bg-yellow-500" : "bg-yellow-100 group-hover:bg-yellow-500"
            }`}>
            <i className={`fas fa-${icon} text-xs ${isHighlighted ? "text-slate-900" : "text-yellow-600 group-hover:text-slate-900"
              }`}></i>
          </div>
        </div>

        {isHighlighted && <div className="w-full h-[1px] bg-white/10 mb-8"></div>}

        <ul className="space-y-4 flex-grow">
          {points.map((point, index) => (
            <li key={index} className={`flex items-start gap-3 text-sm leading-tight ${isHighlighted ? "text-slate-300 font-medium" : "text-slate-600"}`}>
              <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 bg-yellow-500`}></span>
              {point}
            </li>
          ))}
        </ul>

        <div className="mt-8">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`block w-full py-4 rounded-2xl font-black text-center text-[10px] uppercase tracking-widest transition-all ${isHighlighted ? "bg-yellow-500 text-slate-900 hover:bg-yellow-400" : "bg-slate-900 text-white hover:bg-yellow-500 hover:text-black"
              }`}
          >
            Enroll Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Levels;