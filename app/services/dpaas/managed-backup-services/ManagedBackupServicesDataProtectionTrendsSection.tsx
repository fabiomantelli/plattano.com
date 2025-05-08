'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'
import { Check } from 'lucide-react'

const stats = [
  { percent: 40, label: 'of applications suffer at least one unexpected outage per year' },
  { percent: 25, label: 'of primary motivators to revamp backup were cost savings' },
  { percent: 20, label: 'seek to boost reliability and reduce RPO/RTO' },
  { percent: 90, label: 'of organizations have an availability gap between expected SLAs and recovery speed' },
  { percent: 94, label: 'of backup repositories are the primary target of ransomware attacks' },
  { percent: 26, label: 'of attacked backups remained safe thanks to immutability or air‑gap' },
  { percent: 97, label: 'intend to adopt BaaS for some servers within two years (vs 67% today)' },
]

export default function ManagedBackupServicesDataProtectionTrendsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  // split into three columns: first 3, next 2, last 2
  const col1 = stats.slice(0, 3)
  const col2 = stats.slice(3, 5)
  const col3 = stats.slice(5, 7)

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-12">
        {/* Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Did You <span className='text-primary'>Know?</span>
        </motion.h2>

        {/* Stats columns */}
        <div
          ref={ref}
          className="flex flex-col md:flex-row divide-y-2 md:divide-y-0 md:divide-x-2 divide-primary"
        >
          {[col1, col2, col3].map((col, ci) => (
            <div key={ci} className="flex-1 flex flex-col items-center md:items-start space-y-8 py-8 md:px-6">
              {col.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="flex flex-col items-center md:items-start space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.2 }}
                  viewport={{ once: true, amount: 0.3 }}
                >
                  <div className="text-4xl font-bold">
                    {inView ? (
                      <CountUp
                        start={0}
                        end={stat.percent}
                        duration={1.5}
                        suffix="%"
                        separator=","
                      />
                    ) : (
                      '0%'
                    )}
                  </div>
                  <div className="text-center md:text-left text-sm leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Highlighted takeaway */}
        <motion.div
          className="flex items-center gap-3 text-primary font-semibold text-center md:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Check className="w-6 h-6 flex-shrink-0" />
          By leveraging a Backup‑as‑a‑Service offering, organizations save on average 15 full‑time equivalent days per month—freeing up time for strategic initiatives.
        </motion.div>

        {/* Source */}
        <div className="text-center text-xs opacity-70">
          Source: 2023 Data Protection Trends
        </div>
      </div>
    </section>
  )
}
