'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VeeamAzureIntegrateSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1 space-y-6 text-center lg:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight break-words">
              ENABLE THE FULL POWER OF THE SOLUTION.{' '}
              <span className="text-primary">
                INTEGRATE WITH VEEAM BACKUP & REPLICATION.
              </span>
            </h2>
            <p className="text-lg font-medium text-primary">
              One Platform, Multiple Possibilities
            </p>
            <p className="text-base sm:text-lg">
              Unify backup and recovery for Azure with your other workloads using the same
              software-defined platform.
            </p>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1 w-full max-w-md sm:max-w-lg lg:max-w-none"
          >
            <Image
              src="/images/products/data-protection/backup-and-recovery/veeam-for-microsoft-azure/veeam-azure-integrate.png"
              alt="Integrate Azure backup with Veeam Backup & Replication"
              width={800}
              height={600}
              className="w-full object-cover"
              priority
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
