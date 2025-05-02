'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView, motion } from 'framer-motion'
import CountUp from 'react-countup'

type Stat = {
  value: number
  suffix?: string
  label: string
  description: string
}

const stats: Stat[] = [
  {
    value: 80,
    suffix: '%',
    label: 'Of Fortune 500 companies',
    description: 'Count on Veeam for data protection.',
  },
  {
    value: 72,
    suffix: '%',
    label: 'Of the Global 2000 companies',
    description: 'Are protected by Veeam.',
  },
  {
    value: 75,
    label: 'NPS',
    description: 'Industry-leading Net Promoter Score.',
  },
]

export default function VeeamLeaderStatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  return (
    <section ref={ref} className="w-full py-24 text-neutral-900  dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-16">
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            <span className="text-primary">ALIGN WITH THE</span> LEADER #1
          </h2>
          <p className="text-xl">
            Don’t trust your data strategy to anyone but the global leader in data protection and recovery.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.25, 1, 0.3, 1] }}
              viewport={{ once: true, amount: 0.5 }}
              className="p-6 min-h-[160px] flex flex-col justify-center rounded-2xl text-center shadow-lg border transition-all duration-300
                ${isDark ? 'bg-white/5 border-white/10' : 'bg-white border-neutral-300'}"
            >
              <div className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                {isInView ? (
                  <CountUp start={0} end={stat.value} duration={2.5} decimals={stat.value % 1 !== 0 ? 1 : 0} />
                ) : (
                  0
                )}
                {stat.suffix ?? ''}
              </div>
              <p className="text-sm md:text-base font-ubuntu text-neutral-700 dark:text-neutral-300">
                {stat.label}
              </p>
              <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 mt-2">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}