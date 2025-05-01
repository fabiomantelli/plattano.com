'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const insights = [
  {
    image: '/images/products/cybersecurity/rainforest/rainforest-fraud.webp',
    text: 'Find fake domains, social media profiles, and websites impersonating your company.',
  },
  {
    image: '/images/products/cybersecurity/rainforest/rainforest-leak.webp',
    text: 'Detect stolen or leaked data, credentials, code, and other sensitive information about your company across the surface, deep, and dark web using our Digital Risk Protection (DRP) module.',
  },
];

export default function BrandIntelligenceSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = resolvedTheme === 'dark';

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className={`w-full py-20 ${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-black'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-16"
      >
        {/* Title and Description */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <h2 className="text-[40px] font-sofia font-bold leading-snug">
            <span className="text-primary">BRAND</span> INTELLIGENCE
          </h2>
          <p className="text-[18px] font-ubuntu leading-relaxed">
            Rainforest Brand Intelligence is an innovative solution that actively monitors a company’s brand against potential threats such as fraud or data leaks. It leverages advanced technology to detect fraudulent activity and leaks that could damage brand reputation and lead to financial loss. With a data-driven approach, it provides actionable insights that empower businesses to respond quickly and strategically to brand-related risks.
          </p>
        </div>

        {/* Insight Boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {insights.map(({ image, text }, index) => (
            <div
              key={index}
              className={`
                rounded-xl p-6 text-center flex flex-col items-center gap-4 shadow-md transition
                ${isDark ? 'bg-white/10 border border-white/20' : 'bg-white border border-neutral-300'}
              `}
            >
              <Image
                src={image}
                alt={`Insight ${index + 1}`}
                width={120}
                height={120}
                className="w-28 h-auto object-contain"
              />
              <p className="text-[16px] font-ubuntu leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Illustration (desktop only) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto mt-12 px-6 sm:px-12 lg:px-24 hidden md:block"
      >
        <div className="w-full flex justify-center">
          <Image
            src="/images/products/cybersecurity/rainforest/rainforest-code-leak.webp"
            alt="Rainforest Code Intelligence Graphic"
            width={1000}
            height={600}
            className="w-full h-auto rounded-lg shadow-md"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}
