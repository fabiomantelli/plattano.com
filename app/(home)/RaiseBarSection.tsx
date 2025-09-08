'use client';

import { motion } from 'framer-motion';

export default function RaiseBarSection() {
  return (
    <section className="w-full bg-primary">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.6 }}
        className="mx-auto max-w-7xl px-4 py-24 text-center text-black font-semibold text-[32px]"
      >
        WE RAISE THE BAR ON IT SERVICE DELIVERY.
      </motion.h2>
    </section>
  );
}
