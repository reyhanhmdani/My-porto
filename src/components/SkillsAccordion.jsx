import React, { useState } from "react";

const CategoryIcons = {
  "Backend & System Architecture": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A476FF]">
      <rect width="20" height="8" x="2" y="2" rx="2" ry="2"/>
      <rect width="20" height="8" x="2" y="14" rx="2" ry="2"/>
      <line x1="6" x2="6.01" y1="6" y2="6"/>
      <line x1="6" x2="6.01" y1="18" y2="18"/>
    </svg>
  ),
  "Frontend & UI Engineering": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A476FF]">
      <rect width="20" height="16" x="2" y="4" rx="2"/>
      <path d="M6 8h.01"/>
      <path d="M10 8h.01"/>
      <path d="M14 8h.01"/>
    </svg>
  ),
  "DevOps, Data & Integrations": (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A476FF]">
      <path d="M12 2v20"/>
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
    </svg>
  ),
};

export default function SkillsAccordion() {
  const [openItem, setOpenItem] = useState("Backend & System Architecture");

  const skills = {
    "Backend & System Architecture": [
      "High-Performance Go (Gin, GORM, Native WebSockets)",
      "Laravel 11 Modular APIs & Queue Workers (Cron Jobs)",
      "Clean 3-Tier Layered Architecture (Handler-Service-Repo)",
      "Interactive API Documentation with Swagger / OpenAPI",
    ],
    "Frontend & UI Engineering": [
      "React 19 & TypeScript Modern Single Page Apps (SPA)",
      "Responsive, Sub-Second Mobile-First UI with Tailwind CSS",
      "Progressive Web Apps (PWA) Offline-Ready Interfaces",
      "State Management & Real-Time WebSocket Feeds",
    ],
    "DevOps, Data & Integrations": [
      "PostgreSQL (Neon Cloud) & MySQL Schema Optimization",
      "Docker Containerization (Alpine Linux ~10MB footprint)",
      "Midtrans Payment Gateway (QRIS, VA, E-Wallet)",
      "WhatsApp Business Automation & AI-Augmented Workflows",
    ],
  };

  const toggleItem = (item) => {
    setOpenItem(openItem === item ? null : item);
  };

  return (
    <div className="text-left w-full">
      <h3 className="text-white text-3xl md:text-4xl font-semibold mb-6 flex items-center gap-3">
        <span>What I do?</span>
        <span className="text-xs font-mono px-2.5 py-1 rounded-full bg-[#a476ff15] text-[#A476FF] border border-[#a476ff30]">
          Core Capabilities
        </span>
      </h3>
      <ul className="space-y-3 mt-4 text-base">
        {Object.entries(skills).map(([category, items]) => {
          const isOpen = openItem === category;
          return (
            <li key={category} className="w-full">
              <div
                onClick={() => toggleItem(category)}
                className="w-full bg-[#1414149c] rounded-2xl text-left hover:bg-[#1a1a1acc] transition-all border border-[#ffffff15] hover:border-[#a476ff50] cursor-pointer overflow-hidden shadow-lg"
              >
                <div className="flex items-center gap-3.5 p-4 sm:p-5">
                  <div className="p-2 rounded-xl bg-[#a476ff10] border border-[#a476ff20] shrink-0">
                    {CategoryIcons[category]}
                  </div>
                  <div className="flex items-center justify-between flex-grow min-w-0">
                    <span className="block truncate text-white font-medium text-base sm:text-lg">
                      {category}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className={`text-slate-400 transition-transform duration-300 shrink-0 ml-2 ${
                        isOpen ? "rotate-180 text-[#A476FF]" : ""
                      }`}
                    >
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                </div>

                {/* Smooth Animated Accordion Drawer */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-5 pb-5 pt-1 border-t border-[#ffffff0f]">
                      <ul className="space-y-2.5 pt-3">
                        {items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-slate-300 text-sm">
                            <span className="text-[#A476FF] text-xs mt-1">✦</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
