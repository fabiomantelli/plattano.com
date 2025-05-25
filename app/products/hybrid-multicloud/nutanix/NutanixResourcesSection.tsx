'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  'Task Automation',
  'Multi-cloud Management',
  'Self-Service IT',
  'CI/CD and DevOps',
  'Cost Governance',
  'Database as a Service',
];

export default function NutanixResourcesSection() {
  return (
    <section className="w-full py-24 bg-black/9 dark:bg-neutral-900 text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center space-y-16">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          <span className='text-primary'>NUTANIX</span> FEATURES
        </motion.h2>

        {/* Features */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="w-full bg-primary dark:bg-white text-black px-6 py-4 rounded-md flex items-center gap-3 shadow-md font-semibold text-sm md:text-base dark:text-black"
            >
              <Check size={18} className="text-dark dark:text-primary shrink-0" />
              <span className="text-left">{item}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}