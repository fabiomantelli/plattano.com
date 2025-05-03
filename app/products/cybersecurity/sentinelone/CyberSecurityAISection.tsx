'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function CyberSecurityAISection() {
  return (
    <section className="w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">
        {/* Image Block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1"
        >
          <Image
            src="/images/products/cybersecurity/sentinelone/sentinelone-ai-image.png"
            alt="AI Cybersecurity Image"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>

        {/* Text Block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.6 }}
          className="flex-1 space-y-6 text-center md:text-left"
        >
          <h2 className="text-4xl font-bold leading-tight">
            AI-POWERED CYBERSECURITY <span className="text-primary">FOR REAL-TIME PROTECTION</span>
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            Equip your organization with tools and intelligence to anticipate threats, manage vulnerabilities, and protect your cloud, endpoints, and identity resources anywhere in the world. Powered by AI, SentinelOne redefines cybersecurity with 24/7 managed services.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
