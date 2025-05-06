'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          let start: number | null = null
          const step = (t: number) => {
            if (start === null) start = t
            const pct = Math.min((t - start) / duration, 1)
            setValue(Math.floor(pct * target))
            if (pct < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
          io.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return { ref, value }
}

export default function VbrOutageStatsSection() {
  const stats = [
    { value: 53, label: 'cybersecurity event' },
    { value: 52, label: 'infrastructure / network' },
    { value: 49, label: 'accidental deletion' },
    { value: 53, label: 'applications' }
  ]
  const hooks = stats.map(s => useCountUp(s.value))

  return (
    <section className="w-full py-20 text-neutral-800 bg-primary">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 sm:px-12 lg:px-24">
        {/* headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center sm:text-left max-w-2xl text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug"
        >
          SERVICE <span className="text-neutral-300">OUTAGES</span> ARE MORE COMMON THAN YOU THINK
        </motion.h2>

        {/* intro text */}
        <p className="text-center sm:text-left max-w-xl text-base sm:text-lg">
          What are the most common causes of business‑impacting downtime?
        </p>

        {/* animated stats */}
        <div className="grid grid-cols-2 gap-y-10 gap-x-6 sm:grid-cols-4 sm:gap-x-8">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center">
              <span
                ref={hooks[i].ref}
                className="block text-4xl sm:text-5xl font-extrabold"
              >
                {hooks[i].value}%
              </span>
              <span className="mt-2 block text-sm text-primary">{s.label}</span>
            </div>
          ))}
        </div>

        {/* citation */}
        <p className="text-center sm:text-left pt-6 text-sm">
          Source:&nbsp;<em>2023 Data Protection Trends</em>.
        </p>
      </div>
    </section>
  )
}
