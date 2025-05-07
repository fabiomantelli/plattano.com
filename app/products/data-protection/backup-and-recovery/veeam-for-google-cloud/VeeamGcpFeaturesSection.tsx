'use client'

import { motion } from 'framer-motion'

export default function VeeamGcpFeaturesSection() {
  const cards = [
    {
      title: 'Uncompromising Security',
      body:
        'Secure access and data management to defeat ransomware and other threats.',
    },
    {
      title: 'Fast, Reliable Recovery',
      body:
        'Advanced options that keep businesses productive with near-zero recovery time objectives (RTOs).',
    },
    {
      title: 'No Compromises',
      body:
        'Seamless backup that meets SLAs and budget requirements across hybrid cloud.',
    },
  ]

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-0">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            AUTOMATED & SECURE <span className="text-primary">BACKUP</span> & RECOVERY
            FOR GOOGLE CLOUD
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
            Veeam Backup for Google Cloud delivers native, policy-driven protection
            against accidental deletion, ransomware and other data-loss scenarios.
            Immutable backups and full or file-level restores ensure resilient,
            cost-effective data protection.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="flex flex-col h-full border border-primary rounded-xl p-6 bg-white/50 dark:bg-black/50 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-primary mb-3 whitespace-normal break-words">
                {card.title}
              </h3>
              <p className="text-sm flex-1 whitespace-normal break-words">
                {card.body}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
