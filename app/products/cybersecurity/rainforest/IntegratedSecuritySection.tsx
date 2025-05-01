'use client';

import Image from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function IntegratedSecuritySection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section className={`w-full py-12 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-12 px-6 sm:px-12 lg:px-24">
        {/* Image block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 w-full flex justify-center md:justify-start"
        >
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-full">
            <Image
              src="/images/products/cybersecurity/rainforest/rainforest-secure.png"
              alt="Security integration illustration"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 space-y-6 md:space-y-8 text-center md:text-left"
        >
          <h2 className="text-[36px] font-sofia font-bold">
            <span className="text-primary">SECURITY</span>{' '}
            <span className={isDark ? 'text-white' : 'text-black'}>360°</span>
          </h2>
          <p className="text-[18px] font-ubuntu leading-relaxed">
            With the Rainforest platform, you can secure your entire company—connecting developers, governance,
            and risk management with no friction between teams. One platform. Multiple possibilities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
