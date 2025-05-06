// app/(veeam)/veeam-one/ui/VisibilityGridSection.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  ServerCog,
  ShieldCheck,
  BarChart2, 
  Layers,
  TrendingUp,
  CreditCard,
  ActivitySquare,
  AlertTriangle,
} from 'lucide-react';

const cards = [
  { icon: ServerCog, text: 'Veeam Backup & Replication' },
  { icon: ShieldCheck, text: 'VMware vSphere' },
  { icon: Layers, text: 'Microsoft Hyper-V' },
  { icon: TrendingUp, text: 'Nutanix AHV' },
  { icon: ActivitySquare, text: 'Real‑time monitoring & alerts' },
  { icon: BarChart2, text: 'Resource optimization & config tracking' },
  { icon: TrendingUp, text: 'Capacity forecasting & planning' },
  { icon: CreditCard, text: 'Chargeback & billing' },
  { icon: AlertTriangle, text: 'Intelligent diagnostics & automation' },
];

export default function VeeamOneVisibilitySection() {
  return (
    <section className="w-full bg-gray-50 py-24 text-neutral-900 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        {/* headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 text-center text-4xl font-semibold md:text-5xl"
        >
          CLEAR, UNIFIED <span className="text-primary">VISIBILITY & CONTROL</span>
        </motion.h2>

        {/* image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="mb-16 flex justify-center"
        >
          <Image
            src="/images/products/data-protection/veeam-one/veeam-one-visibility.png"
            alt="Unified monitoring and analytics"
            width={600}
            height={450}
            priority
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl"
          />
        </motion.div>

        {/* cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, text }, idx) => (
            <motion.div
              key={text}
              initial={{ opacity: 0, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className="flex flex-col items-center rounded-2xl border border-neutral-200 bg-white/80 p-8
                         text-center shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl
                         dark:border-white/10 dark:bg-white/5"
            >
              <Icon className="mb-4 h-10 w-10 text-primary" />
              <p className="text-base font-medium">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
