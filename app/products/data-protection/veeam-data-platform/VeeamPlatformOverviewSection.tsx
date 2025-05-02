'use client'

import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  'Proven Recovery Orchestration',
  'Proactive Monitoring and Analysis',
  'Secure Backup and Fast Recovery',
]

const apiTypes = [
  { label: 'Cloud', icon: '☁️' },
  { label: 'Virtual', icon: '🖥️' },
  { label: 'Physical', icon: '📁' },
  { label: 'Applications', icon: '💳' },
  { label: 'SaaS', icon: '☁️' },
]

export default function VeeamPlatformOverviewSection() {
  return (
    <section className="w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center space-y-16">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          VEEAM DATA PLATFORM
        </motion.h2>

        {/* Benefits */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="w-[300px] h-[90px] bg-white text-black px-6 py-4 rounded-md flex items-center gap-3 shadow-md font-semibold text-sm md:text-base dark:text-black"
            >
              <Check size={18} className="text-primary shrink-0" />
              <span className="text-left">{item}</span>
            </div>
          ))}
        </div>

        {/* Native APIs */}
        <div className="space-y-10">
          <h3 className="text-2xl font-bold text-primary">Native APIs</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 justify-center">
            {apiTypes.map(({ label, icon }) => (
              <div
                key={label}
                className="p-6 flex flex-col items-center text-center rounded-2xl shadow-lg border transition-all duration-300 bg-white/80 border-neutral-200 backdrop-blur-sm dark:bg-white/5 dark:border-white/10"
              >
                <div className="text-3xl">{icon}</div>
                <span className="font-bold text-sm text-center">{label.toUpperCase()}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}