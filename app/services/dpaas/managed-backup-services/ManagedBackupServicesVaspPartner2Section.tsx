'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ManagedBackupServicesVaspPartner2Section() {
  return (
    <section className="w-full py-20 bg-neutral-200 text-black dark:bg-neutral-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
        {/* Text Column */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            PLATTANO IS A <span className="text-primary">VASP</span>.
          </h2>
          <p className="text-base sm:text-lg opacity-90">
            VASPs (Veeam Accredited Service Providers) are a global group of over 200 partners—including system integrators
            and IT consultants—who offer dedicated professional services and focused teams with proven success in Veeam deployments.
          </p>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/images/services/dpaas/managed-backup-services/managed-backup-services-plattano-vasp.png"
            alt="Network of service provider icons"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
