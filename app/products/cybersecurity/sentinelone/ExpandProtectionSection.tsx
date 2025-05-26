'use client';

import { motion } from 'framer-motion';

export default function ExpandProtectionSection() {
  return (
    <section className="w-full py-24 text-neutral-900 dark:bg-black bg-white dark:bg-black dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-[36px] font-sofia font-bold">
            <span className="text-primary">EXPAND</span> YOUR PROTECTION EVEN FURTHER WITH XDR
          </h2>
          <p className="text-2xl font-medium">
            <span className="text-primary">EMPOWER.</span> <span className="text-primary">STRENGTHEN.</span> <span className="text-primary">AUTOMATE.</span>
          </p>
        </div>

        {/* Description */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <p>
            Extend endpoint protection even further with unmatched visibility, proven protection, and response.
            Discover the power of autonomy with Singularity XDR.
          </p>
          <p className="text-lg font-medium text-primary">
            THE PLATFORM MAKES PRECISE DECISIONS CONTEXTUALIZED AUTONOMOUSLY, AT MACHINE SPEED, WITHOUT HUMAN INTERVENTION.
          </p>
        </div>
      </motion.div>
    </section>
  );
}