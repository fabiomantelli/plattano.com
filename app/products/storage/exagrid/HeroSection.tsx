'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-12 px-6 sm:px-12 lg:px-24 md:h-full md:justify-center">

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 space-y-6 md:space-y-8 text-center md:text-left"
        >
          {/* ExaGrid Logo (desktop only) */}
          <div className="hidden md:block mb-4">
            <Image
              src="/images/products/storage/exagrid/exagrid-light-logo.png"
              alt="ExaGrid logo light"
              width={300}
              height={103}
              className="block dark:hidden h-auto w-auto"
              priority
            />
            <Image
              src="/images/products/storage/exagrid/exagrid-dark-logo.png"
              alt="ExaGrid logo dark"
              width={300}
              height={103}
              className="hidden dark:block h-auto w-auto"
              priority
            />
          </div>

          <h1 className="text-[40px] md:text-[46px] font-bold font-sofia-sans leading-tight">
            ExaGrid Backup Storage in Orlando <br />
            <span className="text-primary">Be Ready for Anything</span>
          </h1>

          <h2 className="text-[24px] font-medium font-sofia-sans">
            It&apos;s not a matter of <span className="text-primary">if</span> — it&apos;s <span className="text-primary">when</span>.
          </h2>

          <p className="text-[18px] font-ubuntu leading-relaxed text-neutral-800 dark:text-neutral-300">
            With Plattano and ExaGrid®, your backups land safely in a high-performance tiered architecture—offering industry-leading deduplication, fast restores, and ransomware-resilient retention. Ensure your business is protected, scalable, and always ready to recover.
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
          {/* ExaGrid Logo (mobile only) */}
          <div className="block md:hidden mb-6">
            <Image
              src="/images/products/storage/exagrid/exagrid-light-logo.png"
              alt="ExaGrid logo light"
              width={300}
              height={103}
              className="mx-auto h-auto w-auto block dark:hidden"
              priority
            />
            <Image
              src="/images/products/storage/exagrid/exagrid-dark-logo.png"
              alt="ExaGrid logo dark"
              width={300}
              height={103}
              className="mx-auto h-auto w-auto hidden dark:block"
              priority
            />
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-full mt-6 md:mt-0">
            <Image
              src="/images/products/storage/exagrid/exagrid-hero.png"
              alt="ExaGrid Tiered Backup Storage Appliance performance and recovery dashboard"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
