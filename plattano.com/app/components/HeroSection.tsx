// components/HeroSection.tsx
import React from 'react';

export default function HeroSection() {
  return (
    <section
      className="
        relative w-full h-[60vh]
        flex items-center justify-center
        overflow-hidden bg-black
      "
    >
      {/* 👉 full-width background via absolute centering */}
      <div
        className="
          absolute top-0 left-1/2 w-screen h-full
          transform -translate-x-1/2
          bg-center bg-cover filter brightness-75
        "
        style={{ backgroundImage: "url('/high-tech-background.png')" }}
      />

      {/* Glow overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(0,0,0,0.45) 0%, transparent 50%)',
          mixBlendMode: 'screen',
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

      {/* CONTENT: centered both vertically & horizontally */}
      <div className="relative z-10 mx-auto max-w-7xl text-center px-4">
        <h1
          className="
            font-sofia text-2xl md:text-4xl lg:text-6xl font-extrabold
            text-white drop-shadow-[0_0_8px_rgba(237,110,0,0.8)]
            leading-tight
          "
        >
          CONNECTING <span className="text-primary">INNOVATION</span>,<br />
          EMPOWERING <span className="text-primary">POSSIBILITIES</span>:<br />
          YOUR WORLD, OUR <span className="text-primary">TECHNOLOGY</span>.
        </h1>
      </div>
    </section>
  );
}
