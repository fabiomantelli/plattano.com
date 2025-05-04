'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaPuzzlePiece, FaServer, FaCloud } from 'react-icons/fa'; // Use react-icons for the icons

export default function NutanixThreeIconsSection() {
  return (
    <section className="w-full py-24 text-white dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Title */}
        <div className="text-center space-y-6">
          <h2 className="text-4xl font-bold leading-tight text-primary">
            YOUR CLOUD SOLUTION, SIMPLIFIED
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed text-neutral-800 dark:text-white">
            Nutanix brings the simplicity of public cloud with the security and performance of private cloud. Simplify
            your operations and scale effortlessly.
          </p>
        </div>

        {/* Icon Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
          {/* First Icon: Your Applications */}
          <div className="flex flex-col items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-8 shadow-md hover:scale-105 transition-all">
            <div className="text-4xl text-black dark:text-primary mb-4">
              <FaPuzzlePiece className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-white">YOUR APPLICATIONS</h3>
            <p className="text-sm mb-6 text-neutral-800 dark:text-white">
              IDC predicts that by 2026, more than 750 million new apps will be created. We make the deploy, manage,
              and provision much more efficient.
            </p>
            <Link href="#future-section-1" className="text-neutral-900 dark:text-primary font-semibold hover:underline">
              Learn More
            </Link>
          </div>

          {/* Second Icon: Your Infrastructure */}
          <div className="flex flex-col items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-8 shadow-md hover:scale-105 transition-all">
            <div className="text-4xl text-black dark:text-primary mb-4">
              <FaServer className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-white">YOUR INFRASTRUCTURE</h3>
            <p className="text-sm mb-6 text-neutral-800 dark:text-white">
              Compute, storage, virtualization, and networking are hyperconverged and powered by Nutanix’s software
              in a unified cloud platform.
            </p>
            <Link href="#future-section-2" className="text-neutral-900 dark:text-primary font-semibold hover:underline">
              Learn More
            </Link>
          </div>

          {/* Third Icon: Your Cloud */}
          <div className="flex flex-col items-center text-center bg-primary dark:bg-neutral-800 rounded-xl p-8 shadow-md hover:scale-105 transition-all">
            <div className="text-4xl text-black dark:text-primary mb-4">
              <FaCloud className="w-16 h-16" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-neutral-800 dark:text-white">YOUR CLOUD</h3>
            <p className="text-sm mb-6 text-neutral-800 dark:text-white">
              Whether hybrid, multi-cloud, public, or private, you can move applications anywhere with ease, without
              needing to re-architect or re-equip.
            </p>
            <Link href="#future-section-3" className="text-neutral-900 dark:text-primary font-semibold hover:underline">
              Learn More
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}