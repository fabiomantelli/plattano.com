'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Global Microsoft 365 Infrastructure',
    description: 'Availability of Microsoft 365 cloud services.'
  },
  {
    title: 'Microsoft 365 Data Replication',
    description: 'Geographic redundancy between data centers.'
  },
  {
    title: 'Recycle Bin',
    description: 'Short-term recovery for accidental deletions.'
  },
  {
    title: 'Infrastructure Security',
    description: 'Physical, logical & application-level controls.'
  },
  {
    title: 'Data Processor Role',
    description: 'Data-privacy controls & certifications (HIPAA, SOX).'
  }
];

export default function VeeamM365ResponsibilityCardsSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* header */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-3xl sm:text-4xl font-extrabold"
        >
          Microsoft 365 Shared Responsibility
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-base sm:text-lg text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto"
        >
          Learn more on the Microsoft 365 Trust Center
        </motion.p>

        {/* cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="border border-primary rounded-xl p-6 bg-white/50 dark:bg-black/50"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                {card.title}
              </h3>
              <p className="text-sm">{card.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
