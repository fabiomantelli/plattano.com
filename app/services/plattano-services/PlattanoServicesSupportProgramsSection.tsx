// app/components/SupportProgramsSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function PlattanoServicesSupportProgramsSection() {
  return (
    <section className="w-full py-20 bg-black/10 text-black dark:bg-neutral-900 dark:text-white">
      <div className="max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          Which <span className='text-primary'>Support Programs</span> Does <span className='text-primary'>Plattano</span> Offer?
        </motion.h2>
        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base sm:text-lg opacity-90"
        >
          We provide two levels of support to keep your IT running smoothly:
        </motion.p>
      </div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-8 max-w-5xl mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-2 gap-8"
      >
        {/* Basic */}
        <div className="border border-primary rounded-lg p-6 space-y-4 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold">BASIC (8 × 5)</h3>
          <p className="text-sm">
            The Plattano Basic support program delivers business-hour assistance plus product
            <span className='text-primary'> upgrades and updates</span>.
          </p>
          <p className="text-sm">
            *Your Veeam rental license (VCSP) already includes <span className='text-primary'>2 hours of Basic support</span> at no extra cost.
          </p>
        </div>

        {/* Premium */}
        <div className="border border-primary rounded-lg p-6 space-y-4 hover:shadow-lg transition">
          <h3 className="text-2xl font-semibold">PREMIUM (24 × 7)</h3>
          <p className="text-sm">
            Plattano Premium support provides fully-managed, <span className='text-primary'>high-touch IT service</span> for our top-tier
            customers. A dedicated Support Account Manager (SAM) will guide you from case initiation
            through <span className='text-primary'>complete resolution</span>.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
