'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqItems = [
  {
    question: 'Why choose SentinelOne?',
    answer:
      'In the battle against constantly evolving cyber threats, we need to act faster and smarter than what would be possible with human-powered technology. SentinelOne is autonomous cybersecurity developed for what’s coming.',
  },
  {
    question: 'Can the entire solution be summarized?',
    answer:
      'We are redefining cybersecurity by pushing the boundaries of autonomous technology. Our Singularity™️ XDR platform covers prevention, detection, response, and threat hunting powered by AI across user endpoints, containers, cloud workloads, and IoT devices. Empowering modern businesses to defend faster, at greater scale, and with higher precision across their attack surface.',
  },
  {
    question: 'How do I convince my boss?',
    answer:
      'SentinelOne is the best-in-class technology, with its AI-driven platform setting the standard for modern security solutions. With unmatched visibility into what’s in your network, automation, and enterprise-level control, SentinelOne offers the right mix of performance and protection.',
  },
  {
    question: 'How is SentinelOne licensed?',
    answer:
      'Plattano is a SentinelOne partner and can market it in two ways: \n\n 1. Pay-as-you-go monthly, transforming Capex into Opex.\n 2. Subscription, pay upfront (1, 3, or 5 years).',
  },
  {
    question: 'How many packages are available?',
    answer:
      'S1 Core (discontinued)\nS1 Control (Security + Suite Features)\nS1 Complete (Best-in-class EPP and EDR)',
  },
  {
    question: 'What is SentinelOne software?',
    answer:
      'The SentinelOne Singularity platform is the first industry data lake that seamlessly combines endpoint protection (EPP), endpoint detection and response (EDR), IoT security, and cloud workload protection (CWPP) into one platform. With Singularity, organizations gain access to back-end data across their entire organization through a single solution, providing a cohesive view of their network and assets while adding real-time autonomous security across all their assets.',
  },
  {
    question: 'How good is SentinelOne?',
    answer:
      'SentinelOne is regularly recognized by leading industry analysts and independent third-party tests, including:\n\n– Best endpoint detection and response (EDR) solutions from Gartner, as rated by customers.\n\n– Gartner named SentinelOne a Leader in the Magic Quadrant for Endpoint Protection Platforms.\n\n– MITRE Engenuity ATT&CK Carbanak and FIN7 results show that SentinelOne outperforms other cybersecurity vendors with 100% visibility, no missed detections, and no need for configuration changes.',
  },
  {
    question: 'Who are SentinelOne competitors?',
    answer:
      'SentinelOne and Crowdstrike are considered the two leading EDR/EPP solutions in the market. SentinelOne outperforms Crowdstrike in recent and independent evaluations. SentinelOne offers an autonomous single-agent EPP+EDR solution with the best industry coverage on Linux, MacOS, and Windows operating systems. Unlike Crowdstrike, SentinelOne doesn’t rely on human analysts or cloud connectivity for its best detection and response features, using an Active EDR agent that performs pre- and post-execution analysis on-device to autonomously detect and protect endpoints from both known and unknown threats.',
  },
  {
    question: 'Is SentinelOne ISO 27001 certified?',
    answer:
      'Yes, SentinelOne is ISO 27001 compliant. Read the Security Statement.',
  },
  {
    question: 'What ROI can I reasonably expect from my investment in SentinelOne solutions?',
    answer:
      'SentinelOne engaged Forrester Research to independently assess the ROI a prototype customer could reasonably expect based on real interviews with clients. The Forrester Total Economic Impact of 2020 reports a 353% ROI. More details are available here.',
  },
]

export default function SentinelOneFaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([])

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        {/* Title */}
        <h2 className="text-[44px] font-sofia font-bold text-primary text-center">
          Frequently Asked Questions About S1
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