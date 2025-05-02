'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ShieldCheck, Activity, CloudLightning } from 'lucide-react'

const components = [
  {
    title: 'Secure and Resilient Backup & Recovery Delivered Instantly',
    highlights: ['Take control', 'recover', 'your data'],
    points: [
      { icon: ShieldCheck, text: 'Remove the risk from your backups with comprehensive data security' },
      { icon: CloudLightning, text: 'Meet recovery objectives with confidence' },
      { icon: Activity, text: 'Accelerate your shift to hybrid cloud' },
    ],
    button: {
      label: 'VEEAM BACKUP & REPLICATION',
      href: '#',
    },
  },
  {
    title: 'Monitoring and Analytics That Drive Proactive Threat Mitigation',
    highlights: ['Detect malicious backup activities', 'recovery capacity'],
    points: [
      { icon: ShieldCheck, text: 'Mitigate potential threats with a recovery strategy' },
      { icon: Activity, text: 'Minimize downtime with automated responses' },
      { icon: CloudLightning, text: 'Track data location and protection status in real time' },
    ],
    button: {
      label: 'VEEAM ONE',
      href: '#',
    },
  },
  {
    title: 'Don’t Bet Your Business on Manual Recovery',
    highlights: ['time matters', 'eliminate assumptions'],
    points: [
      { icon: Activity, text: 'Low-impact testing to verify clean recovery' },
      { icon: ShieldCheck, text: 'Custom orchestration for your business needs' },
      { icon: CloudLightning, text: 'Dynamic reports for real-time compliance' },
    ],
    button: {
      label: 'VEEAM RECOVERY ORCHESTRATION',
      href: '#',
    },
  },
]

export default function PlatformComponentsSection() {
  return (
    <section className="w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center space-y-12">
        {/* Title */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-extrabold">WHAT ARE THE PLATFORM COMPONENTS?</h2>
          <p className="text-lg max-w-3xl mx-auto">
            The Data Platform is made up of integrated solutions, each aligned with the intelligent data management concept.
          </p>
        </div>

        {/* Tabs and Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {components.map((comp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="bg-white/80 dark:bg-white/5 border border-neutral-300 dark:border-white/10 rounded-2xl p-6 shadow-xl flex flex-col justify-between"
            >
              <div className="space-y-4 text-left">
                <h3 className="text-xl font-bold text-primary">
                  {comp.title.split(' ').map((word, i) =>
                    comp.highlights.includes(word.toLowerCase()) ? (
                      <span key={i} className="text-primary">{word} </span>
                    ) : (
                      <span key={i}>{word} </span>
                    )
                  )}
                </h3>

                <ul className="space-y-3 pt-2">
                  {comp.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <point.icon className="text-primary w-5 h-5 mt-1" />
                      <span className="font-ubuntu">{point.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-6 text-center">
                <Link href={comp.button.href}>
                  <button className="bg-primary text-white font-semibold px-4 py-3 rounded-md w-full hover:bg-white hover:text-primary hover:border hover:border-primary transition">
                    {comp.button.label}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}