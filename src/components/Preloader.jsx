import React, { useState, useEffect } from 'react';

export default function Preloader({ onComplete }) {
  const [percent, setPercent] = useState(0);
  const [logText, setLogText] = useState('CONNECTING TO CENTRAL PROTOCOL...');
  const [nameVisible, setNameVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const loaderLogs = [
      'CONNECTING TO CENTRAL PROTOCOL...',
      'SCANNING HARDWARE GRAPHICS UNIT...',
      'RESOLVING DOM ENGINE NODES...',
      'STRUCTURING STYLES WITH TAILWIND...',
      'DECRYPTING PORTFOLIO ASSETS...',
      'BIOMETRICS VERIFIED // WELCOME.'
    ];

    let logIndex = 0;
    let currentPercent = 0;

    const intervalLogs = setInterval(() => {
      if (logIndex < loaderLogs.length) {
        setLogText(loaderLogs[logIndex]);
        logIndex++;
      }
    }, 300);

    const intervalPercent = setInterval(() => {
      if (currentPercent < 100) {
        currentPercent += Math.floor(Math.random() * 10) + 5;
        if (currentPercent > 100) currentPercent = 100;
        setPercent(currentPercent);

        if (currentPercent >= 40) {
          setNameVisible(true);
        }
      } else {
        clearInterval(intervalPercent);
        clearInterval(intervalLogs);

        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            setHide(true);
            if (onComplete) onComplete();
          }, 1000); // match duration-1000 transition
        }, 500);
      }
    }, 80);

    return () => {
      clearInterval(intervalLogs);
      clearInterval(intervalPercent);
    };
  }, [onComplete]);

  if (hide) return null;

  return (
    <div
      id="preloader"
      className={`fixed inset-0 bg-[#030611] z-50 flex flex-col justify-between p-8 font-mono text-xs text-slate-400 transition-all duration-1000 ease-in-out ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Laser scanner bar */}
      <div
        className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-red-500 to-transparent laser-line z-10"
        style={{ boxShadow: '0 0 15px #FF2D20' }}
      ></div>

      <div className="flex justify-between items-center border-b border-white/5 pb-4">
        <span className="tracking-widest opacity-60">SYSTEM STATUS: DETECTING ACCELERATION</span>
        <span id="system-time">2026.05.23</span>
      </div>

      {/* Scanning Core Panel */}
      <div className="flex-1 flex flex-col justify-center items-center relative py-12">
        {/* Retro cyber scope */}
        <div
          className="absolute w-44 h-44 rounded-full border border-red-500/10 flex items-center justify-center animate-spin"
          style={{ animationDuration: '10s' }}
        >
          <div className="w-40 h-40 rounded-full border-dashed border border-red-500/20"></div>
        </div>

        <div className="text-center z-10 space-y-4">
          <span className="text-[10px] tracking-[0.4em] uppercase text-red-500 font-bold opacity-80 animate-pulse">
            BIOMETRIC AUTHORIZATION
          </span>
          <h1
            className={`text-4xl sm:text-6xl font-extrabold tracking-tighter text-white font-sans transition-all duration-1000 ${
              nameVisible ? 'opacity-100 scale-100 blur-none' : 'opacity-0 scale-95 blur-md'
            }`}
            id="loader-name"
          >
            RAIHAN HAMDANI
          </h1>
          <p className="text-[11px] font-mono tracking-widest text-slate-500" id="loader-log">
            {logText}
          </p>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/5 pt-4 gap-2 text-[10px] text-slate-500">
        <span>RAIHAN HAMDANI // ENGINE LOADER V4.2</span>
        <div className="flex items-center gap-2">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-red-500 animate-ping"></span>
          <span id="load-percent">{percent}% SECURE_LOADED</span>
        </div>
      </div>
    </div>
  );
}
