import React, { useEffect, useState } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden select-none"
    >
      {/* Ambient Atmospheric Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[350px] bg-gradient-to-b from-[#a476ff18] via-[#a476ff08] to-transparent blur-[140px] pointer-events-none -z-10 animate-glow-pulse" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-blue-500/5 blur-[120px] pointer-events-none -z-10" />

      {/* 1. TOP EDITORIAL META HEADER */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/[0.08] pb-6 animate-cinematic-rise">
        <div className="flex items-center gap-3">
          <span className="w-2 h-2 rounded-full bg-[#A9FF5B] shadow-[0_0_10px_#A9FF5B]" />
          <span className="font-mono text-xs uppercase tracking-widest text-slate-300">
            Available for Full-Stack &amp; Backend Engineering
          </span>
        </div>

        <div className="flex items-center gap-6 font-mono text-xs text-slate-400">
          <span>BASED IN INDONESIA</span>
          <span className="hidden sm:inline text-white/20">•</span>
          <span className="hidden sm:inline">EST. 2022 — 2026</span>
        </div>
      </div>

      {/* 2. MONUMENTAL TYPOGRAPHY & CINEMATIC STAGE */}
      <div className="relative my-auto py-8 sm:py-12 flex flex-col items-center justify-center text-center">
        
        {/* Sub-Tagline Eyebrow */}
        <p className="font-mono text-xs sm:text-sm uppercase tracking-[0.28em] text-[#a476ff] mb-2 sm:mb-4 animate-cinematic-rise">
          Architectural Resilience • Concurrency • Clean Code
        </p>

        {/* GIANT MONUMENTAL NAME (Parallax Layer) */}
        <div 
          className="relative w-full overflow-hidden leading-none transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        >
          <h1 className="font-display text-[19vw] sm:text-[17vw] tracking-tighter uppercase font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-200 to-white/10 drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] scale-y-105">
            RAIHAN
          </h1>
          <div className="w-full flex justify-between items-baseline px-2 sm:px-6 -mt-[4vw] sm:-mt-[3.5vw]">
            <span className="font-mono text-[9px] sm:text-xs text-slate-500 uppercase tracking-widest">
              [01] FULLSTACK ENGINEER
            </span>
            <span className="font-display text-[8vw] sm:text-[7vw] font-bold text-white/20 tracking-tight">
              HAMDANI
            </span>
            <span className="font-mono text-[9px] sm:text-xs text-slate-500 uppercase tracking-widest">
              PRODUCTION READY
            </span>
          </div>
        </div>

        {/* SUBJECT DEPTH LAYER (Center Focal Badge / Portrait Frame) */}
        <div className="relative z-10 -mt-6 sm:-mt-12 flex flex-col items-center">
          <div className="relative group cursor-pointer">
            {/* Glowing Aura Behind Avatar */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#a476ff30] to-white/20 blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Minimalist Profile Ring (Placeholder ready for user's LinkedIn Photo) */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full border-2 border-white/20 bg-gradient-to-b from-[#18181b] to-[#09090b] p-1.5 shadow-[0_15px_35px_rgba(0,0,0,0.9)] transition-transform duration-500 group-hover:scale-105">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#121212] flex items-center justify-center relative border border-white/10">
                <img
                  src="/image/ayobuatbaik.avif"
                  alt="Raihan Hamdani"
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700 opacity-80 group-hover:opacity-100"
                  onError={(e) => {
                    // Fallback to stylized monogram if image not found
                    e.currentTarget.style.display = "none";
                  }}
                />
                {/* Monogram Overlay */}
                <div className="absolute inset-0 flex items-center justify-center font-display text-4xl sm:text-5xl text-white font-bold bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity">
                  RH
                </div>
              </div>
            </div>

            {/* Floating Live Tech Stack Badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#0d0d0df0] backdrop-blur-md border border-white/15 px-3 py-1 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ADD8] animate-pulse" />
              <span className="font-mono text-[10px] font-semibold text-slate-200 tracking-wide">
                GO • LARAVEL • REACT
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* 3. EDITORIAL NARRATIVE & ACTION STRIP */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end pt-8 border-t border-white/[0.08]">
        
        {/* Core Bio Statement (100% Preserved Essence) */}
        <div className="lg:col-span-6 space-y-3">
          <p className="font-mono text-[11px] text-[#A476FF] uppercase tracking-wider">
            Statement of Intent
          </p>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Building resilient web platforms and real-time APIs with{" "}
            <span className="text-white font-semibold underline decoration-[#A476FF]/60 underline-offset-4">Go</span>,{" "}
            <span className="text-white font-semibold underline decoration-red-500/60 underline-offset-4">Laravel</span>, and{" "}
            <span className="text-white font-semibold underline decoration-[#00ADD8]/60 underline-offset-4">React</span>. Focused on clean code, database optimization, and scalable production systems.
          </p>
        </div>

        {/* CTA Buttons & Social Handles */}
        <div className="lg:col-span-6 flex flex-col sm:flex-row sm:items-center justify-start lg:justify-end gap-4">
          <button
            onClick={() => handleScrollTo("projects")}
            className="px-7 py-3.5 bg-white text-black font-bold font-mono text-xs uppercase tracking-wider rounded-xl hover:bg-slate-200 transition-all duration-300 shadow-[0_10px_25px_rgba(255,255,255,0.15)] flex items-center justify-center gap-2 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Explore Selected Work</span>
            <i className="fa-solid fa-arrow-down text-[10px]"></i>
          </button>

          <a
            href="mailto:rey7dan7@gmail.com"
            className="px-6 py-3.5 bg-[#141414] border border-white/20 text-white font-mono text-xs uppercase tracking-wider rounded-xl hover:border-[#a476ff] hover:bg-[#1a1a1a] transition-all duration-300 flex items-center justify-center gap-2"
          >
            <i className="fa-regular fa-envelope text-xs text-[#a476ff]"></i>
            <span>Get in Touch</span>
          </a>

          {/* Social Quick Launch */}
          <div className="flex items-center gap-2 pt-2 sm:pt-0">
            <a
              href="https://github.com/reyhanhmdani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-white text-slate-300 hover:text-white flex items-center justify-center transition-all"
            >
              <i className="fa-brands fa-github text-base"></i>
            </a>
            <a
              href="https://linkedin.com/in/raihan-hamdani"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 hover:border-white text-[#0A66C2] flex items-center justify-center transition-all"
            >
              <i className="fa-brands fa-linkedin text-base"></i>
            </a>
          </div>
        </div>

      </div>

      {/* 4. EXECUTIVE STATS METRICS TICKER */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 mt-8 border-t border-white/[0.04] font-mono">
        <div className="space-y-1">
          <span className="text-2xl sm:text-3xl font-black text-white font-sans">03+</span>
          <p className="text-[11px] text-slate-500 uppercase tracking-wider">Years Dev Experience</p>
        </div>
        <div className="space-y-1">
          <span className="text-2xl sm:text-3xl font-black text-white font-sans">04+</span>
          <p className="text-[11px] text-slate-500 uppercase tracking-wider">Production Systems</p>
        </div>
        <div className="space-y-1">
          <span className="text-2xl sm:text-3xl font-black text-[#A476FF] font-sans">&lt; 15ms</span>
          <p className="text-[11px] text-slate-500 uppercase tracking-wider">Fast API Latency</p>
        </div>
        <div className="space-y-1">
          <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-sans">100%</span>
          <p className="text-[11px] text-slate-500 uppercase tracking-wider">Clean Architecture</p>
        </div>
      </div>

    </section>
  );
}
