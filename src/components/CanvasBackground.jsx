import React, { useEffect, useRef } from 'react';

export default function CanvasBackground({ activeTheme, isDarkMode }) {
  const canvasRef = useRef(null);
  const activeThemeRef = useRef(activeTheme);
  const isDarkModeRef = useRef(isDarkMode);

  // Sync references to avoid recreating animation loop on every theme change
  useEffect(() => {
    activeThemeRef.current = activeTheme;
  }, [activeTheme]);

  useEffect(() => {
    isDarkModeRef.current = isDarkMode;
  }, [isDarkMode]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let particlesArray = [];
    let floatingKeywords = [];
    const numberOfParticles = 40;
    const numberOfKeywords = 10;
    const mouse = { x: null, y: null, radius: 180 };

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 0.3 - 0.15;
        this.speedY = Math.random() * 0.3 - 0.15;
        this.baseOpacity = Math.random() * 0.3 + 0.1;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;

        // Push-apart mouse physics
        if (mouse.x !== null && mouse.y !== null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.hypot(dx, dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = dx / distance;
            const directionY = dy / distance;
            this.x -= directionX * force * 1.5;
            this.y -= directionY * force * 1.5;
          }
        }
      }

      draw() {
        const isDark = isDarkModeRef.current;
        const theme = activeThemeRef.current;
        ctx.fillStyle = theme.accent;
        ctx.globalAlpha = isDark ? this.baseOpacity : this.baseOpacity * 0.4;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    class CodeKeyword {
      constructor(text) {
        this.text = text;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.speedY = -(Math.random() * 0.2 + 0.08);
        this.fontSize = Math.floor(Math.random() * 3) + 11;
        this.opacity = Math.random() * 0.15 + 0.05;
      }

      update() {
        this.y += this.speedY;
        if (this.y < -30) {
          this.y = canvas.height + 30;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        const isDark = isDarkModeRef.current;
        const theme = activeThemeRef.current;
        ctx.font = `${this.fontSize}px 'JetBrains Mono', monospace`;
        ctx.fillStyle = theme.accent;
        ctx.globalAlpha = isDark ? this.opacity : this.opacity * 0.3;
        ctx.fillText(this.text, this.x, this.y);
      }
    }

    function initParticles() {
      particlesArray = [];
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }

    function updateFloatingKeywords() {
      floatingKeywords = [];
      const theme = activeThemeRef.current;
      const activeWords = theme.keywords;
      for (let i = 0; i < numberOfKeywords; i++) {
        const word = activeWords[Math.floor(Math.random() * activeWords.length)];
        floatingKeywords.push(new CodeKeyword(word));
      }
    }

    let animationFrameId;

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isDark = isDarkModeRef.current;
      const theme = activeThemeRef.current;

      for (let i = 0; i < floatingKeywords.length; i++) {
        floatingKeywords[i].update();
        floatingKeywords[i].draw();
      }

      for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
      }

      // Draw jaring constellation lines
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          let dx = particlesArray[a].x - particlesArray[b].x;
          let dy = particlesArray[a].y - particlesArray[b].y;
          let distance = Math.hypot(dx, dy);

          if (distance < 120) {
            ctx.strokeStyle = theme.accent;
            const factor = (120 - distance) / 120;
            ctx.lineWidth = factor * 0.25;
            ctx.globalAlpha = isDark ? factor * 0.15 : factor * 0.05;

            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }

        // Draw line connection to mouse cursor
        if (mouse.x !== null && mouse.y !== null) {
          let mdx = particlesArray[a].x - mouse.x;
          let mdy = particlesArray[a].y - mouse.y;
          let mDist = Math.hypot(mdx, mdy);
          if (mDist < mouse.radius) {
            ctx.strokeStyle = theme.accent;
            const mFactor = (mouse.radius - mDist) / mouse.radius;
            ctx.lineWidth = mFactor * 0.35;
            ctx.globalAlpha = isDark ? mFactor * 0.18 : mFactor * 0.08;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
          }
        }
      }
      ctx.globalAlpha = 1.0;
      animationFrameId = requestAnimationFrame(animateParticles);
    }

    initParticles();
    updateFloatingKeywords();
    animateParticles();

    // Listeners
    const handleResize = () => {
      resizeCanvas();
      initParticles();
      updateFloatingKeywords();
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    // Keep keywords updated when theme changes
    // We can run a separate effect or check inside currentTheme logic
    // Let's watch activeTheme.title changes to reload keywords
    const activeThemeTitle = activeTheme.title;

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Separate effect to trigger keyword reload on activeTheme change
  useEffect(() => {
    // We want the keywords to match the activeTheme immediately
    // Since floatingKeywords is inside the animation loop closure,
    // let's dispatch or reload them.
    // Instead of restarting canvas entirely, we can trigger resize event or let the closure handle it.
    // To make sure keywords are updated, we can simply dispatch a custom resize event,
    // which triggers handleResize and updates the keywords!
    window.dispatchEvent(new Event('resize'));
  }, [activeTheme]);

  return <canvas ref={canvasRef} id="particle-canvas" className="fixed inset-0 w-full h-full pointer-events-none z-0" />;
}
