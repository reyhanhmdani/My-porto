import React, { useState, useEffect } from "react";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#home",
    id: "home",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.48907C3 9.18048 3.14247 8.88917 3.38606 8.69972L11.3861 2.47749C11.7472 2.19663 12.2528 2.19663 12.6139 2.47749L20.6139 8.69972C20.8575 8.88917 21 9.18048 21 9.48907V20ZM19 19V9.97815L12 4.53371L5 9.97815V19H19Z" />
      </svg>
    ),
  },
  {
    label: "Projects",
    href: "#projects",
    id: "projects",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M4 5V19H20V7H11.5858L9.58579 5H4ZM12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5Z" />
      </svg>
    ),
  },
  {
    label: "Contact",
    href: "#contact",
    id: "contact",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22" fill="currentColor">
        <path d="M21.7267 2.95694L16.2734 22.0432C16.1225 22.5716 15.7979 22.5956 15.5563 22.1126L11 13L1.9229 9.36919C1.41322 9.16532 1.41953 8.86022 1.95695 8.68108L21.0432 2.31901C21.5716 2.14285 21.8747 2.43866 21.7267 2.95694ZM19.0353 5.09647L6.81221 9.17085L12.4488 11.4255L15.4895 17.5068L19.0353 5.09647Z" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Deterministic scroll spy for Home, Projects, Contact
      const scrollPosition = window.scrollY + 250;
      const contactEl = document.getElementById("contact");
      const projectsEl = document.getElementById("projects");

      if (contactEl && scrollPosition >= contactEl.offsetTop) {
        setActiveSection("contact");
      } else if (projectsEl && scrollPosition >= projectsEl.offsetTop) {
        setActiveSection("projects");
      } else {
        setActiveSection("home");
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
      {/* DESKTOP FLOATING CAPSULE NAVBAR (Exact match to dark-minimal nav.astro) */}
      <nav
        className={`hidden md:flex fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-300 ease-in-out items-center justify-center ${
          isScrolled
            ? "bg-[#141414cc] backdrop-blur-xl border border-[#ffffff15] py-2.5 px-8 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.8)]"
            : "bg-transparent border border-transparent py-2.5 px-6"
        }`}
      >
        <ul className="flex items-center gap-12 text-base font-medium">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="relative flex items-center">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative flex items-center transition-colors duration-200 cursor-pointer ${
                    isActive ? "text-white font-medium" : "text-[#f3f3f398] hover:text-white"
                  }`}
                >
                  {/* Glowing Green Active Dot Indicator (Absolute positioned so text never jumps) */}
                  <span
                    className={`absolute -left-5 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#A9FF5B] transition-all duration-300 shadow-[0_0_8px_#A9FF5B] ${
                      isActive ? "scale-100 opacity-100" : "scale-0 opacity-0"
                    }`}
                  />
                  <span>{item.label}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* MOBILE BOTTOM APP-BAR NAVBAR (Exact match to dark-minimal mobile nav) */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 z-[100] bg-[#141414f0] backdrop-blur-xl border-t border-[#ffffff15] py-2.5 px-6 rounded-t-2xl shadow-2xl">
        <ul className="flex items-center justify-around">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="flex-1 text-center">
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex flex-col items-center gap-1 text-xs font-medium transition-colors ${
                    isActive ? "text-white" : "text-[#f3f3f398] hover:text-white"
                  }`}
                >
                  <span className={`w-6 h-6 flex items-center justify-center transition-colors ${isActive ? "text-[#A9FF5B]" : "text-[#f3f3f398]"}`}>
                    {item.icon}
                  </span>
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
