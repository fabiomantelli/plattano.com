'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function ManagedBackupServicesVaspPartnerSection() {
  const certifications = [
    '6 Veeam Sales Professional',
    '2 Veeam Certified Engineer',
    '6 Veeam Technical Sales Professional',
    '1 Veeam Certified Architect',
  ]

  const competencies = [
    'Microsoft 365 Protection',
    'Public Cloud Protection',
    'Ransomware & Disaster Recovery',
  ]

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8">
        {/* Section Title */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          Be a <span className="text-primary">Pro</span>, Managed by a VASP Partner
        </motion.h2>

        {/* Partner Card */}
        <motion.div
          className="border border-primary rounded-lg p-6 flex flex-col md:flex-row items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Logo */}
          <div className="w-full md:w-1/3">
            {/* light‐mode (black) logo */}
            <div className="block dark:hidden">
              <Image
                src="/images/services/dpaas/managed-backup-services/logo-black.webp"
                alt="Plattano Technologies logo (dark text on light)"
                width={256}
                height={64}
                className="w-full h-auto object-contain"
              />
            </div>
            {/* dark‐mode (white) logo */}
            <div className="hidden dark:block">
              <Image
                src="/images/services/dpaas/managed-backup-services/logo.webp"
                alt="Plattano Technologies logo (white text on dark)"
                width={256}
                height={64}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
          {/* Text */}
          <div className="w-full md:w-2/3 space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-bold">PLATTANO TECHNOLOGIES</h3>
            <p className="text-sm text-primary">
              Value‑added Gold reseller, managed‑services & cloud Gold provider, Veeam‑credentialed partner
            </p>
            <p className="text-base opacity-90">
              Plattano Technologies is a member of the Veeam Silver Cloud & Silver Provider program.
              We’re a Brazil‑based, high‑tech team headquartered in Florianópolis, SC.
            </p>
            <Link
              href="/partners/veeam"
              className="inline-block mt-3 px-6 py-2 bg-primary text-black font-semibold rounded-md shadow-lg transition-colors duration-200 hover:bg-transparent hover:text-primary border border-primary"
            >
              VEEAM COMPETENCY PARTNER
            </Link>
          </div>
        </motion.div>

        {/* Certifications & Competencies */}
        <div className="space-y-6">
          {/* Certifications */}
          <motion.div
            className="bg-white dark:bg-white/10 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-center mb-4">CERTIFICATIONS</h4>
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              {certifications.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="text-primary">♦</span> {c}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Competencies */}
          <motion.div
            className="bg-white dark:bg-white/10 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="text-xl font-semibold text-center mb-4">COMPETENCIES</h4>
            <ul className="flex flex-wrap justify-center gap-4 text-sm">
              {competencies.map((c) => (
                <li key={c} className="flex items-center gap-2">
                  <span className="text-primary">♦</span> {c}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}