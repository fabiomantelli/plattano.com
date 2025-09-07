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
    <section className="w-full min-h-screen flex items-center bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-12 px-6 sm:px-12 lg:px-24 md:h-full md:justify-center">

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-6 md:space-y-8 text-center md:text-left"
        >
          {/* ExaGrid Logo (desktop only) */}
          <div className="hidden md:block mb-4">
            <Image
              src="/images/products/storage/exagrid/exagrid-light-logo.png"
              alt="ExaGrid logo light"
              width={300}
              height={103}
              className="block dark:hidden h-auto w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[250px] xl:max-w-[300px]"
              priority
            />
            <Image
              src="/images/products/storage/exagrid/exagrid-dark-logo.png"
              alt="ExaGrid logo dark"
              width={300}
              height={103}
              className="hidden dark:block h-auto w-auto max-w-[150px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[250px] xl:max-w-[300px]"
              priority
            />
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-sofia-sans leading-tight">
            ExaGrid Backup Storage in Orlando <br />
            <span className="text-primary text-lg sm:text-2xl md:text-3xl lg:text-4xl">Be Ready for Anything</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium font-sofia-sans">
            It&apos;s not a matter of <span className="text-primary">if</span> — it&apos;s <span className="text-primary">when</span>.
          </h2>

          <p className="text-md sm:text-md md:text-base lg:text-lg leading-relaxed text-neutral-800 dark:text-neutral-300">
            With Plattano and ExaGrid®, your backups land safely in a high-performance tiered architecture—offering industry-leading deduplication, fast restores, and ransomware-resilient retention. Ensure your business is protected, scalable, and always ready to recover.
          </p>
        </motion.div>

        {/* Image block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 w-full flex flex-col items-center md:items-end"
        >
          {/* ExaGrid Logo (mobile only) */}
          <div className="block md:hidden mb-6 pt-8">
            <Image
              src="/images/products/storage/exagrid/exagrid-light-logo.png"
              alt="ExaGrid logo light"
              width={250}
              height={86}
              className="mx-auto h-auto w-auto max-w-[120px] sm:max-w-[150px] block dark:hidden"
              priority
            />
            <Image
              src="/images/products/storage/exagrid/exagrid-dark-logo.png"
              alt="ExaGrid logo dark"
              width={250}
              height={86}
              className="mx-auto h-auto w-auto max-w-[120px] sm:max-w-[150px] hidden dark:block"
              priority
            />
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-6 md:mt-0">
            <Image
              src="/images/products/storage/exagrid/exagrid-hero.png"
              alt="ExaGrid Tiered Backup Storage Appliance performance and recovery dashboard"
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
