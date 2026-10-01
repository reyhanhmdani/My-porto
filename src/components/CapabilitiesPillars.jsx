import React from "react";

const CAPABILITIES = [
  {
    num: "01",
    tag: "CONCURRENCY & APIS",
    title: "Backend Architecture",
    headline: "High-throughput, clean 3-tier services designed for zero-latency execution.",
    tech: "Go & Laravel",
    accent: "#00ADD8",
    icon: "fa-solid fa-server",
    items: [
      "Go & Gin (Native WebSockets)",
      "Laravel 11 & Queue Workers",
      "Clean 3-Tier Architecture",
      "RESTful APIs & Swagger Docs",
    ],
  },
  {
    num: "02",
    tag: "REACTIVE INTERFACES",
    title: "Frontend Engineering",
    headline: "Pixel-perfect modern user interfaces with instantaneous real-time sync.",
    tech: "React 19 & Tailwind",
    accent: "#A476FF",
    icon: "fa-brands fa-react",
    items: [
      "React 19 & TypeScript SPAs",
      "Tailwind CSS Responsive UI",
      "Real-Time WebSocket Feeds",
      "Modern State Management",
    ],
  },
  {
    num: "03",
    tag: "SCALE & AUTOMATION",
    title: "Database & DevOps",
    headline: "Optimized relational storage, containerized workloads, and integrations.",
    tech: "Postgres & Docker",
    accent: "#10B981",
    icon: "fa-solid fa-database",
    items: [
      "PostgreSQL & MySQL Optimization",
      "Docker Alpine Containerization",
      "Midtrans Payment Gateway",
      "WhatsApp Business API Automation",
    ],
  },
];

export default function CapabilitiesPillars() {
  return (
    <section id="capabilities" className="space-y-8 pt-6 select-none">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-5">
        <div>
          <span className="font-mono text-xs text-[#A476FF] uppercase tracking-widest block mb-1">
            [02] Engineering Disciplines
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Core Capabilities
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 max-w-md leading-relaxed md:text-right">
          Production-tested proficiencies across systems programming, reactive web applications, and database optimization.
        </p>
      </div>

      {/* 3 Monumental Horizontal Pillar Cards (Noir Editorial Aesthetic) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {CAPABILITIES.map((cap, idx) => (
          <div
            key={idx}
            className="group relative bg-[#121212]/80 hover:bg-[#161616] border border-white/[0.08] hover:border-white/25 rounded-2xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
          >
            {/* Top Indicator Row */}
            <div className="flex items-center justify-between font-mono text-xs text-slate-500 mb-6 border-b border-white/[0.06] pb-4">
              <span className="font-display text-2xl text-white/30 group-hover:text-white transition-colors">
                {cap.num}
              </span>
              <span className="text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-white/5 border border-white/5 text-slate-300">
                {cap.tag}
              </span>
            </div>

            {/* Title & Headline */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <i className={`${cap.icon} text-lg`} style={{ color: cap.accent }}></i>
                <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                  {cap.title}
                </h3>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed font-normal">
                {cap.headline}
              </p>
            </div>

            {/* List of Skills (100% of User's Original Bullet Points) */}
            <div className="pt-4 border-t border-white/[0.06] space-y-2.5">
              <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider block">
                Production Mastery:
              </span>
              <ul className="space-y-2">
                {cap.items.map((item, itemIdx) => (
                  <li
                    key={itemIdx}
                    className="flex items-center gap-2.5 text-xs text-slate-300 font-mono group-hover:text-white transition-colors"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#A476FF] transition-colors" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Tech Stamp */}
            <div className="mt-6 pt-4 border-t border-white/[0.04] flex items-center justify-between font-mono text-[11px] text-slate-400">
              <span>Stack:</span>
              <span className="text-white font-semibold">{cap.tech}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
