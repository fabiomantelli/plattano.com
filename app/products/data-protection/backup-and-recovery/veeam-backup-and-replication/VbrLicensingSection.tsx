'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VbrLicensingSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-24">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-start lg:items-center gap-12">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold text-center lg:text-start">
            UNIVERSAL LICENSING
          </h2>
          <p className="text-base sm:text-lg leading-relaxed text-center lg:text-start">
            Veeam and Plattano offer flexible licensing packages to match your growing disaster-recovery,
            monitoring, and data-protection needs—whether you’re just starting out or running a large
            enterprise. Our Veeam Universal License (VUL) lets you freely protect workloads across
            cloud, virtual, and physical environments with one portable license, giving you true
            software-defined freedom and the best TCO in the industry.
          </p>
        </motion.div>

        {/* Image Column (centered on mobile/tablet) */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 w-full max-w-md lg:max-w-none mx-auto lg:mx-0"
        >
          <Image
            src="/images/products/data-protection/backup-and-recovery/veeam-backup-and-replication/vbr-licensing.webp"
            alt="Veeam Universal License diagram"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
