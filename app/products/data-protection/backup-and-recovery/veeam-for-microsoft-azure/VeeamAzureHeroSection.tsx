'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function VeeamAzureHeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fallback timer to ensure content shows even if Intersection Observer fails
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full min-h-screen flex items-center bg-white text-black dark:bg-black dark:text-white overflow-x-hidden">
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12 px-4 sm:px-6 lg:px-24">

        {/* ---------- Text block ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-6 md:space-y-8 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Veeam Backup for Microsoft Azure in Orlando <br />
            <span className="text-primary md:text-3xl text-2xl">Cloud Resilience & Rapid Recovery</span>
          </h1>

          <p className="text-xl text-neutral-800 dark:text-neutral-300">
            Protect your Azure workloads with native Veeam backup. Delivered by Plattano, our managed solution ensures immutability, rapid restores, and enterprise-grade security in Orlando.
          </p>

          <ul className="space-y-4 md:text-sm text-md t-neutral-800 dark:text-neutral-300 pt-2">
            {[
              'Goes beyond snapshots with policy-based native Azure backup;',
              'Immutable storage with Azure Blob and encryption;',
              'Fast, granular recovery—VMs, files, app-level;',
              'Fully integrated with the Veeam Data Platform;',
              'Delivered as a fully managed service by Plattano Technologies in Orlando.',
            ].map((line) => (
              <li key={line} className="flex items-center gap-3 text-left">
                <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span className="flex-1">{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ---------- Image block ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 w-full flex justify-center md:justify-end"
        >
          <Image
            src="/images/products/data-protection/backup-and-recovery/veeam-for-microsoft-azure/veeam-azure-hero.png"
            alt="Veeam backup and recovery for Microsoft Azure cloud workloads"
            width={600}
            height={400}
            className="w-full max-w-xs sm:max-w-sm md:max-w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
