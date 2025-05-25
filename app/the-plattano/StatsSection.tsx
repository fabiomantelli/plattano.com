'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'
import CountUp from 'react-countup'

type Stat = {
  label: string
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}

const stats: Stat[] = [
  { label: 'Years in the market', value: 8, prefix: '+' },
  { label: 'VMs provisioned', value: 15000, prefix: '+' },
  { label: 'Clients served', value: 1100, prefix: '+' },
  { label: 'Project hours', value: 6000, prefix: '+' },
  { label: 'Certifications', value: 50, prefix: '+' },
  { label: 'Data lost or encrypted', value: 0 },
  { label: 'Attacks on managed clients', value: 0 },
]

export default function StatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <section
      ref={ref}
      className="
        relative isolate overflow-hidden py-24
        bg-gradient-to-br from-white via-orange-500 to-orange-500
        dark:bg-gradient-to-br dark:from-[#953B01] dark:via-black dark:to-black
      "
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12 lg:px-24 flex flex-col items-center gap-16">
        {/* Heading */}
        <div className="text-center space-y-4">
          <h2 className="text-[42px] font-semibold text-neutral-900 dark:text-white">
            WHAT HAVE WE ACHIEVED?
          </h2>
          <p className="text-[22px] text-neutral-900 dark:text-white">
            In <span className="text-primary font-semibold">+8 YEARS</span> WE HAVE SERVED{' '}
            <span className="text-primary font-semibold">+1,000 CLIENTS</span> NATIONWIDE –{' '}
            <span className="text-primary font-semibold">ACROSS EVERY SEGMENT.</span>
          </p>
        </div>

        {/* Stats grid */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-7 text-center divide-y-2 lg:divide-y-0 lg:divide-x-2 divide-primary">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center p-6">
              <span className="text-4xl md:text-3xl font-bold text-neutral-900 dark:text-white">
                {stat.prefix}
                {mounted && inView ? (
                  <CountUp
                    start={0}
                    end={stat.value}
                    duration={2.5}
                    decimals={stat.decimals ?? 0}
                    separator="."
                  />
                ) : (
                  0
                )}
                {stat.suffix}
              </span>
              <span className="mt-2 text-base md:text-lg text-neutral-800 dark:text-neutral-300">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
