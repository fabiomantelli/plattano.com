'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
  {
    question: 'What are the main use cases for the NX platforms?',
    answer:
      'The Nutanix NX platforms are designed for all common private and hybrid cloud use cases and workloads, including:\n\n- Big Data Analytics\n- Critical business and enterprise applications\n- Databases\n- Data protection and disaster recovery\n- Dev/Test environments\n- End-user computing (EUC)\n- Remote and branch offices (ROBO) and edge computing',
  },
  {
    question: 'Which hypervisors can I use with the NX platforms?',
    answer:
      'Nutanix AOS supports AHV, VMware ESXi, or Microsoft Hyper-V hypervisors.',
  },
  {
    question: 'What are Nutanix Cloud Services?',
    answer:
      'Nutanix Cloud Services provide a native cloud extension to the Nutanix Enterprise Cloud Platform. Leveraging a common infrastructure stack and a single control point, the Xi Cloud Services allow IT teams to extend their environment beyond traditional datacenter limits into a fully integrated cloud environment that can be provisioned instantly and automatically configured.',
  },
]

export default function NutanixFaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-neutral-900 dark:text-white">
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
                  className="w-full flex text-primary items-center justify-between px-6 py-5 text-left font-semibold text-xl focus:outline-none"
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