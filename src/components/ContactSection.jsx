import React, { useState } from "react";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("rey7dan7@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="space-y-12 pt-8 select-none">
      {/* Editorial Contact Billboard Card */}
      <div className="relative bg-[#121212]/90 border border-white/10 rounded-3xl p-8 sm:p-16 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.9)]">
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 right-0 w-[450px] h-[350px] bg-[#a476ff12] blur-[130px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[350px] h-[300px] bg-blue-500/5 blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-[#A9FF5B] shadow-[0_0_8px_#A9FF5B]" />
            <span className="font-mono text-xs text-[#A476FF] uppercase tracking-widest">
              [05] Initiate Contact • Available For Hire
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-bold text-white tracking-tight leading-none uppercase">
            Let's Build Something Extraordinary
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl font-normal">
            Available for Full-Stack &amp; Backend Software Engineering positions. Whether you are looking to architect high-concurrency microservices in Go or ship dynamic web platforms with Laravel and React, let's talk.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-4">
            <a
              href="mailto:rey7dan7@gmail.com"
              className="px-7 py-3.5 rounded-xl bg-white text-black font-bold font-mono text-xs uppercase tracking-wider hover:bg-slate-200 transition-all flex items-center gap-2.5 shadow-lg shadow-white/10 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <i className="fa-regular fa-envelope text-xs"></i>
              <span>Send An Email</span>
            </a>

            <button
              onClick={handleCopyEmail}
              className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/15 hover:border-white text-white font-mono text-xs tracking-wider transition-all flex items-center gap-2 cursor-pointer"
            >
              <i className={`fa-solid ${copied ? "fa-check text-emerald-400" : "fa-copy text-slate-400"} text-xs`}></i>
              <span>{copied ? "Email Copied!" : "rey7dan7@gmail.com"}</span>
            </button>

            <a
              href="https://linkedin.com/in/raihan-hamdani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/15 hover:border-white text-white font-medium text-xs transition-all flex items-center gap-2"
            >
              <i className="fa-brands fa-linkedin text-sm text-[#0A66C2]"></i>
              <span className="font-mono">LinkedIn</span>
            </a>

            <a
              href="https://github.com/reyhanhmdani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-white/5 border border-white/15 hover:border-white text-white font-medium text-xs transition-all flex items-center gap-2"
            >
              <i className="fa-brands fa-github text-sm"></i>
              <span className="font-mono">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      {/* Editorial Footer Bottom Bar */}
      <footer className="pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-4 pb-12">
        <div className="flex items-center gap-2">
          <span className="font-display text-lg text-white font-bold">RAIHAN</span>
          <span>&copy; {new Date().getFullYear()} Raihan Hamdani. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-4 text-[11px] text-slate-400">
          <span>Go • React 19 • Tailwind CSS</span>
          <span>•</span>
          <span>Crafted with Architectural Precision</span>
        </div>
      </footer>
    </section>
  );
}
