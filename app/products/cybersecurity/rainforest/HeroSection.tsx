'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 sm:px-12 lg:px-24 md:min-h-[calc(100vh-150px)]">
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
              src="/images/products/cybersecurity/rainforest/rainforest-light-logo.webp"
              alt="Rainforest Logo"
              width={300}
              height={103}
              className="block dark:hidden h-auto w-auto"
              priority
              suppressHydrationWarning
            />
            <Image
              src="/images/products/cybersecurity/rainforest/rainforest-dark-logo.webp"
              alt="Rainforest Logo"
              width={300}
              height={103}
              className="hidden dark:block h-auto w-auto"
              priority
              suppressHydrationWarning
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
          {/* Rainforest Logo (mobile only, top) */}
          <div className="block md:hidden mb-6">
            <Image
              src="/images/products/cybersecurity/rainforest/rainforest-light-logo.webp"
              alt="Rainforest Logo"
              width={300}
              height={103}
              className="mx-auto h-auto w-auto block dark:hidden"
              priority
            />
            <Image
              src="/images/products/cybersecurity/rainforest/rainforest-dark-logo.webp"
              alt="Rainforest Logo"
              width={300}
              height={103}
              className="mx-auto h-auto w-auto hidden dark:block"
              priority
            />
          </div>

          {/* Hero Image (mobile bottom) */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-full mt-6 md:mt-0">
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
