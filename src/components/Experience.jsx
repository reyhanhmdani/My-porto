import React from 'react';
import Reveal from './Reveal';

export default function Experience({ activeTheme }) {
  const experiences = [
    {
      year: '2025 - 2026',
      title: 'IT & Full-Stack Developer | Digital Strategist Intern',
      company: 'Yayasan Sayf El Falah (Klaten) & B_erl Cosmetics',
      desc: 'Mengabdi secara profesional sebagai IT & Fullstack Developer di Yayasan Sayf El Falah (Klaten). Aktif berkontribusi di organisasi Ayo Buat Baik dan DKM Masjid Salam (Selfa), bertanggung jawab melakukan rebuild web application Ayo Buat Baik, membangun platform selfa.sch.id, serta melakukan rebuild andreraditya.guru di samping merancang proyek eksperimental lokal. Secara simultan, didelegasikan selama 4 bulan di B_erl Cosmetics sebagai Meta Ads Intern untuk menganalisis dashboard periklanan, mengoptimasi konversi pemasaran digital, serta memetakan formula konten kreatif berpotensi viral berbasis data.',
      align: 'left'
    },
    {
      year: '2024 - 2025',
      title: 'Full-Stack Developer',
      company: 'Ecosystem Enterprise Project',
      desc: 'Fase transisi strategis dari spesialisasi backend menuju kapabilitas Fullstack Developer. Menjadikan Laravel sebagai pilar utama dalam membangun dan menyusun arsitektur sistem web secara menyeluruh. Di periode ini pula, saya mulai memperluas keahlian front-end dengan bereksperimen menggunakan React.js pada berbagai proyek lokal guna merancang antarmuka yang dinamis dan interaktif.',
      align: 'right'
    },
    {
      year: '2022 - 2024',
      title: 'Junior PHP & Go Backend Developer',
      company: 'Pondok IT Yogyakarta',
      desc: 'Menempuh pendidikan dan riset intensif pengembangan sistem di Pondok IT Yogyakarta. Berfokus penuh pada perancangan RESTful API, penanganan query relasional, serta penguasaan arsitektur perangkat lunak berbasis Clean Code dan implementasi ketat prinsip DRY (Don\'t Repeat Yourself) untuk mengeliminasi redundansi kode.',
      align: 'left'
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative overflow-hidden z-10">
      <div className="max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-xl mx-auto">
          <h3 className="font-mono text-xs uppercase tracking-widest text-glow" style={{ color: activeTheme.accent }}>
            [04] Experience
          </h3>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-sans">
            Pengalaman & Perjalanan Karir
          </h2>
          <p className="text-slate-500 dark:text-white/50 text-xs md:text-sm font-mono mt-1">
            Riwayat pekerjaan dan proyek yang saya jalankan
          </p>
        </div>

        {/* TIMELINE PATHWAY */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Glowing Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200 dark:bg-white/10 -translate-x-1/2">
            <div
              className="sticky top-[50%] h-[30%] w-full"
              style={{
                backgroundImage: 'linear-gradient(to bottom, transparent, var(--accent), transparent)'
              }}
            ></div>
          </div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <Reveal key={index} className="relative flex flex-col md:grid md:grid-cols-2 items-start md:items-center gap-8 md:gap-0 group">
                {/* Glowing Dot on timeline */}
                <div
                  className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full border-4 border-[#030712] -translate-x-1/2 z-10 transition-all duration-500 group-hover:scale-150 shadow-[0_0_10px_var(--accent-glow)]"
                  style={{ backgroundColor: activeTheme.accent }}
                ></div>

                {exp.align === 'left' ? (
                  <>
                    <div className="w-full md:text-right pr-0 md:pr-8 pl-8 md:pl-0">
                      <span className="font-mono text-xs font-bold font-sans" style={{ color: activeTheme.accent }}>
                        {exp.year}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white mt-1 font-sans">
                        {exp.title}
                      </h4>
                      <p className="font-mono text-[11px] text-slate-500 dark:text-white/40 font-sans">{exp.company}</p>
                      <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed mt-2 font-medium">
                        {exp.desc}
                      </p>
                    </div>
                    <div className="hidden md:block"></div>
                  </>
                ) : (
                  <>
                    <div className="hidden md:block"></div>
                    <div className="w-full pl-8 md:pl-8">
                      <span className="font-mono text-xs font-bold font-sans" style={{ color: activeTheme.accent }}>
                        {exp.year}
                      </span>
                      <h4 className="text-base sm:text-lg font-bold text-slate-800 dark:text-white mt-1 font-sans">
                        {exp.title}
                      </h4>
                      <p className="font-mono text-[11px] text-slate-500 dark:text-white/40 font-sans">{exp.company}</p>
                      <p className="text-xs text-slate-600 dark:text-white/60 leading-relaxed mt-2 font-medium">
                        {exp.desc}
                      </p>
                    </div>
                  </>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
