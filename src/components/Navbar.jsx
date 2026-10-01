import React, { useState, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const NAV_ITEMS = [
  { label: "Home", shortLabel: "Home", href: "#home", id: "home" },
  { label: "Profile", shortLabel: "About", href: "#manifesto", id: "manifesto" },
  { label: "Stack", shortLabel: "Stack", href: "#capabilities", id: "capabilities" },
  { label: "Works", shortLabel: "Works", href: "#projects", id: "projects" },
  { label: "Career", shortLabel: "Career", href: "#experience", id: "experience" },
  { label: "Contact", shortLabel: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show floating navbar when scrolled past the initial hero viewport
      setShowFloatingNav(window.scrollY > 380);

      const scrollPosition = window.scrollY + 280;
      const sections = ["contact", "experience", "projects", "capabilities", "manifesto", "home"];

      for (const sec of sections) {
        const el = document.getElementById(sec);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection(sec);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 400);
    }
  };

  return (
    <>
      {/* 1. DESKTOP & TABLET FLOATING CAPSULE NAVBAR (STRICTLY HIDDEN ON MOBILE: hidden md:flex) */}
      <nav
        className={`hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out items-center justify-between gap-4 lg:gap-8 select-none ${
          showFloatingNav
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        } bg-[#0c0c0ce8] backdrop-blur-2xl border border-white/15 py-2 px-4 lg:px-6 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.9)] max-w-[95vw]`}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 group cursor-pointer shrink-0"
        >
          <span className="w-6 h-6 rounded-full bg-white text-black font-sans text-xs font-black flex items-center justify-center">
            RH
          </span>
          <span className="font-mono text-xs text-white font-bold hidden lg:inline">
            RAIHAN
          </span>
        </a>

        <ul className="flex items-center gap-3 lg:gap-6 text-[11px] font-mono">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative flex items-center">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-colors duration-200 cursor-pointer uppercase tracking-wider px-1.5 py-0.5 ${
                    isActive ? "text-white font-bold" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-1.5 right-1.5 h-[2px] bg-white rounded-full shadow-[0_0_8px_#ffffff]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 pl-2 border-l border-white/10 font-mono text-[10px] text-emerald-400 font-bold shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden xl:inline">AVAILABLE</span>
        </div>
      </nav>

      {/* 2. MOBILE BOTTOM FLOATING DOCK (STRICTLY MOBILE ONLY: md:hidden) */}
      <nav
        className={`md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 select-none ${
          showFloatingNav
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-12 opacity-0 pointer-events-none"
        } bg-[#0c0c0cf2] backdrop-blur-2xl border border-white/15 py-1.5 px-2 rounded-full shadow-[0_12px_32px_rgba(0,0,0,0.95)] max-w-[94vw] w-fit`}
      >
        <ul className="flex items-center gap-0.5 sm:gap-1 font-mono text-[9px] sm:text-[10px]">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-2 sm:px-2.5 py-1 rounded-full uppercase tracking-wider transition-all duration-200 block text-center whitespace-nowrap ${
                    isActive
                      ? "bg-white text-black font-bold shadow-sm"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.shortLabel}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
