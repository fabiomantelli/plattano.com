'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

export default function PlattanoHCSRansomwareStatsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const stats = [
    {
      end: 350000,
      display: (n: number) => `$${(n/1000).toFixed(0)}K+`,
      label: 'average ransom demanded for potential data decryption.',
    },
    {
      end: 30,
      display: (n: number) => `${n}%`,
      label: 'of global attacks occur in Brazil, second only to the U.S.',
    },
    {
      end: 21,
      display: (n: number) => `${n} days`,
      label: 'on average to restore services back to production.',
    },
  ]

  return (
    <section ref={ref} className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center space-y-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {stats.map(({ end, display, label }, i) => (
            <motion.div
              key={i}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="space-y-4"
            >
              <div className="text-5xl sm:text-6xl font-extrabold text-primary">
                {inView ? (
                  <CountUp
                    end={end}
                    duration={1.5}
                    formattingFn={display}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                ) : (
                  display(0)
                )}
              </div>
              <p className="mt-2 text-base opacity-80">{label}</p>
            </motion.div>
          ))}
        </div>

        <p className="text-sm opacity-70">
          Source:{' '}
          <span className="text-primary">
            Brazil now ranks second in the world for ransomware incidents.
          </span>
        </p>
      </motion.div>
    </section>
  )
}