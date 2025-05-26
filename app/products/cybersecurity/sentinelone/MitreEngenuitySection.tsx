'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import CountUp from 'react-countup';

const stats = [
  {
    label: 'RECORD',
    description: 'In the ATT&CK evaluation.',
    value: null, // static text
  },
  {
    label: '100%',
    description: 'of prevention in the latest MITRE & ATT&CK evaluation.',
    value: 100,  // will animate 0→100
    suffix: '%',
  },
  {
    label: '0',
    description: 'detection delays. Leading analytical coverage, leading visibility.',
    value: 0,    // will animate 0→0 (instant)
  },
];

export default function MitreEngenuitySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="w-full py-24 text-neutral-900 dark:text-white dark:bg-black bg-white">
      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-16 flex flex-col items-center gap-16"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="w-full flex justify-center"
        >
          <Image
            src="/images/products/cybersecurity/sentinelone/sentinelone-mitre.webp"
            alt="SentinelOne MITRE Logo"
            width={250}
            height={100}
            className="rounded-xl filter dark:invert"
          />
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 25,
                delay: i * 0.2,
              }}
              className="p-8 text-center rounded-xl shadow-lg border bg-neutral-100 border-neutral-300 dark:bg-white/10 dark:border-white/20 transition-all"
            >
              <div className="text-4xl font-extrabold text-primary mb-2 h-[1.2em]">
                {stat.value === null ? (
                  <span>{stat.label}</span>
                ) : (
                  inView && (
                    <CountUp
                      start={0}
                      end={stat.value}
                      duration={2.5}
                      suffix={stat.suffix ?? ''}
                    />
                  )
                )}
              </div>
              <p className="text-lg font-medium leading-relaxed text-neutral-700 dark:text-neutral-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}