import React, { useState, useEffect } from 'react';

export default function Header({ isDarkMode, toggleDarkMode, activeTheme, onOpenTerminal }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-30 transition-all duration-300 ${
        scrolled
          ? 'glass-card py-3 shadow-md'
          : 'py-4'
      }`}
      style={{ position: 'fixed' }}
      id="main-header"
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Interactive Logo */}
        <a href="#home" className="flex items-center gap-1.5 font-mono font-bold text-xl tracking-tight group">
          <span style={{ color: activeTheme.accent }} className="transition-all duration-300">&lt;</span>
          <span className="text-slate-900 dark:text-white group-hover:tracking-wider transition-all duration-300 font-sans">
            Raihan
          </span>
          <span style={{ color: activeTheme.accent }} className="transition-all duration-300">/&gt;</span>
        </a>

        {/* Navigation Anchors */}
        <nav className="hidden lg:flex items-center gap-8 font-mono text-xs font-medium text-slate-600 dark:text-slate-300">
          <a
            href="#home"
            className="hover:text-slate-950 dark:hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] hover:after:w-full after:transition-all after:duration-300 after:bg-[var(--accent)]"
            style={{ '--tw-after-bg': activeTheme.accent }}
          >
            [01] Home
          </a>
          <a
            href="#roles"
            className="hover:text-slate-950 dark:hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] hover:after:w-full after:transition-all after:duration-300 after:bg-[var(--accent)]"
            style={{ '--tw-after-bg': activeTheme.accent }}
          >
            [02] Roles
          </a>
          <a
            href="#projects"
            className="hover:text-slate-950 dark:hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] hover:after:w-full after:transition-all after:duration-300 after:bg-[var(--accent)]"
            style={{ '--tw-after-bg': activeTheme.accent }}
          >
            [03] Repos
          </a>
          <a
            href="#experience"
            className="hover:text-slate-950 dark:hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] hover:after:w-full after:transition-all after:duration-300 after:bg-[var(--accent)]"
            style={{ '--tw-after-bg': activeTheme.accent }}
          >
            [04] Experience
          </a>
          <a
            href="#contact"
            className="hover:text-slate-950 dark:hover:text-white transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] hover:after:w-full after:transition-all after:duration-300 after:bg-[var(--accent)]"
            style={{ '--tw-after-bg': activeTheme.accent }}
          >
            [05] Contact
          </a>
        </nav>

        {/* Social Links & Dark/Light Switcher */}
        <div className="flex items-center gap-3 sm:gap-4 relative z-10">
          <div className="hidden sm:flex items-center gap-3 text-slate-500 dark:text-slate-400 mr-2 border-r border-slate-200 dark:border-white/10 pr-4">
            <a
              href="https://www.linkedin.com/in/raihan-hamdani-51a2b438a/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/reyhanhmdani"
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://wa.me/6285761285875"
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500 transition-all duration-300 hover:scale-110"
              title="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/r_ee__yyy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition-all duration-300 hover:scale-110"
              title="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://web.facebook.com/raihan.hamdani.90"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-600 transition-all duration-300 hover:scale-110"
              title="Facebook"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
          </div>



          <a
            href="#contact"
            className="glass-card px-4 py-2 rounded-xl text-xs font-semibold hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 text-slate-800 dark:text-white font-mono"
            style={{ borderColor: activeTheme.accent }}
          >
            PING_ME
          </a>
        </div>
      </div>
    </header>
  );
}
