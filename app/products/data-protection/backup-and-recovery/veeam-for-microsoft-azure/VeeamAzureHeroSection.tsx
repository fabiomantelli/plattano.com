'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VeeamAzureHeroSection() {
  return (
    <section className="w-full min-h-screen flex items-center bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-12 px-6 sm:px-12 lg:px-24">

        {/* ---------- Text block ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 space-y-6 md:space-y-8 text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Veeam Backup for Microsoft Azure in Orlando <br />
            <span className="text-primary md:text-4xl text-2xl">Cloud Resilience & Rapid Recovery</span>
          </h1>

          <p className="text-[18px] text-neutral-800 dark:text-neutral-300">
            Protect your Azure workloads with native Veeam backup. Delivered by Plattano, our managed solution ensures immutability, rapid restores, and enterprise-grade security in Orlando.
          </p>

          <ul className="space-y-4 text-[18px] text-neutral-800 dark:text-neutral-300 pt-2">
            {[
              'Goes beyond snapshots with policy-based native Azure backup;',
              'Immutable storage with Azure Blob and encryption;',
              'Fast, granular recovery—VMs, files, app-level;',
              'Fully integrated with the Veeam Data Platform;',
              'Delivered as a fully managed service by Plattano Technologies in Orlando.',
            ].map((line) => (
              <li key={line} className="flex justify-center lg:justify-start items-start gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ---------- Image block ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.6 }}
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
