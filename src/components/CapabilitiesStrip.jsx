import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function CapabilitiesStrip() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".capability-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
          once: true,
        },
        y: 30,
        opacity: 0,
        stagger: 0.08,
        duration: 0.7,
        ease: "power3.out",
        clearProps: "all",
      });
    },
    { scope: containerRef }
  );

  return (
    <section id="stack" ref={containerRef} className="w-full bg-[#0A0A0A] text-white border-t border-black select-none">
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
    </section>
  );
}
