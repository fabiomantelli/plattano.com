'use client'

import { motion } from 'framer-motion'
import { Plug, BarChart3, Puzzle } from 'lucide-react'

export default function WhyChooseUsSection() {
  return (
    <section className="w-full py-20 bg-neutral-200 dark:bg-neutral-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-12"
      >
        {/* Section Title */}
        <div className="text-center space-y-2">
          <p className="text-[22px] font-sofia text-black dark:text-white">WHY CHOOSE US?</p>
          <h2 className="text-[36px] font-sofia font-bold">
            <span className="text-primary">WE SIMPLIFY</span>{' '}
            <span className="text-black dark:text-white">CYBERSECURITY</span>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {/* Plug and Play */}
          <div className="flex flex-col items-center space-y-4">
            <Plug size={48} className="text-primary" />
            <h3 className="text-xl font-sofia text-primary">Plug and Play</h3>
            <p className="text-base font-ubuntu max-w-xs text-black dark:text-white">
              Collect insights from Day One and make your company more secure from Code to Cloud.
            </p>
          </div>

          {/* Data-Driven */}
          <div className="flex flex-col items-center space-y-4">
            <BarChart3 size={48} className="text-primary" />
            <h3 className="text-xl font-sofia text-primary">Data-Driven</h3>
            <p className="text-base font-ubuntu max-w-xs text-black dark:text-white">
              Real-time dashboards showing key insights so your teams can make faster and more accurate data-based decisions.
            </p>
          </div>

          {/* Multiple Integrations */}
          <div className="flex flex-col items-center space-y-4">
            <Puzzle size={48} className="text-primary" />
            <h3 className="text-xl font-sofia text-primary">Multiple Integrations</h3>
            <p className="text-base font-ubuntu max-w-xs text-black dark:text-white">
              Hundreds of integrations with the market&rsquo;s top tools such as CI/CD, project management, communication platforms, ticketing systems, and more.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}