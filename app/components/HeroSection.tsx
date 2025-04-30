'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section
      className={`
        relative w-full h-[65vh] flex items-center justify-center overflow-hidden
        ${isDark ? 'bg-black' : 'bg-white'}
      `}
    >
      {/* Background image + dark gradient overlay */}
      <div
        className="absolute top-0 left-1/2 w-screen h-full transform -translate-x-1/2 bg-center bg-cover"
        style={{
          backgroundImage: isDark
            ? `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.95)), url('/high-tech-background-dark.png')`
            : `url('/high-tech-background-light.png')`,
          filter: isDark ? 'brightness(0.9)' : 'brightness(0.96)',
        }}
      />

      {/* Glow Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: isDark
            ? 'radial-gradient(circle at center, rgba(0,0,0,0.55) 0%, transparent 60%)'
            : 'radial-gradient(circle at center, rgba(255,255,255,0.4) 0%, transparent 150%)',
          mixBlendMode: isDark ? 'screen' : 'lighten',
        }}
      />

      {/* Grid watermark */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='grid' width='20' height='20' patternUnits='userSpaceOnUse'%3E%3Cpath d='M20 0 L0 0 0 20' fill='none' stroke='%23ED6E00' stroke-width='0.5'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23grid)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl text-center px-8">
        <h1
          className={`
            font-sofia text-2xl md:text-4xl lg:text-6xl font-extrabold
            ${isDark ? 'text-white' : 'text-neutral-800'}
            drop-shadow-[0_0_8px_rgba(237,110,0,0.8)]
            leading-tight
          `}
        >
          CONNECTING <span className="text-primary">INNOVATION</span>,<br />
          EMPOWERING <span className="text-primary">POSSIBILITIES</span>:<br />
          YOUR WORLD, OUR <span className="text-primary">TECHNOLOGY</span>.
        </h1>
      </div>
    </section>
  );
}
