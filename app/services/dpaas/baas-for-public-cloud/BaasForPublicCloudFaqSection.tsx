'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
  {
    question: 'What are the benefits of Backup as a Service (BaaS)?',
    answer:
      'Customers choose Backup as a Service instead of building in‑house solutions to:\n\n' +
      '- Gain access to experts by offloading configuration, maintenance, monitoring, and updates of storage and software.\n' +
      '- Get started quickly—saving time and resources while avoiding complex setup processes.\n' +
      '- Accelerate adoption with a cloud‑first storage approach.\n' +
      '- Establish a secondary backup location for recoverability and compliance.\n' +
      '- Keep data safe from ransomware and insider threats by maintaining an isolated copy away from primary storage.',
  },
  {
    question: 'What is the shared responsibility model for protecting data in the public cloud?',
    answer:
      'AWS, Microsoft Azure, and Google Cloud do not back up your data for you. Under each provider’s shared responsibility model, it remains the customer’s responsibility to ensure that their data is securely backed up and protected.',
  },
  {
    question: 'Which public‑cloud workloads can Veeam‑powered service providers protect?',
    answer:
      'Veeam covers a wide range of data protection for AWS, Azure, and Google Cloud, including:\n\n' +
      '- **AWS**: Amazon EC2 backups, Amazon RDS backups, Amazon EFS backups\n' +
      '- **Microsoft Azure**: Azure VMs, Azure SQL, Azure Files\n' +
      '- **Google Cloud**: Compute Engine VMs, Cloud SQL (MySQL)',
  },
]

export default function BaaSForPublicCloudFaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <h2 className="text-[44px] font-sofia font-bold text-primary text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index)
            return (
              <div
                key={index}
                className="border rounded-xl transition overflow-hidden border-neutral-300 bg-neutral-50 dark:border-white/20 dark:bg-white/5"
              >
                <button
                  className="w-full flex text-primary items-center justify-between px-6 py-5 text-left font-sofia text-xl font-medium focus:outline-none"
                  onClick={() => toggleIndex(index)}
                >
                  <span>{item.question}</span>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <motion.pre
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-6 text-base font-ubuntu whitespace-pre-wrap"
                      >
                        {item.answer}
                      </motion.pre>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
