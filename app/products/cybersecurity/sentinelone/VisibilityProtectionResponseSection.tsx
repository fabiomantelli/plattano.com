'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function VisibilityProtectionResponseSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section
      className={`relative isolate w-full text-white overflow-hidden
        before:absolute before:inset-0
        before:bg-[url('/images/products/cybersecurity/sentinelone/sentinelone-visibility-bg.webp')] before:bg-center
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
          <span className={`${isDark ? 'text-primary' : 'text-white'}`}>Visibility.</span> <br />
          <span className={`${isDark ? 'text-primary' : 'text-white'}`}>Protection.</span> <br />
          <span className={`${isDark ? 'text-primary' : 'text-white'}`}>Response.</span>
        </div>

        {/* Right text */}
        <div
          className={`
            w-full md:w-1/2 text-[18px] leading-relaxed text-center md:text-left
            ${isDark ? 'text-neutral-200' : 'text-neutral-800'}
          `}
        >
          A platform to prevent, detect, respond, and hunt within the context of all your company's assets. <br />
          See what was never seen before. Control the unknown. All at machine speed.
        </div>
      </motion.div>

      {/* Bottom border */}
      <div className="h-0.5 w-full bg-primary" />
    </section>
  );
}
