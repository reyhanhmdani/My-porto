import React, { useState, useEffect, useRef } from 'react';

export default function TerminalSimulator({ activeTheme, onCommandLog }) {
  const [typedCode, setTypedCode] = useState('');
  const [compilerVisible, setCompilerVisible] = useState(false);
  const [compilerLogs, setCompilerLogs] = useState([]);
  const typingTimeoutRef = useRef(null);
  const logIntervalRef = useRef(null);

  // IDE Typing Engine
  useEffect(() => {
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }
    setTypedCode('');
    setCompilerVisible(false);

    let charIndex = 0;
    const codeString = activeTheme.code;
    const speed = 10;

    function typeCharacter() {
      if (charIndex < codeString.length) {
        const char = codeString.charAt(charIndex);
        setTypedCode((prev) => prev + char);
        charIndex++;
        typingTimeoutRef.current = setTimeout(typeCharacter, speed);
      }
    }
    typeCharacter();

    return () => {
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }
    };
  }, [activeTheme]);

  // Virtual Compiler
  const executeCompiler = () => {
    setCompilerVisible(true);
    setCompilerLogs([]);
    if (logIntervalRef.current) {
      clearInterval(logIntervalRef.current);
    }

    const logs = activeTheme.compileLogs;
    let logIndex = 0;

    function printLogLine() {
      if (logIndex < logs.length) {
        const timestamp = new Date().toLocaleTimeString();
        setCompilerLogs((prev) => [...prev, `[${timestamp}] ${logs[logIndex]}`]);
        logIndex++;
        logIntervalRef.current = setTimeout(printLogLine, 300);
      }
    }
    printLogLine();

    if (onCommandLog) {
      onCommandLog('Virtual compilation simulation initialized.', 'result');
    }
  };

  const closeCompiler = () => {
    setCompilerVisible(false);
    if (logIntervalRef.current) {
      clearTimeout(logIntervalRef.current);
    }
  };

  return (
    <div className="lg:col-span-5 relative z-10 w-full max-w-lg mx-auto lg:max-w-none">
      <div
        className="absolute -inset-1 rounded-2xl blur-xl opacity-20 transition-all duration-1000"
        id="ide-glow"
        style={{ backgroundColor: activeTheme.accent }}
      ></div>

      <div className="relative glass-card rounded-2xl border border-slate-200 dark:border-white/10 shadow-2xl overflow-hidden flex flex-col h-[380px]">
        <div className="gloss-effect"></div>
        <div className="bg-slate-100 dark:bg-black/40 px-4 py-3 border-b border-slate-200 dark:border-white/5 flex items-center justify-between relative z-20">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80"></span>
          </div>
          <div className="font-mono text-xs text-slate-500 dark:text-white/40 flex items-center gap-2">
            <i className="fa-solid fa-code"></i>
            <span id="terminal-filename">{activeTheme.filename}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="font-mono text-[9px] text-green-600 dark:text-green-400 font-bold">ACTIVE</span>
          </div>
        </div>

        {/* IDE Core */}
        <div className="flex-1 flex overflow-hidden font-mono text-xs sm:text-sm leading-relaxed relative z-10">
          <div className="bg-slate-50 dark:bg-black/20 text-slate-400 dark:text-white/25 py-4 px-3 text-right select-none text-[10px] sm:text-xs border-r border-slate-200 dark:border-white/5 w-10 flex flex-col space-y-1">
            <span>01</span>
            <span>02</span>
            <span>03</span>
            <span>04</span>
            <span>05</span>
            <span>06</span>
            <span>07</span>
            <span>08</span>
            <span>09</span>
            <span>10</span>
            <span>11</span>
          </div>
          <div className="flex-1 p-4 bg-white/5 dark:bg-black/10 overflow-auto no-scrollbar relative">
            <pre className="text-slate-800 dark:text-white text-xs h-full flex flex-col justify-start">
              <code id="code-content" className="text-left whitespace-pre-wrap">
                {typedCode}
              </code>
              <span className="inline-block w-1.5 h-4 bg-slate-900 dark:bg-white animate-pulse" id="code-cursor"></span>
            </pre>
          </div>
        </div>

        {/* Compiler Run Section */}
        <div className="bg-slate-100 dark:bg-black/30 border-t border-slate-200 dark:border-white/5 p-3 flex justify-between items-center relative z-20">
          <div className="text-[10px] font-mono text-slate-500 dark:text-white/40">
            Tekan RUN_COMPILE untuk evaluasi real-time
          </div>
          <button
            onClick={executeCompiler}
            className="px-4 py-1.5 rounded-lg text-xs font-bold font-mono text-black transition-all duration-300 flex items-center gap-1.5 hover:scale-105 active:scale-95 shadow-md"
            style={{ backgroundColor: activeTheme.accent, color: '#000' }}
            id="compile-btn"
          >
            <i className="fa-solid fa-play"></i> RUN_COMPILE
          </button>
        </div>
      </div>

      {/* Compile Overlay System */}
      <div
        id="compiler-overlay"
        className={`absolute inset-0 bg-slate-950/95 backdrop-blur-md rounded-2xl border border-white/10 p-6 flex flex-col justify-between font-mono text-xs sm:text-sm text-green-400 z-20 ${
          compilerVisible ? 'flex' : 'hidden'
        }`}
      >
        <div className="space-y-3">
          <div className="flex justify-between items-center border-b border-white/10 pb-2">
            <span className="text-green-400 flex items-center gap-1.5 font-bold">
              <i className="fa-solid fa-circle-check"></i> Compilation Success
            </span>
            <button onClick={closeCompiler} className="text-white/40 hover:text-white">
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>
          <div className="text-xs space-y-2 text-white/80 overflow-y-auto max-h-[220px]" id="compiler-log">
            {compilerLogs.map((log, index) => (
              <div
                key={index}
                className="py-0.5 border-l-2 pl-2 transition-all duration-300 text-white/95"
                style={{ borderColor: activeTheme.accent }}
              >
                {log}
              </div>
            ))}
          </div>
        </div>
        <div className="text-right text-[10px] text-white/30">Process terminated with Exit Code 0</div>
      </div>
    </div>
  );
}
