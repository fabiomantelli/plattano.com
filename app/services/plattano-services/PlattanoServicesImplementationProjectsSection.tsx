// app/components/ImplementationProjectsSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function PlattanoServicesImplementationProjectsSection() {
  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Title */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          IMPLEMENTATION <span className='text-primary'>PROJECTS</span>
        </motion.h2>

        {/* Content Box */}
        <motion.div
          className="border border-primary rounded-xl p-8 bg-white/50 dark:bg-black/50 shadow-lg"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-center text-lg font-semibold">
            <span className="font-bold">PASSION FOR EXCELLENCE:</span>{' '}
            TRANSFORMING OBSESSION FOR RESULTS INTO SUSTAINABLE SUCCESS.
          </p>
          <p className="mt-4 italic text-primary text-center">
            “It’s no good having gold if you don’t know how to mine—service matters as much as the product!”
          </p>
          <p className="mt-4 text-center text-base">
            Count on our highly skilled delivery team to provide nothing less than excellence in implementing your IT projects.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
