'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const stats = [
  { percent: 47, label: 'access backups anytime, anywhere' },
  { percent: 37, label: 'get offline, immutable repositories' },
  { percent: 40, label: 'enjoy flexible Opex payment options' },
  { percent: 37, label: 'leverage experts from your service providers' },
]

export default function OffSiteAndManagedBackupWhyBaasSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-12">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center">
          Why Customers Choose <span className="text-primary">BaaS</span>?
        </h2>

        {/* Bars grid */}
        <div
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 items-start"
        >
          {stats.map(({ percent, label }, idx) => (
            <div key={idx} className="flex flex-col items-center space-y-4">
              {/* Bar outer */}
              <div className="w-full max-w-xs h-6 bg-neutral-200 dark:bg-white/10 rounded-full overflow-hidden">
                {/* Animated fill */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: inView ? `${percent}%` : 0 }}
                  transition={{ duration: 1.2, delay: idx * 0.2 }}
                  className="h-full bg-primary"
                />
              </div>
              {/* Percentage label */}
              <div className="text-xl font-semibold">{percent}%</div>
              {/* Description */}
              <div className="text-center text-sm leading-snug">{label}</div>
            </div>
          ))}
        </div>

        {/* Source */}
        <div className="text-center text-xs opacity-70">
          Source: 2023 Data Protection Trends
        </div>
      </div>
    </section>
  )
}
