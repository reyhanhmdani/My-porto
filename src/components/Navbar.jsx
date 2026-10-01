import React, { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home", id: "home" },
  { label: "Capabilities", href: "#capabilities", id: "capabilities" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 280;
      const sections = ["contact", "experience", "projects", "capabilities", "home"];

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
      {/* DESKTOP EDITORIAL CAPSULE NAVBAR */}
      <nav
        className={`hidden md:flex fixed top-5 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out items-center justify-between gap-8 select-none ${
          isScrolled
            ? "bg-[#0c0c0ce8] backdrop-blur-2xl border border-white/15 py-2.5 px-7 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.9)]"
            : "bg-[#121212]/50 backdrop-blur-md border border-white/[0.08] py-2.5 px-6 rounded-full"
        }`}
      >
        {/* Monogram Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <span className="w-7 h-7 rounded-full bg-white text-black font-display text-sm font-bold flex items-center justify-center transition-transform group-hover:scale-110">
            RH
          </span>
          <span className="font-display tracking-tight text-white font-bold text-sm hidden lg:inline">
            RAIHAN HAMDANI
          </span>
        </a>

        {/* Links */}
        <ul className="flex items-center gap-7 text-xs font-mono">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative flex items-center">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`transition-colors duration-200 cursor-pointer uppercase tracking-wider ${
                    isActive ? "text-white font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute -bottom-1.5 left-0 right-0 h-[2px] bg-white rounded-full shadow-[0_0_8px_#ffffff]" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Status Pill */}
        <div className="flex items-center gap-2 pl-3 border-l border-white/10 font-mono text-[11px] text-slate-300">
          <span className="w-1.5 h-1.5 rounded-full bg-[#A9FF5B] shadow-[0_0_6px_#A9FF5B]" />
          <span className="hidden xl:inline text-emerald-400 font-medium">OPEN FOR ROLES</span>
        </div>
      </nav>

      {/* MOBILE BOTTOM APP-BAR NAVBAR */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-[100] bg-[#0c0c0cf5] backdrop-blur-2xl border-t border-white/15 py-2.5 px-4 shadow-2xl select-none">
        <ul className="flex items-center justify-around">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="flex-1 text-center">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex flex-col items-center gap-1 font-mono text-[10px] uppercase tracking-wider transition-colors ${
                    isActive ? "text-white font-bold" : "text-slate-400 hover:text-white"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full transition-all ${
                      isActive ? "bg-[#A9FF5B] scale-125 shadow-[0_0_8px_#A9FF5B]" : "bg-transparent"
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
