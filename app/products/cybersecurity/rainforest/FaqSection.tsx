'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
  {
    question: 'What does Rainforest do?',
    answer:
      'With Rainforest’s cybersecurity platform, you integrate an entire company securely—from developers to governance and risk—without friction between teams. One platform: multiple possibilities.',
  },
  {
    question: 'How does licensing work?',
    answer:
      'It can be consumption-based on a monthly basis (Opex) or subscription-based for 1, 3, or 5 years.',
  },
  {
    question: 'Do I need cybersecurity knowledge to use the platform?',
    answer:
      'No, you can use Plattano along with our managed service.',
  },
]

export default function FaqSection() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'
  const [mounted, setMounted] = useState(false)
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className={`w-full py-20 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <h2 className="text-[44px] font-sofia font-bold text-primary text-center">Frequently Asked Questions</h2>

        <div className="space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className={`border rounded-xl transition overflow-hidden ${
                  isDark ? 'border-white/20 bg-white/5' : 'border-neutral-300 bg-neutral-50'
                }`}
              >
                <button
                  className="w-full flex text-primary items-center justify-between px-6 py-5 text-left font-sofia text-xl font-medium focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span>{item.question}</span>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-6 text-base font-ubuntu"
                    >
                      {item.answer}
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
