'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

export default function BaasForPublicCloudBackupSolutionsSection() {
  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8 text-center">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          CLOUD BACKUP <span className='text-primary'>SOLUTIONS</span>
        </motion.h2>

        {/* Call‑out Box */}
        <motion.div
          className="border border-primary rounded-xl p-8 space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl sm:text-2xl font-semibold">
            Not Looking for “Backup as‑a‑Service”? No Problem!
          </h3>
          <p className="max-w-2xl mx-auto opacity-90">
            Veeam Backup for AWS, Azure, and Google Cloud licenses are available
            standalone, in hybrid‑cloud or multi‑cloud bundles. Pick the one that
            fits your secure‑cloud strategy below.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/products/data-protection/backup-and-recovery/veeam-for-aws"
              className="inline-block px-8 py-3 rounded-md font-semibold shadow-lg transition-colors duration-200 bg-primary text-white hover:bg-transparent hover:text-primary border border-primary uppercase"
            >
              VEEAM BACKUP FOR AWS
            </Link>
            <Link
              href="/products/data-protection/backup-and-recovery/veeam-for-microsoft-azure"
              className="inline-block px-8 py-3 rounded-md font-semibold shadow-lg transition-colors duration-200 bg-primary text-white hover:bg-transparent hover:text-primary border border-primary uppercase"
            >
              VEEAM BACKUP FOR AZURE
            </Link>
            <Link
              href="/products/data-protection/backup-and-recovery/veeam-for-google-cloud"
              className="inline-block px-8 py-3 rounded-md font-semibold shadow-lg transition-colors duration-200 bg-primary text-white hover:bg-transparent hover:text-primary border border-primary uppercase"
            >
              VEEAM BACKUP FOR GOOGLE
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
