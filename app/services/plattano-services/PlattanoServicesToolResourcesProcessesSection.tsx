'use client'

import { motion } from 'framer-motion'

const columns = [
  {
    title: 'TOOLS',
    items: [
      'RMM (remote monitoring & management)',
      'Asset monitoring',
      'Automated ticketing system',
      'Remote asset management',
      'Prioritized remote access',
      'Credential vault',
    ],
  },
  {
    title: 'RESOURCES',
    items: [
      'Disk encryption',
      'Patch management',
      'Anti‑virus management',
      'Asset inventory',
      'Reports • Alerts • Dashboards',
      'Automation & scripting',
    ],
  },
  {
    title: 'PEOPLE & PROCESSES',
    items: [
      'Tier 1 & 2 technicians (Tier 3 via OEM)',
      'Named support manager (ASM)',
      'Incident response planning (IRP)',
      'Vulnerability management',
      'SLA governance',
      'Privacy & compliance (GDPR‑ready)',
    ],
  },
]

export default function PlattanoServicesToolsResourcesProcessesSection() {
  return (
    <section className="w-full py-20 bg-white text-neutral-900 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-6 text-center">
        {/* Main heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          Full <span className='text-primary'>Plattano</span> Empowerment
        </motion.h2>
        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg sm:text-xl font-semibold"
        >
          Focus on your most strategic IT priorities — let the pros secure <span className='text-primary'>your operations</span>.
        </motion.p>
        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm opacity-80"
        >
          Don&apos;t wait to break before you fix! See how Plattano sustains your IT environment.
        </motion.p>
      </div>

      {/* Three‑column cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.3 }}
        className="mt-12 max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 grid grid-cols-1 md:grid-cols-3 gap-8"
      >
        {columns.map(({ title, items }) => (
          <div
            key={title}
            className="border border-primary rounded-lg p-6 space-y-4 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold">{title}</h3>
            <ul className="space-y-3">
              {items.map((it) => (
                <li key={it} className="flex items-start gap-3">
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span className="text-sm">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
