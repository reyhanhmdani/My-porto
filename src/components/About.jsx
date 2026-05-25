import React, { useState } from 'react';
import TiltCard from './TiltCard';
import Reveal from './Reveal';

export default function About({ activeTheme }) {
  const [stats, setStats] = useState({
    commits: 0,
    projects: 0,
    coffee: 0,
    hours: 0
  });
  const [countersStarted, setCountersStarted] = useState(false);

  const startCounters = () => {
    if (countersStarted) return;
    setCountersStarted(true);

    const animateVal = (key, maxVal) => {
      let cur = 0;
      const increment = Math.ceil(maxVal / 80);
      const interval = setInterval(() => {
        cur += increment;
        if (cur >= maxVal) {
          setStats(prev => ({ ...prev, [key]: maxVal }));
          clearInterval(interval);
        } else {
          setStats(prev => ({ ...prev, [key]: cur }));
        }
      }, 20);
    };

    animateVal('commits', 450);
    animateVal('projects', 35);
    animateVal('coffee', 120);
    animateVal('hours', 3000);
  };

  return (
    <Reveal id="about" onReveal={startCounters} className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Profile details */}
          <div className="lg:col-span-6 space-y-6">
            <h3 className="font-mono text-xs uppercase tracking-widest text-glow" style={{ color: activeTheme.accent }}>
              [03] Operational Profile
            </h3>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight font-sans">
              Bridging engineering principles with AI acceleration
            </h2>

            <div className="space-y-4 text-slate-600 dark:text-white/70 text-sm md:text-base leading-relaxed font-medium">
              <p>
                I am a Software Developer specializing in the Laravel and Go ecosystems, bridging fundamental
                engineering principles with AI-driven development.
              </p>
              <p>
                With 3 years of experience architecting scalable backends and crafting modern interfaces using Tailwind
                CSS, I actively leverage Artificial Intelligence to accelerate code delivery, solve complex problems, and
                optimize workflows.
              </p>
              <p>
                As an enthusiastic lifelong learner, I am constantly exploring emerging technologies and remain highly
                committed to delivering digital products that are stable, maintainable, and market-fit.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap gap-2.5 font-mono text-xs text-slate-700 dark:text-white">
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-3 py-1.5 rounded-xl">
                <i className="fa-solid fa-brain text-purple-400"></i> AI-Optimized Pipelines
              </div>
              <div className="flex items-center gap-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 px-3 py-1.5 rounded-xl">
                <i className="fa-solid fa-cloud text-blue-400"></i> Cloud Backend Deployment
              </div>
            </div>
          </div>

          {/* Metrics layout */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <TiltCard
              accent={activeTheme.accent}
              accentGlow={activeTheme.accentGlow}
              className="p-6 rounded-2xl relative shadow-sm"
            >
              <span className="font-mono text-4xl font-extrabold text-slate-900 dark:text-white block mb-1" id="stat-commits">
                {stats.commits}+
              </span>
              <span className="font-mono text-[10px] text-slate-500 dark:text-white/50 uppercase tracking-wider block font-sans">
                GitHub Commits
              </span>
              <div className="w-full h-1 mt-4 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: '85%', backgroundColor: activeTheme.accent }}
                ></div>
              </div>
            </TiltCard>

            <TiltCard
              accent={activeTheme.accent}
              accentGlow={activeTheme.accentGlow}
              className="p-6 rounded-2xl relative shadow-sm"
            >
              <span className="font-mono text-4xl font-extrabold text-slate-900 dark:text-white block mb-1" id="stat-projects">
                {stats.projects}+
              </span>
              <span className="font-mono text-[10px] text-slate-500 dark:text-white/50 uppercase tracking-wider block font-sans">
                Completed Repos
              </span>
              <div className="w-full h-1 mt-4 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: '75%', backgroundColor: activeTheme.accent }}
                ></div>
              </div>
            </TiltCard>

            <TiltCard
              accent={activeTheme.accent}
              accentGlow={activeTheme.accentGlow}
              className="p-6 rounded-2xl relative shadow-sm"
            >
              <span className="font-mono text-4xl font-extrabold text-slate-900 dark:text-white block mb-1" id="stat-coffee">
                {stats.coffee}+
              </span>
              <span className="font-mono text-[10px] text-slate-500 dark:text-white/50 uppercase tracking-wider block font-sans">
                Kopi Liter
              </span>
              <div className="w-full h-1 mt-4 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: '90%', backgroundColor: activeTheme.accent }}
                ></div>
              </div>
            </TiltCard>

            <TiltCard
              accent={activeTheme.accent}
              accentGlow={activeTheme.accentGlow}
              className="p-6 rounded-2xl relative shadow-sm"
            >
              <span className="font-mono text-4xl font-extrabold text-slate-900 dark:text-white block mb-1" id="stat-hours">
                {stats.hours}+
              </span>
              <span className="font-mono text-[10px] text-slate-500 dark:text-white/50 uppercase tracking-wider block font-sans">
                Coding Hours
              </span>
              <div className="w-full h-1 mt-4 rounded-full bg-slate-200 dark:bg-white/10 overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-1000"
                  style={{ width: '95%', backgroundColor: activeTheme.accent }}
                ></div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
