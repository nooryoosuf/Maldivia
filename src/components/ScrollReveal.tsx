'use client';

import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  variant?: 'fade-up' | 'fade-in' | 'scale-up' | 'slide-left';
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = '',
  delayMs = 0,
  variant = 'fade-up',
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  const hiddenStyles: Record<NonNullable<ScrollRevealProps['variant']>, string> = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-in': 'opacity-0',
    'scale-up': 'opacity-0 scale-[0.96] translate-y-4',
    'slide-left': 'opacity-0 translate-x-8',
  };

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delayMs}ms` }}
      className={`transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
        visible
          ? 'opacity-100 translate-y-0 translate-x-0 scale-100'
          : hiddenStyles[variant]
      } ${className}`}
    >
      {children}
    </div>
  );
}
