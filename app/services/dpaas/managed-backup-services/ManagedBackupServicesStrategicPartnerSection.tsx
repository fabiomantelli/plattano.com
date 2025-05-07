'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ManagedBackupServicesStrategicPartnersSection() {
  const tabs = {
    Hardware: ['Dell', 'Lenovo', 'HPE', 'Pure Storage', 'Supermicro', 'APC'],
    Security: ['Fortinet', 'Palo Alto', 'Cisco', 'Aruba'],
    Software: ['Microsoft', 'Oracle']
  }

  const [active, setActive] = useState<keyof typeof tabs | null>(null)

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <motion.div
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold">
          What You Can Purchase with Plattano Through{' '}
          <span className="text-primary">Strategic Partners</span>
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          {Object.keys(tabs).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive((prev) => (prev === tab ? null : (tab as any)))}
              className={`
                w-full sm:w-auto px-8 py-4 font-semibold rounded-lg border border-primary cursor-pointer
                ${active === tab
                  ? 'bg-primary text-black'
                  : 'border-primary text-primary hover:bg-primary hover:text-black'}
                transition
              `}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Panel */}
        <AnimatePresence initial={false}>
          {active && (
            <motion.div
              key={active}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left">
                {tabs[active].map((item) => (
                  <li
                    key={item}
                    className="px-4 py-3 border border-primary rounded-lg"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  )
}