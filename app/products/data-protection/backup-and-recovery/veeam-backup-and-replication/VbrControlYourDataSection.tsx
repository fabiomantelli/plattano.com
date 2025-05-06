'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VbrControlYourDataSection() {
  return (
    <section className="relative w-full isolate">
      {/* optional backdrop (replace or remove as you like) */}
      <Image
        src="/images/shared/chart‑blur‑bg.png" /* ← drop in your final asset */
        alt=""
        fill
        priority
        className="pointer-events-none -z-10 object-cover opacity-40 dark:opacity-50"
      />
      {/* dark overlay for readability */}
      <div className="absolute inset-0 -z-10 bg-white/80 dark:bg-black/70" />

      <div className="mx-auto max-w-6xl px-6 py-20 text-center sm:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
        >
          TAKE CONTROL &amp; <span className="text-primary">PROTECT YOUR DATA.</span>
          <br />
          <span className="text-primary">ANY CLOUD.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto mt-8 max-w-3xl text-base sm:text-lg font-medium"
        >
          Ensure business resilience, eliminate downtime and data loss, and secure your
          workloads from malicious actors. Move with confidence to—and across—any cloud,
          avoiding lock‑in with true data mobility.
        </motion.p>

        {/* four short value pillars */}
        <ul
          className="
            mx-auto mt-10 grid max-w-xl grid-cols-2 gap-6
            text-sm font-extrabold tracking-wide text-primary sm:grid-cols-4
          "
        >
          <li className="text-center">SIMPLE.</li>
          <li className="text-center">FLEXIBLE.</li>
          <li className="text-center">RELIABLE.</li>
          <li className="text-center">ADVANCED.</li>
        </ul>
      </div>
    </section>
  )
}
