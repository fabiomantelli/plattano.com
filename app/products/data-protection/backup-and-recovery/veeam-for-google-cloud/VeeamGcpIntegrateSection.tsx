'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VeeamGcpIntegrateSection() {
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
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              ENABLE THE FULL POWER OF THE SOLUTION.
              <br />
              <span className="text-primary">INTEGRATE WITH VEEAM BACKUP &amp; REPLICATION.</span>
            </h2>
            <p className="text-lg font-medium text-primary">
              One platform, multiple possibilities
            </p>
            <p className="text-base sm:text-lg">
              Unify backup and recovery for Google Cloud with your other workloads
              on the same software-defined platform.
            </p>
          </motion.div>

          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
            className="flex-1 w-full max-w-md lg:max-w-none"
          >
            <Image
              src="/images/products/data-protection/backup-and-recovery/veeam-for-google-cloud/veeam-gcp-integrate.png"
              alt="Integrate Google Cloud backup with Veeam Backup & Replication"
              width={900}
              height={600}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}