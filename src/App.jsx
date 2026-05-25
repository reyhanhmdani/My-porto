import React, { useState, useEffect, useRef } from 'react';
import Preloader from './components/Preloader';
import CanvasBackground from './components/CanvasBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import CoreCompetencies from './components/CoreCompetencies';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';

const THEMES = {
  laravel: {
    id: 'laravel',
    accent: '#FF2D20',
    accentGlow: 'rgba(255, 45, 32, 0.25)',
    accentBg: '#180B0B',
    filename: 'api_controller.php',
    title: 'Laravel Engine',
    skillsActive: 'stack-laravel',
    keywords: ['<?php', 'Route::get', 'Eloquent', 'Controller', '$request', 'migration', 'artisan', 'namespace', 'middleware'],
    code: `<?php

namespace App\\Http\\Controllers;

use App\\Models\\Developer;
use Illuminate\\Http\\Request;

class DevCoreController extends Controller 
{
    public function deploy(Request $request) 
    {
        $engineer = Developer::where('name', 'Raihan Hamdani')
            ->firstOrFail();
            
        return response()->json([
            'status' => 'online',
            'work' => $engineer->buildElegantCode(),
            'latency' => '1.2ms'
        ], 200);
    }
}`,
    compileLogs: [
      'Memulai proses booting kernel Laravel...',
      'Memuat database cache routing API...',
      'Database transaction terverifikasi aman.',
      'HTTP Controller aktif di port 8000.',
      'Output payload: {"status":"online","developer":"Raihan Hamdani","latency":"1.2ms"}'
    ]
  },
  golang: {
    id: 'golang',
    accent: '#00ADD8',
    accentGlow: 'rgba(0, 173, 216, 0.25)',
    accentBg: '#05141D',
    filename: 'server.go',
    title: 'Go Architecture',
    skillsActive: 'stack-golang',
    keywords: ['package main', 'err != nil', 'go func()', 'chan string', 'struct', 'defer', 'select', 'gRPC', 'nil'],
    code: `package main

import (
    "fmt"
    "net/http"
    "time"
)

func handleSystem(w http.ResponseWriter, r *http.Request) {
    ch := make(chan string)
    go func() {
        // Run intensive systems concurrently
        time.Sleep(1 * time.Millisecond)
        ch <- "gopher_power_for_raihan"
    }()
    
    fmt.Fprintf(w, "Goroutines active: %s", <-ch)
}`,
    compileLogs: [
      'Mengevaluasi file konfigurasi go.mod...',
      'Mengompilasi dependensi dalam skala paralel...',
      'Binary Go selesai dibangun (Size: 3.2MB).',
      'Mengaktifkan HTTP concurrent engine...',
      'Terminal result: Server Go berjalan aman di http://localhost:8080'
    ]
  },
  javascript: {
    id: 'javascript',
    accent: '#F7DF1E',
    accentGlow: 'rgba(247, 223, 30, 0.25)',
    accentBg: '#141405',
    filename: 'pipeline.js',
    title: 'JavaScript Pipeline',
    skillsActive: 'stack-javascript',
    keywords: ['async/await', 'const app', 'import', 'Promise.resolve', '=>', 'export default', 'document', 'Node.js', 'React'],
    code: `import express from 'express';
const app = express();

app.get('/api/v1/optimize', async (req, res) => {
    try {
        const stream = await initRenderEngine();
        res.status(200).json({
            engine: "V8_Compiler",
            developer: "Raihan Hamdani",
            asynchronous: true
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});`,
    compileLogs: [
      'Mengevaluasi konfigurasi package.json...',
      'Menjalankan V8 asynchronous parser...',
      'Import statement diverifikasi aman.',
      'Express core terhubung dengan kluster V8.',
      'Terminal output: Server Node.js aktif di port 3000.'
    ]
  }
};

