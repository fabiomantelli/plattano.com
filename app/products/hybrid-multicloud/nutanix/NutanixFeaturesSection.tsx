'use client';

import { motion } from 'framer-motion';
import { MousePointer, Cloud, TrendingUp } from 'lucide-react'; // Correct icons from lucide-react

export default function NutanixFeaturesSection() {
  return (
    <section
      className="relative isolate w-full text-white overflow-hidden
        before:absolute before:inset-0
        before:bg-[url('/images/products/hybrid-multicloud/nutanix/nutanix-bg.webp')] before:bg-center
        before:bg-cover before:bg-fixed before:-z-20
        after:absolute after:inset-0 after:-z-10
        dark:after:bg-black/50 after:bg-primary/85"
    >
      {/* Top border */}
      <div className="h-0.5 w-full bg-primary" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.4 }}
        className="mx-auto max-w-7xl px-8 sm:px-12 lg:px-24 py-24 flex flex-col md:flex-row gap-16 md:items-center"
      >
        {/* Left text */}
        <div className="w-full md:w-1/2 text-[38px] leading-tight font-semibold text-center md:text-left dark:text-white text-neutral-900">
          <span className="dark:text-primary text-white">KEY NUTANIX FEATURES</span>
          <br />
          <span className="dark:text-primary text-white">SIMPLE, EFFICIENT, AND SECURE</span>
        </div>

        {/* Right text */}
        <div className="w-full md:w-1/2 text-[18px] leading-relaxed text-center md:text-left dark:text-neutral-200 text-neutral-800">
          Nutanix provides a comprehensive platform with hybrid cloud infrastructure, unified storage, and full-scale application management. Simplify your cloud journey today.
        </div>
      </motion.div>

      {/* Border */}
      <div className="h-0.5 w-full bg-primary" />

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-8 sm:px-12 lg:px-24 py-12">
        {/* First Feature */}
        <div className="flex flex-col items-center text-center bg-neutral-200 dark:bg-neutral-700 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
          <MousePointer className="w-16 h-16 text-black dark:text-primary mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-primary mb-4">OPERATIONAL SIMPLICITY</h3>
          <p className="text-sm text-neutral-900 dark:text-white">Unified infrastructure management across all clouds, simplifying operations.</p>
        </div>

        {/* Second Feature */}
        <div className="flex flex-col items-center text-center bg-neutral-200 dark:bg-neutral-700 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
          <Cloud className="w-16 h-16 text-black dark:text-primary mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-primary mb-4">APP MOBILITY</h3>
          <p className="text-sm text-neutral-900 dark:text-white">Seamlessly migrate applications between clouds without code changes.</p>
        </div>

        {/* Third Feature */}
        <div className="flex flex-col items-center text-center bg-neutral-200 bg-white dark:bg-neutral-700 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
          <TrendingUp className="w-16 h-16 text-black dark:text-primary mb-4" />
          <h3 className="text-lg font-semibold text-neutral-900 dark:text-primary mb-4">ECONOMIC EFFICIENCY</h3>
          <p className="text-sm text-neutral-900 dark:text-white">Manage infrastructure costs while optimizing for high performance.</p>
        </div>
      </div>
    </section>
  );
}