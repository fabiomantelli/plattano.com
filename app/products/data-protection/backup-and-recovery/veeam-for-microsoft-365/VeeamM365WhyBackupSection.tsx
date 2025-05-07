'use client';

import { motion } from 'framer-motion';

export default function VeeamM365WhyBackupSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
        >
          WHY <span className="text-primary">BACK UP OFFICE 365?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-base sm:text-lg leading-relaxed text-neutral-700 dark:text-neutral-300"
        >
          Although Microsoft hosts the infrastructure, it doesn’t replace your responsibility
          to back up your critical Office 365 data. According to ESG, 53% of organizations
          surveyed experienced data loss in SaaS applications over the past 12 months. Microsoft’s
          shared responsibility model makes it clear—your data is yours. You control it and
          you’re responsible for protecting it.
        </motion.p>
      </div>
    </section>
  );
}
