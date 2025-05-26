'use client'

import { motion } from 'framer-motion'
import { ShieldCheck, RotateCcw, ServerCog } from 'lucide-react'

const pillars = [
  {
    icon: ShieldCheck,
    title: 'DATA SECURITY',
    subtitle: 'Stay confident your data is always protected with multilayered security.',
  },
  {
    icon: RotateCcw,
    title: 'DATA RECOVERY',
    subtitle: 'Recover exactly what you need, when and where you need it.',
  },
  {
    icon: ServerCog,
    title: 'DATA FREEDOM',
    subtitle: 'Protect all your data anywhere, any way, without vendor lock-in.',
  },
]

export default function DataResiliencePillarsSection() {
  return (
    <section className="w-full py-24 bg-neutral-200 text-black dark:bg-neutral-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center space-y-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          PILLARS OF <span className="text-primary">DATA RESILIENCE</span>
        </motion.h2>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl shadow-lg border bg-white/80 border-neutral-200 backdrop-blur-sm dark:bg-white/5 dark:border-white/10 text-center flex flex-col items-center"
            >
              <pillar.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-lg font-bold text-primary mb-1">{pillar.title}</h3>
              <p className="text-sm font-ubuntu">{pillar.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
