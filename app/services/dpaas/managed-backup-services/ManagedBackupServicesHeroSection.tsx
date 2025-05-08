'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ManagedBackupServicesHeroSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Left: Text */}
        <motion.div
          className="w-full md:w-1/2 space-y-4 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <p className="uppercase text-sm font-medium text-primary">
            Protect Your Data As a Service
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Our <span className="text-primary">Reputation</span> Precedes Us!<br />
            Let the <span className="text-primary">Pros</span> Take Care of Your Data.
          </h1>
        </motion.div>

        {/* Right: Illustration */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* replace the src with your actual illustration */}
          <Image
            src="/images/services/dpaas/managed-backup-services/managed-backup-services-hero.png"
            alt="Managed Backup and DR as-a-Service overview"
            width={800}
            height={500}
            className="w-full h-auto object-contain"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
