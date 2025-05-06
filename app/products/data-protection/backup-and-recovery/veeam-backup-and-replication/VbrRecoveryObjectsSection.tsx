// app/(veeam)/veeam-backup-and-replication/ui/WhatYourBusinessEnablesSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VbrRecoveryObjectivesSection() {
  return (
    <section className="relative w-full py-12 sm:py-12 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-16 px-6 sm:px-12 lg:px-24">
        {/* ---------- content row ---------- */}
        <div className="flex w-full flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-20">
          {/* ----- text column ----- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="
              flex-1 max-w-xl space-y-8 rounded-xl
              text-white p-8 md:p-10
              text-center lg:p-0 lg:text-left
            "
          >
            <h3 className="text-2xl sm:text-3xl font-extrabold text-center lg:text-left text-black dark:text-white">
              MEET YOUR RECOVERY OBJECTIVES<span className="text-primary">WITH CONFIDENCE</span>
            </h3>

            <p className="text-base sm:text-lg text-black dark:text-white">
              Consistently meet any Recovery Time Objective or Recovery Point Objective 
              (RTO or RPO) with the pioneer in instant recovery.
            </p>
          </motion.div>

          {/* ----- image column ----- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1 w-full max-w-md sm:max-w-lg lg:max-w-none"
          >
            <Image
              src="/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-recovery-objectives.png"
              alt="Modern data protection shield"
              width={640}
              height={480}
              priority
              className="w-full rounded-xl object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}