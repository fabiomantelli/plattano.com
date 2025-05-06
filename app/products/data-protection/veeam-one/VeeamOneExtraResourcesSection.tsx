'use client';

import { motion } from 'framer-motion';
import {
  ShieldOff,
  ClipboardList,
  FolderTree,
  FileBarChart2,
} from 'lucide-react';

const cards = [
  {
    icon: ShieldOff,
    heading: 'FIND EVERY UNPROTECTED VM & AGENT',
    body:
      'Are you fully covered? Cut downtime and data loss by instantly seeing which VMs, workstations and physical servers are unprotected—complete with backup status, alerts, failures and root‑cause details.',
  },
  {
    icon: ClipboardList,
    heading: 'AUDIT & CHANGE CONTROL',
    body:
      'One bad change can undo months of work. Always know who on the team is altering configurations or adding new objects with automated backup of settings and VMware change tracking.',
  },
  {
    icon: FolderTree,
    heading: 'BUSINESS VIEW',
    body:
      'Easily organize, assign and manage diverse workloads. Group objects by business unit, geo‑location, department and more—plus leverage VMware tags for CPU, memory and location.',
  },
  {
    icon: FileBarChart2,
    heading: 'RAW DATA & CUSTOM REPORTING',
    body:
      'Need the numbers? Pull detailed performance metrics and infrastructure reports across vSphere, Hyper‑V and backup environments—then merge them into a single document with the Report Builder.',
  },
];

export default function VeeamOneExtraResourcesSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl space-y-16 px-6 sm:px-12 lg:px-24">
        {/* -------- headline -------- */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-3xl font-extrabold sm:text-4xl"
        >
          <span className="text-primary">ADDITIONAL&nbsp;RESOURCES</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto max-w-3xl text-center text-lg text-neutral-700 dark:text-neutral-300"
        >
          Need even more power? Veeam ONE has it. Explore these extra capabilities that help you
          maintain absolute visibility across your entire environment.
        </motion.p>

        {/* -------- cards grid -------- */}
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          {cards.map(({ icon: Icon, heading, body }, i) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center rounded-2xl border border-primary/60 bg-white p-8
                         text-center backdrop-blur dark:bg-white/5"
            >
              <Icon className="mb-6 h-12 w-12 text-primary" />
              <h3 className="mb-4 text-lg font-bold uppercase text-primary">{heading}</h3>
              <p className="text-[15px] leading-relaxed text-neutral-200 text-neutral-900 dark:text-neutral-300">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}