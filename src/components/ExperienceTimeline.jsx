import React from "react";

const EXPERIENCES = [
  {
    role: "Fullstack Engineering Graduate",
    org: "PT. DumbWays Indonesia Teknologi",
    period: "2026 (Batch 67)",
    desc: "Intensive full-stack residency: micro-architecture, agile delivery, and built the end-to-end ReyClinic system with Go refactoring.",
    tags: ["Go (Golang)", "Gin Engine", "React 19", "WebSockets", "Clean Architecture"],
  },
  {
    role: "Full-Stack Developer",
    org: "Lembaga Sayf El Falah",
    period: "2025 — 2026",
    desc: "Spearheaded internal institutional digitization, developed selfa.sch.id, and re-architected donation & CMS platforms with database optimization.",
    tags: ["Laravel 11", "MySQL Optimization", "Midtrans Gateway", "Queue Workers"],
  },
  {
    role: "Meta Ads & Traffic Analytics Intern",
    org: "B_ERL Cosmetics",
    period: "2025 (Internship)",
    desc: "Managed Meta Ads campaigns, evaluated creative performance through key ad metrics (CTR, CPC), and analyzed inbound website traffic via Meta Pixel tracking.",
    tags: ["Meta Pixel", "Conversion Analytics", "Traffic Funnels", "Performance Metrics"],
  },
  {
    role: "Backend Engineering Trainee",
    org: "Pondok IT Yogyakarta",
    period: "2022 — 2025",
    desc: "Mastered 3-tier clean architecture, RESTful API design in Go & PHP, Swagger/OpenAPI documentation, and relational schema optimization.",
    tags: ["Go", "PHP", "3-Tier Architecture", "REST APIs", "Relational Schemas"],
  },
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="space-y-10 pt-6 select-none">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/[0.08] pb-5">
        <div>
          <span className="font-mono text-xs text-[#A476FF] uppercase tracking-widest block mb-1">
            [04] Chronology &amp; Career
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white uppercase">
            Experience &amp; Education
          </h2>
        </div>
        <p className="font-mono text-xs text-slate-400 max-w-md leading-relaxed md:text-right">
          A continuous record of engineering apprenticeships, institutional digitization, and production deliveries.
        </p>
      </div>

      {/* Connected Chronological Timeline (High-Contrast Noir Editorial) */}
      <div className="relative max-w-4xl mx-auto pl-6 sm:pl-8 border-l border-white/15 space-y-12">
        {EXPERIENCES.map((item, idx) => (
          <div key={idx} className="relative group">
            {/* Luminous Node on Vertical Line */}
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#0a0a0a] border-2 border-white/40 group-hover:border-[#A476FF] group-hover:scale-125 transition-all duration-300">
              <div className="w-1.5 h-1.5 rounded-full bg-white/60 group-hover:bg-[#A476FF] mx-auto mt-[2px] transition-colors" />
            </div>

            {/* Card Content */}
            <div className="bg-[#121212]/80 hover:bg-[#161616] border border-white/[0.08] hover:border-white/20 rounded-2xl p-6 sm:p-7 transition-all duration-300 space-y-3 shadow-lg">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.06] pb-3">
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight font-sans">
                    {item.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    <span className="text-xs sm:text-sm text-slate-300 font-mono">
                      {item.org}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold text-[#A476FF] bg-[#a476ff15] border border-[#a476ff30] px-3 py-1 rounded-full w-fit shrink-0">
                  {item.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-normal">
                {item.desc}
              </p>

              {/* Technologies Tags */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] text-slate-400 bg-white/5 border border-white/5 px-2.5 py-0.5 rounded-md"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
