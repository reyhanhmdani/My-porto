import React, { useEffect, useRef, useState } from 'react';

export default function Reveal({ children, className = '', onReveal, id, ...props }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // If it's the home section, we don't apply observer
    if (id === 'home') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (onReveal) {
            onReveal();
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.disconnect();
      }
    };
  }, [onReveal, id]);

  const isHome = id === 'home';

  return (
    <div
      ref={elementRef}
      id={id}
      className={`${className} ${
        isHome
          ? ''
          : `transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`
      }`}
      {...props}
    >
      {children}
    </div>
  );
}
