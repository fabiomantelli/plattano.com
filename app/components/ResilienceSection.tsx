'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ResilienceSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section
      className={`
        relative isolate w-full text-white overflow-hidden
        before:absolute before:inset-0
        before:bg-[url('/resilience-bg.webp')] before:bg-center
        before:bg-cover before:bg-fixed before:-z-20
        after:absolute after:inset-0 after:-z-10
        ${isDark ? 'after:bg-black/50' : 'after:bg-primary/85'}
      `}
    >
      {/* Top border */}
      <div className="h-0.5 w-full bg-primary" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="
          mx-auto max-w-7xl
          px-8 sm:px-12 lg:px-24 py-24
          flex flex-col md:flex-row gap-16 md:items-center
        "
      >
        {/* Left text */}
        <div
          className={`
            w-full md:w-1/2 text-[38px] leading-tight font-semibold text-center md:text-left
            ${isDark ? 'text-white' : 'text-neutral-900'}
          `}
        >
          <span className={`${isDark ? 'text-primary' : 'text-white'}`}>ACTIVATE</span> YOUR COMPANY&apos;S DIGITAL RESILIENCE.
          <br />
          <span className={`${isDark ? 'text-primary' : 'text-white'}`}>ACTIVATE</span> IT HERE AND NOW.
        </div>

        {/* Right text */}
        <div
          className={`
            w-full md:w-1/2 text-[18px] leading-relaxed text-center md:text-left
            ${isDark ? 'text-neutral-200' : 'text-neutral-800'}
          `}
        >
          With Plattano by your side, you gain the confidence you need to drive your
          business—let us handle every challenge of your digital foundation.
        </div>
      </motion.div>

      {/* Bottom border */}
      <div className="h-0.5 w-full bg-primary" />
    </section>
  );
}
