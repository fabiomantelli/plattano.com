'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PreventViolationsSection() {
  return (
    <section className="w-full py-24 bg-primary text-black dark:bg-primary dark:text-black">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 w-full flex justify-center"
        >
          <Image
            src="/images/products/cybersecurity/sentinelone/sentinelone-dashboard.png" // Replace with your image path
            alt="SentinelOne Dashboard"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold leading-tight">
            <span className="text-white">PREVENT</span> VIOLATIONS. <span className="text-white">ELIMINATE RISK.</span>
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            Equip your organization with tools and intelligence to anticipate threats, manage vulnerabilities, and protect your cloud, endpoints, and identity resources anywhere in the world. Combined with 24/7 managed threat hunting and services, SentinelOne is defining the future of cybersecurity with the power of AI.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
