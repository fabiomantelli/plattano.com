'use client';

import { motion } from 'framer-motion';
import { BrainCircuit, Database, Globe, Cpu } from 'lucide-react';

const items = [
  {
    icon: BrainCircuit,
    title: 'Artificial Intelligence & Machine Learning',
    description:
      'Gain the enterprise-grade data center, cloud, and edge infrastructure needed for advanced AI/ML workloads and services.',
  },
  {
    icon: Database,
    title: 'Big Data & Modern Data Apps',
    description:
      'Simplify Big Data infrastructure management and minimize downtime with efficient failover protection. Prioritize and share data center resources for smart decision-making.',
  },
  {
    icon: Globe,
    title: 'Remote & Branch Offices (ROBO)',
    description:
      'Manage branch locations with minimal or no on-site IT staff. Enable rapid server provisioning, reduce host config drift, and gain compliance visibility across sites.',
  },
  {
    icon: Cpu,
    title: 'High-Performance Computing (HPC)',
    description:
      'Accelerate insights with on-demand infrastructure, centralized management, and governance over sensitive data—purpose-built for HPC scalability.',
  },
];

export default function UseCasesGridSection() {
  return (
    <section className="w-full py-24 bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className="flex flex-col items-center text-center p-8 rounded-2xl shadow-xl bg-primary text-white"
            >
              <item.icon className="w-10 h-10 mb-4 text-white" />
              <h3 className="text-lg font-bold mb-3">{item.title}</h3>
              <p className="text-[15px] font-ubuntu leading-relaxed text-white/90">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}