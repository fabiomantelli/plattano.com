'use client'

import { motion } from 'framer-motion'

const FEATURES = [
  {
    title: 'Isolated Backups',
    description:
      'Logical separation of backup data from production accounts.'
  },
  {
    title: 'Secure Access',
    description:
      'Least-privilege IAM and role-based access control (RBAC).'
  },
  {
    title: 'Immutable Storage',
    description:
      'Use immutable Azure Blob storage for WORM-compliant retention.'
  },
  {
    title: 'Recovery Flexibility',
    description:
      'Cross-subscription, cross-region, or out-of-Azure restores.'
  },
  {
    title: 'Full & File-Level',
    description:
      'Complete VM restores or granular file-level recovery to original or new targets.'
  },
  {
    title: 'Simplified Recovery',
    description:
      'Wizard-driven, automated self-service workflows.'
  },
  {
    title: 'Automated Backup',
    description:
      'Native snapshot orchestration for discovery and protection.'
  },
  {
    title: 'Cost Optimization',
    description:
      'Backup lifecycle management with storage cost calculators.'
  },
  {
    title: 'Hybrid Cloud Ready',
    description:
      'Consistent operations across single- and multi-cloud environments.'
  }
]

export default function VeeamAzureKeyFeaturesSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-4xl mx-auto text-center space-y-6"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
          <span className='text-primary'>Key Features</span> of Veeam Backup for <span className='text-primary'>Microsoft Azure</span>
        </h2>
        <p className="text-base sm:text-lg opacity-90">
          Protect your Azure workloads with policy-driven automation, resilient immutability,
          and flexible recovery options—designed to save time and control costs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
      >
        {FEATURES.map((feat) => (
          <div
            key={feat.title}
            className="border border-primary rounded-lg p-6 bg-white/5 dark:bg-black/10 flex flex-col"
          >
            <h3 className="text-xl font-semibold text-primary mb-2 text-center">
              {feat.title}
            </h3>
            <p className="text-sm text-center flex-grow">
              {feat.description}
            </p>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