export default function App() {
  const [preloaderDone, setPreloaderDone] = useState(false);
  const [activeTheme, setActiveTheme] = useState(THEMES.laravel);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Command results terminal log
  const [cmdResults, setCmdResults] = useState([
    { text: 'DevCore OS v1.4.0 // Ketik help untuk mengeksplorasi biner', type: 'info' }
  ]);

  const addCommandLine = (text, type = 'info') => {
    if (type === 'clear') {
      setCmdResults([
        { text: 'Terminal dibersihkan. Siap menerima biner.', type: 'info' }
      ]);
      return;
    }
    setCmdResults((prev) => [...prev, { text, type }]);
  };

  // Sync theme configurations
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', activeTheme.accent);
    document.documentElement.style.setProperty('--accent-glow', activeTheme.accentGlow);
    document.documentElement.style.setProperty('--accent-bg', activeTheme.accentBg);
  }, [activeTheme]);

  // Force Dark Mode configuration
  useEffect(() => {
    localStorage.setItem('theme', 'dark');

    // Scroll listener for back-to-top button
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);

    // Global shortcut Ctrl+K to open terminal console
    const handleGlobalKeys = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleGlobalKeys);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleGlobalKeys);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
    document.documentElement.classList.remove('light');
  }, []);

  const toggleDarkMode = () => {
    addCommandLine(`Mode terang dinonaktifkan. Sistem dikunci pada mode gelap.`, 'result');
  };

  const handleSetTheme = (themeKey) => {
    if (THEMES[themeKey]) {
      setActiveTheme(THEMES[themeKey]);
      addCommandLine(`systemctl switch-theme --set=${themeKey}`, 'command');
      addCommandLine(`Core theme successfully updated to: ${THEMES[themeKey].title}`, 'result');
    }
  };

  const handleTriggerCompile = () => {
    // We dispatch compile event to TerminalSimulator via compiler trigger
    const compileBtn = document.getElementById('compile-btn');
    if (compileBtn) {
      compileBtn.click();
    }
  };

  return (
    <div className="selection:bg-opacity-50 selection:bg-red-500 grid-bg min-h-screen relative overflow-x-hidden">
      {/* Loading biometric screen */}
      <Preloader onComplete={() => setPreloaderDone(true)} />

      {/* Dynamic Background */}
      <CanvasBackground activeTheme={activeTheme} isDarkMode={isDarkMode} />

      {/* Parallax Blobs */}
      <div
        id="ambient-blob-1"
        className="absolute top-[-10%] left-[-10%] w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] rounded-full blur-[180px] opacity-20 pointer-events-none transition-all duration-1000 z-0"
        style={{ backgroundColor: activeTheme.accent }}
      ></div>
      <div
        id="ambient-blob-2"
        className="absolute bottom-[10%] right-[-10%] w-[450px] sm:w-[700px] h-[450px] sm:h-[700px] rounded-full blur-[200px] opacity-10 pointer-events-none transition-all duration-1000 z-0"
        style={{ backgroundColor: activeTheme.accent }}
      ></div>

      {/* Header navbar */}
      {preloaderDone && (
        <Header
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
          activeTheme={activeTheme}
          onOpenTerminal={() => setIsTerminalOpen(true)}
        />
      )}

      {/* Hero presentation page */}
      <Hero
        activeTheme={activeTheme}
        themes={THEMES}
        setTheme={handleSetTheme}
        onCommandLog={addCommandLine}
      />

      {/* Skills list panel */}
      <CoreCompetencies activeTheme={activeTheme} />

      {/* Projects portfolio list */}
      <Projects activeTheme={activeTheme} />

      {/* Experience history logs */}
      <Experience activeTheme={activeTheme} />

      {/* Contact broadcast details */}
      <Contact activeTheme={activeTheme} onTransmission={addCommandLine} />

      {/* Footer credits and link */}
      <Footer activeTheme={activeTheme} onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Floating control station buttons */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          onClick={() => setIsTerminalOpen(true)}
          className="glass-card text-white flex items-center justify-center w-12 h-12 rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all duration-300"
          title="Buka Terminal Konsol (Ctrl+K)"
          style={{ borderColor: activeTheme.accent }}
        >
          <div className="gloss-effect"></div>
          <i className="fa-solid fa-terminal text-lg" style={{ color: activeTheme.accent }}></i>
        </button>

        <a
          href="#home"
          id="back-to-top"
          className={`glass-card text-slate-700 dark:text-white/60 hover:text-white flex items-center justify-center w-12 h-12 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
            showBackToTop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <div className="gloss-effect"></div>
          <i className="fa-solid fa-arrow-up"></i>
        </a>
      </div>

      {/* Command Palette terminal modal */}
      <CommandPalette
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        activeTheme={activeTheme}
        setTheme={handleSetTheme}
        isDarkMode={isDarkMode}
        toggleDarkMode={toggleDarkMode}
        cmdResults={cmdResults}
        addCommandLine={addCommandLine}
        onTriggerCompile={handleTriggerCompile}
      />
    </div>
  );
}
