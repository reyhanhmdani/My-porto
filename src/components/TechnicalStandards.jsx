import React from "react";

const STANDARDS = [
  {
    icon: "fa-solid fa-bolt",
    title: "HIGH CONCURRENCY",
    desc: "Zero-downtime microservices with Go & Gin",
  },
  {
    icon: "fa-solid fa-cubes",
    title: "CLEAN ARCHITECTURE",
    desc: "Strict 3-tier separation & SOLID principles",
  },
  {
    icon: "fa-solid fa-arrows-rotate",
    title: "REAL-TIME SYNC",
    desc: "Bidirectional WebSockets & event streaming",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "DATA INTEGRITY",
    desc: "Indexed Postgres & relational schemas",
  },
  {
    icon: "fa-solid fa-box",
    title: "CONTAINERIZED",
    desc: "Lightweight Docker Alpine workloads",
  },
];

export default function TechnicalStandards() {
  return (
    <div className="w-full bg-[#EAE7E1] text-[#0A0A0A] border-b border-black/10 py-6 sm:py-8 select-none">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {STANDARDS.map((std, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <div className="w-8 h-8 rounded border border-black/20 flex items-center justify-center shrink-0 text-[#0A0A0A] text-sm mt-0.5">
              <i className={std.icon}></i>
            </div>
            <div className="space-y-0.5">
              <h4 className="font-mono text-[11px] font-bold tracking-wider uppercase text-[#0A0A0A]">
                {std.title}
              </h4>
              <p className="font-mono text-[10px] text-neutral-600 leading-tight">
                {std.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
