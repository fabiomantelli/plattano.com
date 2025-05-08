'use client'

import { motion } from 'framer-motion'

const items = [
  {
    title: 'Ensure Data Resilience, Wherever It Resides',
    description:
      'From on‑prem critical workloads to cloud and home‑office data dispersion, we provide off‑site managed backup, monitoring, and the controls you need to stay resilient against any threat.',
  },
  {
    title: 'Protect Mission‑Critical Data Centers',
    description:
      'With daily backup orchestration and off‑site retention for long‑term compliance, Plattano Hot Cloud Storage ensures your essential workloads are always available.',
  },
  {
    title: 'Gain Control of Your Cloud Data',
    description:
      'Public clouds host your core workloads, but data protection is still your responsibility. Our BaaS puts the power of portable, recoverable data back in your hands.',
  },
  {
    title: 'Back Up Endpoints in the Cloud',
    description:
      'As remote work grows, more data lives on endpoints. Reach and protect files on any device—wherever it lives—through our managed cloud‑based endpoint backup.',
  },
  {
    title: 'Eliminate SaaS Data Loss',
    description:
      'SaaS apps like Microsoft 365 make you responsible for data protection. Our BaaS safeguards you against threats and retention gaps with managed services and immutable off‑site storage.',
  },
]

export default function ManagedBackupServicesWeTakeCareOfEverythingSection() {
  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-12">
        {/* Heading */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          WE TAKE CARE OF <span className="text-primary">EVERYTHING</span>
        </motion.h2>

        {/* Panels */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col bg-white dark:bg-white/5 border border-primary rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-sm leading-relaxed flex-grow">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
