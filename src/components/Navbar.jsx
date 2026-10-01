import React, { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Manifesto", href: "#manifesto", id: "manifesto" },
  { label: "Stack", href: "#capabilities", id: "capabilities" },
  { label: "Works", href: "#projects", id: "projects" },
  { label: "Career", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [showFloatingNav, setShowFloatingNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Only show floating navbar when scrolled past the ivory hero
      setShowFloatingNav(window.scrollY > 450);

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
    }
  };

  return (
    <>
      {/* FLOATING CAPSULE NAVBAR (Only visible when scrolling through dark sections) */}
      <nav
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out items-center justify-between gap-8 select-none ${
          showFloatingNav
            ? "opacity-100 translate-y-0 pointer-events-auto flex"
            : "opacity-0 -translate-y-4 pointer-events-none hidden md:flex"
        } bg-[#0c0c0ce8] backdrop-blur-2xl border border-white/15 py-2 px-6 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.9)]`}
      >
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="w-6 h-6 rounded-full bg-white text-black font-sans text-xs font-black flex items-center justify-center">
            RH
          </span>
          <span className="font-mono text-xs text-white font-bold hidden sm:inline">
            RAIHAN
          </span>
        </a>

        <ul className="flex items-center gap-6 text-[11px] font-mono">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative flex items-center">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-colors duration-200 cursor-pointer uppercase tracking-wider ${
                    isActive ? "text-white font-bold" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-white rounded-full shadow-[0_0_8px_#ffffff]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2 pl-2 border-l border-white/10 font-mono text-[10px] text-emerald-400 font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden xl:inline">AVAILABLE</span>
        </div>
      </nav>

      {/* MOBILE BOTTOM APP-BAR NAVBAR */}
      <nav
        className={`md:hidden fixed bottom-0 inset-x-0 z-[100] bg-[#0c0c0cf5] backdrop-blur-2xl border-t border-white/15 py-2.5 px-4 shadow-2xl select-none transition-all duration-300 ${
          showFloatingNav ? "translate-y-0 opacity-100" : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <ul className="flex items-center justify-around">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="flex-1 text-center">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                    isActive ? "text-white font-bold" : "text-neutral-400 hover:text-white"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      isActive ? "bg-emerald-400 scale-125 shadow-[0_0_8px_#10B981]" : "bg-transparent"
                    }`}
                  />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}
