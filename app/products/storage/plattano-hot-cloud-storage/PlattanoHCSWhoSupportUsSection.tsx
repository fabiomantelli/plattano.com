'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function PlattanoHCSWhoSupportsUsSection() {
  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col lg:flex-row items-center gap-12"
        >
          {/* Text Column */}
          <div className="lg:w-1/2 space-y-6 text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl font-extrabold">WHO <span className='text-primary'>SUPPORTS US</span></h2>
            <p className="text-base sm:text-lg">
              Secure, redundant Tier III data centers—certified SOC-2, ISO 27001 and PCI-DSS—host our storage regions. 
              You choose exactly which geographic bucket holds your data, giving you full control and peace of mind.
            </p>
          </div>

          {/* Image Column */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <Image
              src="/images/products/storage/plattano-hot-cloud-storage/plattano-hcs-who-support-us.webp"
              alt="Plattano Hot Cloud Storage partners: Iron Mountain, Equinix, Flexential, NTT, Digital Realty"
              width={600}
              height={300}
              className="w-full max-w-sm object-contain"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
