'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const offerings = [
  {
    key: 'backup',
    logo: '/images/products/storage/plattano-hot-cloud-storage/plattano-hcs-veeam-logo.webp',
    alt: 'Veeam Logo',
    title: 'VEEAM BACKUP',
    description:
      'Enable the Veeam 3-2-1-0 rule with secure off-site ransomware protection. Take advantage of the Plattano managed service.',
    href: '/products/backup',
  },
  {
    key: 'm365',
    logo: '/images/products/storage/plattano-hot-cloud-storage/plattano-hcs-veeam-microsoft-logo.webp',
    alt: 'Veeam for Microsoft 365 Logo',
    title: 'VEEAM FOR MICROSOFT 365',
    description:
      'High-performance, secure storage to protect your essential 365 data. Take advantage of the Plattano managed service.',
    href: '/products/m365',
  },
  {
    key: 'cloud-nas',
    logo: '/images/products/storage/plattano-hot-cloud-storage/plattano-hcs-cloud-nas-logo.png',
    alt: 'Cloud NAS Icon',
    title: 'CLOUD NAS',
    description:
      'Extend the life of your on-prem servers, reduce costs, and never run out of capacity with fast, secure NAS in the cloud.',
    href: '/products/cloud-nas',
  },
  {
    key: 'surveillance',
    logo: '/images/products/storage/plattano-hot-cloud-storage/plattano-hcs-surveillance-data-logo.webp',
    alt: 'Surveillance Data Icon',
    title: 'SURVEILLANCE DATA',
    description:
      'Extend your on-prem VMS storage to the cloud without changing your VMS. Grow worry-free with our integrated cloud bridge.',
    href: '/products/surveillance',
  },
]

export default function PlattanoHCSOfferingsSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        {offerings.map((item, idx) => (
          <motion.div
            key={item.key}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="border border-primary rounded-xl p-8 flex flex-col items-center text-center space-y-6"
          >
            <Image
              src={item.logo}
              alt={item.alt}
              width={160}
              height={50}
              className="object-contain"
              priority
            />

            <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
            <p className="text-sm">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
