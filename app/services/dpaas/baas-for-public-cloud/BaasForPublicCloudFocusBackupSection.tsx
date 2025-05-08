'use client'

import { motion } from 'framer-motion'

const cards = [
  {
    title: 'Free Up Resources',
    text: 'Leave public‑cloud data protection to the experts and refocus on your growth initiatives.',
  },
  {
    title: 'Portable Data Management',
    text: 'Store backups in the cloud, between clouds, or on‑prem—data management tailored to you.',
  },
  {
    title: 'Plattano Experience',
    text: 'Get best‑practice guidance from our BaaS partners using Veeam’s native cloud‑backup technology.',
  },
]

export default function BaasForPublicCloudFocusBackupSection() {
  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-0 space-y-8 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          FOCUS ON YOUR <span className="text-primary">BUSINESS</span>, NOT ON <span className='text-primary'>BACKUP</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          className="max-w-2xl mx-auto text-base sm:text-lg opacity-90"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Backup‑as‑a‑Service providers using Veeam’s native cloud‑backup technology remove data‑protection complexity—so you can focus budget, resources and attention on what drives your growth.
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {cards.map((c) => (
            <div
              key={c.title}
              className="border border-primary rounded-lg p-6 text-center space-y-4"
            >
              <h3 className="text-xl font-semibold">{c.title}</h3>
              <p className="text-sm opacity-90">{c.text}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
