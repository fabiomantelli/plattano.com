'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import CountUp from 'react-countup';

const stats = [
  {
    title: 'RECORD',
    description: 'In the ATT&CK evaluation.',
    value: null, // No number for the "RECORD" stat
  },
  {
    title: '100%',
    description: 'of prevention in the latest MITRE & ATT&CK evaluation.',
    value: 100, // This will be animated
  },
  {
    title: '0',
    description: 'detection delays. Leading analytical coverage, leading visibility.',
    value: 0, // Static value, no animation needed
  },
];

export default function MitreEngenuitySection() {
  return (
    <section className="w-full py-24 text-neutral-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-16 flex flex-col items-center gap-16"
      >
        {/* SentinelOne Logo */}
        <div className="w-full flex justify-center">
          <Image
            src="/images/products/cybersecurity/sentinelone/sentinelone-mitre.webp"  // Replace with actual image path
            alt="SentinelOne MITRE Logo"
            width={250}
            height={100}
            className="rounded-xl filter dark:invert"
          />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              className="p-8 text-center rounded-xl shadow-lg transition-all border bg-neutral-100 border-neutral-300 dark:bg-white/10 dark:border-white/20"
            >
              <div className="text-4xl font-extrabold text-primary mb-2">
                {/* Display "RECORD" without CountUp for first item */}
                {stat.value === null ? (
                  <span>{stat.title}</span>
                ) : (
                  // Apply CountUp to other numbers
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    suffix={stat.title === '100%' ? '%' : ''}
                  />
                )}
              </div>
              <p className="text-lg font-medium leading-relaxed text-neutral-700 dark:text-neutral-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}