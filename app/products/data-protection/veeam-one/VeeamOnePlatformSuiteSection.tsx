'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const items = [
  {
    img: '/images/products/data-protection/veeam-one/veeam-one-suite-protection-icon.png', // replace with real asset
    heading: 'ENTERPRISE‑WIDE PROTECTION',
    body:
      'Veeam Availability Suite™ bundles Veeam ONE monitoring with the advanced data‑protection power of Veeam Backup & Replication in a single enterprise package—covering both protection and analytics needs.',
  },
  {
    img: '/images/products/data-protection/veeam-one/veeam-one-suite-backup-icon.png', // replace with real asset
    heading: 'BACKUP & REPLICATION',
    body:
      'Veeam Backup & Replication delivers centralized data protection and management for physical, virtual and cloud workloads. Its core features—backup, recovery, replication and failover—form the foundation of Veeam’s platform.',
  },
];

export default function VeeamOnePlatformSuiteSection() {
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-6xl px-6 text-center">
        {/* ---------- title ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mb-6 text-3xl font-extrabold leading-tight sm:text-4xl"
        >
          PART OF THE <span className="text-primary">VEEAM AVAILABILITY SUITE</span> AND{' '}
          <span className="text-primary">VEEAM DATA PLATFORM</span>
        </motion.h2>

        {/* optional subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mb-16 max-w-3xl text-lg text-neutral-700 dark:text-neutral-300"
        >
          Veeam ONE helps you run comprehensive monitoring and analytics across your physical,
          virtual and backup environments.
        </motion.p>

        {/* ---------- card grid ---------- */}
        <div className="grid gap-10 sm:grid-cols-2">
          {items.map(({ img, heading, body }, idx) => (
            <motion.div
              key={heading}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl border border-primary/60 bg-white p-10 text-center
                         backdrop-blur dark:bg-white/5"
            >
              {/* icon/image */}
              <div className="mb-6 flex justify-center">
                <Image
                  src={img}
                  alt={heading}
                  width={140}
                  height={120}
                  className="h-24 w-auto"
                  priority
                />
              </div>

              {/* text */}
              <h3 className="mb-4 text-xl font-bold uppercase text-primary">{heading}</h3>
              <p className="mx-auto max-w-md text-base text-neutral-900 dark:text-neutral-300">
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
