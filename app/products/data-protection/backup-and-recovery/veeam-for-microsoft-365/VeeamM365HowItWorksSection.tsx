'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function VeeamHowItWorksSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex flex-col items-center gap-6 text-center"
        >
          {/* small heading */}
          <p className="uppercase text-sm font-semibold text-neutral-500 dark:text-neutral-400">
            How It Works
          </p>

          {/* main title */}
          <h2 className="text-[38px] sm:text-5xl font-medium leading-tight">
            <span className="text-primary font-semibold">Deploy & Store</span> Data Wherever You Choose
          </h2>

          {/* description */}
          <p className="max-w-2xl text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
            Veeam Backup for Microsoft 365 is built on three components: the backup server for centralized configuration, the backup proxy responsible for data transfer, and the backup repository where your data is stored. This architecture gives you the freedom to deploy and store data wherever you need—on-premises or in Plattano Hot Cloud Storage.
          </p>

          {/* CTA button */}
          <Link
            href="/products/storage/plattano-hot-cloud-storage"
            className="inline-block px-8 py-3 rounded-md font-semibold shadow-lg transition-colors duration-200 bg-primary text-white hover:bg-transparent hover:text-primary border border-primary"
          >
            Get Plattano Hot Cloud Storage
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
