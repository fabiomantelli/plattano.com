'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    question: 'What is Veeam Data Platform?',
    answer:
      'Veeam Data Platform offers data resilience through secure backups and rapid, reliable solutions for physical, virtual, and cloud environments. It provides Veeam Backup & Replication as the core component of the platform for all workloads.',
  },
  {
    question: 'What components make up the Veeam platform?',
    answer:
      'The Veeam platform is divided into data protection concepts: Backup & Replication → Veeam Backup & Replication, Monitoring & Analytics → Veeam ONE, and Orchestration → Veeam Disaster Recovery Orchestrator.',
  },
  {
    question: 'How does Veeam help protect against cyber threats?',
    answer:
      'Veeam helps protect your business by providing a robust backup solution that shields your data from ransomware and other malicious attacks, ensuring your data is always secure and recoverable.',
  },
];

export default function VeeamFaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <h2 className="text-[44px] font-sofia font-bold text-primary text-center">
          Frequently Asked Questions about Veeam
        </h2>

        <div className="space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="rounded-xl border transition-all overflow-hidden border-neutral-300 bg-neutral-50 dark:border-white/20 dark:bg-white/5"
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left text-xl font-sofia font-medium text-primary focus:outline-none"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${index}`}
                >
                  <span>{item.question}</span>
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-${index}`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
}
