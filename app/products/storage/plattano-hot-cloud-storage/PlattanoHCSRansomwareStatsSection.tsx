'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'

export default function PlattanoHCSRansomwareStatsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })

  const [ransomValue, setRansomValue] = useState(0)
  const [percentValue, setPercentValue] = useState(0)
  const [daysValue, setDaysValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1500
    const frameRate = 30
    const totalFrames = Math.round((duration / 1000) * frameRate)

    const easeOut = (t: number) => 1 - Math.pow(1 - t, 3)

    let frame = 0
    const animate = () => {
      frame++
      const progress = easeOut(frame / totalFrames)
      setRansomValue(Math.round(350_000 * progress))
      setPercentValue(Math.round(30 * progress))
      setDaysValue(Math.round(21 * progress))
      if (frame < totalFrames) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [inView])

  const formatCurrency = (val: number) =>
    `$${(val / 1000).toFixed(0)}K+`
  const formatPercent = (val: number) => `${val}%`
  const formatDays = (val: number) => `${val} days`

  return (
    <section
      ref={ref}
      className="w-full bg-white text-black dark:bg-black dark:text-white py-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center space-y-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Ransom Amount */}
          <div>
            <div className="text-5xl sm:text-6xl font-extrabold text-primary">
              {formatCurrency(ransomValue)}
            </div>
            <p className="mt-2 text-base opacity-80">
              average ransom demanded for potential data decryption.
            </p>
          </div>
          {/* Percentage */}
          <div>
            <div className="text-5xl sm:text-6xl font-extrabold text-primary">
              {formatPercent(percentValue)}
            </div>
            <p className="mt-2 text-base opacity-80">
              of global attacks occur in Brazil, second only to the U.S.
            </p>
          </div>
          {/* Recovery Days */}
          <div>
            <div className="text-5xl sm:text-6xl font-extrabold text-primary">
              {formatDays(daysValue)}
            </div>
            <p className="mt-2 text-base opacity-80">
              on average to restore services back to production.
            </p>
          </div>
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
