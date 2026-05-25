import React, { useState } from "react";
import TiltCard from "./TiltCard";
import Reveal from "./Reveal";

export default function Projects({ activeTheme }) {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "ayobuatbaik.com",
      stack: "laravel",
      url: "https://ayobuatbaik.com",
      image: "/image/Porto1.avif",
      icon: "fa-solid fa-heart-circle-check",
      desc: "Platform donasi online terpercaya mendukung berbagai program sosial dan kemanusiaan.",
      tags: ["#Laravel", "#Tailwind", "#MySQL"],
      bgGradient: "from-laravel-bg to-slate-950",
      tagStyle:
        "bg-laravel-primary/20 border-laravel-primary/40 text-laravel-primary",
      accentColor: "text-laravel-primary",
      hoverColor: "group-hover:text-red-500",
      glowOverlay: "bg-red-500/5",
    },
    {
      title: "andreraditya.guru",
      stack: "laravel",
      url: "https://andreraditya.guru",
      image: "/image/andreradityaguru.avif",
      tag: "Profile",
      icon: "fa-solid fa-graduation-cap",
      desc: "Web Pribadi Ustad Andre raditya.",
      tags: ["#Laravel", "#Blade", "#REST_API"],
      bgGradient: "from-laravel-bg to-slate-950",
      tagStyle:
        "bg-laravel-primary/20 border-laravel-primary/40 text-laravel-primary",
      accentColor: "text-laravel-primary",
      hoverColor: "group-hover:text-red-500",
      glowOverlay: "bg-red-500/5",
    },
    {
      title: "selfa.sch",
      stack: "react",
      image: "/image/selfa.avif",
      url: "https://selfa.sch",
      tag: "Profile",
      icon: "fa-solid fa-school-flag",
      desc: "Situs web modern dan interaktif yang dirancang untuk Sekolah Islam Selfa di Klaten, Indonesia.",
      tags: ["#React.js", "#Tailwind", "#SinglePage"],
      bgGradient: "from-javascript-bg to-slate-950",
      tagStyle: "bg-yellow-500/20 border-yellow-500/40 text-yellow-500",
      accentColor: "text-yellow-500",
      hoverColor: "group-hover:text-yellow-500",
      glowOverlay: "bg-yellow-500/5",
    },
  ];

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 relative bg-slate-100/30 dark:bg-black/10 z-10"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3
              className="font-mono text-xs uppercase tracking-widest text-glow"
              style={{ color: activeTheme.accent }}
            >
              [03] Projects
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 font-sans tracking-tight">
              Hasil Karya & Proyek Web
            </h2>
          </div>

          <div className="flex items-center gap-1.5 bg-slate-200/50 dark:bg-white/5 p-1 rounded-xl w-fit border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-700 dark:text-white">
            <button
              onClick={() => setFilter("all")}
              className={`filter-btn px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === "all"
                  ? "bg-white dark:bg-white/10 shadow-sm text-slate-900 dark:text-white"
                  : "text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("laravel")}
              className={`filter-btn px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                filter === "laravel"
                  ? "bg-white dark:bg-white/10 shadow-sm text-slate-900 dark:text-white"
                  : "text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Laravel
            </button>
            <button
              onClick={() => setFilter("react")}
              className={`filter-btn px-4 py-2 rounded-lg font-medium transition-all duration-300 font-sans ${
                filter === "react"
                  ? "bg-white dark:bg-white/10 shadow-sm text-slate-900 dark:text-white"
                  : "text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              React
            </button>
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          id="projects-grid"
        >
          {projects.map((project, index) => {
            const isMatch = filter === "all" || project.stack === filter;
            if (!isMatch) return null;

            return (
              <Reveal
                key={index}
                className="h-full flex flex-col transition-all duration-500"
              >
                <TiltCard
                  accent={activeTheme.accent}
                  accentGlow={activeTheme.accentGlow}
                  className="project-card rounded-2xl overflow-hidden flex flex-col h-full transition-all duration-500 group"
                  style={{ borderColor: "var(--border-color)" }}
                >
                  {/* Browser Mockup Header */}
                  <div className="bg-slate-100/80 dark:bg-black/40 px-4 py-2 border-b border-slate-200/50 dark:border-white/5 flex items-center justify-between relative z-20 select-none">
                    <div className="flex items-center gap-1">
                      <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                      <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
                    </div>
                    <div className="font-mono text-[9px] text-slate-500 dark:text-white/40 flex items-center gap-1 bg-white/5 dark:bg-black/20 px-3 py-0.5 rounded-md border border-slate-200 dark:border-white/5 max-w-[150px] truncate">
                      <i className="fa-solid fa-lock text-[8px] text-green-500"></i>
                      <span>{project.url.replace("https://", "")}</span>
                    </div>
                    <div className="w-[20px]"></div>
                  </div>

                  {/* Browser Screen / Screenshot Wrapper */}
                  <div className="h-44 overflow-hidden relative border-b border-slate-200/50 dark:border-white/5 group-hover:cursor-pointer">
                    {/* Hover overlay light bloom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none"></div>
                    
                    {/* Floating Icon Badge */}
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md border border-white/10 w-8 h-8 rounded-lg flex items-center justify-center z-15 shadow-md">
                      <i className={`${project.icon} ${project.accentColor} text-sm`}></i>
                    </div>

                    {/* Screenshot image */}
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105 group-[.is-mobile-active]:scale-105"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h4
                        className={`font-sans text-lg font-bold text-slate-800 dark:text-white transition-colors duration-300 ${project.hoverColor}`}
                      >
                        {project.title}
                      </h4>
                      <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed font-medium">
                        {project.desc}
                      </p>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/5 font-mono text-[10px]">
                      <div className="flex gap-1.5 text-slate-400 dark:text-white/45">
                        {project.tags.map((tag, tIdx) => (
                          <span key={tIdx}>{tag}</span>
                        ))}
                      </div>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-slate-700 dark:text-white hover:underline flex items-center gap-1 font-sans font-bold"
                      >
                        LAUNCH_APP{" "}
                        <i className="fa-solid fa-arrow-up-right-from-square text-[8px]"></i>
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
