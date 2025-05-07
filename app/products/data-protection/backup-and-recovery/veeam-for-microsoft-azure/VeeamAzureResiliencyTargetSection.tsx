'use client'

import { motion } from 'framer-motion'

const TARGETS = [
  {
    label: 'Azure VMs',
    icon: (
      <svg
        width="50"
        height="50"
        viewBox="0 0 512 447"
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12"
      >
        <rect width="512" height="447" rx="64" fill="#0078D4" />
        <path
          d="M256 128l-128 128h256l-128-128zm-64 128h128v64h-128v-64z"
          fill="#FFFFFF"
        />
      </svg>
    )
  },
  {
    label: 'Managed Disks',
    icon: (
      /* TODO: replace with your actual Managed Disks SVG */
      <svg width="50" height="50" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="30" fill="#FF8C00" />
        <circle cx="32" cy="32" r="16" fill="#FFF" />
      </svg>
    )
  },
  {
    label: 'Azure SQL',
    icon: (
      /* TODO: replace with your actual Azure SQL SVG */
      <svg width="50" height="50" viewBox="0 0 64 64">
        <rect x="8" y="8" width="48" height="48" rx="8" fill="#D83B01" />
        <text x="32" y="38" textAnchor="middle" fontSize="24" fill="#FFF">
          SQL
        </text>
      </svg>
    )
  },
  {
    label: 'Azure Files',
    icon: (
      /* TODO: replace with your actual Azure Files SVG */
      <svg width="50" height="50" viewBox="0 0 64 64">
        <rect x="12" y="16" width="40" height="32" rx="4" fill="#0078D4" />
        <path d="M20 24h24v4H20z" fill="#FFF" />
      </svg>
    )
  },
  {
    label: 'Azure Blob',
    icon: (
      /* TODO: replace with your actual Azure Blob SVG */
      <svg width="50" height="50" viewBox="0 0 64 64">
        <circle cx="32" cy="32" r="28" fill="#107C10" />
        <path d="M32 12v40M12 32h40" stroke="#FFF" strokeWidth="4" />
      </svg>
    )
  }
]

export default function VeeamAzureResiliencyTargetsSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
      >
        Why You Need <span className="text-primary">Data Resiliency</span>
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 items-center max-w-6xl mx-auto"
      >
        {TARGETS.map(({ label, icon }) => (
          <div key={label} className="flex flex-col items-center gap-4">
            {icon}
            <span className="mt-2 text-center text-base sm:text-lg">
              {label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
