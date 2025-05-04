'use client';

import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'AOS Storage',
    items: [
      'Consistently high performance',
      'Unfailing resilience',
      'Unmatched flexibility',
    ],
  },
  {
    title: 'Flexible, Open Compute',
    items: [
      'Choice of hypervisor',
      'Powerful built‑in virtualization',
      'Cloud‑native Kubernetes',
    ],
  },
  {
    title: 'Automated, Secure Networking',
    items: [
      'Microsegmentation',
      'Virtual networking',
      'Centralized network management',
    ],
  },
  {
    title: 'Nutanix Cloud Manager',
    items: [
      'A unified solution that delivers intelligent operations, self‑service & orchestration, compliance and security visibility, and cloud cost control.',
    ],
  },
];

export default function NutanixCloudFeaturesSection() {
  return (
    <section className="w-full py-24 text-neutral-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center space-y-16">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          <span className="text-primary">NUTANIX</span> CLOUD PLATFORM FEATURES
        </motion.h2>

        {/* Description */}
        <p className="text-lg md:text-xl font-medium">
          Nutanix Cloud Platform delivers high performance, security, and scalability to power all workloads in any cloud environment.
        </p>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {features.map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
              viewport={{ once: true }}
              className="flex flex-col items-start bg-primary dark:bg-neutral-800 text-neutral-900 dark:text-white p-6 rounded-xl shadow-md hover:scale-105 transition-all"
            >
              <h3 className="text-lg font-semibold mb-4 flex items-start gap-2">
                {feature.title}
              </h3>
              <ul className="space-y-2 text-left">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm leading-snug">
                    <Check size={14} className="text-black dark:text-primary mt-1 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
