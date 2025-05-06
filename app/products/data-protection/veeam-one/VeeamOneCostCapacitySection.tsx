'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BarChart3, BadgeDollarSign, X } from 'lucide-react';

export default function VeeamOneCostCapacitySection() {
  const [modal, setModal] = useState<string | null>(null);
  const open = (src: string) => setModal(src);
  const close = () => setModal(null);

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl space-y-20 px-6 sm:px-12 lg:px-24">
        {/* ---------- title ---------- */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.4 }}
          className="text-center text-3xl font-extrabold sm:text-4xl"
        >
          <span className="text-primary">CAPACITY PLANNING & COST VISIBILITY</span>
        </motion.h2>

        {/* ---------- two cards (2‑col from md) ---------- */}
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
              <h3 className="text-xl font-bold uppercase dark:text-primary">Capacity Planning</h3>
            </div>
            <p className="text-neutral-800 dark:text-neutral-300">
              Predict utilization trends for backup, VMware and Hyper‑V workloads to know exactly
              when compute or storage capacity will be exhausted.
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
              <h3 className="text-xl font-bold uppercase dark:text-primary">
                Chargeback & Billing
              </h3>
            </div>
            <p className="text-neutral-800 dark:text-neutral-300">
              Save time and simplify planning by calculating compute and storage costs per
              department / client — then bill with confidence.
            </p>
          </motion.div>
        </div>

        {/* ---------- screenshots (2‑col from md) ---------- */}
        <div className="grid gap-8 md:grid-cols-2">
          <Image
            src="/images/products/data-protection/veeam-one/veeam-one-capacity-planning.webp"
            alt="Capacity planning report"
            width={600}
            height={380}
            loading="lazy"
            className="w-full cursor-pointer rounded-xl shadow-xl"
            onClick={() =>
              open('/images/products/data-protection/veeam-one/veeam-one-capacity-planning.webp')
            }
          />

          <Image
            src="/images/products/data-protection/veeam-one/veeam-one-chargeback.webp"
            alt="Chargeback dashboard"
            width={600}
            height={380}
            loading="lazy"
            className="w-full cursor-pointer rounded-xl shadow-xl"
            onClick={() =>
              open('/images/products/data-protection/veeam-one/veeam-one-chargeback.webp')
            }
          />
        </div>
      </div>

      {/* ---------- modal ---------- */}
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