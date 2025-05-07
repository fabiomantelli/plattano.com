// app/components/ProjectsByProductSection.tsx
'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    title: 'DATA PROTECTION',
    items: ['Veeam', 'Plattano Hot Cloud Storage'],
  },
  {
    title: 'HYBRID MULTICLOUD (DATACENTER)',
    items: ['Nutanix', 'VMware by Broadcom'],
  },
  {
    title: 'CYBERSECURITY',
    items: ['Rainforest Tech', 'SentinelOne'],
  },
]

export default function ManagedBackupServicesProjectsByProductSection() {
  return (
    <section className="w-full py-20 bg-white text-neutral-900 dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          <span className='text-primary'>Plattano</span> delivers projects on the following <span className='text-primary'>products</span> we offer:
        </motion.h2>

        {/* Cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {projects.map(({ title, items }) => (
            <div
              key={title}
              className="border border-primary rounded-lg p-6 space-y-4 text-center transition hover:shadow-lg"
            >
              <h3 className="text-xl font-semibold">{title}</h3>
              <ul className="space-y-2">
                {items.map((i) => (
                  <li key={i} className="flex items-center justify-center gap-2 text-sm">
                    <span className="h-2 w-2 rounded-full bg-primary inline-block" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
