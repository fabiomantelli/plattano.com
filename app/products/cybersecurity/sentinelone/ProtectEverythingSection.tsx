'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProtectEverythingSection() {
  return (
    <section className="w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold leading-tight">
            <span className="text-primary">PROTECT</span> EVERYTHING. <span className="text-primary">ALL THE TIME.</span>
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            Built on our revolutionary unified Data Lake, the Singularity platform empowers your security teams with AI-based security tools. Turn mountains of data into actionable insights and respond in real time.
          </p>
        </motion.div>

        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 w-full flex justify-center"
        >
          <Image
            src="/images/products/cybersecurity/sentinelone/sentinelone-ai-dashboard.png" // Replace with your own image
            alt="AI Dashboard"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
