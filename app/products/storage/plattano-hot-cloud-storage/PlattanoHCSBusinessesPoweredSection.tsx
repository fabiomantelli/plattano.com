'use client'

import { motion } from 'framer-motion'

export default function PlattanoHCSBusinessesPoweredSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8 text-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          Businesses Powered by <span className="text-primary">Plattano Hot Cloud Storage</span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-base sm:text-lg font-medium opacity-90"
        >
          Unlimited data, always available, infinitely accessible.
        </motion.p>

        {/* Body Text */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4 text-sm sm:text-base leading-relaxed"
        >
          <p>
            When your data is powered by Plattano Hot Cloud Storage, it drives your business.
            Plattano sits at the heart of your enterprise cloud. For many organizations,
            migrating data to the cloud is a necessity—but with Plattano it’s also an opportunity:
            infinite storage at one-fifth the cost of AWS S3 and performance that outpaces
            the competition.
          </p>
          <p>
            Whether you need a secondary copy in the cloud, off-site disaster recovery,
            active and accessible data archives, or long-term retention, Plattano’s
            cost-innovative performance makes your storage choice simple.
          </p>
        </motion.div>
      </div>
    </section>
  )
}