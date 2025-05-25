'use client';

import { motion } from 'framer-motion';
import { Cloud, Database, Cpu, Wifi, FileText, Settings } from 'lucide-react'; // Icons from lucide-react

export default function NutanixMultiCloudArchitectureSection() {
  return (
    <section className="w-full py-24 text-white bg-black/9 dark:bg-neutral-900">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Title and Description */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-black dark:text-white">
            <span className="text-primary">WE OPERATE MULTI-CLOUD</span> ARCHITECTURE
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-black dark:text-white">
            We help you simplify the complexity of the cloud with an open, software-defined hybrid multi-cloud platform, so you can focus on business results and innovation.
          </p>
        </div>

        {/* Arrows between items */}
        <div className="flex justify-center items-center gap-12 mt-6">
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold text-primary">One Platform</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold text-primary">Any App</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold text-primary">Any Cloud</p>
          </div>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 mt-12">
          {/* First Icon */}
          <div className="flex flex-col items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
            <Cloud className="w-12 h-12 text-black dark:text-primary mb-2" />
            <p className="text-sm mb-4 text-black dark:text-white">Enterprise App</p>
          </div>

          {/* Second Icon */}
          <div className="flex flex-col items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
            <Database className="w-12 h-12 text-black dark:text-primary mb-2" />
            <p className="text-sm mb-4 text-black dark:text-white">Cloud Native Apps</p>
          </div>

          {/* Third Icon */}
          <div className="flex flex-col items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
            <Cpu className="w-12 h-12 text-black dark:text-primary mb-2" />
            <p className="text-sm mb-4 text-black dark:text-white">Analytics/ML</p>
          </div>

          {/* Fourth Icon */}
          <div className="flex flex-col items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
            <Wifi className="w-12 h-12 text-black dark:text-primary mb-2" />
            <p className="text-sm mb-4 text-black dark:text-white">Database</p>
          </div>

          {/* Fifth Icon */}
          <div className="flex flex-col items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
            <FileText className="w-12 h-12 text-black dark:text-primary mb-2" />
            <p className="text-sm mb-4 text-black dark:text-white">Edge</p>
          </div>

          {/* Sixth Icon */}
          <div className="flex flex-col items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
            <Settings className="w-12 h-12 text-black dark:text-primary mb-2" />
            <p className="text-sm mb-4 text-black dark:text-white">EUC</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}