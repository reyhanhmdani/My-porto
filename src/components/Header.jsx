import React, { useState, useEffect } from 'react';

export default function Header({ isDarkMode, toggleDarkMode, activeTheme, onOpenTerminal, onRedirect }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const handleNavigation = (e, url, platform) => {
    e.preventDefault();
    if (onRedirect) {
      onRedirect(url, platform);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

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
              onClick={(e) => handleNavigation(e, "https://www.linkedin.com/in/raihan-hamdani-51a2b438a/", "LinkedIn")}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-all duration-300 hover:scale-110"
              title="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/reyhanhmdani"
              onClick={(e) => handleNavigation(e, "https://github.com/reyhanhmdani", "GitHub")}
              target="_blank"
              rel="noreferrer"
              className="hover:text-slate-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
              title="GitHub"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              href="https://wa.me/6285761285875"
              onClick={(e) => handleNavigation(e, "https://wa.me/6285761285875", "WhatsApp")}
              target="_blank"
              rel="noreferrer"
              className="hover:text-green-500 transition-all duration-300 hover:scale-110"
              title="WhatsApp"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://www.instagram.com/r_ee__yyy"
              onClick={(e) => handleNavigation(e, "https://www.instagram.com/r_ee__yyy", "Instagram")}
              target="_blank"
              rel="noreferrer"
              className="hover:text-pink-500 transition-all duration-300 hover:scale-110"
              title="Instagram"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://web.facebook.com/raihan.hamdani.90"
              onClick={(e) => handleNavigation(e, "https://web.facebook.com/raihan.hamdani.90", "Facebook")}
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
            className="hidden sm:block glass-card px-4 py-2 rounded-xl text-xs font-semibold hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 text-slate-800 dark:text-white font-mono"
            style={{ borderColor: activeTheme.accent }}
          >
            PING_ME
          </a>

          {/* Hamburger button (Mobile-only) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col justify-between w-5 h-3.5 text-slate-400 hover:text-white z-50 relative focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <span
              className={`w-full h-[2px] bg-current transition-all duration-300 transform origin-center ${
                mobileMenuOpen ? 'rotate-45 translate-y-[6px]' : ''
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-current transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
              }`}
            ></span>
            <span
              className={`w-full h-[2px] bg-current transition-all duration-300 transform origin-center ${
                mobileMenuOpen ? '-rotate-45 -translate-y-[6px]' : ''
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation Panel */}
      <div
        className={`fixed inset-0 z-40 bg-black/75 backdrop-blur-sm lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 right-0 h-full w-[260px] sm:w-[320px] bg-[#030712]/95 backdrop-blur-2xl border-l border-white/10 p-6 flex flex-col justify-between transition-transform duration-300 ease-out z-50 ${
            mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          style={{ borderLeftColor: activeTheme.accent }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header section */}
          <div className="flex flex-col space-y-4 pt-12">
            <div className="flex items-center justify-between border-b border-white/5 pb-4">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">
                [SYS_NAV_MENU]
              </span>
              <div className="flex items-center gap-1 font-mono text-[9px] text-green-500">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                <span>ONLINE</span>
              </div>
            </div>

            {/* Menu Links */}
            <nav className="flex flex-col gap-6 pt-4 font-mono text-sm">
              <a
                href="#home"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <span style={{ color: activeTheme.accent }}>[01]</span> Home
              </a>
              <a
                href="#roles"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <span style={{ color: activeTheme.accent }}>[02]</span> Roles
              </a>
              <a
                href="#projects"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <span style={{ color: activeTheme.accent }}>[03]</span> Repos
              </a>
              <a
                href="#experience"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <span style={{ color: activeTheme.accent }}>[04]</span> Experience
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white transition-all flex items-center gap-2"
              >
                <span style={{ color: activeTheme.accent }}>[05]</span> Contact
              </a>
            </nav>
          </div>

          {/* Social Links & Action */}
          <div className="space-y-6 pb-8 border-t border-white/5 pt-6">
            <div className="flex justify-center gap-5 text-slate-400">
              <a
                href="https://www.linkedin.com/in/raihan-hamdani-51a2b438a/"
                onClick={(e) => { setMobileMenuOpen(false); handleNavigation(e, "https://www.linkedin.com/in/raihan-hamdani-51a2b438a/", "LinkedIn"); }}
                className="hover:text-blue-400 transition-all text-lg"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>
              <a
                href="https://github.com/reyhanhmdani"
                onClick={(e) => { setMobileMenuOpen(false); handleNavigation(e, "https://github.com/reyhanhmdani", "GitHub"); }}
                className="hover:text-white transition-all text-lg"
              >
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://wa.me/6285761285875"
                onClick={(e) => { setMobileMenuOpen(false); handleNavigation(e, "https://wa.me/6285761285875", "WhatsApp"); }}
                className="hover:text-green-400 transition-all text-lg"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
              <a
                href="https://www.instagram.com/r_ee__yyy"
                onClick={(e) => { setMobileMenuOpen(false); handleNavigation(e, "https://www.instagram.com/r_ee__yyy", "Instagram"); }}
                className="hover:text-pink-400 transition-all text-lg"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a
                href="https://web.facebook.com/raihan.hamdani.90"
                onClick={(e) => { setMobileMenuOpen(false); handleNavigation(e, "https://web.facebook.com/raihan.hamdani.90", "Facebook"); }}
                className="hover:text-blue-500 transition-all text-lg"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="glass-card w-full py-3 rounded-2xl text-xs font-semibold text-center block hover:shadow-[0_0_15px_var(--accent-glow)] transition-all text-white font-mono"
              style={{ borderColor: activeTheme.accent }}
            >
              PING_ME
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
