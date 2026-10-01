import React, { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rey7dan7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer id="contact" className="w-full bg-[#0A0A0A] text-white pt-16 pb-12 border-t border-white/10 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 space-y-16">
        
        {/* TOP CONTACT INVITATION BANNER */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end border-b border-white/10 pb-12">
          <div className="lg:col-span-8 space-y-3">
            <span className="font-mono text-xs text-[#A476FF] uppercase tracking-[0.25em]">
              [05] INITIATE CONTACT
            </span>
            <h2 className="font-sans font-black text-3xl sm:text-5xl lg:text-6xl tracking-tighter uppercase text-white leading-none">
              LET'S BUILD SOMETHING EXTRAORDINARY.
            </h2>
            <p className="font-mono text-xs sm:text-sm text-neutral-400 max-w-2xl leading-relaxed">
              Open to full-time Software Engineer positions, backend architecture consulting, and high-concurrency systems design.
            </p>
          </div>

          <div className="lg:col-span-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a
              href="mailto:rey7dan7@gmail.com"
              className="px-6 py-3.5 bg-white text-black font-bold font-mono text-xs uppercase tracking-wider rounded-sm hover:bg-neutral-200 transition-all text-center flex items-center justify-center gap-2"
            >
              <span>SEND EMAIL</span>
              <span className="text-[10px]">▶</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 bg-neutral-900 border border-white/15 hover:border-white text-white font-mono text-xs uppercase tracking-wider rounded-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <i className={`fa-solid ${copied ? "fa-check text-emerald-400" : "fa-copy text-slate-400"} text-xs`}></i>
              <span>{copied ? "COPIED" : "COPY EMAIL"}</span>
            </button>
          </div>
        </div>

        {/* 5-COLUMN FOOTER DIRECTORY (Exact Mafia Reference Footer Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 sm:gap-12 text-xs font-mono">
          
          {/* Brand Identity & Social Icons (Left 4 Columns) */}
          <div className="md:col-span-4 space-y-4">
            <div>
              <span className="font-sans font-black text-2xl tracking-tight text-white block leading-none">
                REY
              </span>
              <span className="text-[9px] tracking-[0.25em] text-neutral-400 uppercase block mt-0.5">
                THE ENGINEER
              </span>
            </div>
            <p className="text-neutral-400 text-[11px] leading-relaxed max-w-xs font-sans">
              Fullstack Software Engineer specializing in resilient systems, Go concurrency, and reactive web applications.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/reyhanhmdani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-8 h-8 rounded border border-white/15 hover:border-white text-neutral-300 hover:text-white flex items-center justify-center transition-colors"
              >
                <i className="fa-brands fa-github text-sm"></i>
              </a>
              <a
                href="https://linkedin.com/in/raihan-hamdani"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-8 h-8 rounded border border-white/15 hover:border-white text-[#0A66C2] flex items-center justify-center transition-colors"
              >
                <i className="fa-brands fa-linkedin text-sm"></i>
              </a>
              <a
                href="mailto:rey7dan7@gmail.com"
                aria-label="Send Email"
                className="w-8 h-8 rounded border border-white/15 hover:border-white text-[#A476FF] flex items-center justify-center transition-colors"
              >
                <i className="fa-regular fa-envelope text-xs"></i>
              </a>
            </div>
          </div>

          {/* Column 2: Systems */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              EDITIONS
            </h4>
            <ul className="space-y-2 text-neutral-400 text-[11px]">
              <li><a href="#projects" className="hover:text-white transition-colors">ReyClinic EMR</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Ayo Buat Baik</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Sayf El Falah</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Andre Raditya</a></li>
            </ul>
          </div>

          {/* Column 3: Stack */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              DISCIPLINES
            </h4>
            <ul className="space-y-2 text-neutral-400 text-[11px]">
              <li><a href="#capabilities" className="hover:text-white transition-colors">Go &amp; Gin Engine</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">React 19 SPAs</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Laravel 11 APIs</a></li>
              <li><a href="#capabilities" className="hover:text-white transition-colors">Postgres &amp; Docker</a></li>
            </ul>
          </div>

          {/* Column 4: Career */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              CAREER
            </h4>
            <ul className="space-y-2 text-neutral-400 text-[11px]">
              <li><a href="#experience" className="hover:text-white transition-colors">PT. DumbWays (B67)</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Sayf El Falah</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">B_ERL Cosmetics</a></li>
              <li><a href="#experience" className="hover:text-white transition-colors">Pondok IT</a></li>
            </ul>
          </div>

          {/* Column 5: Direct Newsletter / Reach Out Bar */}
          <div className="md:col-span-2 space-y-3">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">
              INQUIRIES
            </h4>
            <p className="text-[11px] text-neutral-400 leading-snug">
              Direct communication for hiring or contract.
            </p>
            <div className="flex items-center">
              <input
                type="text"
                readOnly
                value="rey7dan7@gmail.com"
                className="w-full bg-neutral-900 border border-white/15 px-2.5 py-1.5 text-[10px] text-slate-300 rounded-l-sm font-mono truncate"
              />
              <button
                onClick={handleCopyEmail}
                className="bg-white text-black px-2.5 py-1.5 rounded-r-sm hover:bg-neutral-300 transition-colors font-bold text-xs"
                title="Copy Email"
              >
                <i className="fa-regular fa-paper-plane text-[10px]"></i>
              </button>
            </div>
          </div>

        </div>

        {/* BOTTOM METADATA & COPYRIGHT */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-neutral-500 font-mono gap-4">
          <p>&copy; {new Date().getFullYear()} RAIHAN HAMDANI. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-4 text-neutral-400">
            <span>GO • LARAVEL • REACT 19</span>
            <span>—</span>
            <span>PRODUCTION RESILIENT</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
