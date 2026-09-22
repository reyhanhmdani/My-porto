import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Reveal from "./Reveal";

function ProjectModal({ project, onClose, activeTheme }) {
  const [modalSlideIdx, setModalSlideIdx] = useState(0);
  const [deviceMode, setDeviceMode] = useState(project.device || "desktop");

  const hasMobileImages = Boolean(project.mobileImages && project.mobileImages.length > 0);
  const hasDesktopImages = Boolean(project.desktopImages && project.desktopImages.length > 0);

  const images =
    deviceMode === "mobile"
      ? (project.mobileImages || project.images || [project.image])
      : (project.desktopImages || project.images || [project.image]);

  const handleDeviceChange = (mode) => {
    setDeviceMode(mode);
    setModalSlideIdx(0);
  };

  // Close on ESC & lock body scroll
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onClose]);

  const isMobileFrame = deviceMode === "mobile";

  return (
    <div
      className="fixed inset-0 z-[9999] bg-[#030712] text-slate-100 flex flex-col overflow-hidden animate-in fade-in duration-200"
    >
      {/* Modal Sticky Top Header Bar */}
      <div className="bg-slate-950/90 backdrop-blur-xl px-4 sm:px-8 py-3.5 border-b border-white/10 flex items-center justify-between gap-4 select-none shrink-0 z-30">
        <div className="flex items-center gap-3 min-w-0">
          <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-lg shrink-0">
            <i className={`${project.icon} ${project.accentColor}`}></i>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                {project.category}
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-slate-600"></span>
              <span className="hidden sm:inline-block font-mono text-[10px] text-emerald-400 font-semibold uppercase">
                {isMobileFrame ? "Mobile First View" : "Desktop Web View"}
              </span>
            </div>
            <h3 className="text-base sm:text-xl font-bold text-white font-sans truncate">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Device Mode Switcher (Visible if project supports mobile or has dual modes) */}
          {(hasMobileImages || hasDesktopImages) && (
            <div className="flex items-center p-1 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px]">
              <button
                onClick={() => handleDeviceChange("desktop")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  !isMobileFrame
                    ? "bg-white/15 text-white font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Mode Tampilan Desktop (Admin & Dokter)"
              >
                <i className="fa-solid fa-laptop text-[11px]"></i>
                <span className="hidden md:inline">
                  {hasDesktopImages ? "Desktop (Admin)" : "Desktop"}
                </span>
                <span className="md:hidden">Desktop</span>
              </button>
              <button
                onClick={() => handleDeviceChange("mobile")}
                className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer flex items-center gap-1.5 ${
                  isMobileFrame
                    ? "bg-white/15 text-cyan-300 font-semibold shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
                title="Mode Tampilan Smartphone (Pasien)"
              >
                <i className="fa-solid fa-mobile-screen-button text-[11px]"></i>
                <span className="hidden md:inline">
                  {hasMobileImages ? "Mobile (Pasien)" : "Mobile"}
                </span>
                <span className="md:hidden">Mobile</span>
              </button>
            </div>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-white font-mono text-xs transition-colors"
            >
              <i className="fa-brands fa-github text-sm"></i> REPO
            </a>
          )}

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-xl font-mono text-xs font-semibold text-black transition-all duration-200 hover:scale-105 shadow-md"
            style={{ backgroundColor: activeTheme.accent }}
          >
            KUNJUNGI LIVE <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
          </a>

          <button
            onClick={onClose}
            className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 flex items-center gap-2 text-slate-300 hover:text-white transition-colors cursor-pointer font-mono text-xs"
            title="Tutup (ESC)"
            aria-label="Close fullscreen modal"
          >
            <span className="hidden sm:inline">TUTUP</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] bg-white/10 rounded border border-white/10 text-slate-400">ESC</kbd>
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>
      </div>

      {/* Main Scrollable Canvas */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 md:px-12 py-8 max-w-7xl mx-auto w-full">
        {/* Mobile View Mode */}
        {isMobileFrame ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Realistic Phone Mockup (Full-size uncropped screenshot 628x938) */}
            <div className="lg:col-span-5 flex flex-col items-center lg:sticky lg:top-4">
              {/* Phone Device Chassis */}
              <div className="relative w-full max-w-[320px] sm:max-w-[350px] md:max-w-[365px] rounded-[38px] sm:rounded-[42px] border-[3px] border-slate-700/80 bg-slate-900 p-2 sm:p-2.5 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_25px_rgba(16,185,129,0.08)] flex flex-col items-center shrink-0">
                {/* Subtle Phone Speaker Grill (Bezel exterior, zero obstruction on screen) */}
                <div className="w-12 h-1 rounded-full bg-slate-700/80 mb-2 shrink-0"></div>

                {/* Screen Viewport (Matched to exact 628:938 aspect ratio) */}
                <div className="relative w-full aspect-[628/938] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-slate-950 select-none shadow-inner group/screen">
                  <div
                    className="flex h-full w-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${modalSlideIdx * 100}%)` }}
                  >
                    {images.map((imgSrc, idx) => (
                      <div
                        key={idx}
                        className="w-full h-full shrink-0 relative bg-slate-950 flex items-center justify-center"
                      >
                        <img
                          src={imgSrc}
                          alt={`${project.title} mobile preview ${idx + 1}`}
                          className="w-full h-full object-contain block select-none"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Left & Right Chevrons directly on image (Kaya slide lain) */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSlideIdx(
                            (prev) => (prev - 1 + images.length) % images.length
                          );
                        }}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-110 shadow-xl z-20"
                        title="Slide Sebelumnya"
                        aria-label="Previous Slide"
                      >
                        <i className="fa-solid fa-chevron-left text-xs"></i>
                      </button>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSlideIdx(
                            (prev) => (prev + 1) % images.length
                          );
                        }}
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/75 hover:bg-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer hover:scale-110 shadow-xl z-20"
                        title="Slide Selanjutnya"
                        aria-label="Next Slide"
                      >
                        <i className="fa-solid fa-chevron-right text-xs"></i>
                      </button>

                      {/* Pagination Dots on Screen */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/70 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 z-20 shadow-md">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalSlideIdx(idx);
                            }}
                            className={`h-1.5 rounded-full transition-all cursor-pointer ${
                              idx === modalSlideIdx
                                ? "w-4 bg-white"
                                : "w-1.5 bg-white/40 hover:bg-white/70"
                            }`}
                            aria-label={`Slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Subtle Bottom Phone Chin Indicator */}
                <div className="w-20 sm:w-24 h-1 rounded-full bg-slate-700/50 mt-2 shrink-0"></div>
              </div>

              {/* Status Caption */}
              <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-slate-400 text-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>
                  {modalSlideIdx === 0
                    ? "Layar 1: Beranda & Alur Antrean Pasien"
                    : "Layar 2: EMR Rekam Medis & Pembayaran QRIS"} ({modalSlideIdx + 1}/{images.length})
                </span>
              </div>
            </div>

            {/* Right Column: Case Study Narrative */}
            <div className="lg:col-span-7 space-y-8">
              {/* Overview */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  [01] Project Overview
                </h4>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {project.longDesc || project.desc}
                </p>
              </div>

              {/* Flow Aplikasi */}
              {project.flow && project.flow.length > 0 && (
                <div className="space-y-4">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    [02] Flow Aplikasi &amp; Alur Sistem
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {project.flow.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 hover:border-white/15 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span
                            className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-white/10"
                            style={{ color: activeTheme.accent }}
                          >
                            {item.step}
                          </span>
                          <span className="font-sans text-xs font-bold text-white">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-xs text-slate-400 leading-relaxed font-normal">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architecture Highlights */}
              {project.architecture && (
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    [03] Arsitektur &amp; Rekayasa Teknis
                  </h4>
                  <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.architecture}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className="space-y-3">
                <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                  [04] Technologies &amp; Tools Used
                </h4>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {project.techBadges?.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold"
                    >
                      {tech}
                    </span>
                  )) ||
                    project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              </div>

              {/* Bottom Action Links */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white font-semibold transition-colors flex items-center gap-2 font-mono text-xs"
                  >
                    <i className="fa-brands fa-github"></i> REPOSITORI GIT
                  </a>
                )}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-xl text-black font-bold transition-transform hover:scale-105 flex items-center gap-2 font-mono text-xs"
                  style={{ backgroundColor: activeTheme.accent }}
                >
                  LAUNCH PROJECT <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                </a>
              </div>
            </div>
          </div>
        ) : (
          /* Desktop Landscape Mode */
          <div className="space-y-10">
            {/* Wide Panoramic Browser Frame */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 overflow-hidden shadow-2xl">
              {/* Browser Header Bar */}
              <div className="bg-black/60 px-4 py-2.5 border-b border-white/10 flex items-center justify-between font-mono text-xs text-slate-400 select-none">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
                </div>
                <div className="bg-white/5 px-4 py-1 rounded-md border border-white/5 text-[11px] text-slate-300 max-w-md truncate flex items-center gap-2">
                  <i className="fa-solid fa-lock text-[9px] text-emerald-400"></i>
                  <span>{project.url}</span>
                </div>
                <span className="text-[10px] text-slate-400 font-mono">
                  Slide {modalSlideIdx + 1} / {images.length}
                </span>
              </div>

              {/* Image Viewport */}
              <div className="relative w-full aspect-[16/9] max-h-[580px] bg-slate-950 flex items-center justify-center overflow-hidden select-none">
                <div
                  className="flex h-full w-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${modalSlideIdx * 100}%)` }}
                >
                  {images.map((imgSrc, idx) => (
                    <div key={idx} className="w-full h-full shrink-0 relative bg-slate-950 flex items-center justify-center">
                      <img
                        src={imgSrc}
                        alt={`${project.title} preview ${idx + 1}`}
                        className="w-full h-full object-contain object-top"
                      />
                    </div>
                  ))}
                </div>

                {/* Slider Navigation */}
                {images.length > 1 && (
                  <>
                    <button
                      onClick={() =>
                        setModalSlideIdx(
                          (prev) => (prev - 1 + images.length) % images.length
                        )
                      }
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 hover:bg-black text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer hover:scale-110 shadow-lg z-20"
                      aria-label="Previous Slide"
                    >
                      <i className="fa-solid fa-chevron-left text-sm"></i>
                    </button>
                    <button
                      onClick={() =>
                        setModalSlideIdx((prev) => (prev + 1) % images.length)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/75 hover:bg-black text-white border border-white/15 flex items-center justify-center transition-all cursor-pointer hover:scale-110 shadow-lg z-20"
                      aria-label="Next Slide"
                    >
                      <i className="fa-solid fa-chevron-right text-sm"></i>
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 z-20">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setModalSlideIdx(idx)}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            idx === modalSlideIdx
                              ? "w-6 bg-white"
                              : "w-2 bg-white/40 hover:bg-white/70"
                          }`}
                          aria-label={`Slide ${idx + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* 2-Column Details: Overview & Architecture on Left, Flow & Tech on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-5 space-y-6">
                {/* [01] Overview */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    [01] Project Overview
                  </h4>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                    {project.longDesc || project.desc}
                  </p>
                </div>

                {/* [03] Architecture */}
                {project.architecture && (
                  <div className="space-y-3">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                      [03] Arsitektur &amp; Rekayasa Teknis
                    </h4>
                    <div className="p-4 sm:p-5 rounded-2xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {project.architecture}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-7 space-y-6">
                {/* [02] Flow */}
                {project.flow && project.flow.length > 0 && (
                  <div className="space-y-4">
                    <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                      [02] Flow Aplikasi &amp; Alur Sistem
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {project.flow.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-2xl bg-white/5 border border-white/5 space-y-2 hover:border-white/15 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span
                              className="font-mono text-xs font-bold px-2 py-0.5 rounded-md bg-white/10"
                              style={{ color: activeTheme.accent }}
                            >
                              {item.step}
                            </span>
                            <span className="font-sans text-xs font-bold text-white">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-xs text-slate-400 leading-relaxed font-normal">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* [04] Tech Stack */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400">
                    [04] Technologies &amp; Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {project.techBadges?.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold"
                      >
                        {tech}
                      </span>
                    )) ||
                      project.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>

                {/* Bottom Action Links */}
                <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-3">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-white font-semibold transition-colors flex items-center gap-2 font-mono text-xs"
                    >
                      <i className="fa-brands fa-github"></i> REPOSITORI GIT
                    </a>
                  )}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-xl text-black font-bold transition-transform hover:scale-105 flex items-center gap-2 font-mono text-xs"
                    style={{ backgroundColor: activeTheme.accent }}
                  >
                    LAUNCH PROJECT <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ProjectCard({ project, activeTheme, onOpenModal }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const images = project.images || [project.image];
  const isMobileProject = project.device === "mobile";

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const handleSelectDot = (e, index) => {
    e.stopPropagation();
    setCurrentIdx(index);
  };

  const handleLaunch = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onClick={() => onOpenModal(project)}
      className="glass-card rounded-2xl border border-white/10 hover:border-white/30 bg-slate-900/40 hover:bg-slate-900/70 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col h-full overflow-hidden group"
    >
      {/* Browser / Device Mockup Header */}
      <div className="bg-slate-100/80 dark:bg-black/40 px-4 py-2.5 border-b border-slate-200/50 dark:border-white/5 flex items-center justify-between relative z-20 select-none">
        {isMobileProject ? (
          <div className="flex items-center gap-1.5 text-slate-400 font-mono text-[10px]">
            <span className="flex items-center gap-1 text-emerald-400">
              <i className="fa-solid fa-signal text-[8px]"></i>
              <i className="fa-solid fa-wifi text-[8px]"></i>
            </span>
            <span className="text-cyan-400 font-semibold text-[9px]">MOBILE APP</span>
          </div>
        ) : (
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
          </div>
        )}
        <div className="font-mono text-[10px] text-slate-500 dark:text-white/40 flex items-center gap-1.5 bg-white/5 dark:bg-black/20 px-3 py-0.5 rounded-md border border-slate-200 dark:border-white/5 max-w-[170px] truncate">
          {isMobileProject ? (
            <i className="fa-solid fa-mobile-screen text-[9px] text-cyan-400"></i>
          ) : (
            <i className="fa-solid fa-lock text-[8px] text-emerald-400"></i>
          )}
          <span>{project.url.replace("https://", "")}</span>
        </div>
        <span className="font-mono text-[9px] text-slate-400">
          {currentIdx + 1}/{images.length}
        </span>
      </div>

      {/* Slider Area */}
      <div className="h-56 overflow-hidden relative border-b border-slate-200/50 dark:border-white/5 select-none bg-slate-950/80">
        {/* Floating Icon Badge */}
        <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md border border-white/10 w-8 h-8 rounded-lg flex items-center justify-center z-20 shadow-md pointer-events-none">
          <i className={`${project.icon} ${project.accentColor} text-sm`}></i>
        </div>

        {/* Mobile / Web Device Tag */}
        {isMobileProject && (
          <div className="absolute top-3 right-3 bg-cyan-950/80 backdrop-blur-md border border-cyan-500/30 px-2 py-0.5 rounded-md text-[9px] font-mono text-cyan-300 z-20 pointer-events-none flex items-center gap-1">
            <i className="fa-solid fa-mobile-screen-button text-[8px]"></i> Mobile First
          </div>
        )}

        {/* Image Track */}
        <div
          className="flex h-full transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIdx * 100}%)` }}
        >
          {images.map((imgSrc, imgIdx) => {
            const isSlideMobile = imgSrc.includes("patient") || (isMobileProject && !imgSrc.includes("admin"));
            return (
              <div
                key={imgIdx}
                className={`w-full h-full shrink-0 relative flex items-center justify-center ${
                  isSlideMobile ? "bg-slate-950 p-2" : ""
                }`}
              >
                <img
                  src={imgSrc}
                  alt={`${project.title} slide ${imgIdx + 1}`}
                  className={`w-full h-full ${
                    isSlideMobile
                      ? "object-contain rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.8)] border border-white/10 group-hover:scale-105"
                      : "object-cover object-top group-hover:scale-102"
                  } transition-transform duration-500`}
                />
              </div>
            );
          })}
        </div>

        {/* Prev / Next Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/65 hover:bg-black/90 text-white border border-white/15 flex items-center justify-center transition-all duration-200 z-20 opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer"
              title="Slide Sebelumnya"
              aria-label="Previous Slide"
            >
              <i className="fa-solid fa-chevron-left text-[10px]"></i>
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-black/65 hover:bg-black/90 text-white border border-white/15 flex items-center justify-center transition-all duration-200 z-20 opacity-80 hover:opacity-100 hover:scale-110 cursor-pointer"
              title="Slide Selanjutnya"
              aria-label="Next Slide"
            >
              <i className="fa-solid fa-chevron-right text-[10px]"></i>
            </button>

            {/* Pagination Dots */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
              {images.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={(e) => handleSelectDot(e, dotIdx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    dotIdx === currentIdx
                      ? "w-4 bg-white"
                      : "w-1.5 bg-white/40 hover:bg-white/70"
                  }`}
                  aria-label={`Go to slide ${dotIdx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Content Details */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h4
              className={`font-sans text-lg font-bold text-slate-800 dark:text-white transition-colors duration-200 ${project.hoverColor}`}
            >
              {project.title}
            </h4>
            <span className="text-[11px] font-mono text-slate-400 group-hover:text-white transition-colors flex items-center gap-1">
              Flow &amp; Modal <i className="fa-solid fa-arrow-right text-[9px]"></i>
            </span>
          </div>
          <p className="text-xs text-slate-600 dark:text-white/70 leading-relaxed font-normal line-clamp-2">
            {project.desc}
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-white/5 font-mono text-[10px]">
          <div className="flex flex-wrap gap-1.5 text-slate-400 dark:text-white/50">
            {project.tags.slice(0, 3).map((tag, tIdx) => (
              <span key={tIdx}>{tag}</span>
            ))}
          </div>
          <a
            href={project.url}
            onClick={handleLaunch}
            target="_blank"
            rel="noreferrer"
            className="text-slate-700 dark:text-white hover:underline flex items-center gap-1.5 font-sans font-bold shrink-0 ml-2"
          >
            LAUNCH <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ activeTheme }) {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "ReyClinic",
      stack: "golang",
      device: "desktop", // Tampil halaman Admin terlebih dahulu!
      category: "Full-Stack Healthcare Management System",
      url: "https://clinic-app-bootcamps.vercel.app",
      githubUrl: "https://github.com/reyhanhmdani/Clinic_APP_BOOTCAMPS",
      images: [
        "/image/clinic_admin_1.png",
        "/image/clinic_admin_2.png",
        "/image/clinic_admin_3.png",
        "/image/clinic_patient_1.png",
        "/image/clinic_patient_2.png"
      ],
      desktopImages: [
        "/image/clinic_admin_1.png",
        "/image/clinic_admin_2.png",
        "/image/clinic_admin_3.png"
      ],
      mobileImages: [
        "/image/clinic_patient_1.png",
        "/image/clinic_patient_2.png"
      ],
      icon: "fa-solid fa-hospital",
      desc: "Sistem Informasi & Manajemen Klinik Medis terpadu: Dashboard Operasional Dokter & Admin, Antrean WebSocket Real-time, EMR Digital, Apotek, dan Kasir Midtrans QRIS.",
      longDesc:
        "ReyClinic adalah sistem manajemen klinik kesehatan komprehensif yang mendigitalkan seluruh alur pelayanan medis end-to-end: panel dashboard operasional admin & dokter untuk memantau live queue antrean pasien via WebSocket, pencatatan rekam medis elektronik (EMR), manajemen inventaris obat apotek, hingga portal mobile pasien mandiri dan kasir Midtrans Snap QRIS.",
      flow: [
        {
          step: "01",
          title: "Pendaftaran & Antrean Real-Time",
          desc: "Pasien mendaftar mandiri via Google OAuth / NIK, memilih poli dokter, mengambil nomor antrean, dan memantau live queue tanpa refresh berkat native Goroutine WebSocket."
        },
        {
          step: "02",
          title: "Pemeriksaan Dokter & Rekam Medis (EMR)",
          desc: "Dokter memanggil nomor antrean berikutnya, mencatat anamnesis, riwayat diagnosa, tindakan medis, serta menerbitkan resep obat digital langsung ke katalog apotek."
        },
        {
          step: "03",
          title: "Apotek & Farmasi Auto-Stock",
          desc: "Resep dokter muncul otomatis di ruang apotek. Apoteker memvalidasi dan menyiapkan obat, dan stok inventaris terpotong otomatis secara transaksional."
        },
        {
          step: "04",
          title: "Kasir & Pembayaran Midtrans QRIS",
          desc: "Sistem menghitung otomatis total biaya jasa medis dan resep obat. Pasien dapat membayar mandiri via QRIS / VA Midtrans Snap atau tunai di kasir."
        }
      ],
      architecture:
        "Eksplorasi migrasi dari Express.js (TypeScript + Prisma) ke Golang (Gin + GORM). Backend kini berjalan sebagai single static binary di dalam Alpine Linux Docker dengan footprint memori sangat hemat (~18 MB RAM saat idle) dan native WebSocket broadcasting tanpa beban socket eksternal.",
      techBadges: [
        "Golang 1.24 (Gin)",
        "React 19",
        "TypeScript",
        "Goroutines WebSocket",
        "PostgreSQL (Neon Cloud)",
        "Midtrans Snap API",
        "Docker Multi-stage",
        "Zustand",
        "Tailwind CSS"
      ],
      tags: ["#Golang", "#React19", "#WebSocket", "#PostgreSQL", "#Midtrans"],
      accentColor: "text-cyan-400",
      hoverColor: "group-hover:text-cyan-400"
    },
    {
      title: "ayobuatbaik.com",
      stack: "laravel",
      device: "desktop",
      category: "Crowdfunding & Social Platform (Admin CMS + Public)",
      url: "https://ayobuatbaik.com",
      images: [
        "/image/ayobuatbaik_admin_dashboard.png",
        "/image/ayobuatbaik_admin_transactions.png",
        "/image/ayobuatbaik_admin_programs.png",
        "/image/ayobuatbaik_1.png",
        "/image/ayobuatbaik_2.png"
      ],
      icon: "fa-solid fa-heart-circle-check",
      desc: "Platform donasi online & Dashboard CMS Admin: Pengelolaan kampanye, pemantauan transaksi real-time Rp 95Jt+, dan verifikasi donatur otomatis.",
      longDesc:
        "Platform penghimpunan dana publik dan donasi online resmi di bawah naungan Yayasan Sayf El Falah, dilengkapi Dashboard Administrasi komprehensif untuk memantau ratusan transaksi donasi terverifikasi (akumulasi Rp 95+ Juta), manajemen status program donasi, dan transparansi penyaluran dana secara akuntabel.",
      flow: [
        {
          step: "01",
          title: "Eksplorasi & Transaksi Donasi Publik",
          desc: "Donatur memilih program donasi terverifikasi, memasukkan nominal, doa, dan memilih kanal pembayaran digital multi-rekening."
        },
        {
          step: "02",
          title: "Dashboard Metrik & Rekapitulasi Admin",
          desc: "Pengelola yayasan memantau grafik donasi masuk, total transaksi (500+ transaksi), dan akumulasi dana (Rp 95Jt+) secara real-time."
        },
        {
          step: "03",
          title: "Validasi Transaksi & Ekspor Data",
          desc: "Tabel transaksi donasi mendata status pembayaran otomatis (Success/Pending), kode transaksi, serta fitur ekspor CSV donatur."
        },
        {
          step: "04",
          title: "CMS Kelola Program & Penyaluran",
          desc: "Admin menerbitkan program donasi baru, mengatur target capaian dana, memvalidasi verifikasi, dan mempublikasikan kabar salur."
        }
      ],
      architecture:
        "Dibangun di atas ekosistem Laravel teroptimasi, menangani query relasional MySQL, caching data kampanye, dan arsitektur responsif dengan Tailwind CSS.",
      techBadges: ["Laravel", "MySQL", "Tailwind CSS", "Blade Engine", "Admin CMS", "Monolith"],
      tags: ["#Laravel", "#AdminCMS", "#MySQL", "#Tailwind"],
      accentColor: "text-red-500",
      hoverColor: "group-hover:text-red-500"
    },
    {
      title: "andreraditya.guru",
      stack: "laravel",
      device: "desktop",
      category: "Personal & Education Portal",
      url: "https://andreraditya.guru",
      images: [
        "/image/andreraditya_1.png",
        "/image/andreraditya_2.png"
      ],
      icon: "fa-solid fa-graduation-cap",
      desc: "Web Pribadi Ustad Andre raditya dengan modul artikel, jadwal kajian, dan portal materi dakwah.",
      longDesc:
        "Situs resmi personal branding dan media dakwah edukatif Ustadz Andre Raditya. Menghubungkan jamaah dengan materi kajian eksklusif, jadwal dakwah nasional, dan artikel inspiratif.",
      flow: [
        {
          step: "01",
          title: "Eksplorasi Artikel & Materi",
          desc: "Pengunjung dapat membaca artikel ilmiah populer, materi kajian audio, dan arsip pembelajaran terstruktur."
        },
        {
          step: "02",
          title: "Jadwal Safari Dakwah",
          desc: "Informasi jadwal roadshow dan kajian offline terintegrasi dengan peta lokasi dan link registrasi."
        },
        {
          step: "03",
          title: "Manajemen Konten CMS",
          desc: "Dashboard pengelola untuk mempublikasikan artikel baru, memperbarui agenda, dan mengelola media."
        }
      ],
      architecture:
        "Arsitektur Laravel dengan optimasi SEO tinggi, Fast Server-Side Rendering (SSR) via Blade, dan struktur database efisien.",
      techBadges: ["Laravel", "Blade", "MySQL", "SEO Architecture", "REST API"],
      tags: ["#Laravel", "#Blade", "#REST_API"],
      accentColor: "text-red-500",
      hoverColor: "group-hover:text-red-500"
    },
    {
      title: "selfa.sch",
      stack: "react",
      device: "desktop",
      category: "Institutional & School Portal",
      url: "https://selfa.sch",
      images: [
        "/image/porto-selfa.avif",
        "/image/selfa.avif"
      ],
      icon: "fa-solid fa-school-flag",
      desc: "Situs web modern dan interaktif yang dirancang untuk Sekolah Islam Selfa di Klaten, Indonesia.",
      longDesc:
        "Portal digital terpadu Sekolah Islam Selfa Klaten untuk mengenalkan kurikulum unggulan, pendaftaran peserta didik baru (PPDB online), dan galeri aktivitas santri secara interaktif.",
      flow: [
        {
          step: "01",
          title: "Profil & Informasi Kurikulum",
          desc: "Wali santri mempelajari program tahfidz, fasilitas sekolah, dan nilai-nilai pendidikan islami."
        },
        {
          step: "02",
          title: "Alur Pendaftaran PPDB",
          desc: "Formulir digital interaktif bagi calon santri baru untuk mengunggah data dan berkas administrasi."
        },
        {
          step: "03",
          title: "Papan Informasi & Galeri",
          desc: "Dokumentasi kegiatan santri dan pengumuman akademik berkala yang mudah diakses."
        }
      ],
      architecture:
        "Single Page Application (SPA) berbasis React dengan Vite dan Tailwind CSS yang ringan, cepat dimuat di jaringan seluler, dan responsif.",
      techBadges: ["React.js", "Vite", "Tailwind CSS", "SPA Architecture"],
      tags: ["#React.js", "#Tailwind", "#SinglePage"],
      accentColor: "text-yellow-500",
      hoverColor: "group-hover:text-yellow-500"
    }
  ];

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    return project.stack === filter;
  });

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 relative bg-slate-100/30 dark:bg-black/10 z-10"
    >
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h3
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: activeTheme.accent }}
            >
              [03] Projects
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white mt-1 font-sans tracking-tight">
              Hasil Karya &amp; Proyek Rekayasa
            </h2>
            <p className="text-sm text-slate-500 dark:text-slate-400 max-w-xl mt-1">
              Klik kartu proyek mana saja untuk membuka popup penjelasan detail arsitektur dan alur aplikasinya.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-1.5 bg-slate-200/50 dark:bg-white/5 p-1 rounded-xl w-fit border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-700 dark:text-white">
            <button
              onClick={() => setFilter("all")}
              className={`filter-btn px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                filter === "all"
                  ? "bg-white dark:bg-white/10 shadow-sm text-slate-900 dark:text-white"
                  : "text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("golang")}
              className={`filter-btn px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                filter === "golang"
                  ? "bg-white dark:bg-white/10 shadow-sm text-slate-900 dark:text-white"
                  : "text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Golang
            </button>
            <button
              onClick={() => setFilter("laravel")}
              className={`filter-btn px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                filter === "laravel"
                  ? "bg-white dark:bg-white/10 shadow-sm text-slate-900 dark:text-white"
                  : "text-slate-500 dark:text-white/60 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              Laravel
            </button>
            <button
              onClick={() => setFilter("react")}
              className={`filter-btn px-4 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
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
          {filteredProjects.map((project, index) => (
            <Reveal
              key={index}
              className="h-full flex flex-col transition-all duration-500"
            >
              <ProjectCard
                project={project}
                activeTheme={activeTheme}
                onOpenModal={setSelectedProject}
              />
            </Reveal>
          ))}
        </div>
      </div>

      {/* Project Detail & Flow Popup Modal */}
      {selectedProject &&
        createPortal(
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
            activeTheme={activeTheme}
          />,
          document.body
        )}
    </section>
  );
}
