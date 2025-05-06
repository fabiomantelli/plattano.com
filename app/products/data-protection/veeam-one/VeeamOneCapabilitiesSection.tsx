'use client';

import { motion } from 'framer-motion';
import {
  ShieldAlert,
  LifeBuoy,
  Gauge,
  BellRing,
  AlarmClock,
  BrainCircuit,
  FileBarChart,
  FileCheck2,
  CreditCard,
  ClipboardEdit,
} from 'lucide-react';

const cards = [
  {
    icon: ShieldAlert,
    title: 'FOCUS ON MALWARE',
    body:
      'Highlight threats, score risk, and inspect the Veeam Threat Center to pinpoint malware activity.',
  },
  {
    icon: LifeBuoy,
    title: 'INCIDENT RESPONSE',
    body:
      'Shrink response time with bidirectional ServiceNow integration and 300+ exclusive alarms.',
  },
  {
    icon: Gauge,
    title: 'CAPACITY PLANNING',
    body:
      'Forecast resource usage for backup, VMware and Hyper‑V so you know when compute or storage will run out.',
  },
  {
    icon: BellRing,
    title: 'PROACTIVE ALERTS',
    body:
      'Stay ahead of issues with 340+ predefined alarms that stop problems before they start.',
  },
  {
    icon: AlarmClock,
    title: 'POTENTIAL RANSOMWARE ALARMS',
    body:
      'Fight ransomware with alarms that detect anomalies and signs of malicious activity.',
  },
  {
    icon: BrainCircuit,
    title: 'INTELLIGENT DIAGNOSTICS',
    body:
      'Cut downtime with ML‑powered diagnostics and proactive fixes for common backup issues.',
  },
  {
    icon: FileBarChart,
    title: 'REPORTING & ANALYTICS',
    body:
      'Leverage 150+ out‑of‑the‑box reports for decision‑making on performance, configuration and more.',
  },
  {
    icon: FileCheck2,
    title: 'BACKUP COMPLIANCE REPORTS',
    body:
      'Track data‑protection status by site, location and RPO to prove compliance anytime.',
  },
  {
    icon: CreditCard,
    title: 'CHARGEBACK & BILLING',
    body:
      'Calculate resource consumption per client and bill accordingly—no spreadsheets required.',
  },
  {
    icon: ClipboardEdit,
    title: 'BACKUP OBJECT CHANGE CONTROL',
    body:
      'Audit detailed changes to backup configurations, including when and who made them.',
  },
];

export default function VeeamOneCapabilitiesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-12 text-3xl font-extrabold sm:text-4xl"
        >
          <span className="text-primary">CAPABILITIES</span>
        </motion.h2>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map(({ icon: Icon, title, body }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center rounded-2xl border border-primary/60 bg-primary p-8
                         text-center backdrop-blur transition-all duration-300
                         hover:scale-[1.02] hover:shadow-xl dark:bg-white/5"
            >
              <Icon className="mb-4 h-10 w-10 text-black dark:text-primary" />
              <h3 className="mb-3 text-lg font-bold uppercase">{title}</h3>
              <p className="text-[15px] leading-relaxed text-neutral-800 dark:text-neutral-300">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
