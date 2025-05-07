// app/(aws)/veeam-for-aws/ui/VeeamAwsHeroSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function VeeamAwsHeroSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
        {/* Text Column */}
        <motion.div
          className="md:w-1/2 w-full space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            <span className="text-primary">COMPREHENSIVE</span> PROTECTION FOR AWS DATA
          </h1>
          <ul className="space-y-4 text-base sm:text-lg text-center md:text-left">
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>Beyond limited snapshots with agentless backup and DR</span>
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>5× faster recovery for optimized RTOs</span>
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>Secure backup with immutable storage and encryption</span>
            </li>
          </ul>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/images/products/data-protection/backup-and-recovery/veeam-for-aws/veeam-aws-hero.png"
            alt="Illustration for AWS data protection"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}