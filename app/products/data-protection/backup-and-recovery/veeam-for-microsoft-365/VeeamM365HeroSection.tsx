'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VeeamM365HeroSection() {
  const features = [
    'Leader in Microsoft 365 backup—protecting over 17 million users',
    'Comprehensive protection for Exchange, SharePoint, OneDrive, and Teams',
    'Empower users with a self-service recovery portal',
    'Delivered as a fully managed service by Plattano',
  ];

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24 flex flex-col items-center gap-16 lg:flex-row lg:items-center">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 space-y-6 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-primary">#1</span> Data Protection Solution for Microsoft 365
          </h2>
          <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300">
            Your data. Your responsibility.
          </p>
          <ul className="space-y-4">
            {features.map((feat) => (
              <li key={feat} className="flex justify-center lg:justify-start gap-2">
                <span className="mt-2 block h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 w-full max-w-md sm:max-w-lg"
        >
          <Image
            src="/images/products/data-protection/backup-and-recovery/veeam-for-microsoft-365/veeam-m365-hero.png"
            alt="Cloud lock representing Microsoft 365 protection"
            width={640}
            height={480}
            className="w-full object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
