'use client';

import { motion } from 'framer-motion';

export default function ResilienceSection() {
  return (
    <section className="w-full bg-black text-white">
      {/* Top horizontal bar */}
      <div className="h-0.5 w-full bg-primary" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.6 }}
        className="mx-auto max-w-7xl px-4 py-24 flex flex-col md:flex-row gap-16 md:items-center px-12"
      >
        {/* Left column */}
        <div className="w-full md:w-1/2 text-[38px] leading-tight font-semibold md:pr-8 text-center md:text-left">
          <span className="text-primary">ACTIVATE</span> YOUR COMPANY'S DIGITAL RESILIENCE.
          <br />
          <span className="text-primary">ACTIVATE</span> IT HERE AND NOW.
        </div>

        {/* Right column */}
        <div className="w-full md:w-1/2 text-[18px] leading-relaxed text-center md:text-left">
          With Plattano by your side, you gain the confidence you need to drive your business—let us handle every challenge of your digital foundation.
        </div>
      </motion.div>

      {/* Bottom horizontal bar */}
      <div className="h-0.5 w-full bg-primary" />
    </section>
  );
}