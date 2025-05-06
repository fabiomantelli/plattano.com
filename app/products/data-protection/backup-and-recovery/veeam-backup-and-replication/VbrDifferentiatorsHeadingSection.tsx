'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VbrDifferentiatorsHeadingSection() {
  return (
    <section className="relative w-full py-16 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 sm:px-12 lg:px-24">
        {/* ---------- small label ---------- */}
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.6 }}
          className="uppercase tracking-widest text-sm font-semibold text-primary/80 dark:text-primary"
        >
          Differentiators
        </motion.span>

        {/* ---------- main headline ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.6 }}
          className="mt-4 text-center text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight"
        >
          WHAT&nbsp;MAKES&nbsp;<span className="text-primary">VEEAM</span>&nbsp;DIFFERENT?
        </motion.h2>

        {/* ---------- horizontal rule with leaf / star ---------- */}
        <div className="relative mt-10 w-full">
          <hr className="border-t border-current opacity-80" />
        </div>

        {/* ---------- future figure ---------- */}
        <div className="mt-14 flex w-full justify-center">
          {/* Drop your image here (auto‑scales & centers) */}
          <Image
              src="/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/differentiator-heading.webp"
              alt="Veeam differentiators chart"
              width={900}
              height={500}
              className="w-full max-w-4xl rounded-xl object-contain"
              priority
          />
        </div>
      </div>
    </section>
  )
}
