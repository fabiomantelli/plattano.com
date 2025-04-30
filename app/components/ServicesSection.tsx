'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ServicesSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  return (
    <section className={`w-full ${isDark ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900'}`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24 py-12">
        {/* Title */}
        <h2 className="text-center font-semibold text-4xl md:text-5xl mb-12">SERVICES</h2>

        {/* Content row */}
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
          {/* Imagem (desktop/tablet) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="hidden md:block w-full md:w-1/2"
          >
            <Image
              src="/services-image.png"
              alt="Managed services illustration"
              width={600}
              height={400}
              className="w-full"
            />
          </motion.div>

          {/* Imagem (mobile) */}
          <motion.div className="block md:hidden w-full mb-4">
            <Image
              src="/services-image.png"
              alt="Managed services illustration"
              width={400}
              height={300}
              className="w-3/4 mx-auto"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left items-center md:items-start"
          >
            <p className="text-[48px] leading-tight font-semibold text-primary">
              FOCUS ON YOUR BUSINESS!
            </p>
            <p className="text-[22px]">
              Discover our managed services and how your company can benefit from them.
            </p>
            <Link
              href="#"
              className="inline-block px-8 py-3 rounded-md font-semibold shadow-lg transition-colors duration-200 bg-primary text-white hover:bg-transparent hover:text-primary border border-primary"
            >
              EXPLORE OUR SERVICES
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
