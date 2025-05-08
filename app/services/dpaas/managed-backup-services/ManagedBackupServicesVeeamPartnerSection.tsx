'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ManagedBackupServicesVeeamPartnerSection() {
  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8">
        {/* Title */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Why Choose a <span className="text-primary">Veeam‑Certified Partner</span>?
        </motion.h2>

        {/* Card */}
        <motion.div
          className="border border-primary rounded-lg p-8 flex flex-col md:flex-row items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left: Illustration */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/services/dpaas/managed-backup-services/managed-backup-services-partner.png"
              alt="Verified checkmark illustration"
              width={600}
              height={400}
              className="w-full h-auto object-contain"
            />
          </div>
          {/* Right: Text */}
          <div className="w-full md:w-1/2 space-y-4 text-center md:text-left">
            <h3 className="text-2xl font-bold text-primary">Verified by Veeam</h3>
            <p className="text-base leading-relaxed">
              As an official Veeam‑Certified Service Provider (VCSP), we maintain the highest
              technical qualifications to deliver Veeam‑powered Backup & DR-as‑a‑Service
              solutions. Veeam continuously audits and verifies our offering—ensuring you
              receive the best possible data protection outcomes.
            </p>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="#"
            className="inline-block mt-4 px-8 py-3 bg-primary text-white font-semibold rounded-md shadow-lg transition-colors duration-200 hover:bg-transparent hover:text-primary border border-primary"
          >
            See Our Capabilities →
          </Link>
        </div>
      </div>
    </section>
  )
}
