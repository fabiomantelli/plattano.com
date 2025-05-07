'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { AlertTriangle } from 'lucide-react'

export default function PlattanoHCSRansomwarePreventionSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Stop <span className="text-primary">Ransomware</span> in Its Tracks!
          </h2>
          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
            Attacks and impacts are at unprecedented heights and rising every day.
          </p>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-primary mt-4">
            $20 billion estimated global damages
          </h3>
          <ul className="space-y-4 mt-6">
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>51% of companies have been impacted</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>Google reports over 19 million daily phishing attempts</span>
            </li>
            <li className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
              <span>New ransomware attacks every 11 seconds</span>
            </li>
          </ul>
        </motion.div>

        {/* Image Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="w-full"
        >
          <Image
            src="/images/products/storage/plattano-hot-cloud-storage/plattano-hcs-ransomware.png"
            alt="Abstract illustration of ransomware threat"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </motion.div>
      </div>
    </section>
  )
}
