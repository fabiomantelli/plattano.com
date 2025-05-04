'use client';

import { motion } from 'framer-motion';
import { Cloud, Box, Lock } from 'lucide-react'; // Using icons from lucide-react

export default function NutanixHybridCloudFeaturesSection() {
  return (
    <section className="w-full py-24 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center space-y-16">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-extrabold"
        >
          THE HYBRID MULTICLOUD SOLUTION THAT WORKS
        </motion.h2>

        {/* First Set of Features */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20">
          <div className="flex flex-col items-center text-center md:w-1/3 px-4">
            <Cloud className="w-16 h-16 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">CLOUD CHOICE</h3>
            <p className="text-sm text-neutral-900 dark:text-white">
              Forget the dependency on a vendor and adopt a cloud operational model that provides consistency for any workload hosted on-premises, at the edge, and across multiple public clouds.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:w-1/3 px-4">
            <Box className="w-16 h-16 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">SIMPLICITY</h3>
            <p className="text-sm text-neutral-900 dark:text-white">
              A cloud control plan that unifies management across all sites while enabling continuous mobility of applications, workloads, and data.
            </p>
          </div>

          <div className="flex flex-col items-center text-center md:w-1/3 px-4">
            <Lock className="w-16 h-16 text-primary mb-4" />
            <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">SECURITY & RESILIENCE</h3>
            <p className="text-sm text-neutral-900 dark:text-white">
              Integrated zero-trust security that not only prevents and detects security threats but also helps prevent data loss and ensures continuous business operations.
            </p>
          </div>
        </div>

        {/* Second Set of Features (in white boxes) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {/* First Box */}
          <div className="flex flex-col items-start bg-white text-neutral-900 dark:text-black p-8 rounded-xl shadow-lg hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-left">Business Continuity & Disaster Recovery</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Freedom of choice</li>
              <li>Build resilience</li>
              <li>Elasticity and flexibility</li>
            </ul>
          </div>

          {/* Second Box */}
          <div className="flex flex-col items-start bg-white text-neutral-900 dark:text-black p-8 rounded-xl shadow-lg hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-left">Intelligent Apps & Workloads in the Cloud</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>ROBO & edge computing</li>
              <li>Remote work & productivity</li>
              <li>Data centralization</li>
            </ul>
          </div>
          
          {/* Third Box */}
          <div className="flex flex-col items-start bg-white text-neutral-900 dark:text-black p-8 rounded-xl shadow-lg hover:scale-105 transition-all">
            <h3 className="text-xl font-semibold mb-4 text-left">App Modernization & Innovation</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Modernize Apps risk-free</li>
              <li>Accelerate App development</li>
              <li>Unified management plan</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}