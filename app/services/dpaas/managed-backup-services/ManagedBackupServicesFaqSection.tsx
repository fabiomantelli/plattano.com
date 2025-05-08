'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
  {
    question: 'What are cloud managed services?',
    answer:
      'Cloud managed services are the outsourcing of a company’s cloud infrastructure or resources to a third‑party. Typically delivered by a Managed Service Provider (MSP) or cloud provider, these services span a wide range of solutions—most notably Backup as a Service (BaaS) and Disaster Recovery as a Service (DRaaS).',
  },
  {
    question: 'What is the difference between self‑service BaaS and a managed backup service?',
    answer:
      'Self‑service BaaS lets your IT team use a portal to schedule backups, set retention policies, and recover files or VMs on their own. A managed BaaS offering means a service provider handles scheduling, policy management, testing, restores and more—while your backups live in the provider’s repository.',
  },
  {
    question: 'What are the benefits of Backup as a Service?',
    answer:
      'Customers choose BaaS over home‑grown solutions to:\n\n' +
      '- Gain expert support by offloading storage and software setup, maintenance, monitoring and updates.\n' +
      '- Get started quickly with no CapEx purchases or complex configurations.\n' +
      '- Accelerate cloud adoption via a cloud‑first storage approach.\n' +
      '- Ensure recoverability and compliance with a secondary backup location.\n' +
      '- Protect against ransomware and insider threats with an isolated copy away from primary storage.',
  },
]

export default function ManagedBackupServicesFaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <h2 className="text-[44px] font-bold text-primary text-center">
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
                  className="w-full flex text-primary items-center justify-between px-6 py-5 text-left text-xl font-medium focus:outline-none"
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
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="px-6 pb-6 text-base whitespace-pre-wrap"
                      >
                        {item.answer}
                      </motion.div>
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
