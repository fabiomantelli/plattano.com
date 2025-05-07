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
          <h1 className="text-[46px] font-extrabold leading-tight">
            FOR CLOUD <span className="text-primary">RESILIENCE</span> AND EFFICIENCY
          </h1>
          <ul className="space-y-4 text-[18px]">
            {[
              'Goes beyond limited agentless snapshots for advanced backup;',
              'Secure immutable storage for Azure Blob;',
              'Fast, reliable recovery including file-level restores;',
              'Integrate with the Veeam Data Platform;',
              'Available as a fully managed service with Plattano.'
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
            alt="Cloud resilience and efficiency illustration"
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