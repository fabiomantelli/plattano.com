// app/(veeam)/veeam-backup-and-replication/ui/CorePillarSection.tsx
'use client';

import { motion } from 'framer-motion';
import {
  Cloud,
  Layers,
  AppWindow,
  Server,
  HardDrive,
  Repeat,
  CloudDrizzle,
  ShieldCheck,
} from 'lucide-react';

export default function CorePillarSection() {
  /* ---------- icon helpers ---------- */
  const topIcons = [
    { Icon: Cloud, label: 'Cloud' },
    { Icon: Layers, label: 'SaaS' },
    { Icon: AppWindow, label: 'Apps' },
    { Icon: Server, label: 'Virtual' },
    { Icon: HardDrive, label: 'Physical' },
  ];

  const middleItems = [
    'Data Re‑use',
    'Disaster‑Recovery Orchestration',
    'Monitoring & Analytics',
    'Backup & Recovery',
    'Storage, Analytics & Mgmt APIs',
  ];

  const bottomIcons = [
    { Icon: ShieldCheck, label: 'On‑prem' },
    { Icon: CloudDrizzle, label: 'Public Cloud' },
    { Icon: Repeat, label: 'BaaS & DRaaS' },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 text-black dark:bg-black dark:text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 sm:px-12 lg:grid-cols-2 lg:gap-24 lg:px-24">
        {/* ---------- LEFT COLUMN ---------- */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          /* ✨ centered on ≤md, left on lg */
          className="space-y-8 text-center lg:text-left"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            THE <span className="text-primary">CENTRAL&nbsp;PILLAR</span> OF
            <span className="text-primary"> BACKUP &amp; DATA RECOVERY </span>
            SOLUTIONS
          </h2>

          <p className="mx-auto max-w-lg text-lg md:text-xl">
            Own and control your data. Back up — and recover — anywhere in the hybrid cloud.
          </p>

          <ul className="mx-auto max-w-md space-y-5 text-base sm:text-lg lg:mx-0">
            {[
              'Confidently meet recovery objectives',
              'Lower risk with comprehensive data security',
              'Accelerate your hybrid-cloud journey',
            ].map((t) => (
              <li key={t} className="flex items-start gap-3 justify-center lg:justify-start">
                <span className="mt-1 size-2 rounded-full bg-primary" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ---------- RIGHT COLUMN (unchanged) ---------- */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto w-full max-w-md sm:max-w-lg"
        >
          <div className="space-y-6 rounded-3xl border border-primary/60 bg-white/60 p-6 backdrop-blur
                          shadow-lg dark:bg-white/5">
            {/* top icons */}
            <div className="grid grid-cols-5 gap-4">
              {topIcons.map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center space-y-1">
                  <Icon className="h-6 w-6 text-primary" />
                  <span className="text-[13px] font-medium">{label}</span>
                </div>
              ))}
            </div>

            {/* middle bars */}
            <div className="space-y-3">
              {middleItems.map((txt) => (
                <div
                  key={txt}
                  className="rounded-md bg-primary py-2 px-3 text-center text-sm
                             font-semibold text-white shadow-md"
                >
                  {txt}
                </div>
              ))}
            </div>

            {/* bottom icons */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              {bottomIcons.map(({ Icon, label }) => (
                <div key={label} className="flex flex-col items-center space-y-1">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="text-[13px] font-medium text-center">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
