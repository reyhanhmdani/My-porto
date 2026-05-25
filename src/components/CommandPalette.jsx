import React, { useState, useEffect, useRef } from 'react';

export default function CommandPalette({
  isOpen,
  onClose,
  activeTheme,
  setTheme,
  isDarkMode,
  toggleDarkMode,
  cmdResults,
  addCommandLine,
  onTriggerCompile
}) {
  const [cmdInput, setCmdInput] = useState('');
  const inputRef = useRef(null);
  const resultsEndRef = useRef(null);

  // Autofocus input when command palette opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }, 50);
    }
  }, [isOpen]);

  // Scroll to bottom of terminal output
  useEffect(() => {
    if (resultsEndRef.current) {
      resultsEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [cmdResults]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleKeyDownInput = (e) => {
    if (e.key === 'Enter') {
      const commandText = cmdInput.trim().toLowerCase();
      if (!commandText) return;

      setCmdInput('');
      addCommandLine(commandText, 'command');

      const args = commandText.split(' ');
      const primaryCmd = args[0];

      switch (primaryCmd) {
        case 'help':
          addCommandLine('Sistem Perintah DevCore:');
          addCommandLine('  help                 - Tampilkan semua perintah biner');
          addCommandLine('  theme [laravel|go|js]- Ganti modul arsitektur aksen');
          addCommandLine('  scroll [section]     - Arahkan langsung ke bagian tertentu');
          addCommandLine('  compile              - Lakukan simulasi kompilasi runtime');
          addCommandLine('  clear                - Bersihkan logs konsol');
          addCommandLine('  exit                 - Tutup layar command palette');
          break;

        case 'theme':
          const reqTheme = args[1];
          if (reqTheme === 'laravel' || reqTheme === 'php') {
            setTheme('laravel');
          } else if (reqTheme === 'go' || reqTheme === 'golang') {
            setTheme('golang');
          } else if (reqTheme === 'js' || reqTheme === 'javascript') {
            setTheme('javascript');
          } else {
            addCommandLine(`Modul tidak ditemukan: ${reqTheme}`, 'error');
          }
          break;

        case 'light':
          addCommandLine('Mode terang dinonaktifkan. Sistem dikonfigurasi khusus untuk mode gelap.', 'error');
          break;
        case 'dark':
          addCommandLine('Sistem sudah aktif dalam mode gelap.', 'result');
          break;

        case 'scroll':
          const section = args[1];
          const target = document.getElementById(section);
          if (target) {
            onClose();
            target.scrollIntoView({ behavior: 'smooth' });
            addCommandLine(`Viewport digeser ke: #${section}`, 'result');
          } else {
            addCommandLine(`Bagian id tidak teridentifikasi: ${section}`, 'error');
          }
          break;

        case 'compile':
          onClose();
          if (onTriggerCompile) onTriggerCompile();
          break;

        case 'clear':
          // We can't clear array easily if it's in parent unless we expose a clear function
          // Let's pass a dummy log reset command
          addCommandLine('CLEAR_CONSOLE', 'clear');
          break;

        case 'exit':
          onClose();
          break;

        default:
          addCommandLine(`Instruksi tidak dikenali: ${primaryCmd}`, 'error');
          break;
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      id="command-palette"
      onClick={(e) => {
        if (e.target.id === 'command-palette') onClose();
      }}
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 bg-black/80 backdrop-blur-md transition-all duration-300"
    >
      <div
        className="glass-card w-full max-w-2xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden scale-100 transition-transform duration-300"
        id="palette-card"
      >
        {/* Search header */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-white/15">
          <span className="text-xl" style={{ color: activeTheme.accent }}>
            <i className="fa-solid fa-terminal"></i>
          </span>
          <input
            type="text"
            ref={inputRef}
            id="cmd-input"
            value={cmdInput}
            onChange={(e) => setCmdInput(e.target.value)}
            onKeyDown={handleKeyDownInput}
            placeholder="Masukkan instruksi siber (cth: 'help', 'theme go', 'projects')..."
            className="w-full bg-transparent border-none outline-none text-slate-800 dark:text-white font-mono placeholder-slate-400 dark:placeholder-white/40 text-sm py-1"
          />
          <span className="text-xs bg-slate-200 dark:bg-white/10 px-2 py-1 rounded text-slate-500 dark:text-white/50 font-mono">
            ESC
          </span>
        </div>
        {/* Interactive Output */}
        <div
          id="cmd-results"
          className="p-4 max-h-[300px] overflow-y-auto font-mono text-xs sm:text-sm space-y-2 no-scrollbar text-slate-700 dark:text-slate-300"
        >
          {cmdResults.map((res, index) => {
            if (res.type === 'command') {
              return (
                <div key={index}>
                  <span className="text-slate-400 dark:text-white/30">&gt; </span>
                  <span className="text-slate-900 dark:text-white font-semibold">{res.text}</span>
                </div>
              );
            } else if (res.type === 'error') {
              return (
                <div key={index}>
                  <span className="text-red-500 font-bold">[ERR] </span>
                  <span className="text-slate-700 dark:text-white/80">{res.text}</span>
                </div>
              );
            } else if (res.type === 'result') {
              return (
                <div key={index}>
                  <span className="font-bold" style={{ color: activeTheme.accent }}>
                    [SYS]{' '}
                  </span>
                  <span className="text-slate-700 dark:text-white/80">{res.text}</span>
                </div>
              );
            } else {
              return (
                <div key={index} className="text-slate-500 dark:text-white/50 animate-pulse">
                  {res.text}
                </div>
              );
            }
          })}
          <div ref={resultsEndRef} />
        </div>
      </div>
    </div>
  );
}
