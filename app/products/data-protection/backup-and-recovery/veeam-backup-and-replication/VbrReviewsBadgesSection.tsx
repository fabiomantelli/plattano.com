'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VbrReviewsBadgesSection() {
  const logos = [
    '/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-leader-logo.webp',
    '/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-best-roi-logo.webp',
    '/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-best-usability-logo.webp',
    '/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-users-most-likely-logo.webp',
    '/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-best-feature-set-logo.webp',
    '/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-best-relationship-logo.webp',
    '/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-best-value-for-price-logo.webp',
    '/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-trustradius-logo.webp',
  ];

  return (
    <section className="w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 sm:px-12 lg:px-24">
        {/* ---------- heading ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
        >
          REVIEWS &amp; RATINGS
        </motion.h2>

        {/* ---------- sub-text ---------- */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-2xl text-center text-base sm:text-lg opacity-90"
        >
          Proven success, validated by your peers.
        </motion.p>

        {/* ---------- logos grid ---------- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="grid w-full grid-cols-2 gap-6 md:grid-cols-4"
        >
          {logos.map((src, idx) => (
            <div key={idx} className="flex justify-center">
              <Image
                src={src}
                alt={`Logo ${idx + 1}`}
                width={200}
                height={100}
                className="h-auto w-auto object-contain"
                priority
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}