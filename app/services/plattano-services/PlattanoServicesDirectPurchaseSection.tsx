'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: 'Plattano Hot Storage', src: '/images/services/plattano-services/plattano-hot-storage.webp' },
  { name: 'VMware', src: '/images/services/plattano-services/vmware.webp' },
  { name: 'Veeam', src: '/images/services/plattano-services/veeam.webp' },
  { name: 'ExaGrid', src: '/images/services/plattano-services/exagrid.webp' },
  { name: 'SentinelOne', src: '/images/services/plattano-services/sentinelone.webp' },
  { name: 'Rainforest Tech', src: '/images/services/plattano-services/rainforest.webp' },
  { name: 'N‑Able', src: '/images/services/plattano-services/nable.webp' },
]

export default function PlattanoServicesDirectPurchaseSection() {
  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold">
          What You Can Purchase Directly with Plattano:
        </h2>

        {/* Logos grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {partners.map((p, idx) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="
                p-6 rounded-2xl shadow-md border
                bg-neutral-300
                dark:bg-neutral-300
                border-neutral-400 dark:border-white/10
                backdrop-blur-sm
                transition-all duration-300
                flex items-center justify-center
              "
            >
              <Image
                src={p.src}
                alt={p.name}
                width={200}
                height={80}
                className="max-h-16 object-contain"
                priority
              />
          </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}