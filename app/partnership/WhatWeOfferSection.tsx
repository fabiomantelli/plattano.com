'use client';

import { motion } from 'framer-motion';

export default function WhatWeOfferSection() {
  return (
    <section className="relative w-full bg-white dark:bg-black text-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="max-w-4xl mx-auto text-center space-y-8"
      >
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold">WHAT WE <span className='text-primary'>OFFER</span></h2>

        {/* Description */}
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-200 leading-relaxed">
          Plattano operates in the data protection and storage sectors, helping accelerate your business with agility and deep market expertise.
          <br />
          <br />
          We deliver value through managed services and strategic partner programs designed for sustainable growth and competitive advantage.
        </p>

        {/* Highlighted statement */}
        <p className="text-sm md:text-base font-semibold flex justify-center items-start gap-2 text-center max-w-3xl mx-auto text-black dark:text-white">
          <span>
            <span className='text-primary'>PLATTANO</span> EXISTS <span className='text-primary'>FOR OUR CLIENTS</span> — and we believe our expertise should be shared with our partners so that everyone can grow in a fair and sustainable way.
          </span>
        </p>
      </motion.div>
    </section>
  );
}
