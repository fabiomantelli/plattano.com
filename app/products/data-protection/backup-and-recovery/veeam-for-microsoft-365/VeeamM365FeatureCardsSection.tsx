'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Protect Your Critical Data',
    description:
      'Protect your Office 365 data from accidental deletion and security threats.',
  },
  {
    title: 'Recover When You Need It',
    description:
      'Restore quickly with industry-leading recovery flexibility.',
  },
  {
    title: 'Maintain Compliance',
    description:
      'Meet compliance requirements with fast search capabilities.',
  },
];

export default function VeeamM365FeatureCardsSection() {
  return (
    <section className="w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center border border-primary rounded-xl p-6 text-center"
            >
              <h3 className="text-xl sm:text-1xl font-semibold uppercase text-neutral-900 dark:text-primary">
                {card.title}
              </h3>
              <p className="mt-4 text-base sm:text-lg">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
