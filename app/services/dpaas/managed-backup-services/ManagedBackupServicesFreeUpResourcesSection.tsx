'use client'

import { motion } from 'framer-motion'

export default function ManagedBackupServicesFreeUpResourcesSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8 text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Free Up Time and Resources for Your Most <span className="text-primary">Strategic IT Priorities</span>
        </motion.h2>

        {/* Body text */}
        <motion.p
          className="text-base sm:text-lg leading-relaxed opacity-90"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          From limited staff to ever‑evolving ransomware threats, organizations face the constant risk of
          unexpected downtime and data loss. By activating Plattano—an official Veeam Managed Service partner—for
          Backup as a Service (BaaS), you gain immediate access to specialist expertise, accelerate your time to
          value, and reduce the operational complexity of day‑to‑day IT. Explore our managed backup services
          and let us safeguard your critical data.
        </motion.p>
      </div>
    </section>
  )
}
