'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VisibilityFeaturesSection() {
  return (
    <section className="w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold leading-tight">
            <span className="text-primary">VISIBILITY</span>. <span className="text-primary">PROTECTION</span>. <span className="text-primary">RESPONSE</span>
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            A platform to prevent, detect, respond, and hunt within the context of all your company's assets. See what was never seen before. Control the unknown. All at machine speed.
          </p>
        </motion.div>

        {/* Button Row */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12"
        >
          <motion.a
            className="inline-flex items-center justify-center px-8 py-3 text-white bg-primary rounded-lg shadow-lg text-center transition-all duration-200 hover:bg-transparent hover:text-primary border border-primary"
          >
            Reunite your entire business ecosystem and enrich your security data.
          </motion.a>

          <motion.a
            className="inline-flex items-center justify-center px-8 py-3 text-white bg-primary rounded-lg shadow-lg text-center transition-all duration-200 hover:bg-transparent hover:text-primary border border-primary"
          >
            Transform your data into insights with Singularity Data Lake.
          </motion.a>

          <motion.a
            className="inline-flex items-center justify-center px-8 py-3 text-white bg-primary rounded-lg shadow-lg text-center transition-all duration-200 hover:bg-transparent hover:text-primary border border-primary"
          >
            Protect the future. Put data to work and eliminate risks with AI.
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}