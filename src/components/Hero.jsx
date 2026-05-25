import React from 'react';
import TerminalSimulator from './TerminalSimulator';
import TiltCard from './TiltCard';

export default function Hero({ activeTheme, themes, setTheme, onCommandLog }) {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center pt-24 px-6 md:px-12 relative overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Profile Info Panel */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6 md:space-y-8 z-10">
          <div className="inline-flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full animate-ping" style={{ backgroundColor: activeTheme.accent }}></span>
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-600 dark:text-white/80">
              Bridging code & intelligent automation
            </span>
          </div>

          <div className="space-y-2">
            <h2 className="text-lg md:text-xl font-mono text-slate-500 dark:text-white/50">Sistem terkompilasi, saya</h2>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-white leading-none">
              Raihan{' '}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r"
                style={{
                  backgroundImage: `linear-gradient(to right, ${activeTheme.accent}, #718096)`,
                  filter: 'drop-shadow(0 0 10px var(--accent-glow))'
                }}
                id="accent-name"
              >
                Hamdani
              </span>
            </h1>
            <p className="text-base md:text-xl text-slate-700 dark:text-white/85 font-mono mt-2 flex flex-wrap items-center gap-2">
              Software Developer specialized in{' '}
              <span
                className="text-slate-900 dark:text-white border-b-2 font-semibold"
                style={{ borderColor: activeTheme.accent }}
                id="changing-title"
              >
                {activeTheme.title}
              </span>
            </p>
          </div>

          <p className="text-slate-600 dark:text-white/60 max-w-xl text-xs sm:text-sm md:text-base leading-relaxed font-medium">
            Arsitek sistem backend terukur, mesin integrasi berbasis kecerdasan buatan (AI), dan antarmuka web modern
            berkinerja tinggi. Gunakan modul interaktif di bawah untuk beralih arsitektur!
          </p>

          {/* Core Engine Selector */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-slate-500 dark:text-white/40 block uppercase tracking-wider">
              Pilih Core Engine Portofolio &lt;Dinamis&gt;:
            </span>
            <div className="flex flex-wrap gap-2.5">
              {/* Laravel Engine Button */}
              <button
                onClick={() => setTheme('laravel')}
                id="theme-btn-laravel"
                className={`theme-btn glass-card border px-4 py-2.5 rounded-xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300 select-none ${
                  activeTheme.id === 'laravel' ? 'active shadow-[0_0_15px_var(--accent-glow)]' : ''
                }`}
                style={{ borderColor: activeTheme.id === 'laravel' ? activeTheme.accent : 'var(--border-color)' }}
              >
                <div className="gloss-effect"></div>
                <span className="text-xl text-red-500">
                  <i className="fa-brands fa-laravel"></i>
                </span>
                <div className="text-left font-sans">
                  <p className="text-[10px] text-slate-400 dark:text-white/40">Framework</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">Laravel</p>
                </div>
              </button>

              {/* Go Lang Engine Button */}
              <button
                onClick={() => setTheme('golang')}
                id="theme-btn-golang"
                className={`theme-btn glass-card border px-4 py-2.5 rounded-xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300 select-none ${
                  activeTheme.id === 'golang' ? 'active shadow-[0_0_15px_var(--accent-glow)]' : ''
                }`}
                style={{ borderColor: activeTheme.id === 'golang' ? activeTheme.accent : 'var(--border-color)' }}
              >
                <div className="gloss-effect"></div>
                <span className="text-xl text-[#00ADD8]">
                  <i className="fa-brands fa-golang"></i>
                </span>
                <div className="text-left font-sans">
                  <p className="text-[10px] text-slate-400 dark:text-white/40">Concurrent</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">Go Lang</p>
                </div>
              </button>

              {/* JavaScript Engine Button */}
              <button
                onClick={() => setTheme('javascript')}
                id="theme-btn-javascript"
                className={`theme-btn glass-card border px-4 py-2.5 rounded-xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all duration-300 select-none ${
                  activeTheme.id === 'javascript' ? 'active shadow-[0_0_15px_var(--accent-glow)]' : ''
                }`}
                style={{ borderColor: activeTheme.id === 'javascript' ? activeTheme.accent : 'var(--border-color)' }}
              >
                <div className="gloss-effect"></div>
                <span className="text-xl text-[#F7DF1E]">
                  <i className="fa-brands fa-square-js"></i>
                </span>
                <div className="text-left font-sans">
                  <p className="text-[10px] text-slate-400 dark:text-white/40">Full Stack</p>
                  <p className="text-xs font-bold text-slate-800 dark:text-white">JavaScript</p>
                </div>
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3.5 relative z-10">
            <a
              href="#projects"
              className="px-5 py-3 rounded-xl text-xs font-bold font-mono transition-all duration-300 bg-slate-900 dark:bg-white text-white dark:text-black hover:bg-transparent dark:hover:bg-transparent hover:text-slate-900 dark:hover:text-white border border-slate-900 dark:border-white hover:shadow-[0_0_15px_var(--accent-glow)]"
            >
              LIHAT_PROYEK
            </a>
            <a
              href="#about"
              className="px-5 py-3 rounded-xl text-xs font-bold font-mono glass-card hover:border-slate-300 dark:hover:border-white/20 text-slate-700 dark:text-white hover:scale-105 transition-all duration-300"
            >
              <div className="gloss-effect"></div>
              BIOGRAFI_LOG()
            </a>
          </div>
        </div>

        {/* Terminal Simulator */}
        <TerminalSimulator activeTheme={activeTheme} onCommandLog={onCommandLog} />
      </div>
    </section>
  );
}
