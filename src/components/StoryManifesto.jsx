import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { LINKEDIN_URL } from "../constants/links";

gsap.registerPlugin(ScrollTrigger);

export default function StoryManifesto() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
          once: true,
        },
      });

      // 1. Subtitle Tag
      tl.from(".profile-tag", {
        opacity: 0,
        y: 15,
        duration: 0.4,
        ease: "power2.out",
        clearProps: "all",
      });

      // 2. Bold 3-line Headline Reveal
      tl.from(
        ".profile-title-line",
        {
          yPercent: 100,
          opacity: 0,
          stagger: 0.08,
          duration: 0.6,
          ease: "power3.out",
          clearProps: "all",
        },
        "-=0.2"
      );

      // 3. Narrative Text Paragraphs
      tl.from(
        ".profile-narrative p",
        {
          opacity: 0,
          y: 15,
          stagger: 0.08,
          duration: 0.5,
          ease: "power2.out",
          clearProps: "all",
        },
        "-=0.3"
      );

      // 4. Action Buttons
      tl.from(
        ".profile-cta a",
        {
          opacity: 0,
          y: 10,
          stagger: 0.06,
          duration: 0.4,
          ease: "power2.out",
          clearProps: "all",
        },
        "-=0.3"
      );

      // 5. Right Dossier Frame
      tl.from(
        ".dossier-frame",
        {
          opacity: 0,
          y: 25,
          duration: 0.6,
          ease: "power2.out",
          clearProps: "all",
        },
        "-=0.4"
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="manifesto"
      className="w-full bg-[#EAE7E1] text-[#0A0A0A] py-16 sm:py-24 border-b border-black/10 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left Column: Bold Editorial Narrative (Exact Mafia "THE STORY" Layout) */}
        <div className="lg:col-span-6 space-y-6">
          <span className="profile-tag font-mono text-xs uppercase tracking-[0.25em] text-neutral-600 block">
            [02] THE PROFILE &amp; PHILOSOPHY
          </span>

          <h2 className="font-syne font-black text-4xl sm:text-6xl md:text-7xl tracking-tighter uppercase leading-[0.9] text-[#0A0A0A]">
            <div className="overflow-hidden">
              <span className="profile-title-line block">PRECISION.</span>
            </div>
            <div className="overflow-hidden">
              <span className="profile-title-line block">RESILIENCE.</span>
            </div>
            <div className="overflow-hidden">
              <span className="profile-title-line block">MASTERY.</span>
            </div>
          </h2>

          <div className="profile-narrative space-y-3 font-sans text-xs sm:text-sm text-neutral-800 leading-relaxed max-w-lg font-normal">
            <p>
              Saya adalah <strong>Full-Stack Software Engineer</strong> yang berfokus pada rekayasa backend performa tinggi (<strong>Go, Gin</strong>), sistem web enterprise yang scalable (<strong>Laravel</strong>), dan antarmuka web modern yang responsif (<strong>React</strong>).
            </p>
            <p className="text-neutral-700">
              Bagi saya, rekayasa perangkat lunak bukan sekadar membuat fitur berjalan, melainkan membangun arsitektur 3-tier yang kokoh, kueri database yang teroptimasi, dan integrasi real-time yang terbukti tangguh di bawah beban production nyata.
            </p>
          </div>

          <div className="profile-cta pt-2 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-block px-7 py-3.5 bg-[#0A0A0A] text-white font-mono text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-neutral-800 transition-all shadow-md active:scale-95"
            >
              EXPLORE WORKS
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-black/30 text-[#0A0A0A] font-mono text-xs uppercase tracking-widest font-bold rounded-sm hover:bg-black/5 transition-all active:scale-95"
            >
              <i className="fa-brands fa-linkedin text-sm"></i>
              <span>LINKEDIN</span>
            </a>
          </div>
        </div>

        {/* Right Column: Cinematic Editorial Portrait (Using User's Real Photo with Noir Grade) */}
        <div className="lg:col-span-6 flex justify-center lg:justify-end">
          <div className="dossier-frame relative w-full max-w-[440px] bg-[#0A0A0A] p-2.5 sm:p-3 rounded-sm border border-black/20 shadow-2xl overflow-hidden group">
            {/* Top Dossier Meta Bar */}
            <div className="flex items-center justify-between pb-2.5 px-2 border-b border-white/10 text-neutral-400 font-mono text-[10px]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="text-white font-bold tracking-wider uppercase">PROFILE DOSSIER // RH-01</span>
              </div>
              <span className="text-neutral-400 font-mono">INDONESIA (UTC+7)</span>
            </div>

            {/* Cinematic Portrait Frame */}
            <div className="relative aspect-[4/5] sm:aspect-[3/4] overflow-hidden rounded-sm mt-2 bg-[#0A0A0A] border border-white/10">
              <img
                src="/images/raihan-profile.jpg"
                alt="Raihan Hamdani - Full-Stack Software Engineer"
                className="dossier-img w-full h-full object-cover object-[center_18%] filter grayscale contrast-125 brightness-[0.80] group-hover:brightness-95 group-hover:contrast-115 group-hover:scale-[1.02] transition-all duration-700 will-change-transform"
              />
              {/* Cinematic Noir Vignette & Bottom Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/25 to-black/20 pointer-events-none" />
              
              {/* Bottom Editorial Badge Overlay */}
              <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between font-mono text-white z-10">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-neutral-400">Full-Stack Software Engineer</p>
                  <h4 className="font-syne font-black text-sm sm:text-base text-white uppercase tracking-tight">Raihan Hamdani</h4>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-sm bg-white/15 backdrop-blur-md border border-white/20 text-neutral-200 uppercase tracking-wider font-semibold">
                  Go • Laravel • React
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
