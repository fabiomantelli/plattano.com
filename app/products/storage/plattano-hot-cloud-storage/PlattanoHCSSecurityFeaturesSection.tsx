'use client'

import { motion } from 'framer-motion'
import { Server, Lock, Key } from 'lucide-react'

export default function PlattanoHCSSecurityFeaturesSection() {
  const cards = [
    {
      icon: <Server className="w-12 h-12 text-neutral-800" />,
      title: 'Physical Security',
      items: [
        'Tier III data centers—secure & redundant',
        '24/7/365 on‑site staff & security',
        'SOC‑2 & ISO 27001 certified',
      ],
    },
    {
      icon: <Lock className="w-12 h-12 text-neutral-800" />,
      title: 'Data Security',
      items: [
        'Automatic encryption at rest',
        'Secure upload/download via HTTPS',
        'Immutable storage at bucket & object level',
      ],
    },
    {
      icon: <Key className="w-12 h-12 text-neutral-800" />,
      title: 'Access Management',
      items: [
        'Enterprise SSO & MFA support',
        'Fine‑grained IAM policies & ACLs',
        'User‑level audit logging',
      ],
    },
  ]

  return (
    <section className="w-full bg-primary text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-black">
            Enterprise-Grade Security Features
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="bg-white/10 text-black rounded-xl p-8 flex flex-col items-center text-center space-y-4"
            >
              {card.icon}
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <ul className="space-y-2">
                {card.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1 block h-2 w-2 rounded-full bg-neutral-800 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
