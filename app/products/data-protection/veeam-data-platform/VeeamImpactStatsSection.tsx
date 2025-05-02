'use client'

import { useRef } from 'react'
import { useInView, motion } from 'framer-motion'
import CountUp from 'react-countup'
import Image from 'next/image'

type VeeamStat = {
  value: number
  suffix?: string
  label: string
  description: string
}

const stats: VeeamStat[] = [
  {
    value: 1.1,
    suffix: 'M',
    label: 'M USD',
    description: 'Average annual benefit from implementing Veeam',
  },
  {
    value: 10,
    label: 'X',
    description: 'Faster SaaS app performance',
  },
  {
    value: 5,
    label: 'X',
    description: 'Faster recovery of critical apps',
  },
  {
    value: 9,
    label: 'MONTHS+',
    description: 'Return window gain',
  },
]

export default function VeeamImpactStatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section ref={ref} className="w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-16">
        {/* Title and Veeam Logo */}
        <div className="flex flex-col items-center text-center gap-6">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight">
            <span className="text-primary">GO FURTHER</span> WITH{' '}
            <span className="text-primary">VEEAM</span>
          </h2>

          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: 'spring', stiffness: 200, damping: 12 }}
            className="w-auto h-auto"
          >
            <Image
              src="/images/products/data-protection/veeam-data-platform/veeam-logo.png"
              alt="Veeam Logo"
              width={180}
              height={60}
              className="mx-auto transition-transform duration-300"
              style={{ width: "auto", height: "auto" }} // Added this to ensure aspect ratio is preserved
            />
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: i * 0.1,
                ease: [0.25, 1, 0.3, 1],
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="p-6 min-h-[180px] flex flex-col justify-center rounded-2xl text-center shadow-lg border bg-white border-neutral-300 dark:bg-white/5 dark:border-white/10"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-primary mb-2 break-words">
                {isInView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.4}
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                  />
                ) : (
                  0
                )}{' '}
                {stat.label}
              </div>
              <p className="text-[15px] font-ubuntu leading-snug text-neutral-700 dark:text-neutral-300">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
