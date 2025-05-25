'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full h-screen">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/partnership/partnership-hero.png"
          alt="Partnership Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          className="opacity-30"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30 dark:bg-black/60" />

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto text-center text-black dark:text-white">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-10 flex flex-col items-center justify-center"
        >
          {/* Titles */}
          <div className="space-y-4">
            <h1 className="text-black dark:text-white text-4xl md:text-5xl font-bold leading-tight max-w-3xl">
              BECAUSE NO ONE GROWS ALONE
            </h1>
          </div>

          {/* Accelerate Section content */}
          <div className="flex flex-col items-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">ACCELERATE:</h2>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm md:text-base text-orange-500 mb-6 max-w-3xl">
              {[
                ['💰', 'Revenue'],
                ['📈', 'Growth'],
                ['🏅', 'Competitiveness'],
                ['⏱️', 'Time-to-Market'],
                ['🕒', 'Time-to-Value'],
              ].map(([emoji, label]) => (
                <div key={label} className="flex items-center gap-2">
                  <span role="img" aria-label={label}>{emoji}</span>
                  <span className="text-neutral-900 dark:text-white">{label}</span>
                </div>
              ))}
            </div>

            <hr className="my-6 border-orange-500 w-full max-w-md" />

            <h3 className="text-lg md:text-xl font-bold">EMPOWERED BY PLATTANO</h3>
            <p className="text-orange-500 mt-2 text-sm md:text-base max-w-xl">
              Don&apos;t leave money on the table — we unlock all your opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
