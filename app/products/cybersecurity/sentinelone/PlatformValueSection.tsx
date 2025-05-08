'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

const stats = [
  { title: 'Reduce Risks', end: 91, suffix: '%', description: 'Faster MTTR without delayed detections' },
  { title: 'Reduce Costs', end: 66, suffix: '%', description: 'Reduction in operational costs' },
  { title: 'Maximize Value', end: 50, suffix: '%', description: 'Reduction in data retention costs' },
  { title: 'Increase Efficiency', end: 90, suffix: '%', description: 'Improvement in automation' },
]

export default function PlatformValueSection() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div ref={ref} className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-24 flex flex-col items-center gap-16">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-[36px] font-sofia font-bold">
            <span className="text-primary">THE POWER OF ONE</span> PLATFORM
          </h2>
          <p className="text-lg font-medium">
            Consolidate products, maximize value, and improve business continuity. See why 50% of Fortune 10 choose Singularity over other vendors.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-12">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.title}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ type: 'spring', stiffness: 300, damping: 20, delay: i * 0.2 }}
              className="rounded-xl p-6 text-center shadow-md border bg-neutral-100 border-neutral-300 dark:bg-white/10 dark:border-white/20"
            >
              <h3 className="text-2xl font-semibold text-primary mb-2">{stat.title}</h3>
              <div className="text-[48px] font-bold text-primary mb-2">
                {inView ? (
                  <CountUp start={0} end={stat.end} duration={1.5} suffix={stat.suffix} />
                ) : (
                  <>0{stat.suffix}</>
                )}
              </div>
              <p className="text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}