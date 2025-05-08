'use client'

import { motion } from 'framer-motion'

const dataPoints = [
  { value: 81, label: 'intend to protect cloud‑based data with BaaS' },
  { value: 70, label: 'have shifted from self‑managed backups to BaaS' },
  { value: 56, label: 'run mission‑critical workloads in the cloud' },
  { value: 48, label: 'want to leverage managed BaaS experts' },
]

export default function BaasForPublicCloudDataResilienceSection() {
  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 space-y-12">
        {/* Title */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Why Do You Need <span className="text-primary">Data Resilience</span>?
        </motion.h2>

        {/* Bars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
          {dataPoints.map(({ value, label }, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col items-center space-y-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: idx * 0.15 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* bar container */}
              <div className="w-full max-w-xs h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                {/* animated fill */}
                <motion.div
                  className="h-full bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: `${value}%` }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
              </div>
              {/* percentage label */}
              <span className="font-semibold text-primary">{value}%</span>
              {/* descriptor */}
              <p className="text-center text-sm opacity-90">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* Source */}
        <p className="text-center text-xs opacity-70 mt-8">
          Source: 2023 Data Protection Trends.
        </p>
      </div>
    </section>
  )
}
