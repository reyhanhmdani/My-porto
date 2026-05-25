import React from 'react';
import TiltCard from './TiltCard';
import Reveal from './Reveal';

export default function CoreCompetencies({ activeTheme }) {
  const competencies = [
    { name: 'PHP / Laravel', icon: 'fa-brands fa-laravel', iconColor: 'text-red-500' },
    { name: 'JavaScript / ES6+', icon: 'fa-brands fa-js', iconColor: 'text-yellow-500' },
    { name: 'React.js', icon: 'fa-brands fa-react', iconColor: 'text-cyan-400' },
    { name: 'MySQL / Postgre', icon: 'fa-solid fa-database', iconColor: 'text-blue-500' },
    { name: 'Docker', icon: 'fa-brands fa-docker', iconColor: 'text-blue-400' },
    { name: 'AI Engineering', icon: 'fa-solid fa-microchip', iconColor: 'text-purple-500' },
    { name: 'Go', icon: 'fa-brands fa-golang', iconColor: 'text-cyan-400' },
    { name: 'Performance Ads', icon: 'fa-solid fa-chart-line', iconColor: 'text-orange-500' }
  ];

  return (
    <section id="roles" className="py-24 px-6 md:px-12 relative bg-slate-100/30 dark:bg-black/10 z-10">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-mono text-xs uppercase tracking-widest text-glow" style={{ color: activeTheme.accent }}>
            [02] Core Competencies
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Keahlian & Spesialisasi Sistem
          </h2>
          <p className="text-slate-500 dark:text-white/50 text-xs md:text-sm font-mono mt-1">
            &lt;Teknologi operasional aktif&gt;
          </p>
        </div>

        {/* Grid Layout Terinspirasi dari image_e88ead.png dengan Sentuhan Mewah */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {competencies.map((comp, index) => (
            <Reveal key={index}>
              <TiltCard
                accent={activeTheme.accent}
                accentGlow={activeTheme.accentGlow}
                className="p-6 rounded-xl text-center flex flex-col justify-center items-center gap-3 group cursor-pointer shadow-sm hover:shadow-[0_0_20px_var(--accent-glow)] transition-all duration-300"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <span className={`text-3xl ${comp.iconColor} transition-transform duration-500 group-hover:scale-110`}>
                  <i className={comp.icon}></i>
                </span>
                <span className="font-mono text-xs sm:text-sm font-semibold text-slate-800 dark:text-white tracking-tight">
                  {comp.name}
                </span>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
