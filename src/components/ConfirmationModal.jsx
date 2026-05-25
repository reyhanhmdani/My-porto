import React, { useEffect, useState } from 'react';

export default function ConfirmationModal({ isOpen, onClose, onConfirm, url, platform, message, activeTheme }) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Trigger animation on open
      const timer = setTimeout(() => setAnimate(true), 50);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleConfirm = () => {
    setAnimate(false);
    setTimeout(() => {
      onConfirm(url);
    }, 200);
  };

  const handleCancel = () => {
    setAnimate(false);
    setTimeout(() => {
      onClose();
    }, 200);
  };

  // Icon switcher based on platform
  const getIcon = () => {
    switch (platform) {
      case 'LinkedIn':
        return 'fa-brands fa-linkedin-in text-blue-400';
      case 'GitHub':
        return 'fa-brands fa-github text-white';
      case 'Instagram':
        return 'fa-brands fa-instagram text-pink-400';
      case 'WhatsApp':
        return 'fa-brands fa-whatsapp text-green-400';
      case 'Facebook':
        return 'fa-brands fa-facebook-f text-blue-500';
      case 'Email':
        return 'fa-solid fa-envelope text-red-400';
      default:
        return 'fa-solid fa-arrow-up-right-from-square text-white';
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md transition-opacity duration-300 ${
        animate ? 'opacity-100' : 'opacity-0'
      }`}
      onClick={handleCancel}
    >
      <div
        className={`glass-card w-[90%] max-w-md p-6 sm:p-8 rounded-3xl border text-center relative overflow-hidden transition-all duration-300 shadow-[0_0_50px_rgba(0,0,0,0.8)] ${
          animate ? 'scale-100 opacity-100 translate-y-0' : 'scale-90 opacity-0 translate-y-4'
        }`}
        style={{ borderColor: activeTheme.accent }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Glow effect blob in modal */}
        <div
          className="absolute -top-24 -left-24 w-48 h-48 rounded-full blur-[80px] opacity-20 pointer-events-none"
          style={{ backgroundColor: activeTheme.accent }}
        ></div>

        {/* Cyber logo wrapper */}
        <div className="flex justify-center mb-6 relative">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center border transition-all duration-500 animate-pulse"
            style={{ 
              borderColor: activeTheme.accentGlow,
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              boxShadow: `0 0 20px ${activeTheme.accentGlow}`
            }}
          >
            <i className={`${getIcon()} text-3xl`}></i>
          </div>
        </div>

        {/* Content */}
        <h3 className="font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">
          [ Request Redirect Connection ]
        </h3>
        <h4 className="text-lg font-bold text-white mb-4 font-sans leading-tight">
          Masuk ke Profil {platform} Raihan?
        </h4>
        <p className="text-xs text-slate-400 leading-relaxed mb-8 font-mono px-2">
          {message}
        </p>

        {/* Interactive Buttons */}
        <div className="flex gap-4 items-center justify-center font-mono">
          <button
            onClick={handleCancel}
            className="flex-1 px-5 py-3 rounded-2xl text-xs font-bold text-slate-400 hover:text-white border border-white/10 hover:bg-white/5 active:scale-95 transition-all duration-200"
          >
            ABORT()
          </button>
          
          <button
            onClick={handleConfirm}
            className="flex-1 px-5 py-3 rounded-2xl text-xs font-bold text-black active:scale-95 transition-all duration-200 hover:shadow-[0_0_20px_var(--accent-glow)]"
            style={{ 
              backgroundColor: activeTheme.accent,
              color: '#000'
            }}
          >
            ESTABLISH_CONNECT()
          </button>
        </div>
      </div>
    </div>
  );
}
