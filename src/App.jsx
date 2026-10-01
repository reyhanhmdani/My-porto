import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StoryManifesto from "./components/StoryManifesto";
import LogoWall from "./components/LogoWall";
import Projects from "./components/Projects";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ContactSection from "./components/ContactSection";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  return (
    <div className="bg-[#0A0A0A] text-[#ededed] min-h-screen selection:bg-[#0A0A0A] selection:text-white relative overflow-x-hidden">
      
      {/* 1. FLOATING MINIMALIST NAVBAR (Fades in when scrolling past Hero) */}
      <Navbar />

      {/* 2. MONUMENTAL HERO SECTION (Exact Mafia 1:1 Layout & Colors) */}
      {/* Contains Ivory Stage + Flush Editorial Top Bar + Wide Typography + Standing Cutout + 4-Column Noir Capabilities Strip */}
      <Hero />

      {/* 3. THE MANIFESTO SECTION (Exact Mafia "THE STORY" 1:1 Layout) */}
      <StoryManifesto />

      {/* 4. DEEP NOIR TECHNICAL PORTFOLIO STAGE */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col gap-24 sm:gap-32 pt-16 pb-20">
        
        {/* Continuous Logo Wall (Infinite Tech Marquee Ticker) */}
        <div className="border-y border-white/[0.06] py-6 -mx-6 sm:-mx-8 lg:-mx-12 px-6 sm:px-8 lg:px-12 bg-[#0c0c0c]/60 backdrop-blur-sm">
          <LogoWall />
        </div>

        {/* Selected Engineering Projects & Case Studies (Hero Flagship + Grid) */}
        <Projects />

        {/* Chronological Career Experience & Education */}
        <ExperienceTimeline />

        {/* Contact Billboard & Editorial Footer */}
        <ContactSection />

      </div>

      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </div>
  );
}
