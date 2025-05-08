'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VbrTrustedBySection() {
  return (
    <section className="relative w-full py-24 bg-black/9 text-black dark:bg-neutral-900 dark:text-white">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 sm:px-12 lg:flex-row lg:gap-20 lg:px-24">

        {/* ---------- text column ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 text-center lg:text-left space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-primary">Veeam</span> protects the&nbsp;
            <span className="text-primary">world’s largest&nbsp;brands</span>
          </h2>

          <p className="max-w-md lg:max-w-none text-base sm:text-lg mx-auto lg:mx-0">
            From global enterprises to industry innovators, thousands of organizations rely
            on Veeam to keep their critical data available, protected and resilient.
          </p>
        </motion.div>

        {/* ---------- logo collage / image ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 w-full max-w-md sm:max-w-lg lg:max-w-none"
        >
          {/* swap “brand-wall.png” for your logo collage */}
          <Image
            src="/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-logos.webp"
            alt="Wall of brand logos protected by Veeam"
            width={700}
            height={480}
            priority
            className="w-full rounded-xl object-contain"
          />
        </motion.div>
      </div>
    </section>
  )
}
