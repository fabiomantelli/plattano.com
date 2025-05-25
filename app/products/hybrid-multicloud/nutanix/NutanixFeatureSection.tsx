'use client';

import { motion } from 'framer-motion';
import { FaCloud, FaServer, FaCog, FaSmile } from 'react-icons/fa'; // Use react-icons for the icons

const features = [
  {
    icon: FaCloud,
    title: 'FREEDOM OF CHOICE',
    description:
      'We give you the freedom to choose your clouds, your applications, and your technology.',
  },
  {
    icon: FaServer,
    title: 'UNIFIED PLATFORM',
    description:
      'Manage datacenters, clouds, and edge as a single entity on one platform.',
  },
  {
    icon: FaCog,
    title: 'SIMPLICITY POWER',
    description:
      'Leverage the power of simplicity without re-architecting, reconfiguring, or being dependent on vendors.',
  },
  {
    icon: FaSmile,
    title: 'CUSTOMER SATISFACTION',
    description:
      'Global support with an average proven Net Promoter Score (NPS) of 90+ over the past 8 years.',
  },
];

export default function NutanixFeatureSection() {
  return (
    <section className="w-full py-24 bg-black/9 text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[36px] md:text-[40px] font-extrabold text-center mb-16"
        >
          <span className="text-primary">WHY</span> NUTANIX?
        </motion.h2>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className="p-6 rounded-2xl shadow-md border bg-white/80 dark:bg-white/5 border-neutral-200 dark:border-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-8 h-8 text-primary" />
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
              </div>
              <p className="text-[15px] font-ubuntu leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}