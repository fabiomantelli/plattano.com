'use client';

import { motion } from 'framer-motion';

const cards = [
  {
    title: 'Your Microsoft 365 Data',
    description: 'Access and control of your resident Microsoft 365 data.',
  },
  {
    title: 'Microsoft 365 Backup',
    description: 'Copy of your data stored in a separate location.',
  },
  {
    title: 'Total Data Retention',
    description:
      'Short- and long-term retention to close policy gaps—with granular and point-in-time recovery options.',
  },
  {
    title: 'Data Risk Levels',
    description:
      'Internal: accidental deletion, malicious insiders, employee revenge, evidence tampering.\nExternal: ransomware, malware, hackers, spyware.',
  },
  {
    title: 'Role as Data Owner',
    description:
      'Meet corporate and industry regulations. Address requirements from internal auditors and compliance officers.',
  },
];

export default function VeeamM365ResponsibilitiesSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          Your Responsibility
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="max-w-2xl mx-auto text-center text-base sm:text-lg text-neutral-700 dark:text-neutral-300"
        >
          In the shared responsibility model for Microsoft 365, here’s what you must handle.
        </motion.p>

        {/* cards grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="
            grid gap-8
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-5
          "
        >
          {cards.map((card) => (
            <div
              key={card.title}
              className="border border-primary rounded-xl p-6 bg-white/50 dark:bg-black/50 flex flex-col"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">
                {card.title}
              </h3>
              <p className="whitespace-pre-wrap text-base leading-relaxed flex-grow">
                {card.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
