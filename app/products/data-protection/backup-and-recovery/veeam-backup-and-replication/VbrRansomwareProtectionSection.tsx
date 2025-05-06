'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  RotateCcw,
  CheckCircle2,
  ServerCog,
  ShieldPlus
} from 'lucide-react'

export default function VbrRansomwareProtectionSection() {
  return (
    <section className="relative w-full bg-white py-20 text-black dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 sm:px-12 lg:flex-row lg:gap-24 lg:px-24">
        {/* ---------- left copy ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 max-w-lg space-y-6 text-center lg:text-left"
        >
          <h2 className="text-2xl font-extrabold leading-tight sm:text-3xl">
            <span className="text-primary">STAY SECURE</span> AGAINST RANSOMWARE
          </h2>

          <p className="text-base sm:text-lg">
            Secure backup is your last line of defense. Safeguard data with
            trusted immutability and recover instantly at scale if the rest of
            your defenses are breached.
          </p>
        </motion.div>

        {/* ---------- right card ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="
            flex-1 rounded-xl border border-primary/80 p-8
            backdrop-blur-sm dark:bg-white/5
          "
        >
          {/* title + subtitle */}
          <h3 className="text-center text-xl font-extrabold sm:text-2xl">
            RANSOMWARE&nbsp;PROTECTION
          </h3>
          <p className="mt-2 mb-6 text-center text-sm sm:text-base">
            Secure <span className="font-semibold">backup</span> is your
            ultimate line of&nbsp;defense
          </p>

          {/* two top items */}
          <div className="flex flex-col justify-center gap-8 sm:flex-row">
            {/* backup column */}
            <div className="flex flex-col items-center gap-3">
              <ShieldPlus className="h-7 w-7 text-primary" />
              <span className="text-sm font-semibold">Backup</span>
            </div>

            {/* recovery column */}
            <div className="flex flex-col items-center gap-3">
              <RotateCcw className="h-7 w-7 text-primary" />
              <span className="text-sm font-semibold">Recovery</span>
            </div>
          </div>

          {/* twin orange panels */}
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {/* Backup pillar */}
            <div className="space-y-2 rounded-lg bg-primary p-5 text-sm text-white">
              <p className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" />
                Trusted immutability
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                Backup verification
              </p>
              <p className="flex items-start gap-2">
                <ServerCog className="mt-0.5 h-4 w-4 shrink-0" />
                3‑2‑1‑1‑0 Rule
              </p>
            </div>

            {/* Recovery pillar */}
            <div className="space-y-2 rounded-lg bg-primary p-5 text-sm text-white">
              <p className="flex items-start gap-2">
                <RotateCcw className="mt-0.5 h-4 w-4 shrink-0" />
                Instant‑scale recovery
              </p>
              <p className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
                Secure restore
              </p>
              <p className="flex items-start gap-2">
                <ServerCog className="mt-0.5 h-4 w-4 shrink-0" />
                DR orchestration
              </p>
            </div>
          </div>

          {/* footer tagline */}
          <p className="mt-6 text-center text-xs sm:text-sm">
            100% software‑defined. No proprietary hardware lock‑in.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
