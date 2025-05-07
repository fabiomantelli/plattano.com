'use client';

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VeeamAzureProtectionOverviewSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center gap-12 px-6 sm:px-12 lg:px-24">
        {/* ---------- Image Column ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/images/products/data-protection/backup-and-recovery/veeam-for-microsoft-azure/veeam-azure-protection-overview.png"
            alt="Automated Azure data protection illustration"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        {/* ---------- Text Column ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-primary">Comprehensive</span> Automated Protection for Azure Data
          </h2>
          <p className="text-base sm:text-lg opacity-90">
            Veeam Backup for Microsoft Azure delivers native, policy-based protection to help you recover reliably from accidental deletions, ransomware, and other data-loss scenarios. Immutable backups, full and file-level restores, and an API-first design ensure resilient, easy, and cost-efficient protection—freeing you to focus on strategic IT priorities.
          </p>

          {/* ---------- Feature Cards ---------- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
            {[
              {
                title: 'Layered Security',
                description:
                  'Logical segregation, least-privilege access, and immutable controls for cloud resilience.'
              },
              {
                title: 'Powerful Recovery',
                description:
                  'Broad restore options both in-cloud and out-of-cloud to meet any RTO.'
              },
              {
                title: 'Optimized for Azure',
                description:
                  'Highly customizable RPOs with native, comprehensive protection that keeps your cloud costs down.'
              }
            ].map((card) => (
              <div
                key={card.title}
                className="border border-primary rounded-lg p-6 bg-white/5 dark:bg-black/10"
              >
                <h3 className="text-xl font-semibold text-primary mb-2">
                  {card.title}
                </h3>
                <p className="text-sm">{card.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
