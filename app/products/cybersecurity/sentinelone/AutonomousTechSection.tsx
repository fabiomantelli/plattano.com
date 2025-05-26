'use client';

import { motion } from 'framer-motion';
import { FaBrain, FaClock, FaShieldAlt } from 'react-icons/fa'; // Importing icons from react-icons

export default function AutonomousTechSection() {
  return (
    <section className="w-full py-24 text-neutral-900 dark:text-white dark:bg-black bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-16"
      >
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl font-bold leading-tight text-primary">
            WE&apos;RE PUSHING THE BOUNDARIES OF AUTONOMOUS TECHNOLOGY
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            The future of cybersecurity is autonomous. This is how we do it.
          </p>
        </div>

        {/* Rectangles Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 text-center rounded-xl shadow-lg border bg-neutral-100 border-neutral-300 dark:bg-white/10 dark:border-white/20"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FaBrain className="text-4xl text-primary" />
              <h3 className="text-xl font-semibold text-primary">NATIVE AND OPEN XDR</h3>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              Centralize endpoint, cloud, and identity telemetry with SentinelOne and any third-party data in a
              powerful security ecosystem.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 text-center rounded-xl shadow-lg border bg-neutral-100 border-neutral-300 dark:bg-white/10 dark:border-white/20"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FaClock className="text-4xl text-primary" />
              <h3 className="text-xl font-semibold text-primary">REAL-TIME RESOLUTION</h3>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              Don&apos;t just identify malicious behavior. Block and remediate advanced threats at machine speed with
              multi-platform analysis.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-8 text-center rounded-xl shadow-lg border bg-neutral-100 border-neutral-300 dark:bg-white/10 dark:border-white/20"
          >
            <div className="flex items-center justify-center space-x-4 mb-4">
              <FaShieldAlt className="text-4xl text-primary" />
              <h3 className="text-xl font-semibold text-primary">PATENTED TIMELINE</h3>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-neutral-700 dark:text-neutral-300">
              Empower analysts with faster, smarter context by connecting and automatically correlating benign and
              malicious events in an illustrative view.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}