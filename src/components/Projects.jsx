import React, { useState } from "react";
import Reveal from "./Reveal";

function ProjectCard({ project }) {
  const images = project.images || [project.image];
  const primaryImg = images[0] || "";
  const hasDualMode = Boolean(project.mobileImages && project.desktopImages);

  return (
    <div className="bg-[#121212] hover:bg-[#161616] border border-white/10 hover:border-white/30 rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl select-none h-full">
      {/* 1. Full-Color Screenshot Preview (Direct Link to Live Demo) */}
      <a
        href={project.url}
        target="_blank"
        rel="noreferrer"
        className="relative aspect-[16/10] bg-black overflow-hidden border-b border-white/10 block cursor-pointer"
        title={`Buka ${project.title}`}
      >
        <img
          src={primaryImg}
          alt={project.title}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-10 transition-opacity" />

        {/* Stack Tag Pill */}
        <div className="absolute top-3 left-3 z-10">
          <span className="font-mono text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-sm bg-black/85 backdrop-blur-md border border-white/15 text-white">
            {project.stack}
          </span>
        </div>

        {/* Responsive Badge for projects with both Desktop & Mobile */}
        {hasDualMode && (
          <div className="absolute top-3 right-3 z-10">
            <span className="font-mono text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-sm bg-black/80 backdrop-blur-md border border-white/10 text-emerald-400 flex items-center gap-1">
              <i className="fa-solid fa-mobile-screen text-[8px]"></i>
              <span>Desktop &amp; Mobile</span>
            </span>
          </div>
        )}

        {/* Hover Quick Cue */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <span className="font-mono text-xs font-bold uppercase tracking-wider text-black bg-white px-3 py-1.5 rounded-sm shadow-xl flex items-center gap-1.5">
            <span>Buka Web</span>
            <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
          </span>
        </div>
      </a>

      {/* 2. Card Content (Clean & Minimalist, No Clutter) */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="font-syne font-bold text-lg text-white hover:text-neutral-200 transition-colors truncate uppercase group/title flex items-center gap-2"
            >
              <span>{project.title}</span>
            </a>
            <span className="text-neutral-500 group-hover:text-white transition-colors shrink-0">
              <i className="fa-solid fa-arrow-up-right-from-square text-[10px]"></i>
            </span>
          </div>
          <p className="font-mono text-[11px] text-neutral-400 truncate">
            {project.category}
          </p>
          <p className="text-xs text-neutral-400 font-normal line-clamp-2 leading-relaxed pt-1 font-sans">
            {project.desc}
          </p>
        </div>

        {/* 3. Bottom Tags & Direct Action Buttons */}
        <div className="pt-3 border-t border-white/[0.08] flex items-center justify-between gap-2">
          {/* Tech Badges */}
          <div className="flex flex-wrap gap-1.5 text-neutral-400 min-w-0">
            {project.tags.slice(0, 2).map((tag, tIdx) => (
              <span
                key={tIdx}
                className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-neutral-300 font-mono text-[10px] truncate"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Direct Action CTAs: Repo + Live Demo */}
          <div className="flex items-center gap-1.5 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-2.5 py-1 rounded-sm bg-neutral-900 hover:bg-neutral-800 border border-white/15 text-neutral-300 hover:text-white font-mono text-[11px] uppercase tracking-wider transition-colors flex items-center gap-1.5"
                title="Buka Repositori GitHub"
              >
                <i className="fa-brands fa-github text-xs"></i>
                <span className="hidden sm:inline">Repo</span>
              </a>
            )}
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1 rounded-sm bg-white hover:bg-neutral-200 text-black font-mono font-bold text-[11px] uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] flex items-center gap-1.5 shadow-sm"
              title="Kunjungi Website Langsung"
            >
              <span>Live</span>
              <i className="fa-solid fa-arrow-up-right-from-square text-[8px]"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "ReyClinic",
      stack: "golang",
      category: "Full-Stack Healthcare Management System",
      url: "https://clinic-app-bootcamps.vercel.app",
      githubUrl: "https://github.com/reyhanhmdani/Clinic_APP_BOOTCAMPS",
      images: [
        "/image/clinic_admin_1.png",
        "/image/clinic_admin_2.png",
        "/image/clinic_admin_3.png",
        "/image/clinic_patient_1.png",
        "/image/clinic_patient_2.png",
        "/images/reyclinic-flowchart.jpg"
      ],
      mobileImages: [
        "/image/clinic_patient_1.png",
        "/image/clinic_patient_2.png"
      ],
      desktopImages: [
        "/image/clinic_admin_1.png",
        "/image/clinic_admin_2.png",
        "/image/clinic_admin_3.png",
        "/images/reyclinic-flowchart.jpg"
      ],
      icon: "fa-solid fa-hospital",
      desc: "Sistem Informasi & Manajemen Klinik Medis terpadu: Dashboard Dokter & Admin, Antrean WebSocket Real-time, EMR Digital, Apotek, dan Kasir Midtrans QRIS.",
      tags: ["#Golang", "#React19", "#WebSocket", "#PostgreSQL", "#Midtrans"]
    },
    {
      title: "ayobuatbaik.com",
      stack: "laravel",
      category: "Crowdfunding & Social Platform (Admin CMS + Public)",
      url: "https://ayobuatbaik.com",
      images: [
        "/image/ayobuatbaik_admin_dashboard.png",
        "/image/ayobuatbaik_admin_transactions.png",
        "/image/ayobuatbaik_admin_programs.png",
        "/image/ayobuatbaik_1.png",
        "/image/ayobuatbaik_2.png"
      ],
      mobileImages: [
        "/image/ayobuatbaik_1.png",
        "/image/ayobuatbaik_2.png"
      ],
      desktopImages: [
        "/image/ayobuatbaik_admin_dashboard.png",
        "/image/ayobuatbaik_admin_transactions.png",
        "/image/ayobuatbaik_admin_programs.png"
      ],
      icon: "fa-solid fa-heart-circle-check",
      desc: "Platform donasi online & Dashboard CMS Admin: Pengelolaan kampanye, pemantauan transaksi real-time Rp 95Jt+, dan verifikasi donatur otomatis.",
      tags: ["#Laravel", "#AdminCMS", "#MySQL", "#Tailwind", "#Midtrans"]
    },
    {
      title: "andreraditya.guru",
      stack: "laravel",
      category: "Personal & Education Portal",
      url: "https://andreraditya.guru",
      images: [
        "/image/andreraditya_1.png",
        "/image/andreraditya_2.png"
      ],
      icon: "fa-solid fa-graduation-cap",
      desc: "Web Pribadi Ustadz Andre Raditya dengan modul artikel, jadwal kajian, dan portal materi dakwah.",
      tags: ["#Laravel", "#Blade", "#SEO", "#REST_API"]
    },
    {
      title: "selfa.sch.id",
      stack: "react",
      category: "Institutional & School Portal",
      url: "https://selfa.sch.id",
      images: [
        "/image/porto-selfa.avif",
        "/image/selfa.avif"
      ],
      icon: "fa-solid fa-school-flag",
      desc: "Situs web modern dan interaktif yang dirancang untuk Sekolah Islam Selfa di Klaten, Indonesia.",
      tags: ["#React.js", "#Tailwind", "#SPA"]
    }
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.stack === filter;
  });

  return (
    <section id="projects" className="space-y-8 pt-6 select-none">
      {/* Portfolio Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-5">
        <div>
          <span className="font-mono text-xs text-neutral-400 uppercase tracking-[0.2em] block mb-1">
            [04] Selected Works
          </span>
          <h2 className="font-syne font-black text-3xl sm:text-5xl tracking-tight text-white uppercase">
            Engineering Projects
          </h2>
          <p className="text-xs sm:text-sm text-neutral-400 max-w-xl mt-1.5 leading-relaxed font-sans font-light">
            Koleksi aplikasi dan sistem web yang dideploy secara publik. Akses langsung live demo dan source code repositori.
          </p>
        </div>

        {/* Portfolio Clean Filter Tabs */}
        <div className="flex items-center gap-1 bg-neutral-950 p-1 rounded-sm border border-white/15 font-mono text-xs text-neutral-300 w-fit self-start md:self-end">
          {["all", "golang", "laravel", "react"].map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-3.5 py-1.5 rounded-sm font-semibold transition-all duration-200 cursor-pointer uppercase tracking-wider text-[11px] ${
                filter === tab
                  ? "bg-white text-black font-bold shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {tab === "all" ? "All Works" : tab === "golang" ? "Go" : tab === "laravel" ? "Laravel" : "React"}
            </button>
          ))}
        </div>
      </div>

      {/* 4-Column Edition Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" id="projects-grid">
        {filteredProjects.map((project) => (
          <Reveal
            key={project.title}
            className="h-full flex flex-col transition-all duration-500"
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
