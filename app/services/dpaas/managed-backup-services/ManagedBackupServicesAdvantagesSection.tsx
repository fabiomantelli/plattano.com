'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const advantages = [
  {
    title: 'Maximize Your Resources',
    description:
      'Offload your data protection to pros so you can refocus your team on strategic IT initiatives.',
  },
  {
    title: 'Get Up & Running Fast',
    description:
      'Protect your data immediately—no on‑prem implementation required. We handle everything.',
  },
  {
    title: 'Leverage Plattano Expertise',
    description:
      'Tap decades of Veeam‑powered best practices—our managed service pros keep your backups rock solid.',
  },
]

export default function ManagedBackupServicesAdvantagesSection() {
  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          What Are the Advantages of <span className="text-primary">Managed Services</span>?
        </motion.h2>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {advantages.map((item, idx) => (
            <motion.div
              key={idx}
              className="p-6 border border-primary rounded-xl bg-white dark:bg-white/5 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-sm leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
