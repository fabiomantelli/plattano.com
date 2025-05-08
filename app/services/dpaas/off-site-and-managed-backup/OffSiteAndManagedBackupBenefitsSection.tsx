'use client'

import { motion } from 'framer-motion'

export default function OffSiteAndManagedBackupBenefitsSection() {
  const cards = [
    {
      title: 'Single Platform',
      description:
        'Protect all workloads—physical, virtual, cloud and NAS—from one unified solution.',
    },
    {
      title: 'Protect Against Ransomware',
      description:
        'Secure backup is your last line of defense against malicious attacks.',
    },
    {
      title: 'Send Backups Off‑Site',
      description:
        'Leverage immutable, resilient cloud storage—get everything you need with Plattano.',
    },
    {
      title: 'Managed on Your Terms',
      description:
        'Choose your SLA level and management style—from self‑service portals to fully managed.',
    },
  ]

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8">
        {/* Title + subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            Managed Backup <span className='text-primary'>Benefits</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-90">
            Our BaaS solutions powered by Veeam deliver simple, flexible, reliable
            and advanced features to meet your business requirements.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="border border-primary rounded-xl bg-white dark:bg-white/5 p-6 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-primary mb-3">
                {card.title}
              </h3>
              <p className="text-sm flex-1">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
