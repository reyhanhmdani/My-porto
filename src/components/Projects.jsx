import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Reveal from "./Reveal";

function ProjectModal({ project, onClose, activeTheme = { accent: "#A476FF" } }) {
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
    <div className="fixed inset-0 z-[9999] bg-[#0A0A0A]/95 backdrop-blur-2xl text-neutral-100 flex flex-col overflow-hidden animate-in fade-in duration-200">
      
      {/* Modal Sticky Top Header Bar */}
      <div className="bg-[#0A0A0A]/95 backdrop-blur-xl px-4 sm:px-8 py-3 sm:py-3.5 border-b border-white/10 flex items-center justify-between gap-3 sm:gap-4 select-none shrink-0 z-30">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          <div className="hidden sm:flex w-9 h-9 sm:w-10 sm:h-10 rounded-sm bg-neutral-900 border border-white/15 items-center justify-center text-base sm:text-lg text-white shrink-0">
            <i className={project.icon}></i>
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.15em] text-neutral-400 truncate max-w-[130px] sm:max-w-none block">
                {project.category}
              </span>
              <span className="hidden sm:inline-block w-1 h-1 rounded-full bg-neutral-600"></span>
              <span className="hidden sm:inline-block font-mono text-[10px] text-emerald-400 font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded-sm bg-emerald-500/10 border border-emerald-500/20">
                {isMobileFrame ? "Mobile First View" : "Desktop Web View"}
              </span>
            </div>
            <h3 className="text-base sm:text-xl md:text-2xl font-syne font-black text-white uppercase tracking-tight truncate leading-tight mt-0.5">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Device Mode Switcher (Visible if project supports mobile or has dual modes) */}
          {hasMobileImages && hasDesktopImages && (
            <div className="flex items-center p-0.5 sm:p-1 rounded-sm bg-neutral-950 border border-white/15 font-mono text-[10px] sm:text-[11px]">
              <button
                onClick={() => handleDeviceChange("desktop")}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-sm transition-all cursor-pointer flex items-center gap-1.5 uppercase tracking-wider ${
                  !isMobileFrame
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
                title={`Mode Tampilan Desktop (${project.desktopLabel || "Admin"})`}
              >
                <i className="fa-solid fa-laptop text-[10px] sm:text-[11px]"></i>
                <span className="hidden md:inline">
                  {project.desktopLabel ? `Desktop (${project.desktopLabel})` : "Desktop (Admin)"}
                </span>
                <span className="hidden sm:inline md:hidden">Desktop</span>
                <span className="sm:hidden text-[10px]">Web</span>
              </button>
              <button
                onClick={() => handleDeviceChange("mobile")}
                className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-sm transition-all cursor-pointer flex items-center gap-1.5 uppercase tracking-wider ${
                  isMobileFrame
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-neutral-400 hover:text-white"
                }`}
                title={`Mode Tampilan Smartphone (${project.mobileLabel || "User"})`}
              >
                <i className="fa-solid fa-mobile-screen-button text-[10px] sm:text-[11px]"></i>
                <span className="hidden md:inline">
                  {project.mobileLabel ? `Mobile (${project.mobileLabel})` : "Mobile (User)"}
                </span>
                <span className="hidden sm:inline md:hidden">Mobile</span>
                <span className="sm:hidden text-[10px]">App</span>
              </button>
            </div>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="hidden md:flex items-center gap-1.5 px-3.5 py-2 rounded-sm bg-neutral-900 hover:bg-neutral-800 border border-white/15 text-neutral-300 hover:text-white font-mono text-xs uppercase tracking-wider transition-colors"
            >
              <i className="fa-brands fa-github text-sm"></i> REPO
            </a>
          )}

          <a
            href={project.url}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-sm font-mono text-xs font-bold uppercase tracking-wider text-black bg-white hover:bg-neutral-200 transition-all duration-200 shadow-sm"
          >
            KUNJUNGI LIVE <i className="fa-solid fa-arrow-up-right-from-square text-[9px]"></i>
          </a>

          <button
            onClick={onClose}
            className="px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-sm bg-neutral-900 hover:bg-neutral-800 border border-white/15 flex items-center gap-2 text-neutral-300 hover:text-white transition-colors cursor-pointer font-mono text-xs uppercase tracking-wider"
            title="Tutup (ESC)"
            aria-label="Close fullscreen modal"
          >
            <span className="hidden sm:inline">TUTUP</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[9px] bg-white/10 rounded-sm border border-white/10 text-neutral-400 font-mono">ESC</kbd>
            <i className="fa-solid fa-xmark text-sm"></i>
          </button>
        </div>
      </div>

      {/* Main Scrollable Canvas */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-8 md:px-12 py-8 max-w-7xl mx-auto w-full">
        {/* Mobile View Mode */}
        {isMobileFrame ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Realistic Phone Mockup */}
            <div className="lg:col-span-5 flex flex-col items-center lg:sticky lg:top-4">
              {/* Phone Device Chassis */}
              <div className={`relative w-full ${project.mobileContainerClass || "max-w-[320px] sm:max-w-[350px] md:max-w-[365px]"} rounded-[36px] sm:rounded-[40px] border-[2px] border-white/20 bg-[#121212] p-2.5 sm:p-3 shadow-2xl flex flex-col items-center shrink-0`}>
                {/* Subtle Phone Speaker Grill */}
                <div className="w-12 h-1 rounded-full bg-white/20 mb-2 shrink-0"></div>

                {/* Screen Viewport */}
                <div className={`relative w-full ${project.mobileAspect || "aspect-[628/938]"} rounded-[24px] sm:rounded-[28px] overflow-hidden bg-black select-none border border-white/10 group/screen`}>
                  <div
                    className="flex h-full w-full transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${modalSlideIdx * 100}%)` }}
                  >
                    {images.map((imgSrc, idx) => (
                      <div
                        key={idx}
                        className="w-full h-full shrink-0 relative bg-black flex items-center justify-center"
                      >
                        <img
                          src={imgSrc}
                          alt={`${project.title} mobile preview ${idx + 1}`}
                          className="w-full h-full object-contain block select-none"
                        />
                      </div>
                    ))}
                  </div>

                  {/* Left & Right Chevrons directly on image */}
                  {images.length > 1 && (
                    <>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSlideIdx(
                            (prev) => (prev - 1 + images.length) % images.length
                          );
                        }}
                        className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl z-20"
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
                        className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-xl z-20"
                        title="Slide Selanjutnya"
                        aria-label="Next Slide"
                      >
                        <i className="fa-solid fa-chevron-right text-xs"></i>
                      </button>

                      {/* Pagination Dots on Screen */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/15 z-20 shadow-md">
                        {images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={(e) => {
                              e.stopPropagation();
                              setModalSlideIdx(idx);
                            }}
                            className={`h-1.5 rounded-full transition-all cursor-pointer ${
                              idx === modalSlideIdx
                                ? "w-5 bg-white"
                                : "w-1.5 bg-neutral-500 hover:bg-neutral-300"
                            }`}
                            aria-label={`Slide ${idx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Subtle Bottom Phone Chin */}
                <div className="w-20 sm:w-24 h-1 rounded-full bg-white/20 mt-2 shrink-0"></div>
              </div>

              {/* Status Caption */}
              <div className="mt-3 flex items-center gap-2 font-mono text-[11px] text-neutral-400 text-center">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>
                  {project.title === "ReyClinic"
                    ? modalSlideIdx === 0
                      ? "Layar 1: Beranda & Alur Antrean Pasien"
                      : "Layar 2: EMR Rekam Medis & Pembayaran QRIS"
                    : project.title.includes("ayobuatbaik")
                    ? modalSlideIdx === 0
                      ? "Layar 1: Tampilan Mobile Crowdfunding & Kampanye Donatur"
                      : "Layar 2: Transparansi Doa & Alur Donasi Online"
                    : `Layar ${modalSlideIdx + 1} of ${images.length}`} ({modalSlideIdx + 1}/{images.length})
                </span>
              </div>
            </div>

            {/* Right Column: Case Study Narrative */}
            <div className="lg:col-span-7 space-y-8">
              {/* [01] Overview */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                  <span className="font-mono text-xs font-bold text-neutral-400 tracking-[0.2em]">[01]</span>
                  <h4 className="font-syne font-bold text-xs uppercase tracking-[0.2em] text-white">
                    PROJECT OVERVIEW
                  </h4>
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans font-light">
                  {project.longDesc || project.desc}
                </p>
              </div>

              {/* [02] Flow Aplikasi */}
              {project.flow && project.flow.length > 0 && (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                    <span className="font-mono text-xs font-bold text-neutral-400 tracking-[0.2em]">[02]</span>
                    <h4 className="font-syne font-bold text-xs uppercase tracking-[0.2em] text-white">
                      FLOW APLIKASI &amp; ALUR SISTEM
                    </h4>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {project.flow.map((item, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-sm bg-[#121212] border border-white/10 space-y-2 hover:border-white/30 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-sm bg-white text-black">
                            {item.step}
                          </span>
                          <span className="font-syne text-xs font-bold text-white uppercase tracking-wide">
                            {item.title}
                          </span>
                        </div>
                        <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* [03] Architecture Highlights */}
              {project.architecture && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                    <span className="font-mono text-xs font-bold text-neutral-400 tracking-[0.2em]">[03]</span>
                    <h4 className="font-syne font-bold text-xs uppercase tracking-[0.2em] text-white">
                      ARSITEKTUR &amp; REKAYASA TEKNIS
                    </h4>
                  </div>
                  <div className="p-4 sm:p-5 rounded-sm bg-[#121212] border border-white/10 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                    {project.architecture}
                  </div>
                </div>
              )}

              {/* [04] Tech Stack */}
              <div className="space-y-3">
                <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                  <span className="font-mono text-xs font-bold text-neutral-400 tracking-[0.2em]">[04]</span>
                  <h4 className="font-syne font-bold text-xs uppercase tracking-[0.2em] text-white">
                    TECHNOLOGIES &amp; TOOLS USED
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2 font-mono text-xs">
                  {(project.techBadges || project.tags).map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-sm bg-neutral-900 border border-white/10 text-neutral-300 font-mono text-[11px] uppercase tracking-wider hover:border-white/30 transition-colors"
                    >
                      {tech}
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
                    className="px-5 py-2.5 rounded-sm bg-neutral-900 hover:bg-neutral-800 border border-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                  >
                    <i className="fa-brands fa-github text-sm"></i> REPOSITORI GIT
                  </a>
                )}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-sm bg-white hover:bg-neutral-200 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] flex items-center gap-2 shadow-sm"
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
            <div className="rounded-sm border border-white/15 bg-[#121212] overflow-hidden shadow-2xl">
              {/* Browser Header Bar */}
              <div className="bg-neutral-950 px-4 py-2.5 border-b border-white/10 flex items-center justify-between font-mono text-xs text-neutral-400 select-none gap-2">
                <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-80"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-80"></span>
                </div>
                <div className="bg-neutral-900/90 px-3 sm:px-4 py-1 rounded-sm border border-white/10 text-[10px] sm:text-[11px] text-neutral-300 min-w-0 max-w-[200px] sm:max-w-md truncate flex items-center gap-2">
                  <i className="fa-solid fa-lock text-[9px] text-emerald-400 shrink-0"></i>
                  <span className="truncate">{project.url}</span>
                </div>
                <span className="text-[11px] text-neutral-400 font-mono shrink-0">
                  {modalSlideIdx + 1} / {images.length}
                </span>
              </div>

              {/* Image Viewport */}
              <div className="relative w-full aspect-[16/9] max-h-[580px] bg-black flex items-center justify-center overflow-hidden select-none">
                <div
                  className="flex h-full w-full transition-transform duration-500 ease-out"
                  style={{ transform: `translateX(-${modalSlideIdx * 100}%)` }}
                >
                  {images.map((imgSrc, idx) => (
                    <div key={idx} className="w-full h-full shrink-0 relative bg-black flex items-center justify-center">
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
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg z-20"
                      aria-label="Previous Slide"
                    >
                      <i className="fa-solid fa-chevron-left text-sm"></i>
                    </button>
                    <button
                      onClick={() =>
                        setModalSlideIdx((prev) => (prev + 1) % images.length)
                      }
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/80 hover:bg-white hover:text-black text-white border border-white/20 flex items-center justify-center transition-all cursor-pointer shadow-lg z-20"
                      aria-label="Next Slide"
                    >
                      <i className="fa-solid fa-chevron-right text-sm"></i>
                    </button>

                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/15 z-20">
                      {images.map((_, idx) => (
                        <button
                          key={idx}
                          onClick={() => setModalSlideIdx(idx)}
                          className={`h-1.5 rounded-full transition-all cursor-pointer ${
                            idx === modalSlideIdx
                              ? "w-6 bg-white"
                              : "w-2 bg-neutral-500 hover:bg-neutral-300"
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
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                    <span className="font-mono text-xs font-bold text-neutral-400 tracking-[0.2em]">[01]</span>
                    <h4 className="font-syne font-bold text-xs uppercase tracking-[0.2em] text-white">
                      PROJECT OVERVIEW
                    </h4>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-sans font-light">
                    {project.longDesc || project.desc}
                  </p>
                </div>

                {/* [03] Architecture */}
                {project.architecture && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                      <span className="font-mono text-xs font-bold text-neutral-400 tracking-[0.2em]">[03]</span>
                      <h4 className="font-syne font-bold text-xs uppercase tracking-[0.2em] text-white">
                        ARSITEKTUR &amp; REKAYASA TEKNIS
                      </h4>
                    </div>
                    <div className="p-4 sm:p-5 rounded-sm bg-[#121212] border border-white/10 text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed">
                      {project.architecture}
                    </div>
                  </div>
                )}
              </div>

              <div className="lg:col-span-7 space-y-6">
                {/* [02] Flow */}
                {project.flow && project.flow.length > 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                      <span className="font-mono text-xs font-bold text-neutral-400 tracking-[0.2em]">[02]</span>
                      <h4 className="font-syne font-bold text-xs uppercase tracking-[0.2em] text-white">
                        FLOW APLIKASI &amp; ALUR SISTEM
                      </h4>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {project.flow.map((item, idx) => (
                        <div
                          key={idx}
                          className="p-4 rounded-sm bg-[#121212] border border-white/10 space-y-2 hover:border-white/30 transition-colors"
                        >
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[11px] font-bold px-2 py-0.5 rounded-sm bg-white text-black">
                              {item.step}
                            </span>
                            <span className="font-syne text-xs font-bold text-white uppercase tracking-wide">
                              {item.title}
                            </span>
                          </div>
                          <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                            {item.desc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* [04] Tech Stack */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                    <span className="font-mono text-xs font-bold text-neutral-400 tracking-[0.2em]">[04]</span>
                    <h4 className="font-syne font-bold text-xs uppercase tracking-[0.2em] text-white">
                      TECHNOLOGIES &amp; TOOLS USED
                    </h4>
                  </div>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    {(project.techBadges || project.tags).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-sm bg-neutral-900 border border-white/10 text-neutral-300 font-mono text-[11px] uppercase tracking-wider hover:border-white/30 transition-colors"
                      >
                        {tech}
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
                      className="px-5 py-2.5 rounded-sm bg-neutral-900 hover:bg-neutral-800 border border-white/20 text-white font-mono text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
                    >
                      <i className="fa-brands fa-github text-sm"></i> REPOSITORI GIT
                    </a>
                  )}
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="px-5 py-2.5 rounded-sm bg-white hover:bg-neutral-200 text-black font-bold font-mono text-xs uppercase tracking-wider transition-all duration-200 hover:scale-[1.02] flex items-center gap-2 shadow-sm"
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

function ProjectCard({ project, onOpenModal }) {
  const images = project.images || [project.image];
  const primaryImg = images[0] || "";
  const hasDualMode = Boolean(project.mobileImages && project.desktopImages);

  return (
    <div
      onClick={() => onOpenModal(project)}
      className="bg-[#121212] hover:bg-[#181818] border border-white/10 hover:border-white/30 rounded-sm overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl cursor-pointer select-none"
    >
      {/* 1. Full-Color Screenshot Preview (Natural Colors Preserved) */}
      <div className="relative aspect-[16/10] bg-black overflow-hidden border-b border-white/10">
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
      </div>

      {/* 2. Card Content (Clean & Minimalist, No Clutter) */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-syne font-bold text-lg text-white group-hover:text-white transition-colors truncate uppercase">
              {project.title}
            </h4>
            <span className="text-neutral-400 group-hover:text-white group-hover:translate-x-1 transition-all shrink-0">
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

        {/* Bottom Tags & Detail Action */}
        <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between font-mono text-[10px]">
          <div className="flex flex-wrap gap-1.5 text-neutral-400">
            {project.tags.slice(0, 2).map((tag, tIdx) => (
              <span key={tIdx} className="px-2 py-0.5 rounded-sm bg-white/5 border border-white/10 text-neutral-300">
                {tag}
              </span>
            ))}
          </div>

          <span className="text-white font-mono font-semibold tracking-wider text-[11px] flex items-center gap-1 group-hover:underline transition-all">
            <span>Detail</span>
            <i className="fa-solid fa-chevron-right text-[8px]"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects({ activeTheme = { accent: "#FFFFFF" } }) {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "ReyClinic",
      stack: "golang",
      device: "desktop",
      desktopLabel: "Admin & Dokter",
      mobileLabel: "Pasien",
      mobileAspect: "aspect-[628/938]",
      mobileContainerClass: "max-w-[320px] sm:max-w-[350px] md:max-w-[365px]",
      category: "Full-Stack Healthcare Management System",
      url: "https://clinic-app-bootcamps.vercel.app",
      githubUrl: "https://github.com/reyhanhmdani/Clinic_APP_BOOTCAMPS",
      badgeMetric: "10.29 MB RAM Idle",
      images: [
        "/image/clinic_admin_1.png",
        "/image/clinic_admin_2.png",
        "/image/clinic_admin_3.png",
        "/image/clinic_patient_1.png",
        "/image/clinic_patient_2.png",
        "/images/reyclinic-flowchart.jpg"
      ],
      desktopImages: [
        "/image/clinic_admin_1.png",
        "/image/clinic_admin_2.png",
        "/image/clinic_admin_3.png",
        "/images/reyclinic-flowchart.jpg"
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
        "Eksplorasi migrasi dari Express.js (TypeScript + Prisma) ke Golang (Gin + GORM). Backend kini berjalan sebagai single static binary di dalam Alpine Linux Docker dengan footprint memori sangat hemat (10.29 MB RAM saat idle terverifikasi dengan Cloud PostgreSQL Neon) dan native WebSocket broadcasting tanpa socket eksternal.",
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
      accentColor: "text-[#A476FF]",
      hoverColor: "group-hover:text-[#A476FF]"
    },
    {
      title: "ayobuatbaik.com",
      stack: "laravel",
      device: "desktop",
      desktopLabel: "Admin CMS",
      mobileLabel: "Donatur / User",
      mobileAspect: "aspect-[598/864]",
      mobileContainerClass: "max-w-[320px] sm:max-w-[350px] md:max-w-[365px]",
      category: "Crowdfunding & Social Platform (Admin CMS + Public)",
      url: "https://ayobuatbaik.com",
      badgeMetric: "Rp 95Jt+ Distributed",
      images: [
        "/image/ayobuatbaik_admin_dashboard.png",
        "/image/ayobuatbaik_admin_transactions.png",
        "/image/ayobuatbaik_admin_programs.png",
        "/image/ayobuatbaik_1.png",
        "/image/ayobuatbaik_2.png"
      ],
      desktopImages: [
        "/image/ayobuatbaik_admin_dashboard.png",
        "/image/ayobuatbaik_admin_transactions.png",
        "/image/ayobuatbaik_admin_programs.png"
      ],
      mobileImages: [
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
        "Dibangun di atas ekosistem Laravel teroptimasi, menangani query relasional MySQL, background queue workers untuk follow-up donatur otomatis via WhatsApp Fonnte API, caching data kampanye, dan arsitektur responsif dengan Tailwind CSS.",
      techBadges: [
        "Laravel 11",
        "PHP 8.2+",
        "MySQL",
        "Tailwind CSS",
        "Blade Engine",
        "Admin CMS",
        "Midtrans Snap",
        "WhatsApp API"
      ],
      tags: ["#Laravel", "#AdminCMS", "#MySQL", "#Tailwind", "#Midtrans"],
      accentColor: "text-red-400",
      hoverColor: "group-hover:text-red-400"
    },
    {
      title: "andreraditya.guru",
      stack: "laravel",
      device: "desktop",
      category: "Personal & Education Portal",
      url: "https://andreraditya.guru",
      badgeMetric: "SEO Optimized",
      images: [
        "/image/andreraditya_1.png",
        "/image/andreraditya_2.png"
      ],
      desktopImages: [
        "/image/andreraditya_1.png",
        "/image/andreraditya_2.png"
      ],
      icon: "fa-solid fa-graduation-cap",
      desc: "Web Pribadi Ustadz Andre Raditya dengan modul artikel, jadwal kajian, dan portal materi dakwah.",
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
      accentColor: "text-red-400",
      hoverColor: "group-hover:text-red-400"
    },
    {
      title: "selfa.sch.id",
      stack: "react",
      device: "desktop",
      category: "Institutional & School Portal",
      url: "https://selfa.sch.id",
      badgeMetric: "SPA Architecture",
      images: [
        "/image/porto-selfa.avif",
        "/image/selfa.avif"
      ],
      desktopImages: [
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
      accentColor: "text-amber-400",
      hoverColor: "group-hover:text-amber-400"
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
            Klik kartu mana saja untuk membuka popup modal interaktif, alur flow sistem, serta preview tampilan desktop &amp; mobile.
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

      {/* 4-Column Edition Cards Grid (Exact Mafia Reference Grid) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" id="projects-grid">
        {filteredProjects.map((project) => (
          <Reveal
            key={project.title}
            className="h-full flex flex-col transition-all duration-500"
          >
            <ProjectCard
              project={project}
              onOpenModal={setSelectedProject}
            />
          </Reveal>
        ))}
      </div>

      {/* Fullscreen Interactive Project Detail & Flow Popup Modal */}
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
