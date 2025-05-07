'use client';

import { motion } from 'framer-motion';

export default function VeeamM365SharedResponsabilitySection() {
  return (
    <section className="w-full text-black bg-primary dark:text-black py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-4xl space-y-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-3xl sm:text-4xl md:text-4xl font-extrabold leading-tight"
        >
          MICROSOFT 365 SHARED RESPONSIBILITY MODEL
        </motion.h2>
      </div>
    </section>
  );
}
