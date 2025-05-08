'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
  {
    question: 'What are the benefits of choosing a service provider for my off-site backup?',
    answer: `When you partner with a service provider you get more than just a copy of your data. Providers typically offer management services, documentation and maintenance, with custom SLAs.  
By using a service-provider cloud as your backup repository you also gain control over the geographic location of your data—unlike hyperscale public clouds—often a key compliance requirement.`,
  },
  {
    question: 'What is the difference between off-site backup and managed BaaS?',
    answer: `Off-site backup means sending a copy of your backups to a secondary location—such as a service provider's data center or a public cloud.  
Managed BaaS (Backup as a Service) is when the provider not only stores your backups off-site but also manages your entire backup environment—scheduling, testing, verification and restore operations—on your behalf.`,
  },
]

export default function OffSiteAndManagedBackupFaqSection() {
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
                className="border rounded-xl overflow-hidden transition-colors bg-neutral-50 border-neutral-300 dark:bg-white/5 dark:border-white/20"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-sofia text-xl font-medium text-primary focus:outline-none"
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
                        className="px-6 pb-6 text-base font-ubuntu"
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
