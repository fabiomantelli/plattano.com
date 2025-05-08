'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Info } from 'lucide-react'

export default function WhyNotDirectPurchaseSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 space-y-6">
        {/* Accordion Button */}
        <button
          onClick={() => setOpen((o) => !o)}
          className="w-full border border-primary rounded-xl px-6 py-4 flex flex-col sm:flex-row items-center sm:justify-start gap-3 sm:gap-4 text-xl font-semibold text-primary hover:bg-primary/10 transition cursor-pointer"
        >
          {/* Icon with primary pill background */}
          <span className="p-2 bg-primary text-white rounded-full flex-shrink-0">
            <Info className="w-5 h-5" />
          </span>
          <span className="text-center sm:text-left">Why not purchase directly from each vendor?</span>
        </button>

        {/* Answer Panel */}
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="panel"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="border border-primary rounded-xl p-6"
            >
              <p className="text-base mb-4">
                Plattano doesn’t just sell—you get help solving real problems!
              </p>
              <ul className="space-y-3 list-none">
                {[
                  'No more multiple vendors',
                  'No more complex contracts',
                  'Our partners become our advisors',
                  'Competitive pricing versus direct purchase',
                  'Plattano’s added value in the sales process',
                  'We help you acquire exactly what you need—no more, no less'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}