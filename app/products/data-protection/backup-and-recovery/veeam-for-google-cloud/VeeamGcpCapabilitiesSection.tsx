'use client'

import { motion } from 'framer-motion'

const items = [
  {
    title: 'Immutable & Encrypted',
    description:
      'Data integrity via WORM storage and encryption for tamper-proof backups.',
  },
  {
    title: 'Isolated Backups',
    description: 'Logical separation of backup data from production accounts.',
  },
  {
    title: 'Secure Access',
    description:
      'Least-privilege IAM and role-based access control (RBAC) for tight security.',
  },
  {
    title: 'Recovery Anywhere',
    description:
      'Restore across projects, regions and platforms with maximum flexibility.',
  },
  {
    title: 'Full & File-Level Restore',
    description:
      'Complete VM restores or granular, file-level recovery on premises or cloud.',
  },
  {
    title: 'Simplified Workflows',
    description:
      'Wizard-driven, automated and self-service options make restores easy.',
  },
  {
    title: 'Policy-Driven Protection',
    description:
      'Automated discovery and protection based on native GCP backup policies.',
  },
  {
    title: 'Cost Optimization',
    description:
      'End-to-end lifecycle management with built-in cost calculators.',
  },
  {
    title: 'Hybrid-Ready',
    description:
      'Consistent operations across multi-cloud and hybrid environments.',
    fullWidth: true, // will span both columns on md+
  },
]

export default function VeeamGcpCapabilitiesSection() {
  return (
    <section className="w-full bg-black/9 text-black dark:bg-neutral-900 dark:text-white py-20">
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
            Key Features of Veeam Backup for Google Cloud
          </h2>
          <p className="text-base text-neutral-700 dark:text-neutral-300">
            The most important capabilities for resilient, policy-driven cloud data protection.
          </p>
        </motion.div>

        {/* Grid */}
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
