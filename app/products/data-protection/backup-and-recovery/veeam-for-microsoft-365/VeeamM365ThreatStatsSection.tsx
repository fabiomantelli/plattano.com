'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start: number | null = null;
          const step = (timestamp: number) => {
            if (start === null) start = timestamp;
            const progress = Math.min((timestamp - start) / duration, 1);
            setValue(Math.floor(progress * target));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [target, duration]);

  return { ref, value };
}

export default function VeeamM365ThreatStatsSection() {
  // three stats, last one will display "<25%"
  const statA = useCountUp(80);
  const statB = useCountUp(53);
  const statC = useCountUp(25);

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24 space-y-8">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug"
        >
          <span className='text-primary'>Virtual Attacks</span> on Microsoft 365 and Data Loss Are <span className="text-primary">More Common</span> Than You Think
        </motion.h2>

        {/* Sub-text */}
        <p className="text-center text-base sm:text-lg text-neutral-600 dark:text-neutral-400">
          Source: <em>PC Malware Statistics, Q3 2022</em>
        </p>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-3">
          {/* Stat 1 */}
          <div className="flex flex-col items-center text-center">
            <span
              ref={statA.ref}
              className="block text-4xl sm:text-5xl font-extrabold text-black dark:text-white"
            >
              {statA.value}%
            </span>
            <span className="mt-2 block text-base text-primary">
              of discovered vulnerabilities involve Microsoft&nbsp;365 data
            </span>
          </div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center text-center">
            <span
              ref={statB.ref}
              className="block text-4xl sm:text-5xl font-extrabold text-black dark:text-white"
            >
              {statB.value}%
            </span>
            <span className="mt-2 block text-base text-primary">
              of organizations suffered SaaS data loss or corruption in the last 12 months
            </span>
          </div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center text-center">
            <span
              ref={statC.ref}
              className="block text-4xl sm:text-5xl font-extrabold text-black dark:text-white"
            >
              &lt;{statC.value}%
            </span>
            <span className="mt-2 block text-base text-primary">
              could fully recover 100% of their 365 data during a data-loss incident
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
