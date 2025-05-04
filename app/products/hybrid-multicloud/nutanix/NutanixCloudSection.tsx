'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const firstSet = [
  'Reduce costs',
  'Follow the pace of business changes',
  'Improve availability',
];

export default function NutanixCloudSection() {
  return (
    <section className="w-full py-24 bg-white dark:bg-neutral-900 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center space-y-16">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          THE FOUNDATION FOR YOUR <span className="text-primary">HYBRID CLOUD</span>
        </motion.h2>

        {/* Description */}
        <p className="text-lg md:text-xl font-medium">
          Standardize a powerful and secure hyperconverged infrastructure to deliver all applications and data at any scale and in any cloud.
        </p>

        {/* Subtitle */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-2xl font-extrabold mt-8"
        >
          MODERNIZE <span className="text-primary">YOUR BUSINESS</span> WITH THE LEADING HCI PLATFORM.
        </motion.h2>

        {/* First Set of Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {firstSet.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-start bg-neutral-800 dark:bg-white text-white dark:text-black p-6 rounded-xl shadow-md gap-4 hover:scale-105 transition-all"
            >
              <Check size={18} className="text-primary" />
              <span className="text-left">{item}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}