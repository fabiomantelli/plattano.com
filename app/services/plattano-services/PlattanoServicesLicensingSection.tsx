'use client'

import { motion } from 'framer-motion'

export default function PlattanoServicesLicensingSection() {
  const benefits = [
    'High-performance OEM partnership',
    'Industry-leading national expertise',
    'Software compliance guarantee',
    'Highly consultative process',
    'Licensing as a Service (LaaS)',
    'Audits & regulatory compliance',
    'Accuracy & agility'
  ]

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2 space-y-4 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold">LICENSING</h2>
            <p className="text-lg font-semibold text-primary">WE SIMPLIFY YOUR ACQUISITION</p>
            <p className="text-base sm:text-lg opacity-90">
              Rely on our expert sales team, fully trained on the solutions we offer.  
              We’ll partner with you every step of the way—from first contact through full implementation.
            </p>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full md:w-1/2"
          >
            <div className="w-full bg-primary text-white dark:text-black dark:bg-neutral-300 rounded-lg p-6 shadow-lg text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4">Benefits When You License with Us</h3>
              <ul className="space-y-2 list-none">
                {benefits.map((b, i) => (
                  <li key={i} className="flex items-start md:justify-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-white dark:bg-black flex-shrink-0" />
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}