'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VbrDataProtectionConfidenceSection() {
  return (
    <section className="relative w-full bg-white py-12 text-black dark:bg-black dark:text-white sm:py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 sm:px-12 md:flex-row md:gap-20 md:px-24">
        {/* ---------- image (left on md+ / below text on mobile) ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="order-2 w-full flex-1 max-w-md sm:max-w-lg md:order-none md:max-w-none"
        >
          <Image
            src="/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-confidence.png"
            alt="Hand interacting with secure data interface"
            width={640}
            height={480}
            priority
            className="w-full rounded-xl object-cover"
          />
        </motion.div>

        {/* ---------- text (right on md+ / first on mobile) ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="
            order-1 flex-1 space-y-6 rounded-xl
            bg-black/80 p-8 text-center text-white
            md:order-none md:bg-transparent md:p-0 md:text-left
          "
        >
          <h3 className="text-2xl font-extrabold sm:text-3xl dark:text-white text-black">
            CONFIDENCE IN YOUR&nbsp;
            <span className="text-primary">DATA‑PROTECTION STRATEGY</span>
          </h3>

          <p className="text-base sm:text-lg dark:text-white text-black">
            Many enterprise IT teams feel unsure about their data‑protection strategy because of
            slow legacy backups, unreliable recoveries and complex management across the
            data center.&nbsp;Veeam&nbsp;Backup&nbsp;&amp;&nbsp;Replication changes that narrative with
            modern, dependable recovery and seamless control.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
