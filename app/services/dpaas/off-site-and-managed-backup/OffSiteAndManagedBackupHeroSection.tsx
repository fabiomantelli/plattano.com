'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function OffSiteAndManagedBackupHeroSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Column */}
        <motion.div
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Off‑Site & Managed Backup<br/>
            <span className="text-primary">Professional-Grade Protection</span>
          </h1>
          <p className="text-base sm:text-lg max-w-lg mx-auto md:mx-0 opacity-90">
            Remove complexity from your data protection strategy.  Our off-site and fully managed backup 
            service safeguards your critical workloads—so you can focus on running your business.
          </p>
          <ul className="space-y-4 list-none max-w-md mx-auto md:mx-0">
            {[
              'Continuous off-site replication',
              'Automated policy-driven backups',
              'Rapid recovery SLA',
              'Ransomware-resilient architecture'
            ].map(item => (
              <li key={item} className="flex items-start gap-3 md:justify-start justify-center">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <div className="relative w-full h-0" style={{ paddingBottom: '62.5%' }}>
            <Image
              src="/images/services/dpaas/off-site-and-managed-backup/off-site-and-managed-backup-hero.png"
              alt="Off-Site Backup Illustration"
              fill
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
