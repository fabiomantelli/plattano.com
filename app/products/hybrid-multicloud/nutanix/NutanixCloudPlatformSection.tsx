'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NutanixCloudPlatformSection() {
  return (
    <section className="w-full py-24">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Title and Logo */} 
        <div className="flex items-center justify-center space-x-4 text-center">
          <h2 className="text-4xl font-bold text-white">
            NUTANIX <span className="text-primary">CLOUD PLATFORM</span>
          </h2>
          <div className="flex justify-center">
            <Image
              src="/images/products/hybrid-multicloud/nutanix/nutanix-logo.png" // Your PNG logo path
              alt="Nutanix Logo"
              width={200}
              height={60}
              className="w-auto h-auto"
            />
          </div>
        </div>

        {/* Platform Features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 mt-6">
          <div className="flex flex-col justify-center items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-primary mb-4">UNIFIED STORAGE</h3>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-primary mb-4">HYBRID CLOUD INFRASTRUCTURE</h3>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-primary mb-4">DATABASE SERVICES</h3>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-primary mb-4">CLOUD MANAGEMENT</h3>
          </div>
        </div>

        {/* Unified Control Plane Text */}
        <div className="text-center mt-6">
          <p className="text-neutral-900 dark:text-primary text-lg font-semibold">
            Unified Control Plane – Unified API’s – Security – Lifecycle Management
          </p>
        </div>

        {/* Additional Platform Features */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-8 mt-6">
          <div className="flex flex-col justify-center items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-primary mb-4">PRIVATE CLOUD</h3>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-primary mb-4">PUBLIC CLOUD/AAS</h3>
          </div>
          <div className="flex flex-col justify-center items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-6 shadow-md hover:scale-105 transition-all">
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-primary mb-4">MSP/TELCOS</h3>
          </div>
        </div>

        {/* Additional Text */}
        <div className="text-center mt-8 text-lg md:text-xl font-medium">
          <p>
            The Nutanix Cloud Platform includes hybrid cloud infrastructure, unified storage, container services, database services, and desktop services to offer support for any application and workload, anywhere.
          </p>
        </div>
      </motion.div>
    </section>
  );
}