'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const logoSrc = isDark
    ? '/images/products/cybersecurity/rainforest/rainforest-dark-logo.webp'
    : '/images/products/cybersecurity/rainforest/rainforest-light-logo.webp';

  return (
    <section className={`w-full py-20 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-12 px-6 sm:px-12 lg:px-24">
        
        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 space-y-6 md:space-y-8 text-center md:text-left"
        >
          {/* Rainforest Logo (desktop only) */}
          <div className="hidden md:block mb-4">
            <Image
              src={logoSrc}
              alt="Rainforest Logo"
              width={300}
              height={103}
              className="h-auto w-auto"
              priority
            />
          </div>

          <h1 className="text-[48px] font-extrabold font-sofia leading-tight">
            THE <span className="text-primary">CYBERSECURITY</span> PLATFORM{' '}
            <span className="text-primary">ALL-IN-ONE</span>
          </h1>

          <p className="text-[18px] font-ubuntu leading-relaxed">
            Add the all-in-one <span className="text-primary">cybersecurity</span> platform powered by Plattano and Rainforest Tech to your stack—helping teams reduce and mitigate cyber risks effectively.
          </p>
        </motion.div>

        {/* Image block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 w-full flex flex-col items-center md:items-end"
        >
          {/* Rainforest Logo (mobile only) */}
          <div className="block md:hidden mb-6">
            <Image
              src={logoSrc}
              alt="Rainforest Logo"
              width={300}
              height={103}
              className="mx-auto h-auto w-auto"
              priority
            />
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-full">
            <Image
              src="/images/products/cybersecurity/rainforest/rainforest-hero.png"
              alt="Rainforest cybersecurity platform"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
