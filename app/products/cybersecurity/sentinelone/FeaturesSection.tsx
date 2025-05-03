'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function FeaturesSection() {
  return (
    <section className="w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold leading-tight">
            <span className='text-primary'>The first autonomous AI security platform</span> to protect your entire business
          </h2>
          <ul className="space-y-4 text-lg md:text-xl font-medium">
            <li>Break down security silos.</li>
            <li>Gain visibility and control across your business.</li>
            <li>Leverage real-time data with AI.</li>
            <li>Get autonomous response at machine speed.</li>
            <li>Be the villain of villains.</li>
          </ul>
        </motion.div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 w-full flex justify-center"
        >
          <div className="w-full max-w-md sm:max-w-lg">
            <Image
              src="/images/products/cybersecurity/sentinelone/sentinelone-features.png"
              alt="SentinelOne Feature Image"
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