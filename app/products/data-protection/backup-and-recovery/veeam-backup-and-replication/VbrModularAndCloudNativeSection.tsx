'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VbrModularAndCloudNativeSection() {
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
          MODULAR AND CLOUD-NATIVE. 
          <span className="text-primary"> CLOUD MOBILITY.</span>
        </motion.h2>

        {/* ---------- subtitle ---------- */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.6 }}
          className="mt-6 max-w-3xl text-center text-base sm:text-lg"
        >
          Built specifically for AWS, Azure and Google Cloud. Our
          API-driven architecture uses native snapshots, storage and security to
          enable backup and recovery from <em>anywhere</em> to <em>anywhere</em>.
        </motion.p>

        {/* ---------- decorative rule ---------- */}
        <div className="relative mt-14 w-full max-w-4xl">
          <hr className="border-t border-current opacity-80" />
        </div>
      </div>
    </section>
  )
}
