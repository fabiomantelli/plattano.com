'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { TrendingUp, Timer, BarChart3 } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '35%',
    description: 'increase in revenue from faster delivery of modern applications',
  },
  {
    icon: Timer,
    value: '41%',
    description: 'lower cost and fewer hours spent on IT infrastructure',
  },
  {
    icon: BarChart3,
    value: '35%',
    description: 'increase in overall business productivity',
  },
];

export default function MulticloudImpactSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const sectionBg = isDark ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-900';
  const cardBg = isDark
    ? 'bg-white/5 border-white/10 backdrop-blur-sm'
    : 'bg-white/80 border-neutral-200 backdrop-blur-sm';

  return (
    <section className={`w-full py-24 ${sectionBg}`}>
      <div className="max-w-6xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-[36px] md:text-[44px] font-extrabold mb-4"
        >
          <span className="text-primary">HIT THE MARK</span> IN MULTI-CLOUD
        </motion.h2>

        {/* Subtítulo */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-lg md:text-xl text-primary font-medium mb-16"
        >
          Companies that embrace multi-cloud environments report significant benefits.
        </motion.p>

        {/* Estatísticas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className={`flex flex-col items-center text-center p-8 rounded-2xl shadow-lg border transition-all duration-300 ${cardBg}`}
            >
              <item.icon className="w-10 h-10 text-primary mb-4" />
              <div className="text-[48px] font-extrabold mb-2">{item.value}</div>
              <p className="text-[15px] font-ubuntu leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
