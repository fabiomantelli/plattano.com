'use client';

import { Server, ShieldCheck, Cloud, Wrench } from 'lucide-react'; // or other icon sets
import { motion } from 'framer-motion';

export default function BestOfBestSection() {
  return (
    <section className="relative w-full py-20 bg-neutral-100 dark:bg-black text-black dark:text-white">
      <div className="max-w-6xl mx-auto px-6 text-center space-y-10">
        {/* Title */}
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            WE DON’T DO EVERYTHING — WE DO THE <span className="text-primary">BEST OF THE BEST</span>.
          </h2>
          <p className="mt-4 text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-3xl mx-auto">
            At Plattano, we’re not generalists. We focus on solving specific challenges with tailored solutions — carefully selected
            for performance and precision. We only deliver what reflects the uniqueness of every project.
          </p>
        </div>

        {/* Grid of Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {/* Item 1 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-neutral-900 shadow-md border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 space-y-4"
          >
            <h3 className="text-lg font-bold uppercase">Hybrid Multicloud (SDDC)</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Infrastructure solutions for Data Center and hybrid multicloud, both on-premises and in the cloud.
            </p>
            <ul className="space-y-2 text-left text-sm font-medium">
              <li className="flex items-center gap-2">
                <Cloud className="text-primary h-4 w-4" />
                <span>VMware</span>
              </li>
            </ul>
          </motion.div>

          {/* Item 2 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-neutral-900 shadow-md border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 space-y-4"
          >
            <h3 className="text-lg font-bold uppercase">Data Protection</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              Solutions to keep your business available and resilient, locally or in hybrid multicloud.
            </p>
            <ul className="space-y-2 text-left text-sm font-medium">
              <li className="flex items-center gap-2">
                <ShieldCheck className="text-primary h-4 w-4" />
                <span>Veeam</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="text-primary h-4 w-4" />
                <span>ExaGrid</span>
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="text-primary h-4 w-4" />
                <span>Hot Storage</span>
              </li>
            </ul>
          </motion.div>

          {/* Item 3 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
            className="bg-white dark:bg-neutral-900 shadow-md border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 space-y-4"
          >
            <h3 className="text-lg font-bold uppercase">Cybersecurity</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              End-to-end security visibility and advanced protection across the entire company.
            </p>
            <ul className="space-y-2 text-left text-sm font-medium">
              <li className="flex items-center gap-2">
                <Server className="text-primary h-4 w-4" />
                <span>SentinelOne</span>
              </li>
              <li className="flex items-center gap-2">
                <Server className="text-primary h-4 w-4" />
                <span>Rainforest</span>
              </li>
            </ul>
          </motion.div>

          {/* Item 4 */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-neutral-900 shadow-md border border-neutral-200 dark:border-neutral-700 rounded-xl p-6 space-y-4"
          >
            <h3 className="text-lg font-bold uppercase">Services</h3>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">
              License sales and renewals, managed IT services, technical consulting, and support.
            </p>
            <ul className="space-y-2 text-left text-sm font-medium">
              <li className="flex items-center gap-2">
                <Wrench className="text-primary h-4 w-4" />
                <span>Services</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
