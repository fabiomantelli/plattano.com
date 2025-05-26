'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NutanixCloudWorkloadSection() {
  return (
    <section className="w-full py-24 dark:bg-black bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Title */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">
            <span className="text-primary">POTENTIALIZE ANY WORKLOAD</span>
            <br />
            <span className="text-neutral-900 dark:text-neutral-200">IN ANY CLOUD</span>
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-neutral-900 dark:text-neutral-300">
            The Nutanix Cloud Platform offers performance, resilience, and scalability to power any workload — virtualized, containerized, or bare-metal in the cloud of your choice.
          </p>
        </div>

        {/* Logos Section */}
        <div className="flex justify-center mt-12">
          <Image
            src="/images/products/hybrid-multicloud/nutanix/nutanix-logos2.webp" // Replace with your logos image path
            alt="Nutanix Workload Logos"
            width={1200}
            height={300}
            className="w-full h-auto"
          />
        </div>
      </motion.div>
    </section>
  );
}
