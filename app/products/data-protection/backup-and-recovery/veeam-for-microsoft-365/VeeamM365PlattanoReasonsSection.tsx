'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

// Hook to animate count up when in view
function useCountUp(target: number, duration = 2000) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

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

export default function VeeamM365PlattanoReasonsSection() {
  // set up count-up hooks
  const count1 = useCountUp(47);
  const count2 = useCountUp(40);
  const count3 = useCountUp(37);
  const count4 = useCountUp(1);

  const reasons = [
    {
      countHook: count1,
      suffix: '%',
      text: 'want to access backups anytime, anywhere',
    },
    {
      countHook: count2,
      suffix: '%',
      text: 'want flexible payment options and OpEx models',
    },
    {
      countHook: count3,
      suffix: '%',
      text: 'need to leverage technical specialists from service providers',
    },
    {
      countHook: count4,
      suffix: 'st',
      text: 'reason to choose a BaaS provider is data security',
    },
  ];

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24 space-y-8">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          Protect Your Microsoft 365 <span className="text-primary">with Plattano</span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-base sm:text-lg text-neutral-700 dark:text-neutral-300"
        >
          4 Reasons to choose Plattano and secure your data today
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 pt-8"
        >
          {reasons.map(({ countHook, suffix, text }, idx) => (
            <div key={idx} className="text-center space-y-3">
              <div
                ref={countHook.ref}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary"
              >
                {countHook.value}
                {suffix}
              </div>
              <p className="text-base sm:text-lg max-w-xs mx-auto">{text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
