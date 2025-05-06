'use client';

import { motion } from 'framer-motion';
import {
  Bot,
  FileCheck2,
  ServerCog,
  BarChartBig,
} from 'lucide-react';

const insights = [
  {
    icon: Bot,
    heading: 'BUILT‑IN INTELLIGENCE',
    body:
      'Identify and resolve common infrastructure and software misconfigurations before they impact operations.',
  },
  {
    icon: FileCheck2,
    heading: 'GOVERNANCE & COMPLIANCE',
    body:
      'Instant insight into data‑protection status with live monitoring and consistent SLA‑driven reporting.',
  },
  {
    icon: ServerCog,
    heading: 'INTELLIGENT AUTOMATION',
    body:
      'Machine‑learning diagnostics plus corrective actions to fix issues faster.',
  },
  {
    icon: BarChartBig,
    heading: 'FORECASTING & PLANNING',
    body:
      'Visibility into compute, storage and backup‑repository costs to predict utilization and resource demands.',
  },
];

export default function VeeamOneInsightsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-6xl px-6">
        {/* ---------- title ---------- */}
        <motion.h2
          className="mx-auto mb-20 max-w-4xl text-center text-3xl font-extrabold sm:text-4xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          Veeam ONE™ delivers feature‑rich monitoring and analytics <br />
          to give you the&nbsp;
          <span className="text-primary">clear visibility</span> you need
        </motion.h2>

        {/* ---------- grid ---------- */}
        <div className="grid gap-12 md:grid-cols-2">
          {insights.map(({ icon: Icon, heading, body }, idx) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex items-start rounded-2xl bg-primary p-8 backdrop-blur md:gap-6
                         dark:bg-white/5"
            >
              {/* icon */}
              <Icon className="h-10 w-10 flex-none dark:text-primary text-black" />

              {/* text */}
              <div className="ml-6 space-y-3">
                <h3 className="text-xl font-bold uppercase">{heading}</h3>
                <p className="text-base text-neutral-800 dark:text-neutral-300">{body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
