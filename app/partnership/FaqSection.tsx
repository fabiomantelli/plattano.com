'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Minus, Plus } from 'lucide-react';

const faqItems = [
  {
    question: 'What is Plattano as a Service?',
    answer:
      'It’s everything your company gets as a service — meaning you’ll have all the necessary Plattano resources as if it were your own, to help you scale your business faster. Having Plattano as a service means being ahead!',
  },
  {
    question: 'Which solutions can I resell as a Plattano partner?',
    answer:
      'Currently we offer Veeam (for Data Protection) and Hot Storage (for cloud-based storage). But you can sell all the value-added services integrated by Plattano.',
  },
];

export default function FaqSection() {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqItems.map((item, index) => {
            const isOpen = openIndexes.includes(index);
            return (
              <div
                key={index}
                className="border rounded-lg transition overflow-hidden border-neutral-300 dark:border-white/20 bg-neutral-50 dark:bg-white/5"
              >
                <button
                  className="w-full flex text-primary items-center justify-between px-6 py-5 text-left font-medium text-base md:text-lg"
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
                        className="px-6 pb-6 text-base text-neutral-800 dark:text-neutral-200"
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
