'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export default function ManagedBackupServicesMspMarketSection() {
  const cards = [
    {
      title: 'Global MSP Landscape',
      points: [
        'Over 125,000 SMB IT service providers worldwide',
        'Services mix: Help Desk (40%), Cybersecurity (20%), Cloud (40%)',
      ],
      source:
        'Source: Frost & Sullivan “Total Addressable Market for SMB IT Managed Service Providers,” Feb 2021',
    },
    {
      title: '2023 Market Growth',
      points: [
        '17% projected growth in the global MSP market',
        'Latin America represents 2.7% of the market',
      ],
      source:
        'Source: Canalys Worldwide Managed Service Provider Market Report, 2023',
    },
    {
      title: 'IT Investment Priorities',
      points: [
        'Cybersecurity (77%)',
        'Analytics & Big Data (55%)',
        'Process Automation – RPA (49%)',
      ],
      source: 'Source: IT Forum 2022',
    },
  ]

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <span className='text-primary'>About</span> Our MSP <span className='text-primary'>Market</span>
      </motion.h2>

      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="border border-primary rounded-lg p-6 flex flex-col justify-between bg-white/5 dark:bg-black/5"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
            <ul className="space-y-2 mb-4">
              {card.points.map((pt, j) => (
                <li key={j} className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{pt}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs mt-auto opacity-80">{card.source}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
