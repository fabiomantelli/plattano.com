'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqItems = [
  {
    question: 'How do I know if I’m a potential ExaGrid customer?',
    answer:
      'Companies of any size with at least 80TB of data to back up are potential ExaGrid customers.',
  },
  {
    question: 'Why do ExaGrid and Veeam work so well together?',
    answer:
      'ExaGrid includes a built-in component called DataMover, eliminating the need for extra hardware costs that other appliances like Data Domain or StoreOnce require. Together, Veeam and ExaGrid can achieve up to a 20:1 deduplication ratio and exceptional backup and restore performance. No Veeam functionality is lost, unlike other appliances which cause some feature limitations.',
  },
  {
    question: 'If I have a second data center, does ExaGrid support replication?',
    answer:
      'Yes. You can replicate from a primary to a secondary data center. If both have data, ExaGrid supports cross-replication. For multiple data centers, ExaGrid can replicate data from remote sites to a central one and send its unique data back to one of the remotes in a nine-to-one group.',
  },
  {
    question: 'What if I have dozens or hundreds of remote locations with no data center?',
    answer:
      'ExaGrid recommends either replicating data back to the enterprise for backup (most companies do this), or using a cloud service to replicate data from remote sites to the cloud (works well for a few hundred GB or less).',
  },
  {
    question: 'I don’t have a second data center. What are my options?',
    answer:
      'You can place an ExaGrid appliance in a third-party data center or colocation facility.',
  },
];

export default function ExagridFaqSection() {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const [mounted, setMounted] = useState(false);
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className={`w-full py-20 ${isDark ? 'bg-black text-white' : 'bg-white text-black'}`}>
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <h2 className="text-[44px] font-sofia font-bold text-primary text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className={`border rounded-xl transition overflow-hidden ${
                  isDark ? 'border-white/20 bg-white/5' : 'border-neutral-300 bg-neutral-50'
                }`}
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
            );
          })}
        </div>
      </div>
    </section>
  );
} 