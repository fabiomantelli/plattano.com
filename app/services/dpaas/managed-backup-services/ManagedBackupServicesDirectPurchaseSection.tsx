'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const partners = [
  { name: 'Nutanix', src: '/images/services/dpaas/managed-backup-services/nutanix.webp', href: '/partners/nutanix' },
  { name: 'Plattano Hot Storage', src: '/images/services/dpaas/managed-backup-services/plattano-hot-storage.webp', href: '/products/hot-storage' },
  { name: 'VMware', src: '/images/services/dpaas/managed-backup-services/vmware.webp', href: '/partners/vmware' },
  { name: 'Veeam', src: '/images/services/dpaas/managed-backup-services/veeam.webp', href: '/partners/veeam' },
  { name: 'ExaGrid', src: '/images/services/dpaas/managed-backup-services/exagrid.webp', href: '/partners/exagrid' },
  { name: 'SentinelOne', src: '/images/services/dpaas/managed-backup-services/sentinelone.webp', href: '/partners/sentinelone' },
  { name: 'Rainforest Tech', src: '/images/services/dpaas/managed-backup-services/rainforest.webp', href: '/partners/rainforest' },
  { name: 'N‑Able', src: '/images/services/dpaas/managed-backup-services/nable.webp', href: '/partners/n-able' },
]

export default function ManagedBackupServicesDirectPurchaseSection() {
  return (
    <section className="w-full py-20 bg-neutral-200 text-black dark:bg-neutral-900 dark:text-white">
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
                bg-white/80
                border-neutral-200 dark:border-white/10
                backdrop-blur-sm
                transition-all duration-300
                flex items-center justify-center
              "
            >
              <Link href={p.href} className="w-full h-full flex items-center justify-center">
                <Image
                  src={p.src}
                  alt={p.name}
                  width={200}
                  height={80}
                  className="max-h-16 object-contain"
                  priority
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}