'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function BaaSPublicCloudHeroSection() {
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
            Managed Backup for Public Cloud in Orlando<br />
            <span className="text-primary">Powered by Plattano Technologies</span>
          </h1>

          <p className="text-base sm:text-lg opacity-90 max-w-md mx-auto md:mx-0">
            Protect your workloads on AWS, Microsoft Azure, and Google Cloud with fully managed backup services, including compliance, flexibility, and automated recovery.
          </p>

          <ul className="space-y-4 max-w-md mx-auto md:mx-0">
            {[
              'Workload protection for AWS, Azure & Google Cloud',
              'Automated backup & fast recovery',
              'Fully managed by local experts in Orlando',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 justify-center md:justify-start">
                <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
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
            src="/images/services/dpaas/baas-for-public-cloud/baas-for-public-cloud-hero.png"
            alt="Illustration of managed backup for public cloud workloads with BaaS"
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
