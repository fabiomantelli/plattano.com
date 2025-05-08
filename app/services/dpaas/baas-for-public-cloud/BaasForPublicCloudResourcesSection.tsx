'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: 'Protect Cloud Data',
    description:
      'Leave public‑cloud data protection to the experts and refocus on your business growth initiatives.',
  },
  {
    title: 'Remove Complexity',
    description:
      'Simplify your data protection: no more juggling multiple tools, tiers, or hidden fees.',
  },
  {
    title: 'Data Portability',
    description:
      'Store and retrieve backups across clouds or on‑prem, with full control over your data.',
  },
  {
    title: 'Managed on Your Terms',
    description:
      'Get flexible SLAs, reporting, and support—tailored to your needs, 24×7.',
  },
]

export default function BaaSForPublicCloudResourcesSection() {
  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8">
        {/* Heading */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          PUBLIC‑CLOUD BaaS <span className="text-primary">Resources</span>
        </motion.h2>
        {/* Sub‑text */}
        <motion.p
          className="text-center max-w-2xl mx-auto text-base sm:text-lg opacity-90"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Our Veeam‑powered BaaS for public cloud gives you simple, flexible,
          reliable and advanced capabilities to meet your business needs.
        </motion.p>

        {/* Feature grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {features.map((f, idx) => (
            <motion.div
              key={f.title}
              className="p-6 bg-white dark:bg-white/5 border border-neutral-200 dark:border-white/20 rounded-xl shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-sm leading-relaxed opacity-90">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
