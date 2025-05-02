'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function VeeamFeatureBlocksSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';

  const sectionBg = isDark ? 'bg-neutral-900 text-white' : 'bg-white text-neutral-900';
  const cardBg = isDark ? 'bg-neutral-800 border-neutral-700' : 'bg-gray-100 border-neutral-300';

  return (
    <section className={`w-full ${sectionBg} py-20`}>
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Block 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className={`flex-1 p-8 rounded-2xl shadow-lg border ${cardBg} flex flex-col items-center text-center`}
          >
            <h3 className="text-[24px] font-bold font-sofia mb-4">
              <span className="text-primary">Broad-Spectrum Protection</span>
            </h3>
            <p className="text-[16px] font-ubuntu leading-relaxed">
              The Veeam Availability Suite™ combines the monitoring capabilities of Veeam ONE with the advanced data protection features of Veeam Backup & Replication in one enterprise package—meeting both protection and analytics needs.
            </p>
          </motion.div>

          {/* Block 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, amount: 0.6 }}
            className={`flex-1 p-8 rounded-2xl shadow-lg border ${cardBg} flex flex-col items-center text-center`}
          >
            <h3 className="text-[24px] font-bold font-sofia mb-4">
              <span className="text-primary">Backup & Replication</span>
            </h3>
            <p className="text-[16px] font-ubuntu leading-relaxed">
              Veeam Backup & Replication provides centralized data protection and management for physical, virtual, and cloud workloads. Core Veeam features—backup and recovery, along with replication and failover—form the foundation of Veeam’s flagship products.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
