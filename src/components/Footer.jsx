import React from 'react';

export default function Footer({ activeTheme, onOpenTerminal }) {
  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/5 bg-slate-100/40 dark:bg-black/40 relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="font-mono text-[10px] sm:text-xs text-slate-500 dark:text-white/40 text-center md:text-left">
          <p>&copy; 2026 Raihan Hamdani. Built using highly structured code.</p>
          <p className="mt-1">
            Active Core Engine:{' '}
            <span style={{ color: activeTheme.accent }} id="footer-active-theme">
              {activeTheme.title} Engine
            </span>
          </p>
        </div>
        <div className="flex items-center gap-6 font-mono text-[10px] sm:text-xs text-slate-500 dark:text-white/40">
          <button onClick={onOpenTerminal} className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
            [ TERMINAL ]
          </button>
          <a href="#home" className="hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
            [ INSTANCE_TOP ]
          </a>
        </div>
      </div>
    </footer>
  );
}
