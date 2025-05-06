// app/(veeam)/veeam-one/ui/VeeamOneFaqSection.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    question:
      'What is Veeam Data Platform – Monitoring & Analytics and how does it fit into IT monitoring?',
    answer:
      'Formerly known as Veeam ONE, Veeam Data Platform – Monitoring & Analytics delivers advanced IT monitoring and analytics, giving you a 360‑degree view of your entire infrastructure for optimized data protection.',
  },
  {
    question:
      'How does Veeam Data Platform – Monitoring & Analytics differ from other IT‑monitoring software?',
    answer:
      'It ships with more than 340 pre‑defined alarms that proactively identify issues—including security threats like ransomware—setting it apart from most generic monitoring tools.',
  },
  {
    question:
      'What kinds of IT‑infrastructure monitoring does Veeam Data Platform – Monitoring & Analytics provide?',
    answer:
      'You get 150+ out‑of‑the‑box reports covering data protection, infrastructure performance and compliance for a truly comprehensive view.',
  },
  {
    question:
      'Can Veeam Data Platform – Monitoring & Analytics help with chargeback and billing?',
    answer:
      'Yes. It calculates per‑tenant resource consumption, making chargeback and billing straightforward in multi‑tenant or departmental environments.',
  },
  {
    question:
      'How does the platform ensure data protection and compliance?',
    answer:
      'Built‑in alarms and reports track data locations, protection status and potential security threats—helping you stay audit‑ready at all times.',
  },
  {
    question:
      'What are the benefits of automated remediation in the platform?',
    answer:
      'Automated fixes eliminate manual intervention and cut downtime, making your monitoring solution truly hands‑off and highly efficient.',
  },
  {
    question:
      'Why choose Veeam Data Platform – Monitoring & Analytics for IT monitoring and analytics?',
    answer:
      'It combines real‑time monitoring, deep analytics and automated remediation in a single solution—your one‑stop shop for IT visibility.',
  },
  {
    question: 'Why do I need monitoring software and tools at all?',
    answer:
      '“What gets measured gets done.” Without the right IT‑monitoring tools, small glitches can quickly snowball into major outages. Modern solutions automate data collection and analysis, deliver up‑to‑date insights and even detect malicious activity before it causes downtime or data loss.',
  },
  {
    question: 'What makes a monitoring system effective?',
    answer:
      'Three essentials: continuous monitoring (24 × 7 × 365), proactive alerts that warn you in real time, and intelligent remediation that can automatically fix common issues such as media failures, network glitches or human error.',
  },
  {
    question: 'How does server monitoring actually work?',
    answer:
      'Server monitoring tracks processes that affect security, availability and overall health. It keeps an eye on CPU, memory, storage and application responsiveness, alerting you when thresholds are exceeded so you can react before users feel the pain.',
  },
];

export default function VeeamOneFaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) =>
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );

  return (
    <section className="w-full bg-white py-20 text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-4xl space-y-12 px-6">
        <h2 className="text-center text-[44px] font-bold text-primary">
          Frequently&nbsp;Asked&nbsp;Questions
        </h2>

        <div className="space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-neutral-300 bg-neutral-50 transition dark:border-white/20 dark:bg-white/5"
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left text-xl font-medium text-primary focus:outline-none"
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
                        className="px-6 pb-6 text-base"
                      >
                        {item.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}