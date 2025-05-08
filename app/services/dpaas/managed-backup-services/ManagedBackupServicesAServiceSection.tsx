'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const offerings = [
  {
    title: 'BaaS for Microsoft 365',
    description:
      'Protect your Microsoft 365 data from threats. Get the same advanced Veeam-powered protection, delivered and managed by Plattano Technologies.',
    href: '/products/data-protection/backup-and-recovery/veeam-for-microsoft-365',
  },
  {
    title: 'BaaS for Public Cloud',
    description:
      'Secure your workloads on AWS, Azure & Google. Free up resources, gain portability, and control costs—all backed by Plattano.',
    href: '/products/data-protection/backup-and-recovery/veeam-for-aws',
  },
  {
    title: 'Offsite & Managed Backup',
    description:
      'Meet compliance and regulatory demands. Protect off-site data with cost-effective, ransomware-resilient storage and a simplified backup strategy.',
    href: '/services/dpaas/off-site-and-managed-backup',
  },
]

export default function ManagedBackupServicesAServiceSection() {
  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-12">
        {/* Section Title */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl font-extrabold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Service&nbsp;Offerings <span className="text-primary">As a Service</span>
        </motion.h2>

        {/* Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offerings.map((offering, idx) => (
            <motion.div
              key={offering.title}
              className="flex flex-col justify-between bg-white dark:bg-white/5 border border-primary rounded-lg p-6 shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">{offering.title}</h3>
                <p className="text-sm leading-relaxed">{offering.description}</p>
              </div>
              <Link
                href={offering.href}
                className="mt-6 inline-block px-8 py-3 rounded-md font-semibold shadow-lg transition-colors duration-200 bg-primary text-white hover:bg-transparent hover:text-primary border border-primary text-center"
              >
                Learn More
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
