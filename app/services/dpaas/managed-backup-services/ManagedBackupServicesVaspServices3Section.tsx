'use client'

import { motion } from 'framer-motion'

export default function ManagedBackupServicesVaspServices3Section() {
  const services = [
    'Legacy data‑protection solution migrations',
    'Public, private & hybrid cloud integration',
    'Business continuity design, implementation & orchestration (BCDR)',
    'Integration & optimization of Veeam‑allied partner solutions',
    'Augmentation of your operational subject‑matter experts (SMEs)',
  ]

  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-12">
      <div className="max-w-4xl mx-auto px-6 sm:px-12 lg:px-24 space-y-8 pt-8">
        {/* Section title */}
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          WHAT <span className="text-primary">SERVICERS</span> ARE OFFERED?
        </motion.h2>

        {/* Intro paragraph */}
        <motion.p
          className="text-base text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          The VASP partner community delivers both tactical support and unique business value for
          larger organizations like yours. These capabilities include, but are not limited to:
        </motion.p>

        {/* Services list */}
        <motion.ul
          className="space-y-4 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {}
          }}
        >
          {services.map((svc, i) => (
            <motion.li
              key={i}
              className="flex items-start gap-3 sm:justify-center"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0, transition: { delay: i * 0.1 } }
              }}
            >
              <span className="mt-1 inline-block w-2 h-2 bg-primary rounded-full flex-shrink-0" />
              <span className="text-sm">{svc}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
