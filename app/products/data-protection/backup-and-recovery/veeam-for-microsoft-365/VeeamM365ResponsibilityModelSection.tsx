'use client';

import { motion } from 'framer-motion';
import { Cloud, Folder } from 'lucide-react';

export default function VeeamM365ResponsibilityModelSection() {
  return (
    <section className="w-full dark:bg-neutral-900 dark:text-white bg-black/9 text-black py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          Microsoft handles the <span className="text-primary">infrastructure</span>, 
          but the <span className="text-primary">data</span> remains your responsibility
        </motion.h2>

        {/* perceptions */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center md:text-left"
          >
            <h3 className="text-lg font-semibold text-primary">Customer Perception</h3>
            <p className="mt-2 text-sm">
              “Microsoft takes care of everything.”
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 text-center md:text-right"
          >
            <h3 className="text-lg font-semibold text-primary">Customer Reality</h3>
            <p className="mt-2 text-sm">
              “Microsoft secures the infrastructure, but data protection is our job.”
            </p>
          </motion.div>
        </div>

        {/* model cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col lg:flex-row items-stretch gap-8"
        >
          {/* Infrastructure box */}
          <div className="flex-1 border border-primary rounded-xl p-8 flex flex-col items-center text-center">
            <Cloud size={48} className="text-primary mb-4" />
            <h4 className="text-xl font-bold">Infrastructure</h4>
            <p className="mt-2 text-sm">Microsoft 365 uptime & maintenance</p>
            <p className="mt-auto pt-6 text-xs text-neutral-400">
              Microsoft 365 uptime SLA
            </p>
          </div>

          {/* Data box */}
          <div className="flex-1 border border-primary rounded-xl p-8 flex flex-col items-center text-center">
            <Folder size={48} className="text-primary mb-4" />
            <h4 className="text-xl font-bold">Data</h4>
            <p className="mt-2 text-sm">Protection & long-term retention</p>
            <p className="mt-auto pt-6 text-xs text-neutral-400">
              Your Microsoft 365 data retention
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
