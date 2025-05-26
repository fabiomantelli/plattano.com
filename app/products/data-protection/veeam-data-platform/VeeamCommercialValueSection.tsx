'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function VeeamCommercialValueSection() {
  return (
    <section className="w-full py-24 text-neutral-900 dark:bg-black bg-white dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8">
        {/* Text Block */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            THE COMMERCIAL VALUE OF THE VEEAM PLATFORM
          </h2>
          <p className="text-xl">
            IDC researched Veeam clients to understand the commercial value they experienced when implementing Veeam.
            In this report, you’ll learn how Veeam clients were able to save time and money with our solutions. You’ll also
            see some of the ROI benefits, including:
          </p>
          <ul className="space-y-4 md:list-disc pl-6 text-lg md:text-base md:pl-8">
            <li className="text-lg md:text-base">329% ROI in three years</li>
            <li className="text-lg md:text-base">5x faster recovery time for critical apps</li>
            <li className="text-lg md:text-base">93% service level agreement (SLA) compliance with Veeam</li>
          </ul>
        </div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="flex-1 w-full max-w-md md:max-w-none"
        >
          <Image
            src="/images/products/data-protection/veeam-data-platform/commercial-value.png"
            alt="Commercial Value of Veeam"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}
