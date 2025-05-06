'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BarChart3, BadgeDollarSign, X } from 'lucide-react';

export default function VeeamOneGovernanceAndComplianceSection() {
  const [modal, setModal] = useState<string | null>(null);
  const open = (src: string) => setModal(src);
  const close = () => setModal(null);

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl space-y-20 px-6 sm:px-12 lg:px-24">
        {/* title */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-3xl font-extrabold sm:text-4xl"
        >
          <span className="text-primary">GOVERNANCE AND COMPLIANCE</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mb-16 max-w-3xl text-center text-lg text-neutral-700 dark:text-neutral-300"
        >
          Stay open for business! Keep a complete understanding of where your data resides and what
          data is in your environment at all times.
        </motion.p>

        {/* cards */}
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-primary/60 bg-primary p-10 backdrop-blur dark:bg-white/5"
          >
            <div className="mb-6 flex items-center gap-4">
              <BarChart3 className="h-10 w-10 dark:text-primary" />
              <h3 className="text-xl font-bold uppercase dark:text-primary">
                Backup Compliance Reports
              </h3>
            </div>
            <p className="text-neutral-800 dark:text-neutral-300">
              Does the LGPD keep you up at night? Know where your data is at all times. Stay
              compliant by grouping objects by location with Business View and by using reports that
              list data sources grouped by production location alongside the location of their
              copies/replicas.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-2xl border border-primary/60 bg-primary p-10 backdrop-blur dark:bg-white/5"
          >
            <div className="mb-6 flex items-center gap-4">
              <BadgeDollarSign className="h-10 w-10 dark:text-primary" />
              <h3 className="text-xl font-bold uppercase dark:text-primary">Stop Ransomware</h3>
            </div>
            <p className="text-neutral-800 dark:text-neutral-300">
              Veeam helps fight malware with a set of alarms that flag anomalies in your environment
              and through immutability monitoring, providing reporting throughout the entire backup
              life cycle.
            </p>
          </motion.div>
        </div>

        {/* screenshots */}
        <div className="grid gap-8 md:grid-cols-2">
          <Image
            src="/images/products/data-protection/veeam-one/veeam-one-backup-report.webp"
            alt="Backup compliance report"
            width={600}
            height={380}
            loading="lazy"
            className="w-full cursor-pointer rounded-xl shadow-xl"
            onClick={() =>
              open('/images/products/data-protection/veeam-one/veeam-one-backup-report.webp')
            }
          />
          <Image
            src="/images/products/data-protection/veeam-one/veeam-one-ransomware.webp"
            alt="Ransomware alarms dashboard"
            width={600}
            height={380}
            loading="lazy"
            className="w-full cursor-pointer rounded-xl shadow-xl"
            onClick={() =>
              open('/images/products/data-protection/veeam-one/veeam-one-ransomware.webp')
            }
          />
        </div>
      </div>

      {/* modal */}
      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <div className="relative w-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -right-4 -top-4 rounded-full bg-primary p-2 text-black shadow-lg transition hover:scale-105"
              onClick={close}
              aria-label="Close image"
            >
              <X size={24} />
            </button>
            <Image
              src={modal}
              alt="Expanded screenshot"
              width={1200}
              height={800}
              className="h-auto w-full rounded-xl shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      )}
    </section>
  );
}