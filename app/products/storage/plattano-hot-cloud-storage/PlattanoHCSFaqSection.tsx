'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
  {
    question: 'Who can use Hot Cloud Storage?',
    answer:
      'Any customer seeking modern, secure, and low‑cost data protection. With Plattano Hot Cloud Storage, you’re protected against ransomware and other malicious attacks. Data is stored outside Brazil (USA, Europe, Asia).',
  },
  {
    question: 'When does the Hot Cloud Storage billing cycle start?',
    answer:
      'By default, the billing cycle is 30 days starting when you become a paying customer. You will be invoiced every 30 days, so your billing date may shift since not all months have exactly 30 days.',
  },
  {
    question: 'How does the free data egress policy work?',
    answer:
      'Our free egress policy applies when you store data and download it at a reasonable rate without overloading the service.\n\n' +
      '- If your monthly outbound transfer ≤ your active storage volume, you qualify for free egress.\n' +
      '- If your outbound transfer > your active storage volume, you do not qualify.\n\n' +
      'Example: storing 100 TB and downloading ≤ 100 TB in a month qualifies; exceeding 100 TB does not. We may limit or suspend service if usage regularly exceeds these guidelines.',
  },
  {
    question: 'How does the free API request policy work?',
    answer:
      'Our free API policy applies when request rates remain reasonable and do not burden the service.\n\n' +
      '- Validated commercial applications typically comply.\n' +
      '- Non‑validated apps imposing excessive load may be limited or suspended.\n\n' +
      'We reserve the right to limit or suspend service if usage regularly exceeds these guidelines.',
  },
  {
    question: 'What is the cost impact of immutability features?',
    answer:
      'Immutability prevents deletion until the retention period expires (a security measure). All storage—including immutable—is billed as active storage.',
  },
  {
    question: 'How does at‑rest encryption work?',
    answer:
      'All object data is encrypted with AES‑256 before writing to disk. Two modes:\n\n' +
      '1) SSE‑C: You supply the AES‑256 key in the PUT request; it encrypts the object, then is discarded. The same key is required on GET. No key is stored.\n' +
      '2) SSE‑S3: If no key is supplied, we generate a unique AES‑256 key per object, store it securely in metadata, and use it to decrypt on GET.',
  },
  {
    question: 'Why purchase Reserved Capacity Storage (RCS)?',
    answer:
      'RCS lets you commit to 1‑, 3‑, or 5‑year capacity plans at discounted pre‑paid rates, significantly reducing storage costs compared to on‑demand pricing.',
  },
  {
    question: 'Is there a minimum storage duration policy?',
    answer:
      'Yes – if objects are deleted before 30 days (under the RCS model), you incur a prorated charge equal to the storage rate for the remaining days, similar to AWS S3 minimum duration policies.',
  },
  {
    question: 'Is Hot Cloud Storage compatible with Commvault?',
    answer:
      'Yes – full compatibility has been supported since 2017.',
  },
]

export default function HotCloudStorageFaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-neutral-900 dark:text-white">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <h2 className="text-4xl font-bold text-primary text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index)
            return (
              <div
                key={index}
                className="border rounded-xl overflow-hidden transition bg-neutral-50 dark:bg-white/5 border-neutral-300 dark:border-white/20"
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-xl font-semibold text-primary focus:outline-none"
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
                        className="px-6 pb-6 text-base leading-relaxed"
                      >
                        {item.answer.split('\n').map((line, i) => (
                          <p key={i} className="mb-4 last:mb-0">
                            {line}
                          </p>
                        ))}
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