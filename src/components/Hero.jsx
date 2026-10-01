import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // 1. Top Editorial Bar Entry
      tl.from(".hero-header", {
        y: -30,
        opacity: 0,
        duration: 0.9,
      });

      // 2. Left Manifesto Quote Stagger
      tl.from(
        ".hero-quote p",
        {
          x: -25,
          opacity: 0,
          stagger: 0.08,
          duration: 0.7,
        },
        "-=0.5"
      );

      // 3. Giant Monumental Name Curtain / Mask Reveal
      tl.from(
        ".hero-name-line",
        {
          yPercent: 120,
          opacity: 0,
          stagger: 0.15,
          duration: 1.2,
          ease: "power4.out",
        },
        "-=0.5"
      );

      // 4. Bottom CTAs & Metadata
      tl.from(
        ".hero-cta",
        {
          y: 25,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.6"
      );

      tl.from(
        ".hero-meta",
        {
          y: 20,
          opacity: 0,
          duration: 0.8,
        },
        "-=0.7"
      );

      // 5. 4-Column Noir Capabilities Strip Stagger
      tl.from(
        ".capability-card",
        {
          y: 35,
          opacity: 0,
          stagger: 0.1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative w-full bg-[#EAE7E1] text-[#0A0A0A] overflow-hidden select-none"
    >
      {/* 1. TOP EDITORIAL BAR (Integrated Flush Header matching Mafia Reference) */}
      <header className="hero-header w-full border-b border-black/10 px-4 sm:px-8 lg:px-16 py-3.5 sm:py-4 flex items-center justify-between gap-3">
        {/* Left Nav Anchors */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8 font-mono text-[11px] font-bold tracking-widest uppercase text-neutral-800">
          <a href="#home" className="hover:text-black transition-colors">HOME</a>
          <a href="#manifesto" className="hover:text-black transition-colors">PROFILE</a>
          <a href="#capabilities" className="hover:text-black transition-colors">STACK</a>
          <a href="#projects" className="hover:text-black transition-colors">WORKS</a>
          <a href="#experience" className="hover:text-black transition-colors">CAREER</a>
        </nav>

        {/* Mobile/Tablet Left Badge */}
        <div className="lg:hidden flex items-center gap-1.5 font-mono text-[10px] text-neutral-600 font-bold uppercase tracking-widest">
          <span className="w-5 h-5 rounded-full bg-black text-white font-sans text-[10px] font-black flex items-center justify-center">
            RH
          </span>
          <span className="hidden sm:inline">ENGINEER</span>
        </div>

        {/* Center Brand Identity */}
        <div className="text-center">
          <a href="#home" className="inline-block group">
            <span className="font-sans font-black text-xl sm:text-3xl tracking-tight text-[#0A0A0A] block leading-none">
              RAIHAN
            </span>
            <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.25em] sm:tracking-[0.3em] text-neutral-600 uppercase block mt-0.5 group-hover:text-black transition-colors">
              THE ENGINEER
            </span>
          </a>
        </div>

        {/* Right Utility Handles */}
        <div className="flex items-center gap-2.5 sm:gap-6 font-mono text-[11px] font-bold text-neutral-800 uppercase tracking-wider shrink-0">
          <a
            href="https://github.com/reyhanhmdani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-black transition-colors p-1"
            title="GitHub"
          >
            <i className="fa-brands fa-github text-sm"></i>
            <span className="hidden sm:inline">GITHUB</span>
          </a>
          <a
            href="https://linkedin.com/in/raihan-hamdani"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-black transition-colors p-1"
            title="LinkedIn"
          >
            <i className="fa-brands fa-linkedin text-sm text-[#0A66C2]"></i>
            <span className="hidden sm:inline">LINKEDIN</span>
          </a>
          <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full border border-black/15 bg-black/5 text-[9px] sm:text-[10px] text-emerald-800 font-bold whitespace-nowrap">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>AVAILABLE</span>
          </div>
        </div>
      </header>

      {/* 2. HERO MONUMENTAL STAGE */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-6 sm:pt-8 pb-10 sm:pb-16 flex flex-col justify-between min-h-[80vh] sm:min-h-[88vh]">
        
        {/* Top Left Quote / Manifesto */}
        <div className="hero-quote relative z-10 text-left space-y-1 font-mono text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#1a1a1a] leading-snug max-w-xs">
          <p>LOYALTY TO CLEAN CODE.</p>
          <p>POWER IN CONCURRENCY.</p>
          <p>SYSTEMS BUILT TO SCALE.</p>
        </div>

        {/* GIANT MONUMENTAL NAME (100% FOCUS ON RAIHAN HAMDANI WITH STAGGER CURTAIN MASK REVEAL) */}
        <div className="w-full my-auto py-8 sm:py-16 md:py-20 flex flex-col items-center justify-center text-center select-none overflow-hidden">
          <div className="overflow-hidden">
            <h1 className="hero-name-line font-sans font-black text-[15vw] sm:text-[14vw] md:text-[13vw] text-[#0A0A0A] tracking-[0.06em] sm:tracking-[0.16em] uppercase leading-[0.85] text-center whitespace-nowrap drop-shadow-sm will-change-transform">
              RAIHAN
            </h1>
          </div>
          <div className="overflow-hidden">
            <h2 className="hero-name-line font-sans font-black text-[12.5vw] sm:text-[12vw] md:text-[11vw] text-[#0A0A0A] tracking-[0.04em] sm:tracking-[0.12em] uppercase leading-[0.85] text-center whitespace-nowrap -mt-1 sm:-mt-4 md:-mt-6 will-change-transform">
              HAMDANI
            </h2>
          </div>
        </div>

        {/* BOTTOM METADATA & CALL-TO-ACTION STRIP */}
        <div className="relative z-20 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-4 border-t border-black/10">
          
          {/* Left: Buttons */}
          <div className="hero-cta flex flex-wrap items-center gap-4">
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
          <div className="hero-meta text-left sm:text-right font-mono text-xs tracking-wider text-[#1a1a1a] space-y-1">
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
          <div className="capability-card p-7 sm:p-8 space-y-3 hover:bg-[#121212] transition-colors group">
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
          <div className="capability-card p-7 sm:p-8 space-y-3 hover:bg-[#121212] transition-colors group">
            <div className="flex items-center gap-2.5 text-white">
              <i className="fa-brands fa-react text-xl"></i>
              <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                ENGINE 02
              </span>
            </div>
            <h3 className="font-sans font-bold text-sm tracking-wider uppercase text-white group-hover:text-neutral-300 transition-colors">
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
          <div className="capability-card p-7 sm:p-8 space-y-3 hover:bg-[#121212] transition-colors group">
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
          <div className="capability-card p-7 sm:p-8 space-y-3 hover:bg-[#121212] transition-colors group">
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
