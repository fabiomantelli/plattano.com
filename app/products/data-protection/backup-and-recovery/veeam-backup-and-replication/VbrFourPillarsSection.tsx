'use client'

import { motion } from 'framer-motion'
import {
  HardDriveDownload, // backup
  CopyPlus,          // replication
  Layers,            // storage‑snapshots
  Repeat             // CDP
} from 'lucide-react'

export default function AdditionalResourcesSection() {
  const items = [
    { icon: HardDriveDownload, label: 'BACKUP' },
    { icon: CopyPlus,           label: 'REPLICATION' },
    { icon: Layers,             label: 'STORAGE SNAPSHOTS' },
    { icon: Repeat,             label: 'CDP' }
  ]

  return (
    <section className="w-full bg-black py-20 text-white bg-white dark:bg-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 sm:px-12 lg:px-24">
        {/* ---------- heading ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-3xl font-extrabold leading-tight sm:text-4xl text-black dark:text-white"
        >
          <span className="text-primary">ADDITIONAL</span> RESOURCES
        </motion.h2>

        {/* ---------- subtitle ---------- */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mx-auto max-w-3xl text-center text-base sm:text-lg text-black dark:text-white"
        >
          Need even more? Veeam ONE delivers extra capabilities that keep you in
          complete control of your environment.
        </motion.p>

        {/* ---------- icon row ---------- */}
        <div className="grid w-full gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, label }, idx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col items-center gap-4"
            >
              <Icon className="h-12 w-12 text-black dark:text-white" />
              <span className="text-lg font-semibold text-primary">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
