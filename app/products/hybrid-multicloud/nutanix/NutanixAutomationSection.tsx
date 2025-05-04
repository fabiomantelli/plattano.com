'use client'

import { motion } from 'framer-motion'
import Image from 'next/image' // Corrected import from next/image

export default function NutanixAutomationSection() {
  return (
    <section className="w-full py-12 bg-neutral-200 dark:bg-neutral-900 text-white">
      {/* First section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Left Column with Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="space-y-6"
        >
          <Image
            src="/images/products/hybrid-multicloud/nutanix/nutanix-automation-image.png" // Use your image here
            alt="Nutanix Automation"
            width={600}
            height={400}
            className="w-full h-auto"
          />
        </motion.div>

        {/* Right Column with Text */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl font-semibold text-black dark:text-neutral-200">
            <span className='text-primary'>AUTOMATE</span> OPERATIONS AND <span className='text-primary'>ACCELERATE</span> SERVICE DELIVERY
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-black dark:text-neutral-200">
            Reduce costs and accelerate service delivery of IT services in public and private clouds with IT automation and DevOps best practices.
          </p>
          
          <h3 className="text-xl font-semibold text-primary mt-6">Why Automate?</h3>
          <ul className="list-disc list-inside space-y-3 text-lg text-black dark:text-neutral-200">
            <li>Free up your IT administrators</li>
            <li>Promote a DevOps culture</li>
            <li>Reduce your IT costs</li>
          </ul>
        </motion.div>
      </motion.div>
    </section>
  )
}