'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VbrInstantRecoverySection() {
  return (
    <section className="relative w-full bg-white py-16 text-black dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 sm:px-12 lg:px-24">
        {/* ---------- headline ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="text-center text-2xl font-extrabold leading-tight sm:text-3xl md:text-4xl"
        >
          INSTANT RECOVERY
          <span className="text-primary"> AT SCALE</span>
        </motion.h2>

        {/* ---------- subtitle ---------- */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.6 }}
          className="mt-6 max-w-3xl text-center text-base sm:text-lg"
        >
          Veeam’s patented instant recovery delivers ultra‑fast, at‑scale recovery 
          for VMs, applications, servers, and NAS, so you can meet your recovery objectives.
        </motion.p>

        {/* ---------- illustrative figure ---------- */}
        <div className="mt-14 flex w-full justify-center">
          <Image
            src="/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-instant-recovery.webp"
            alt="Veeam differentiators chart"
            width={900}
            height={500}
            loading="lazy"
            className="w-full max-w-4xl rounded-xl object-contain"
          />
        </div>
      </div>
    </section>
  )
}
