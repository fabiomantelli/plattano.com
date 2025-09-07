'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fallback timer to ensure content shows even if Intersection Observer fails
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full min-h-screen flex flex-col items-center bg-white text-black dark:bg-black dark:text-white">
      {/* Mobile Logo (top) */}
      <div className="block md:hidden mt-12 mb-6 px-6 sm:px-12 lg:px-24 w-full">
        <Image
          src="/images/products/data-protection/veeam-data-platform/veeam-logo.png"
          alt="Veeam company logo"
          width={200}
          height={60}
          className="h-auto w-[200px] mx-auto"
          priority
        />
      </div>

      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-12 px-6 sm:px-12 lg:px-24 flex-1 md:h-full md:justify-center">

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          {/* Desktop Logo */}
          <div className="hidden md:block mb-4">
            <Image
              src="/images/products/data-protection/veeam-data-platform/veeam-logo.png"
              alt="Veeam company logo"
              width={200}
              height={60}
              className="h-auto w-[200px]"
              priority
            />
          </div>

          <p className="text-2xl font-medium">
            Unified Backup, Recovery & Monitoring for Your Entire Hybrid Environment
          </p>

          <h1 className="text-4xl md:text-5xl font-bold font-sofia leading-tight">
            Veeam Data Platform in Orlando <br />
            <span className="text-primary md:text-4xl text-3xl">Enterprise-Grade Data Resilience</span>
          </h1>

          <p className="text-[18px] font-ubuntu leading-relaxed text-neutral-800 dark:text-neutral-300">
            Plattano Technologies delivers the full Veeam Data Platform, combining backup, observability, automation and ransomware defense for your hybrid or multicloud environment.
          </p>
        </motion.div>

        {/* Image block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 w-full flex justify-center md:justify-end"
        >
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-full mt-6 md:mt-0">
            <Image
              src="/images/products/data-protection/veeam-data-platform/veeam-data-platform-hero.png"
              alt="Veeam Data Platform for unified data protection, backup and recovery"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
