'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: '24', unit: 'trillion', description: 'security signals processed daily' },
  { value: '9', unit: 'billion', description: 'identity threats blocked' },
  { value: '31', unit: 'billion', description: 'email threats blocked' },
  { value: '$32', unit: 'billion', description: 'avg. cost of ransomware attacks' },
  { value: '1.85', unit: 'million', description: 'SMBs targeted by cyberattacks' },
  { value: '58', unit: '%', description: 'attack attempts in Brazil in 2022 (20% increase from 2021)' },
  { value: '1.5', unit: 'billion', description: 'Brazilian SMBs lack proper cyber protection' },
  { value: '+60', unit: '%', description: 'ransomware & phishing impact SMBs' },
];

export default function CyberFocusSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section
      className={`w-full py-24 ${
        isDark ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'
      }`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-[36px] font-sofia font-bold">
            <span className="text-primary">CYBERSECURITY IN FOCUS</span> LIKE NEVER BEFORE
          </h2>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`rounded-xl p-6 text-center shadow-md transition-all ${
                isDark
                  ? 'bg-white/10 border border-white/20'
                  : 'bg-neutral-100 border border-neutral-300'
              }`}
            >
              <div className="text-[36px] font-bold text-primary mb-2">
                {stat.value} {stat.unit}
              </div>
              <p className="text-sm leading-relaxed">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Source */}
        <p className="text-md text-center opacity-70">
        <span className="text-primary">Sources:</span> State of Ransomware 2023, Panda Security Index, PwC Brasil
        </p>
      </motion.div>
    </section>
  );
}