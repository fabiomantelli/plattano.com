'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SentinelOneHighlightSection() {
  return (
    <section className="w-full py-24 text-neutral-900 dark:text-white dark:bg-black bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-16"
      >
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/products/cybersecurity/sentinelone/sentinelone-protection.webp"  // Replace with actual image path
            alt="SentinelOne Highlight Image"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-primary">
            STAND OUT FROM THE CROWD!
          </h2>

          <div className="mt-6 space-y-6">
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              Drive risk reduction and efficiency with SentinelOne.
            </p>

            <p className="text-primary text-lg md:text-xl font-medium leading-relaxed mt-6">
              ARE YOU READY?
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
