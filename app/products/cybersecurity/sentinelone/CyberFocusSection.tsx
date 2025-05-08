'use client';

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

type Stat = {
  end: number
  unit: string
  formattingFn?: (n: number) => string
  description: string
}

const stats: Stat[] = [
  {
    end: 24,
    unit: ' trillion',
    formattingFn: (n) => `${n.toFixed(0)} trillion`,
    description: 'security signals processed daily',
  },
  {
    end: 9,
    unit: ' billion',
    formattingFn: (n) => `${n.toFixed(0)} billion`,
    description: 'devices threats blocked',
  },
  {
    end: 31,
    unit: ' billion',
    formattingFn: (n) => `${n.toFixed(0)} billion`,
    description: 'identity threats blocked',
  },
  {
    end: 32,
    unit: ' billion',
    formattingFn: (n) => `${n.toFixed(0)} billion`,
    description: 'email threats blocked',
  },
  {
    end: 1.85,
    unit: ' million',
    formattingFn: (n) => `${n.toFixed(2)} million`,
    description: 'ransomware attack cost average',
  },
  {
    end: 58,
    unit: '%',
    formattingFn: (n) => `${n.toFixed(0)}%`,
    description: 'attack attempts in Brazil in 2022 (20% increase from 2021)',
  },
  {
    end: 1.5,
    unit: ' billion',
    formattingFn: (n) => `${n.toFixed(1)} billion`,
    description: 'Brazilian SMBs lack proper cyber protection',
  },
  {
    end: 60,
    unit: '%',
    formattingFn: (n) => `+${n.toFixed(0)}%`,
    description: 'ransomware & phishing impact SMBs',
  },
]

export default function CyberFocusSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="w-full py-24 bg-neutral-200 text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <div ref={ref} className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-24 flex flex-col items-center gap-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-[36px] font-sofia font-bold">
            <span className="text-primary">CYBERSECURITY IN FOCUS</span> LIKE NEVER BEFORE
          </h2>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.15 }}
              className="rounded-xl p-6 text-center shadow-md border bg-neutral-100 border-neutral-300 dark:bg-white/10 dark:border-white/20"
            >
              <div className="text-[40px] sm:text-[48px] font-bold text-primary mb-2">
                {inView ? (
                  <CountUp
                    start={0}
                    end={stat.end}
                    duration={1.5}
                    formattingFn={stat.formattingFn}
                  />
                ) : (
                  stat.formattingFn ? stat.formattingFn(0) : `0${stat.unit}`
                )}
              </div>
              <p className="text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Source */}
        <p className="text-md text-center opacity-70">
          <span className="text-primary">Sources:</span> State of Ransomware 2023, Panda Security Index, PwC Brasil
        </p>
      </div>
    </section>
  )
}