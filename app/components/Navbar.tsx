"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] px-4 md:px-6 py-4">
      <div className="max-w-6xl mx-auto rounded-2xl px-4 md:px-8 py-4 flex justify-between items-center border border-white/20 shadow-2xl backdrop-blur-xl bg-slate-900/95">

        {/* Logo */}
        <div className="flex flex-col">
          <span className="text-white font-black tracking-tighter text-lg md:text-xl uppercase leading-none">
            Learn Italian <span className="text-yellow-500 font-bold">with Sonia</span>
          </span>
          <span className="text-[8px] text-slate-400 font-bold tracking-[0.2em] uppercase mt-1">
            learnitaliano.online
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="#levels" className="group flex flex-col items-center">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-100 group-hover:text-yellow-500 transition-colors">
              Courses
            </span>
            <span className="text-[9px] text-slate-300 font-medium group-hover:text-yellow-200 transition-colors">
              Program Syllabus
            </span>
          </a>
          <a href="#reviews" className="group flex flex-col items-center">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-100 group-hover:text-yellow-500 transition-colors">
              Reviews
            </span>
            <span className="text-[9px] text-slate-300 font-medium group-hover:text-yellow-200 transition-colors">
              Successful Students
            </span>
          </a>
          <a href="#faq" className="group flex flex-col items-center">
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-100 group-hover:text-yellow-500 transition-colors">
              FAQ
            </span>
            <span className="text-[9px] text-slate-300 font-medium group-hover:text-yellow-200 transition-colors">
              Common Questions
            </span>
          </a>
        </div>

        {/* CTA + Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <a
            href="https://wa.me/601127305814"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-b from-yellow-500 to-yellow-700 hover:from-yellow-400 hover:to-yellow-600 border border-yellow-800 text-white px-5 md:px-6 py-3 rounded-xl text-[10px] md:text-[11px] font-black uppercase tracking-wider transition-all shadow-xl active:scale-95 flex items-center gap-2"
          >
            <i className="fab fa-whatsapp text-sm"></i>
            JOIN NOW
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-[100%] left-4 right-4 mt-2 bg-slate-900 border border-white/10 rounded-2xl flex flex-col items-center py-6 gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4">
          <a href="#levels" onClick={() => setMenuOpen(false)} className="text-slate-100 font-bold uppercase tracking-widest text-sm">Courses</a>
          <a href="#reviews" onClick={() => setMenuOpen(false)} className="text-slate-100 font-bold uppercase tracking-widest text-sm">Reviews</a>
          <a href="#faq" onClick={() => setMenuOpen(false)} className="text-slate-100 font-bold uppercase tracking-widest text-sm">FAQ</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
