'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(100vh-100px)] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/partnership/partnership-hero.png"
          alt="Partnership Background"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center 30%' }}
          className="brightness-[1.9] dark:brightness-[0.6]"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/70 dark:bg-black/60 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full min-h-[calc(100vh-100px)] px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12 flex flex-col items-center"
        >
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-black dark:text-white max-w-3xl">
            BECAUSE NO ONE GROWS ALONE
          </h1>

          {/* Accelerate Section */}
          <div className="flex flex-col items-center text-black dark:text-white">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">ACCELERATE:</h2>

            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm md:text-base font-medium mb-6 max-w-3xl">
              {[
                ['💰', 'Revenue'],
                ['📈', 'Growth'],
                ['🏅', 'Competitiveness'],
                ['⏱️', 'Time-to-Market'],
                ['🕒', 'Time-to-Value'],
              ].map(([emoji, label]) => (
                <div key={label} className="flex items-center gap-2">
                  <span role="img" aria-label={label}>{emoji}</span>
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <hr className="my-6 border-orange-500 w-full max-w-xs opacity-70" />

            <h3 className="text-lg md:text-xl font-bold tracking-wide">EMPOWERED BY PLATTANO</h3>
            <p className="text-orange-500 mt-2 text-sm md:text-xl max-w-xl">
              Don&apos;t leave money on the table — we unlock all your opportunities.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
