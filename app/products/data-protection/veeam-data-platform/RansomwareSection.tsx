'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function RansomwareSection() {
  return (
    <section className="w-full py-24 bg-neutral-200 text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-16">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="w-full md:w-1/2"
        >
          <Image
            src="/images/products/data-protection/veeam-data-platform/ransomware.png" // Use the appropriate image path
            alt="Ransomware Illustration"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
            RANSOMWARE – TRENDS
          </h2>
          <p className="text-lg mb-6">
            Don’t become a statistic – <span className="text-primary font-semibold">talk to Plattano now!</span>
          </p>
          <p className="text-base mb-8">
            Lessons learned from 1,200 victims and nearly 3,000 cyberattacks – get the report now!
          </p>
          <Link href="#" className="inline-block px-8 py-3 rounded-md font-semibold shadow-lg transition-colors duration-200 bg-primary text-white hover:bg-transparent hover:text-primary border border-primary">
            DOWNLOAD THE FULL REPORT
          </Link>
        </motion.div>
      </div>
    </section>
  )
}