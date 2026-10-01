import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoWall from "./components/LogoWall";
import CapabilitiesPillars from "./components/CapabilitiesPillars";
import Projects from "./components/Projects";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactSection from "./components/ContactSection";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <div className="bg-[#0a0a0a] text-[#ededed] min-h-screen selection:bg-white selection:text-black relative overflow-x-hidden bg-grid-pattern">
      
      {/* Cinematic Ambient Atmosphere Overlays */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#a476ff14] via-transparent to-transparent blur-[140px] pointer-events-none -z-10" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[400px] bg-[#00add808] blur-[160px] pointer-events-none -z-10" />

      {/* 1. FLOATING MINIMALIST EDITORIAL NAVBAR */}
      <Navbar />

      <main className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-24 sm:gap-32 pb-20">
        
        {/* 2. MONUMENTAL HERO SECTION (High-Contrast Noir Typography & Depth Layer) */}
        <Hero />

        {/* 3. CONTINUOUS LOGO WALL (Tech Stack Marquee Ticker) */}
        <div className="pt-4 border-y border-white/[0.06] py-6 -mx-6 sm:-mx-8 lg:-mx-12 px-6 sm:px-8 lg:px-12 bg-[#0c0c0c]/60 backdrop-blur-sm">
          <LogoWall />
        </div>

        {/* 4. CORE CAPABILITIES (3-Pillar Executive Architectural Breakdown) */}
        <CapabilitiesPillars />

        {/* 5. SELECTED ENGINEERING PROJECTS & CASE STUDIES */}
        <Projects />

        {/* 6. CHRONOLOGICAL EXPERIENCE & TIMELINE */}
        <ExperienceTimeline />

        {/* 7. CONTACT BILLBOARD & EDITORIAL FOOTER */}
        <ContactSection />

      </main>

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}
