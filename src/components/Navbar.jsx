import React, { useState, useEffect } from "react";

const NAV_ITEMS = [
  { label: "Home", href: "#home", id: "home", icon: "fa-solid fa-house" },
  { label: "Capabilities", href: "#what-i-do", id: "what-i-do", icon: "fa-solid fa-layer-group" },
  { label: "Projects", href: "#projects", id: "projects", icon: "fa-solid fa-folder-closed" },
  { label: "Experience", href: "#experience", id: "experience", icon: "fa-solid fa-briefcase" },
  { label: "Contact", href: "#contact", id: "contact", icon: "fa-regular fa-paper-plane" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Section observer to accurately highlight active link
  useEffect(() => {
    const sectionElements = NAV_ITEMS.map((item) => document.getElementById(item.id)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => {
      sectionElements.forEach((el) => observer.unobserve(el));
    };
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
      {/* DESKTOP FLOATING CAPSULE NAVBAR (Matches DarkMinimal layout) */}
      <nav
        className={`hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out items-center justify-center ${
          isScrolled
            ? "bg-[#141414cc] backdrop-blur-xl border border-[#ffffff15] py-2 px-6 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent border border-transparent py-2 px-6"
        }`}
      >
        <ul className="flex items-center gap-8 text-sm font-medium">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative flex items-center">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center gap-2 transition-colors duration-200 cursor-pointer ${
                    isActive ? "text-white font-semibold" : "text-[#f3f3f398] hover:text-white"
                  }`}
                >
                  {/* Glowing Green Active Dot Indicator (Exact DarkMinimal Signature) */}
                  <span
                    className={`w-2 h-2 rounded-full bg-[#A9FF5B] transition-all duration-300 shadow-[0_0_8px_#A9FF5B] ${
                      isActive ? "scale-100 opacity-100" : "scale-0 opacity-0 -mr-2"
                    }`}
                  />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* MOBILE BOTTOM APP-BAR NAVBAR */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-[100] bg-[#141414f0] backdrop-blur-xl border-t border-[#ffffff15] py-2.5 px-4 rounded-t-2xl shadow-2xl">
        <ul className="flex items-center justify-around">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex flex-col items-center gap-1 text-[11px] font-medium transition-colors ${
                    isActive ? "text-[#A9FF5B]" : "text-[#f3f3f398] hover:text-white"
                  }`}
                >
                  <i className={`${item.icon} text-base`}></i>
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
