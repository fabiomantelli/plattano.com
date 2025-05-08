'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function BaasForPublicCloudResponsibilitySection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-12">
        {/* Image Column */}
        <motion.div
          className="w-full lg:w-1/2 cursor-pointer"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/images/services/dpaas/baas-for-public-cloud/baas-for-public-cloud-responsibility.png"
            alt="Public Cloud Shared Responsibility Model"
            width={800}
            height={600}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        {/* Text Column */}
        <motion.div
          className="w-full lg:w-1/2 space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Public Cloud <span className="text-primary">Shared Responsibility</span>
          </h2>
          <p className="text-lg max-w-lg mx-auto lg:mx-0 opacity-90">
            Data is critical to your business success. Keeping it protected can become complex and time-consuming.
            AWS, Azure, and Google provide many built‑in advantages—but comprehensive, flexible data protection is not one of them.
          </p>
          <p className="text-base max-w-lg mx-auto lg:mx-0">
            <span className="font-semibold text-primary">→ YOU ARE RESPONSIBLE!</span><br/>
            Public cloud providers keep services running—you own the data and the responsibility to protect it.  
            Their shared-responsibility model is similar to Microsoft 365.
          </p>
          <p className="text-base max-w-lg mx-auto lg:mx-0">
            <span className="font-semibold text-primary">→ PLATTANO TAKES RESPONSIBILITY FOR YOU!</span><br/>
            Remove that burden from your daily routine—focus where you excel.  
            We&apos;ll handle your data protection, 24x7.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-white font-semibold rounded-md shadow-lg transition-colors duration-200 hover:bg-transparent hover:text-primary border border-primary"
          >
            Talk to Our Specialists
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
