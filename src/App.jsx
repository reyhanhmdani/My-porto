import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StoryManifesto from "./components/StoryManifesto";
import TechnicalStandards from "./components/TechnicalStandards";
import LogoWall from "./components/LogoWall";
import Projects from "./components/Projects";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactSection from "./components/ContactSection";
import { SpeedInsights } from "@vercel/speed-insights/react";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  useEffect(() => {
    const handleRefresh = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("load", handleRefresh);
    window.addEventListener("resize", handleRefresh);

    const timer1 = setTimeout(handleRefresh, 300);
    const timer2 = setTimeout(handleRefresh, 800);
    const timer3 = setTimeout(handleRefresh, 1500);

    return () => {
      window.removeEventListener("load", handleRefresh);
      window.removeEventListener("resize", handleRefresh);
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);
  return (
    <div className="bg-[#0A0A0A] text-[#ededed] min-h-screen selection:bg-[#0A0A0A] selection:text-white relative overflow-x-hidden">
      
      {/* 1. FLOATING MINIMALIST NAVBAR (Fades in when scrolling past Hero) */}
      <Navbar />

      {/* 2. MONUMENTAL HERO SECTION (Exact Mafia 1:1 Layout & Colors) */}
      {/* Contains Ivory Stage + Flush Editorial Top Bar + Wide Typography + Standing Cutout + 4-Column Noir Capabilities Strip */}
      <Hero />

      {/* 3. THE MANIFESTO SECTION (Exact Mafia "THE STORY" 1:1 Layout) */}
      <StoryManifesto />

      {/* 4. TECHNICAL ASSURANCE STRIP (Exact Mafia 5-Item Horizontal Utility Bar) */}
      <TechnicalStandards />

      {/* 5. DEEP NOIR TECHNICAL PORTFOLIO STAGE */}
      <main className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex flex-col gap-24 sm:gap-32 pt-16 pb-12">
        
        {/* Continuous Tech Stack Marquee Ticker */}
        <div className="border-y border-white/[0.06] py-6 -mx-6 sm:-mx-10 lg:-mx-16 px-6 sm:px-10 lg:px-16 bg-[#0c0c0c]/80 backdrop-blur-sm">
          <LogoWall />
        </div>

        {/* 6. CHOOSE YOUR EDITION (4-Column Projects Grid matching Mafia Game Editions) */}
        <Projects />

        {/* 7. CAREER CHRONOLOGY (Sharp Noir Ledger Cards) */}
        <ExperienceTimeline />

      </main>

      {/* 8. EDITORIAL 5-COLUMN DIRECTORY FOOTER (Exact Mafia Bottom Footer) */}
      <ContactSection />

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}
