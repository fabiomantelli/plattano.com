'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

/* ----------  tiny hook for the count‑up effect  ---------- */
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
          io.disconnect() // run once
        }
      },
      { threshold: 0.4 }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [target, duration])

  return { ref, value }
}

/* ----------  component  ---------- */
export default function VbrSoftwareDefinedSection() {
  /* counters */
  const { ref: ref89, value: v89 } = useCountUp(89)
  const { ref: ref96, value: v96 } = useCountUp(96)
  const { ref: ref32, value: v32 } = useCountUp(32)

  return (
    <section className="w-full bg-white py-24 text-black dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-14 px-6 sm:px-12 lg:px-24">
        {/* ---------- headline ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl"
        >
          <span className="text-primary">SOFTWARE-DEFINED.</span>
          <br />
          <span>INFRASTRUCTURE-AGNOSTIC.</span>
        </motion.h2>

        {/* ---------- paragraph ---------- */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-3xl text-center text-base sm:text-lg"
        >
          Avoid proprietary hardware lock‑in. Choose any infrastructure—with
          100+ cloud and storage integrations—for ultimate flexibility and the
          best TCO.
        </motion.p>

        {/* ---------- orange sub‑text ---------- */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center font-semibold text-primary"
        >
          The broadest ecosystem of storage, cloud and security partners
        </motion.p>

        {/* ---------- stats row ---------- */}
        <div
          className="
            grid w-full gap-12
            sm:grid-cols-3 sm:gap-8
            text-center
          "
        >
          {/* stat 1 */}
          <div className="space-y-2">
            <span
              ref={ref89}
              className="block text-4xl font-extrabold sm:text-5xl"
            >
              {v89}
            </span>
            <p className="text-sm font-medium sm:text-base">
              Primary‑storage products
            </p>
          </div>

          {/* stat 2 */}
          <div className="space-y-2">
            <span
              ref={ref96}
              className="block text-4xl font-extrabold sm:text-5xl"
            >
              {v96}
            </span>
            <p className="text-sm font-medium sm:text-base">
              Disk‑backup &amp; dedupe products
            </p>
          </div>

          {/* stat 3 */}
          <div className="space-y-2">
            <span
              ref={ref32}
              className="block text-4xl font-extrabold sm:text-5xl"
            >
              {v32}
            </span>
            <p className="text-sm font-medium sm:text-base">
              Object‑storage products 
              <span className="whitespace-nowrap">(19 immutable)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
