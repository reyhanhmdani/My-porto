import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const EXPERIENCES = [
  {
    num: "01",
    role: "Fullstack Engineering Graduate",
    org: "PT. DumbWays Indonesia Teknologi",
    period: "2026 (Batch 67)",
    desc: "Intensive full-stack residency: micro-architecture, agile delivery, and built the end-to-end ReyClinic system with Go refactoring.",
    tags: ["Go (Golang)", "Gin Engine", "React 19", "WebSockets", "Clean Architecture"],
  },
  {
    num: "02",
    role: "Full-Stack Developer",
    org: "Lembaga Sayf El Falah",
    period: "2025 — 2026",
    desc: "Spearheaded internal institutional digitization, developed selfa.sch.id, and re-architected donation & CMS platforms with database optimization.",
    tags: ["Laravel 11", "MySQL Optimization", "Midtrans Gateway", "Queue Workers"],
  },
  {
    num: "03",
    role: "Meta Ads & Traffic Analytics Intern",
    org: "B_ERL Cosmetics",
    period: "2025 (Internship)",
    desc: "Managed Meta Ads campaigns, evaluated creative performance through key ad metrics (CTR, CPC), and analyzed inbound website traffic via Meta Pixel tracking.",
    tags: ["Meta Pixel", "Conversion Analytics", "Traffic Funnels", "Performance Metrics"],
  },
  {
    num: "04",
    role: "Backend Engineering Trainee",
    org: "Pondok IT Yogyakarta",
    period: "2022 — 2025",
    desc: "Mastered 3-tier clean architecture, RESTful API design in Go & PHP, Swagger/OpenAPI documentation, and relational schema optimization.",
    tags: ["Go", "PHP", "3-Tier Architecture", "REST APIs", "Relational Schemas"],
  },
];

export default function ExperienceTimeline() {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.from(".career-card-wrapper", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 92%",
          toggleActions: "play none none none",
          once: true,
        },
        y: 20,
        opacity: 0,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
        clearProps: "all",
      });
    },
    { scope: containerRef }
  );

  return (
    <section ref={containerRef} id="experience" className="space-y-8 pt-6 select-none">
      {/* Editorial Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-5">
        <div>
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-[0.2em] block mb-1">
            [05] Career Chronology
          </span>
          <h2 className="font-syne font-black text-3xl sm:text-5xl tracking-tight text-white uppercase">
            EXPERIENCE &amp; EDUCATION
          </h2>
        </div>
        <p className="font-mono text-xs text-neutral-400 max-w-md leading-relaxed md:text-right font-light">
          A continuous record of engineering apprenticeships, institutional digitization, and production deliveries.
        </p>
      </div>

      {/* Editorial Ledger Cards with GSAP Stagger */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {EXPERIENCES.map((item, idx) => (
          <div key={idx} className="career-card-wrapper h-full">
            <div className="career-card bg-[#121212] border border-white/10 hover:border-white/30 rounded-sm p-6 sm:p-7 flex flex-col justify-between space-y-4 group transition-all duration-300 hover:-translate-y-1 shadow-lg h-full">
              {/* Top Indicator */}
              <div className="flex items-center justify-between font-mono text-xs border-b border-white/10 pb-3">
                <span className="font-sans font-black text-xl text-neutral-600 group-hover:text-white transition-colors">
                  {item.num}
                </span>
                <span className="text-[11px] font-semibold text-neutral-300 bg-white/5 border border-white/10 px-2.5 py-0.5 rounded-sm">
                  {item.period}
                </span>
              </div>

              {/* Role & Org */}
              <div className="space-y-1.5">
                <h3 className="font-syne font-bold text-base sm:text-lg text-white tracking-wide uppercase">
                  {item.role}
                </h3>
                <p className="font-mono text-xs text-neutral-300 tracking-wider uppercase font-semibold">
                  {item.org}
                </p>
                <p className="text-xs text-neutral-400 leading-relaxed font-normal pt-1 font-sans">
                  {item.desc}
                </p>
              </div>

              {/* Tech Tags */}
              <div className="pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                {item.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] text-neutral-400 bg-black/40 border border-white/5 px-2 py-0.5 rounded-sm"
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
