'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function SolutionsSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section className={`w-full ${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'}`}>
      <div className="mx-auto max-w-7xl gap-16 py-8 px-12 sm:px-12 lg:px-24">
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-center font-semibold text-4xl md:text-5xl mb-12">SOLUTIONS</h2>
        </motion.div>

        {/* Primeira linha */}
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32 mb-24">
          {/* Imagem (desktop/tablet) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="hidden md:block w-full md:w-1/2"
          >
            <Image
              src="/images/home/solution-image.png"
              alt="Cloud illustration"
              width={600}
              height={400}
              className="w-full"
            />
          </motion.div>

          {/* Imagem (mobile) */}
          <motion.div className="block md:hidden w-full mb-4">
            <Image
              src="/images/home/solution-image.png"
              alt="Cloud illustration"
              width={400}
              height={300}
              className="mx-auto"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left items-center md:items-start"
          >
            <p className="text-[38px] leading-tight font-medium">
              <span className="text-primary font-semibold">BOOST YOUR EFFICIENCY</span> AND COMPETITIVENESS WITH OUR SOLUTIONS.
            </p>
            <p className="text-[18px]">And navigate your way out of problems.</p>
            <Link href="#" className="inline-block px-8 py-3 rounded-md font-semibold shadow-lg transition-colors duration-200 bg-primary text-white hover:bg-transparent hover:text-primary border border-primary">
              CLICK HERE
            </Link>
          </motion.div>
        </div>

        {/* Segunda linha */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-16 lg:gap-32">
          {/* Imagem (desktop/tablet) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="hidden md:block w-full md:w-1/2"
          >
            <Image
              src="/images/home/solution2-image.png"
              alt="Partner illustration"
              width={600}
              height={400}
              className="w-full"
            />
          </motion.div>

          {/* Imagem (mobile) */}
          <motion.div className="block md:hidden w-full mb-4">
            <Image
              src="/images/home/solution2-image.png"
              alt="Partner illustration"
              width={400}
              height={300}
              className="mx-auto"
            />
          </motion.div>

          {/* Texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left items-center md:items-start"
          >
            <p className="text-[38px] leading-tight font-medium">
              <span className="text-primary font-semibold">GENERATE NEW RECURRING REVENUE</span> WITH OUR SOLUTIONS AND SERVICES – BECOME OUR BUSINESS PARTNER.
            </p>
            <Link href="#" className="inline-block px-8 py-3 rounded-md font-semibold shadow-lg transition-colors duration-200 bg-primary text-white hover:bg-transparent hover:text-primary border border-primary">
              CLICK HERE
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
