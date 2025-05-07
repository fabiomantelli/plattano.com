'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VeeamAwsFeaturesSection() {
  const cards = [
    {
      title: 'Unbreakable Security',
      description:
        'Secure access and data management to protect against ransomware and other threats.',
    },
    {
      title: 'Fast & Reliable Recovery',
      description:
        'Advanced restore options that keep businesses productive with near-zero RTOs.',
    },
    {
      title: 'No Compromises',
      description:
        'Effortless backup that meets SLAs and budget requirements across hybrid cloud.',
    },
  ]

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.4 }}
            className="w-full lg:w-1/2"
          >
            <Image
              src="/images/products/data-protection/backup-and-recovery/veeam-for-aws/veeam-aws-hero.png"
              alt="Dashboard showing AWS backup status"
              width={800}
              height={500}
              className="w-full h-auto object-cover"
              priority
            />
          </motion.div>

          {/* Heading + Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.4 }}
            className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug">
              AUTOMATED & SECURE <span className="text-primary">BACKUP</span> & RECOVERY FOR AWS
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-md mx-auto lg:mx-0">
              Veeam Backup for AWS delivers native, policy-driven protection for reliable recovery from accidental deletions, ransomware and other data-loss scenarios. Immutable backups, full and file-level restores, and an API-first approach ensure resilient, cost-effective security—freeing time and resources for your most strategic IT priorities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="flex flex-col h-full border border-primary rounded-xl p-6 bg-white/50 dark:bg-black/50 hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-semibold text-primary mb-3">
                    {card.title}
                  </h3>
                  <p className="text-sm flex-1 whitespace-normal break-words">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
