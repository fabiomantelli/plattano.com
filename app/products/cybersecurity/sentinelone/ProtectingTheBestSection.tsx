'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProtectingTheBestSection() {
  return (
    <section className="w-full py-24 bg-primary text-black dark:bg-neutral-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold leading-tight text-black dark:text-primary">
            PROTECTING THE BEST OF THE BEST
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            Including the 4 from the Fortune 10, and hundreds of Global 2000 companies.
          </p>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            At SentinelOne, our customers are #1. Global industry leaders from all sectors choose SentinelOne as their
            cybersecurity solution for today and tomorrow.
          </p>
        </div>

        {/* Image Section with Logos */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-8 mt-12 w-full">
          <div className="flex justify-center">
            <Image
              src="/images/products/cybersecurity/sentinelone/sentinelone-samsung.webp" // Replace with actual image path
              alt="Samsung Logo"
              width={100}
              height={50}
              className="h-auto w-24"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/products/cybersecurity/sentinelone/sentinelone-ea.webp" // Replace with actual image path
              alt="EA Sports Logo"
              width={100}
              height={50}
              className="h-auto w-24"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/products/cybersecurity/sentinelone/sentinelone-aston-martin.webp" // Replace with actual image path
              alt="Aston Martin Logo"
              width={100}
              height={50}
              className="h-auto w-24"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/products/cybersecurity/sentinelone/sentinelone-tommy-bahama.webp" // Replace with actual image path
              alt="Tommy Bahama Logo"
              width={100}
              height={50}
              className="h-auto w-24"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/products/cybersecurity/sentinelone/sentinelone-hitachi.webp" // Replace with actual image path
              alt="Hitachi Logo"
              width={100}
              height={50}
              className="h-auto w-24"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/products/cybersecurity/sentinelone/sentinelone-oneill.webp" // Replace with actual image path
              alt="ONeill Logo"
              width={100}
              height={50}
              className="h-auto w-24"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/products/cybersecurity/sentinelone/sentinelone-norwegian.webp" // Replace with actual image path
              alt="Norwegian Logo"
              width={100}
              height={50}
              className="h-auto w-24"
            />
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/products/cybersecurity/sentinelone/sentinelone-fridays.webp" // Replace with actual image path
              alt="TGI Fridays Logo"
              width={100}
              height={50}
              className="h-auto w-24"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}