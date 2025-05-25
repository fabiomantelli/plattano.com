'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Undo2,
  Move,
  Infinity,
  Clock,
  Cloud,
} from 'lucide-react';

export default function VeeamHotStorageSection() {
  return (
    <section className="relative w-full bg-white dark:bg-black text-black dark:text-white py-20 px-6 sm:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-5xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">VEEAM + HOT STORAGE</h2>

        <p className="text-xl font-semibold uppercase">UNSTOPPABLE. UNBREAKABLE.</p>
        <p className="text-base font-medium text-primary">Unbeatable and Unbreakable.</p>

        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-200 max-w-3xl mx-auto">
          Use all available strength—go all in. Get the best of both worlds, powered by Plattano.
        </p>

        <div className="bg-primary text-neutral-100 dark:bg-neutral-100 dark:text-black rounded-md px-6 py-6 shadow-md max-w-3xl mx-auto text-sm sm:text-base">
          Because data protection is a means to an end, aim for intelligent data management. Activate Veeam + Hot Storage and unlock maximum value for your clients. Put your company ahead of competitors—this is what we do, and we do it masterfully!
        </div>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* VEEAM */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="border border-primary rounded-lg p-6 space-y-4 bg-white dark:bg-black/50 text-black dark:text-white"
        >
          <h3 className="text-xl font-bold uppercase text-primary">VEEAM</h3>
          <ul className="text-sm md:text-base space-y-3">
            <li className="flex items-center gap-2">
              <ShieldCheck className="h-5 w-5 text-primary" />
              <span>Data Security</span>
            </li>
            <li className="flex items-center gap-2">
              <Undo2 className="h-5 w-5 text-primary" />
              <span>Backup & Data Recovery</span>
            </li>
            <li className="flex items-center gap-2">
              <Move className="h-5 w-5 text-primary" />
              <span>Freedom & Mobility</span>
            </li>
          </ul>
        </motion.div>

        {/* PLATTANO HOT STORAGE */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="border border-primary rounded-lg p-6 space-y-4 bg-white dark:bg-black/50 text-black dark:text-white"
        >
          <h3 className="text-xl font-bold uppercase text-primary">PLATTANO HOT STORAGE</h3>
          <ul className="text-sm md:text-base space-y-3">
            <li className="flex items-center gap-2">
              <Infinity className="h-5 w-5 text-primary" />
              <span>Unlimited Data</span>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span>Always-On Availability</span>
            </li>
            <li className="flex items-center gap-2">
              <Cloud className="h-5 w-5 text-primary" />
              <span>Infinitely Accessible</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
