// app/(plattano)/plattano-hot-cloud-storage/ui/HotStorageEraSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function PlattanoHCSEraSection() {
  const items = [
    'Multiple storage types for multiple purposes',
    'Hidden costs',
    'Complex, multi-layered storage',
    'Ransomware threats',
    'Multiple vendors',
    'More silos',
  ]

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20 text-center">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-0 space-y-12">
        {/* Box with bullets */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="border border-primary rounded-xl p-8 text-center"
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-6">
            Welcome Back to the Future<br />and to the End of the Eras of
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 justify-items-center">
            {items.map((text, idx) => (
              <li
                key={idx}
                className="flex items-center justify-center text-center gap-3"
              >
                <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span>{text}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Closing headline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-2"
        >
          <h3 className="text-xl sm:text-2xl font-semibold">
            THE ERA OF HOT STORAGE HAS BEGUN
          </h3>
          <p className="text-2xl sm:text-3xl font-extrabold text-primary">
            HOT STORAGE, HOT PRICING
          </p>
        </motion.div>
      </div>
    </section>
  )
}
