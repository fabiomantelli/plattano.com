'use client'

import { motion } from 'framer-motion'
import Image from 'next/image' // Corrected import from next/image

export default function NutanixBusinessSection() {
  return (
    <section className="w-full py-12 bg-neutral-200 dark:bg-neutral-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >

        {/* Right Column with Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl font-semibold text-black dark:text-neutral-200">
            <span className='text-primary'>BUSINESS</span> IS DRIVEN BY <span className='text-primary'>SPEED</span>
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-black dark:text-neutral-200">
            IT resources are the lifeblood of all data-driven companies. However, as infrastructure expands and the number of 
            managed applications grows, delivering services in private and public clouds can become a challenge. IT automation 
            solutions are the key to providing the speed necessary to drive business outcomes in the internet era.
          </p>
        </motion.div>
        {/* Left Column with Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="space-y-6"
        >
          <Image
            src="/images/products/hybrid-multicloud/nutanix/nutanix-business-image.png" // Use your image here
            alt="Nutanix Automation"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}