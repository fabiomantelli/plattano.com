'use client';

import { motion } from 'framer-motion';

export default function OptimizeSecuritySection() {
  return (
    <section className="w-full py-24 text-neutral-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Text Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-4xl font-bold leading-tight text-primary">
            OPTIMIZE SECURITY. MAXIMIZE VALUE.
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            With an all-encompassing security solution that can do it all, your teams save time and money. Consolidate different
            vendors, reduce training time, and speed up discovery and response with everything you need in one place.
          </p>
        </div>

        {/* Image */}
        <div className="flex-1 mt-8 md:mt-0">
          <img
            src="/images/products/cybersecurity/sentinelone/sentinelone-robot-monitor.png" // Replace with your image path
            alt="SentinelOne XDR"
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
