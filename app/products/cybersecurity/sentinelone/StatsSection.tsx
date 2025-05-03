'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';

const stats = [
  {
    value: 96,
    unit: '%',
    description: 'Recommend for EDR and EPP',
    additionalText: 'Leader in Endpoint Protection. Again.',
  },
  {
    value: 4.8,
    unit: '/5',
    description: 'Rating for EDR and EPP',
    additionalText: 'Leader in Gartner 2022 for Endpoint Protection Platform',
  },
  {
    value: 1000,
    unit: '+',
    description: '5-star ratings for critical resources usage.',
    additionalText: 'Best rating in all use cases for critical resources reporting',
  },
];

export default function StatsSection() {
  return (
    <section className="w-full py-24 text-neutral-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold leading-tight text-primary">
            NUMBERS THAT MATTER
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            See the impact and success of the SentinelOne solution with our customers.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="rounded-xl p-8 text-center shadow-lg transition-all border bg-neutral-100 border-neutral-300 dark:bg-white/10 dark:border-white/20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
            >
              <motion.div
                className="text-4xl font-bold text-primary mb-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
              >
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.4}
                  decimals={stat.value % 1 !== 0 ? 1 : 0}
                  suffix={stat.unit}
                />
              </motion.div>
              <p className="text-lg font-medium leading-relaxed">{stat.description}</p>
              {/* Additional Text */}
              <p className="text-md mt-4 text-neutral-600 dark:text-neutral-300">
                {stat.additionalText}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}