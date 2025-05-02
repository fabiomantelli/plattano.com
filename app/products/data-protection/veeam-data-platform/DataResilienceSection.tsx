'use client'

import { motion } from 'framer-motion'
import CountUp from 'react-countup'

const data = [
  {
    label: '80%',
    description: 'of companies suffered at least one ransomware attack last year.',
    value: 80,
  },
  {
    label: '82%',
    description: 'of companies use manual processes to recover their data after an interruption.',
    value: 82,
  },
  {
    label: '95%',
    description: 'of organizations are moderately to extremely concerned about cloud security.',
    value: 95,
  },
]

export default function DataResilienceSection() {
  return (
    <section className="w-full py-24 text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
          WHY <span className="text-primary">YOU NEED DATA RESILIENCE</span>
        </h2>

        <div className="space-y-8 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
          {data.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg text-primary font-medium">{item.description}</p>

              {/* Animated Progress Bar */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${item.value}%` }}
                transition={{ duration: 2, ease: 'easeInOut' }}
                className="h-4 rounded-full bg-primary"
              >
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"></div>
              </motion.div>

              {/* Display Percentage with CountUp */}
              <div className="text-2xl font-bold mt-2">
                <CountUp start={0} end={item.value} duration={2.4} separator="," /> %
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}