import React, { useState } from "react";
import LetterGlitch from "./components/LetterGlitch";
import SkillsAccordion from "./components/SkillsAccordion";
import Projects from "./components/Projects";
import LogoWall from "./components/LogoWall";
import Navbar from "./components/Navbar";
import { SpeedInsights } from "@vercel/speed-insights/react";

const EXPERIENCES_DATA = [
  {
    role: "Fullstack Engineering Graduate",
    org: "PT. DumbWays Indonesia Teknologi",
    period: "2026 (Batch 67)",
    desc: "Intensive full-stack residency: micro-architecture, agile delivery, and built the end-to-end ReyClinic system with Go refactoring.",
  },
  {
    role: "Full-Stack Developer",
    org: "Lembaga Sayf El Falah",
    period: "2025 — 2026",
    desc: "Spearheaded internal institutional digitization, developed selfa.sch.id, and re-architected donation & CMS platforms with database optimization.",
  },
  {
    role: "Intern (Meta Ads & IT Ops)",
    org: "B_ERL Cosmetics",
    period: "2025 (Internship)",
    desc: "Ad tech performance tracking, conversion tracking integration, and cross-divisional IT workflow support.",
  },
  {
    role: "Backend Engineering Trainee",
    org: "Pondok IT Yogyakarta",
    period: "2022 — 2025",
    desc: "Mastered 3-tier clean architecture, RESTful API design in Go & PHP, Swagger/OpenAPI documentation, and relational schema optimization.",
  },
];

