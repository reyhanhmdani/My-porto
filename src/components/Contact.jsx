import React from 'react';
import Reveal from './Reveal';

export default function Contact({ activeTheme, onRedirect }) {
  const handleNavigation = (e, url, platform) => {
    e.preventDefault();
    if (onRedirect) {
      onRedirect(url, platform);
    } else {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const socialLinks = [
    {
      platform: 'LinkedIn',
      username: 'Raihan Hamdani',
      handle: 'linkedin.com/in/raihan-hamdani-51a2b438',
      url: 'https://www.linkedin.com/in/raihan-hamdani-51a2b438a',
      icon: 'fa-brands fa-linkedin-in',
      iconColor: 'text-blue-500'
    },
    {
      platform: 'GitHub',
      username: 'reyhanhmdani',
      handle: '',
      url: 'https://github.com/reyhanhmdani',
      icon: 'fa-brands fa-github',
      iconColor: 'text-slate-900 dark:text-white'
    },
    {
      platform: 'Instagram',
      username: '@r_ee__yyy',
      handle: '',
      url: 'https://www.instagram.com/r_ee__yyy',
      icon: 'fa-brands fa-instagram',
      iconColor: 'text-pink-500'
    },
    {
      platform: 'Email',
      username: 'rey7dan7@gmail.com',
      handle: '',
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=rey7dan7@gmail.com',
      icon: 'fa-solid fa-envelope',
      iconColor: 'text-red-500'
    }
  ];

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative z-10">
      <Reveal className="max-w-6xl mx-auto glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden" style={{ borderColor: 'var(--border-color)' }}>
        <div className="gloss-effect"></div>
        <div
          className="absolute -bottom-10 -right-10 w-64 h-64 bg-laravel-primary/10 rounded-full blur-3xl pointer-events-none transition-colors duration-1000"
          style={{ backgroundColor: activeTheme.accentGlow }}
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">

          {/* LEFT COLUMN: WELCOME MESSAGE & CALL-TO-ACTION */}
          <div className="lg:col-span-7 flex flex-col space-y-6">

            {/* Header section */}
            <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/5 pb-4">
              <span className="font-mono text-xs text-slate-400 uppercase tracking-widest">
                [SYSTEM_STATUS: ONLINE]
              </span>
              <div className="flex items-center gap-1.5 font-mono text-[10px]">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-ping"></span>
                <span className="text-green-500 font-bold uppercase">READY_TO_CONNECT</span>
              </div>
            </div>

            {/* Friendly Greeting Card */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white leading-tight font-sans">
                Halo! Terima kasih banyak sudah berkunjung. 😊
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-white/70 leading-relaxed font-medium">
                Saya sangat senang dan menghargai waktu Anda untuk menjelajahi portofolio ini.
                Saat ini, saya selalu terbuka untuk kolaborasi proyek baru, peluang kerja, berdiskusi tentang pembuatan aplikasi,
                atau sekadar berbagi pengalaman seputar teknologi Laravel dan Go.
              </p>
              <p className="text-sm text-slate-500 dark:text-white/50 leading-relaxed font-medium">
                Jika Anda tertarik untuk bekerja sama, membuat aplikasi web bersama, atau ingin mengenal saya lebih lanjut,
                jangan ragu untuk langsung menghubungi saya! Anda bisa memilih salah satu tombol komunikasi cepat di bawah ini.
              </p>
            </div>

            {/* Quick Communication Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* WhatsApp Call To Action */}
              <a
                href="https://wa.me/6285761285875"
                onClick={(e) => handleNavigation(e, "https://wa.me/6285761285875", "WhatsApp")}
                target="_blank"
                rel="noreferrer"
                className="flex-1 px-6 py-4 rounded-xl font-bold font-mono text-xs sm:text-sm text-white bg-green-600 hover:bg-green-700 hover:shadow-[0_0_15px_rgba(22,163,74,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 select-none"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i> HUBUNGI LEWAT WHATSAPP
              </a>

              {/* Email Call To Action */}
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=rey7dan7@gmail.com"
                onClick={(e) => handleNavigation(e, "https://mail.google.com/mail/?view=cm&fs=1&to=rey7dan7@gmail.com", "Email")}
                target='_blank'
                className="flex-1 px-6 py-4 rounded-xl font-bold font-mono text-xs sm:text-sm text-black hover:scale-[1.02] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 select-none"
                style={{ backgroundColor: activeTheme.accent }}
              >
                <i className="fa-solid fa-envelope text-lg"></i> KIRIM EMAIL SEKARANG
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT DETAILS */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">

            {/* Header info */}
            <div className="space-y-2">
              <h3 className="font-mono text-xs uppercase tracking-widest text-glow" style={{ color: activeTheme.accent }}>
                [05] Contact Information
              </h3>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight font-sans tracking-tight">
                Hubungi Saya
              </h2>
              <p className="font-mono text-xs text-slate-500 dark:text-white/45">Raihan Hamdani</p>
            </div>

            {/* SOCIAL MEDIA LIST */}
            <div className="space-y-3">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  onClick={(e) => handleNavigation(e, link.url, link.platform)}
                  target="_blank"
                  rel="noreferrer"
                  className="glass-card p-4 rounded-2xl border border-slate-200 dark:border-white/10 flex items-center gap-4 hover:border-accent hover:shadow-[0_0_15px_var(--accent-glow)] transition-all duration-300 group"
                  style={{ '--accent-color': activeTheme.accent }}
                >
                  {/* Icon circle */}
                  <div
                    className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-white/5 flex items-center justify-center border border-slate-200 dark:border-white/5 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-sm"
                    style={{ borderColor: activeTheme.accentGlow }}
                  >
                    <i className={`${link.icon} text-lg ${link.iconColor}`}></i>
                  </div>

                  {/* Account Text */}
                  <div className="flex flex-col font-sans">
                    <span className="text-xs text-slate-400 dark:text-white/40 font-mono uppercase tracking-wider">
                      {link.platform}
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-slate-700 dark:text-white/80 group-hover:text-slate-950 dark:group-hover:text-white transition-colors duration-200 flex items-center gap-1 flex-wrap">
                      {link.username}
                      {link.handle && (
                        <span className="font-normal text-slate-400 dark:text-white/40 text-[10px] sm:text-xs">
                          {link.handle}
                        </span>
                      )}
                    </span>
                  </div>
                </a>
              ))}
            </div>

          </div>

        </div>
      </Reveal>
    </section>
  );
}
