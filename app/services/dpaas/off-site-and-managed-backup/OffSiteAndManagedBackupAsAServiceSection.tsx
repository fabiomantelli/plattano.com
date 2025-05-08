'use client'

import { motion } from 'framer-motion'

export default function OffSiteAndManagedBackupAsAServiceSection() {
  const features = [
    {
      title: 'Accelerate Time-to-Value',
      description:
        'Achieve immediate results while avoiding extra costs and resource overhead.',
    },
    {
      title: 'Veeam-Powered Experience',
      description:
        'Leverage industry best practices through a Veeam VASP partner—Plattano.',
    },
    {
      title: 'Simplify Backup Management',
      description:
        'Free up your team knowing backups are secure, immutable, and always available.',
    },
  ]

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col lg:flex-row items-start gap-12">
        {/* Left text block: 30% on lg+, full width on smaller */}
        <motion.div
          className="w-full lg:w-[30%] space-y-6 text-center lg:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Backup as a Service (BaaS) —{' '}
            <span className="text-primary">Powered by Plattano & Veeam</span>
          </h2>
          <p className="text-base sm:text-lg opacity-90">
            Keeping your data protected is challenging—regulatory demands, cyber
            threats, and budget constraints all add complexity. That’s why many
            organizations choose Veeam-powered BaaS for an immutable, end-to-end
            data protection strategy.
          </p>
        </motion.div>

        {/* Right feature cards: 70% on lg+, full width on smaller */}
        <div className="w-full lg:w-[70%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="border border-primary rounded-lg bg-white dark:bg-white/10 p-6 space-y-4 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
            >
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}