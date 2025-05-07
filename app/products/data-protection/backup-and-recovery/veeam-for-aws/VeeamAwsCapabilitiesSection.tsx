'use client'

import { motion } from 'framer-motion'

const items = [
  {
    title: 'Immutable & Encrypted',
    description:
      'Data integrity via WORM storage and encryption.',
  },
  {
    title: 'Isolated Backups',
    description:
      'Logical separation of backup data from production accounts.',
  },
  {
    title: 'Secure Access',
    description:
      'Least-privilege IAM and role-based access control (RBAC).',
  },
  {
    title: 'Recovery Anywhere',
    description:
      'Restore across accounts, regions, and platforms.',
  },
  {
    title: 'Full & File-Level Restore',
    description:
      'Complete restores or granular file-level recovery on premises or in the cloud.',
  },
  {
    title: 'Simplified Workflows',
    description:
      'Wizard-driven, automated, self-service restore options.',
  },
  {
    title: 'Policy-Driven Protection',
    description:
      'Automated discovery and protection based on native backup policies.',
  },
  {
    title: 'Cost Optimization',
    description:
      'End-to-end lifecycle management with built-in cost calculators.',
  },
  {
    title: 'Hybrid-Ready',
    description:
      'Consistent operations across hybrid and multi-cloud environments.',
    fullWidth: true, // spans both columns on md+
  },
]

export default function VeeamAwsCapabilitiesSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-0 space-y-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center space-y-2"
        >
          <p className="text-sm uppercase text-neutral-500">Capabilities</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Key Features of Veeam Backup for AWS
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-300">
            The essential capabilities for resilient, policy-driven AWS data protection.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {items.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col h-full border border-primary rounded-xl p-6 bg-white/50 dark:bg-black/50 hover:shadow-lg transition 
                ${item.fullWidth ? 'md:col-span-2' : ''}
              `}
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-sm flex-1 whitespace-normal">
                {item.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}