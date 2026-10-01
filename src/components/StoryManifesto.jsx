import React from "react";

export default function StoryManifesto() {
  return (
    <section id="manifesto" className="w-full bg-[#EAE7E1] text-[#0A0A0A] py-16 sm:py-24 border-b border-black/10 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Bold Editorial Narrative (Exact Mafia "THE STORY" Layout) */}
        <div className="lg:col-span-6 space-y-6">
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-neutral-600 block">
            THE MANIFESTO
          </span>

          <h2 className="font-sans font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter uppercase leading-[0.9] text-[#0A0A0A]">
            RESILIENT.<br />
            SCALABLE.<br />
            PERFORMANT.
          </h2>

          <p className="font-mono text-xs sm:text-sm text-neutral-700 leading-relaxed max-w-lg">
            Building resilient web platforms and real-time APIs with Go, Laravel, and React. Mastered 3-tier clean architecture, database query optimization, and high-concurrency production deployments that endure under real-world loads.
          </p>

          <div className="pt-2">
            <a
              href="#projects"
              className="inline-block px-8 py-3.5 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-neutral-800 transition-all shadow-md active:scale-95"
            >
              DISCOVER CASE STUDIES
            </a>
          </div>
        </div>

        {/* Right Column: High-Contrast Technical Architecture / System Showcase */}
        <div className="lg:col-span-6">
          <div className="relative bg-[#0A0A0A] p-3 sm:p-4 rounded-xl border border-black/20 shadow-2xl overflow-hidden group">
            {/* Top Browser / System Dot Bar */}
            <div className="flex items-center justify-between pb-3 px-2 border-b border-white/10 text-slate-400 font-mono text-[10px]">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-neutral-700"></span>
                <span className="text-white ml-2 font-bold">REYCLINIC • SYSTEM TOPOLOGY</span>
              </div>
              <span className="text-emerald-400 font-bold">● 10.29 MB RAM IDLE</span>
            </div>

            {/* Dashboard / Flowchart Showcase Image */}
            <div className="relative aspect-[16/10] overflow-hidden rounded-lg mt-2 bg-neutral-900">
              <img
                src="/images/reyclinic-dashboard.png"
                alt="ReyClinic System Architecture"
                className="w-full h-full object-cover object-top grayscale contrast-125 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between font-mono text-[11px] text-white">
                <span className="bg-black/80 px-2.5 py-1 rounded border border-white/10">Go + Gin + WebSockets</span>
                <span className="text-slate-300">Live Hospital Ops</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
