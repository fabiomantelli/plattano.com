'use client';

import { motion } from 'framer-motion';

const stats = [
  { title: 'Reduce Risks', percentage: '91%', description: 'Faster MTTR without delayed detections' },
  { title: 'Reduce Costs', percentage: '66%', description: 'Reduction in operational costs' },
  { title: 'Maximize Value', percentage: '50%', description: 'Reduction in data retention costs' },
  { title: 'Increase Efficiency', percentage: '90%', description: 'Improvement in automation' },
];

export default function PlatformValueSection() {
  return (
    <section className="w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-[36px] font-sofia font-bold">
            <span className="text-primary">THE POWER OF ONE</span> PLATFORM
          </h2>
          <p className="text-lg font-medium">
            Consolidate products, maximize value, and improve business continuity. See why 50% of Fortune 10 choose Singularity over other vendors.
          </p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full mt-12">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl p-6 text-center shadow-md transition-all border bg-neutral-100 border-neutral-300 dark:bg-white/10 dark:border-white/20"
            >
              <h3 className="text-2xl font-semibold text-primary mb-2">{stat.title}</h3>
              <div className="text-[36px] font-bold text-primary mb-2">{stat.percentage}</div>
              <p className="text-sm leading-relaxed">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
