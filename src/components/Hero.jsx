import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full bg-[#EAE7E1] text-[#0A0A0A] overflow-hidden select-none"
    >
      {/* 1. TOP EDITORIAL BAR (Integrated Flush Header matching Mafia Reference) */}
      <header className="w-full border-b border-black/10 px-6 sm:px-10 lg:px-16 py-4 flex items-center justify-between">
        {/* Left Nav Anchors */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 font-mono text-[11px] font-bold tracking-widest uppercase text-neutral-800">
          <a href="#home" className="hover:text-black transition-colors">HOME</a>
          <a href="#manifesto" className="hover:text-black transition-colors">MANIFESTO</a>
          <a href="#capabilities" className="hover:text-black transition-colors">STACK</a>
          <a href="#projects" className="hover:text-black transition-colors">WORKS</a>
          <a href="#experience" className="hover:text-black transition-colors">CAREER</a>
        </nav>

        {/* Center Brand Identity (Exact MAFIA THE GAME typography hierarchy) */}
        <div className="text-center">
          <a href="#home" className="inline-block group">
            <span className="font-sans font-black text-2xl sm:text-3xl tracking-tight text-[#0A0A0A] block leading-none">
              RAIHAN
            </span>
            <span className="font-mono text-[9px] tracking-[0.3em] text-neutral-600 uppercase block mt-0.5 group-hover:text-black transition-colors">
              THE ENGINEER
            </span>
          </a>
        </div>

        {/* Right Utility Handles */}
        <div className="flex items-center gap-4 sm:gap-6 font-mono text-[11px] font-bold text-neutral-800 uppercase tracking-wider">
          <a
            href="https://github.com/reyhanhmdani"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 hover:text-black transition-colors"
          >
            <i className="fa-brands fa-github text-sm"></i>
            <span>GITHUB</span>
          </a>
          <a
            href="https://linkedin.com/in/raihan-hamdani"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 hover:text-black transition-colors"
          >
            <i className="fa-brands fa-linkedin text-sm text-[#0A66C2]"></i>
            <span>LINKEDIN</span>
          </a>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-black/15 bg-black/5 text-[10px] text-emerald-800 font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>AVAILABLE</span>
          </div>
        </div>
      </header>

      {/* 2. HERO MONUMENTAL STAGE */}
      <div className="relative max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 pt-8 pb-10 sm:pb-16 flex flex-col justify-between min-h-[82vh] sm:min-h-[88vh]">
        
        {/* Top Left Quote / Manifesto (Matching MAFIA Upper-Left Block) */}
        <div className="relative z-10 text-left space-y-1 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#1a1a1a] leading-snug max-w-xs">
          <p>LOYALTY TO CLEAN CODE.</p>
          <p>POWER IN CONCURRENCY.</p>
          <p>SYSTEMS BUILT TO SCALE.</p>
        </div>

        {/* GIANT CENTER TYPOGRAPHY & STANDING PROFILE CUTOUT */}
        <div className="relative w-full my-auto flex items-center justify-center py-6 sm:py-12">
          
          {/* GIANT BACKDROP TEXT: R A I H A N */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex items-center justify-center select-none pointer-events-none z-10">
            <h1 className="font-sans font-black text-[17vw] sm:text-[16vw] text-[#0A0A0A] tracking-[0.14em] sm:tracking-[0.18em] uppercase leading-none text-center whitespace-nowrap">
              RAIHAN
            </h1>
          </div>

          {/* STANDING CENTER FIGURE (Subject Overlapping Across Letters) */}
          <div className="relative z-20 flex justify-center items-end h-[55vh] sm:h-[65vh] md:h-[72vh] max-h-[760px] pointer-events-none">
            <img
              src="/images/engineer-hero.jpg"
              alt="Raihan Hamdani Standing Hero"
              className="h-full w-auto object-contain drop-shadow-[0_20px_35px_rgba(0,0,0,0.35)] grayscale contrast-125 brightness-95"
            />
          </div>

        </div>

        {/* BOTTOM METADATA & CALL-TO-ACTION STRIP */}
        <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-4 border-t border-black/10">
          
          {/* Left: Buttons (Solid Black Button + Text Button) */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="px-7 py-3 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-neutral-800 transition-all duration-200 shadow-md active:scale-95"
            >
              EXPLORE WORKS
            </a>
            <a
              href="mailto:rey7dan7@gmail.com"
              className="px-4 py-3 font-mono text-xs uppercase tracking-widest font-bold text-[#0A0A0A] hover:opacity-70 transition-opacity flex items-center gap-2 group"
            >
              <span>GET IN TOUCH</span>
              <span className="text-[10px] group-hover:translate-x-1 transition-transform">▶</span>
            </a>
          </div>

          {/* Right: Technical Identification Block */}
          <div className="text-left sm:text-right font-mono text-xs tracking-wider text-[#1a1a1a] space-y-1">
            <p className="font-bold text-[11px] uppercase tracking-widest text-[#0A0A0A]">
              FULLSTACK SOFTWARE ENGINEER
            </p>
            <p className="text-neutral-600 text-[11px]">
              EST. 2022 — 2026
            </p>
            <div className="w-10 h-[2px] bg-black sm:ml-auto mt-1" />
          </div>

        </div>

      </div>

      {/* 3. NOIR TRANSITION: 4-COLUMN CAPABILITY STRIP (Exact Mafia 4-Feature Bar) */}
      <div id="capabilities" className="w-full bg-[#0A0A0A] text-white border-t border-black">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
          
          {/* Column 01: Go */}
          <div className="p-7 sm:p-8 space-y-3 hover:bg-[#121212] transition-colors group">
            <div className="flex items-center gap-2.5 text-[#00ADD8]">
              <i className="fa-brands fa-golang text-xl"></i>
              <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                ENGINE 01
              </span>
            </div>
            <h3 className="font-sans font-bold text-sm tracking-wider uppercase text-white group-hover:text-[#00ADD8] transition-colors">
              GOLANG CONCURRENCY
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              High-throughput microservices, Gin router, native WebSockets, and clean 3-tier architecture.
            </p>
            <a
              href="#projects"
              className="font-mono text-[10px] tracking-widest text-slate-300 group-hover:text-white uppercase flex items-center gap-1.5 pt-2"
            >
              <span>EXPLORE STACK</span>
              <span>→</span>
            </a>
          </div>

          {/* Column 02: React */}
          <div className="p-7 sm:p-8 space-y-3 hover:bg-[#121212] transition-colors group">
            <div className="flex items-center gap-2.5 text-[#A476FF]">
              <i className="fa-brands fa-react text-xl"></i>
              <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                ENGINE 02
              </span>
            </div>
            <h3 className="font-sans font-bold text-sm tracking-wider uppercase text-white group-hover:text-[#A476FF] transition-colors">
              REACT 19 INTERFACES
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Single-page applications, Tailwind CSS, real-time client state feeds, and zero layout shift.
            </p>
            <a
              href="#projects"
              className="font-mono text-[10px] tracking-widest text-slate-300 group-hover:text-white uppercase flex items-center gap-1.5 pt-2"
            >
              <span>EXPLORE STACK</span>
              <span>→</span>
            </a>
          </div>

          {/* Column 03: Laravel */}
          <div className="p-7 sm:p-8 space-y-3 hover:bg-[#121212] transition-colors group">
            <div className="flex items-center gap-2.5 text-[#FF2D20]">
              <i className="fa-brands fa-laravel text-xl"></i>
              <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                ENGINE 03
              </span>
            </div>
            <h3 className="font-sans font-bold text-sm tracking-wider uppercase text-white group-hover:text-[#FF2D20] transition-colors">
              LARAVEL ENTERPRISE
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Queue background workers, Midtrans payment gateway, robust RESTful APIs &amp; Swagger docs.
            </p>
            <a
              href="#projects"
              className="font-mono text-[10px] tracking-widest text-slate-300 group-hover:text-white uppercase flex items-center gap-1.5 pt-2"
            >
              <span>EXPLORE STACK</span>
              <span>→</span>
            </a>
          </div>

          {/* Column 04: Postgres & Docker */}
          <div className="p-7 sm:p-8 space-y-3 hover:bg-[#121212] transition-colors group">
            <div className="flex items-center gap-2.5 text-emerald-400">
              <i className="fa-solid fa-database text-lg"></i>
              <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                ENGINE 04
              </span>
            </div>
            <h3 className="font-sans font-bold text-sm tracking-wider uppercase text-white group-hover:text-emerald-400 transition-colors">
              DATABASE &amp; DEVOPS
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              PostgreSQL &amp; MySQL indexing, Docker Alpine containerization, and WhatsApp API automation.
            </p>
            <a
              href="#projects"
              className="font-mono text-[10px] tracking-widest text-slate-300 group-hover:text-white uppercase flex items-center gap-1.5 pt-2"
            >
              <span>EXPLORE STACK</span>
              <span>→</span>
            </a>
          </div>

        </div>
      </div>

    </section>
  );
}
