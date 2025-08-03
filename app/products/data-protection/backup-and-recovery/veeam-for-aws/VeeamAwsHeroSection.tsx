'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function VeeamAwsHeroSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col md:flex-row items-center gap-12">

        {/* Text Column */}
        <motion.div
          className="md:w-1/2 w-full space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Veeam Backup for AWS in Orlando - <span className="text-primary">Cloud-Native Protection</span>
          </h1>

          <p className="text-base sm:text-lg text-neutral-800 dark:text-neutral-300">
            Protect your AWS workloads with Plattano Technologies using Veeam&apos;s native backup and disaster recovery for Amazon EC2, RDS, and more — fully secured and optimized for enterprises in Orlando.
          </p>

          <ul className="space-y-4 text-base sm:text-lg text-center md:text-left pt-2">
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>Beyond snapshots: agentless backup and full DR orchestration</span>
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>5× faster recovery with optimized RTO and RPO</span>
            </li>
            <li className="flex items-start gap-3 justify-center md:justify-start">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" />
              <span>Secure backup with encryption, IAM integration, and immutability</span>
            </li>
          </ul>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="md:w-1/2 w-full"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            src="/images/products/data-protection/backup-and-recovery/veeam-for-aws/veeam-aws-hero.png"
            alt="Veeam Backup for AWS platform protecting cloud workloads"
            width={800}
            height={500}
            className="w-full h-auto object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
