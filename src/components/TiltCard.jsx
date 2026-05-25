import React, { useRef, useEffect, useState } from 'react';

export default function TiltCard({ children, className = '', style = {}, accent, accentGlow, ...props }) {
  const cardRef = useRef(null);
  const [isMobileActive, setIsMobileActive] = useState(false);

  useEffect(() => {
    // Detect if the device is touch-only (mobile/tablet)
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (!isTouchDevice) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsMobileActive(entry.isIntersecting);
      },
      {
        // Focus area: middle 40% of the viewport height
        rootMargin: '-30% 0px -30% 0px',
        threshold: 0.1
      }
    );

    const el = cardRef.current;
    if (el) {
      observer.observe(el);
    }

    return () => {
      if (el) {
        observer.unobserve(el);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    // Disable 3D tilt on touch devices to avoid collision with scroll
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xc = rect.width / 2;
    const yc = rect.height / 2;

    const tiltX = ((yc - y) / yc) * 8;
    const tiltY = ((x - xc) / xc) * 8;

    card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.boxShadow = `0 15px 35px -5px ${accentGlow || 'var(--accent-glow)'}`;
    card.style.borderColor = accent || 'var(--accent)';

    const gloss = card.querySelector('.gloss-effect');
    if (gloss) {
      gloss.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(255, 255, 255, 0.12) 0%, transparent 60%)`;
    }
  };

  const handleMouseLeave = () => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches;
    if (isTouchDevice) return;

    const card = cardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    card.style.boxShadow = 'none';
    card.style.borderColor = 'var(--border-color)';

    const gloss = card.querySelector('.gloss-effect');
    if (gloss) {
      gloss.style.background = 'radial-gradient(circle at -50% -50%, rgba(255, 255, 255, 0.05) 0%, transparent 60%)';
    }
  };

  // Dynamic inline styles for mobile active state highlighting
  const mobileActiveStyle = isMobileActive
    ? {
        borderColor: accent || 'var(--accent)',
        boxShadow: `0 10px 25px -5px ${accentGlow || 'var(--accent-glow)'}`,
        transform: 'scale3d(1.01, 1.01, 1.01)'
      }
    : {};

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`glass-card transition-all duration-500 ease-out active:scale-[0.98] ${
        isMobileActive ? 'is-mobile-active' : ''
      } ${className}`}
      style={{
        ...style,
        ...mobileActiveStyle
      }}
      {...props}
    >
      <div 
        className="gloss-effect transition-opacity duration-500" 
        style={{ 
          background: 'radial-gradient(circle at -50% -50%, rgba(255, 255, 255, 0.05) 0%, transparent 60%)',
          opacity: isMobileActive ? 1 : 0.4
        }}
      ></div>
      {children}
    </div>
  );
}