export default function App() {
  return (
    <div className="bg-[#101010] text-[#dfdfdf] min-h-screen selection:bg-[#a476ff] selection:text-[#101010] relative overflow-x-hidden">
      
      {/* Ambient Quiet Glows (Static & Lightweight) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-[#a476ff15] via-blue-500/5 to-transparent blur-[120px] pointer-events-none -z-10"></div>
      <div className="fixed bottom-0 right-0 w-[500px] h-[350px] bg-[#a476ff08] blur-[140px] pointer-events-none -z-10"></div>

      {/* 1. FLOATING MINIMALIST NAVBAR (Exact DarkMinimal Layout) */}
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 pt-32 pb-24 flex flex-col gap-24 sm:gap-32">

        {/* 2. HERO SECTION */}
        <section id="home" className="space-y-4 pt-4 text-[var(--white)]">
          <p className="text-base sm:text-lg text-[var(--white-icon)]">
            Hi, I'm <strong className="text-white font-semibold">Raihan Hamdani</strong>
          </p>

          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-8 md:gap-6">
            <h1 className="text-white text-5xl md:text-6xl font-medium text-pretty leading-none shrink-0">
              Full-Stack <br /> Software Engineer
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[var(--white-icon)] leading-relaxed max-w-xl">
              Building resilient web platforms and real-time APIs with{" "}
              <span className="text-[var(--sec)] shiny-sec font-semibold">Go</span>,{" "}
              <span className="text-[var(--sec)] shiny-sec font-semibold">Laravel</span>, and{" "}
              <span className="text-[var(--sec)] shiny-sec font-semibold">React</span>. Focused on clean code, database optimization, and scalable production systems.
            </p>
          </div>

          {/* Social Icons row (Square rounded button style from dark-minimal) */}
          <div className="flex justify-start gap-3 pt-3 md:pt-4">
            <a
              target="_blank"
              href="https://github.com/reyhanhmdani"
              aria-label="GitHub"
              className="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)] w-12 h-12 flex items-center justify-center text-xl shadow-lg"
            >
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              target="_blank"
              href="https://linkedin.com/in/raihan-hamdani"
              aria-label="LinkedIn"
              className="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)] w-12 h-12 flex items-center justify-center text-xl shadow-lg"
            >
              <i className="fa-brands fa-linkedin text-[#0A66C2]"></i>
            </a>
            <a
              href="mailto:rey7dan7@gmail.com"
              aria-label="Email"
              className="text-[var(--white-icon)] hover:text-white transition duration-300 ease-in-out border border-[var(--white-icon-tr)] p-3 rounded-xl bg-[#1414149c] hover:bg-[var(--white-icon-tr)] w-12 h-12 flex items-center justify-center text-xl shadow-lg"
            >
              <i className="fa-regular fa-envelope text-[#A476FF]"></i>
            </a>
          </div>
        </section>

        {/* 3. LOGO WALL (Continuous Infinite Running Marquee Ticker) */}
        <LogoWall />

        {/* 4. WHAT I DO (SkillsAccordion + LetterGlitch Showcase) */}
        <section id="what-i-do" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Accordion */}
            <div className="lg:col-span-7">
              <SkillsAccordion />
            </div>

            {/* Right: Contained LetterGlitch Animation Box */}
            <div className="lg:col-span-5 flex justify-center w-full">
              <div className="w-full max-w-[360px] h-[340px] rounded-3xl overflow-hidden shadow-2xl p-1 bg-gradient-to-br from-[#ffffff10] via-transparent to-[#a476ff20]">
                <LetterGlitch
                  glitchColors={["#5e4491", "#A476FF", "#241a38"]}
                  glitchSpeed={35}
                  outerVignette={true}
                  centerVignette={false}
                  smooth={true}
                />
              </div>
            </div>

          </div>
        </section>

        {/* 5. FEATURED PROJECTS SHOWCASE (Detailed Cards, Multi-Screen Switcher & Interactive Modal) */}
        <Projects />

        {/* 6. EXPERIENCE & EDUCATION */}
        <section id="experience" className="space-y-6">
          <div className="border-b border-[#ffffff10] pb-4">
            <span className="font-mono text-xs text-[#A476FF] uppercase tracking-widest block mb-1">
              Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Experience &amp; Education
            </h2>
          </div>

          <div className="space-y-4">
            {EXPERIENCES_DATA.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#1414149c] border border-[#ffffff15] hover:border-[#a476ff30] rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all"
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white text-base">{item.role}</h3>
                    <span className="text-slate-500">•</span>
                    <span className="text-slate-400 text-sm">{item.org}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                    {item.desc}
                  </p>
                </div>
                <span className="font-mono text-xs text-[#A476FF] sm:text-right shrink-0">
                  {item.period}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* 7. CONTACT & FOOTER */}
        <section id="contact" className="bg-[#1414149c] border border-[#ffffff15] rounded-3xl p-8 sm:p-12 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <span className="font-mono text-xs text-[#A476FF] uppercase tracking-widest">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Let's Build Something Exceptional
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Available for Full-Stack &amp; Backend Software Engineering positions. Feel free to reach out directly via email or LinkedIn.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="mailto:rey7dan7@gmail.com"
              className="px-6 py-3 rounded-xl bg-white text-black font-bold text-sm hover:bg-slate-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10"
            >
              <i className="fa-regular fa-envelope text-xs"></i>
              <span>Send an Email</span>
            </a>
            <a
              href="https://linkedin.com/in/raihan-hamdani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#ffffff08] border border-[#ffffff20] hover:border-white text-white font-medium text-sm transition-all flex items-center gap-2"
            >
              <i className="fa-brands fa-linkedin text-sm text-[#0A66C2]"></i>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/reyhanhmdani"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-[#ffffff08] border border-[#ffffff20] hover:border-white text-white font-medium text-sm transition-all flex items-center gap-2"
            >
              <i className="fa-brands fa-github text-sm"></i>
              <span>GitHub</span>
            </a>
          </div>

          <div className="pt-10 mt-10 border-t border-[#ffffff0a] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-mono gap-3">
            <span>&copy; 2026 Raihan Hamdani. All rights reserved.</span>
            <span>Crafted with Go, React 19, &amp; Tailwind</span>
          </div>
        </section>

      </main>

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}
