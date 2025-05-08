'use client'

import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BaasForPublicCloudMspMarketSection() {
  const cards = [
    {
      bullets: [
        'Over 125 K IT service providers for SMBs worldwide.',
        'Services offered: Help Desk (40 %), Cybersecurity (20 %), Cloud (40 %).'
      ],
      source:
        'Source: Global SME IT Managed Services Spend and N‑able TAM estimates based on Frost & Sullivan “Total Addressable Market for SMB IT Managed Service Providers,” February 2021'
    },
    {
      bullets: [
        'Global growth in 2023: forecast of 17 % growth in the MSP market.',
        'Latin America represents 2.7 % of the MSP market (Brazil emphasized).',
        'Market by region: North America (45.5 %), EMEA (29.1 %), APAC (22.7 %), LATAM (2.7 %).'
      ],
      source:
        'Source: Canalys Worldwide Managed Service Provider Forecast'
    },
    {
      bullets: [
        'IT investment focuses in 2023: Cybersecurity (77 %).',
        'Analytics & Big Data (55 %).',
        'Process Automation (RPA) (49 %).'
      ],
      source: 'Source: IT Forum 2022'
    }
  ]

  return (
    <section className="w-full py-20 bg-white text-neutral-900 dark:bg-black dark:text-white">
      {/* Heading */}
      <motion.h2
        className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-12"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        ABOUT OUR <span className="text-primary">MSP MARKET</span>
      </motion.h2>

      {/* Cards grid */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="border border-primary rounded-lg p-6 bg-white/50 dark:bg-white/5 shadow-inner"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <ul className="space-y-4 mb-4">
              {card.bullets.map((b, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-primary">{card.source}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
