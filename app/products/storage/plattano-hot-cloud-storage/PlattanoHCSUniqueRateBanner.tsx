// app/(plattano)/plattano-hot-cloud-storage/ui/UniqueRateBanner.tsx
'use client'

import { motion } from 'framer-motion'

export default function PlattanoHCSUniqueRateBanner() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-primary text-white dark:bg-primary dark:text-white py-4"
    >
      <div className="max-w-7xl mx-auto px-6 text-center text-lg font-semibold">
        → SINGLE RATE. ULTRA-FAST SPEED. NO HIDDEN FEES. ←
      </div>
    </motion.section>
  )
}
