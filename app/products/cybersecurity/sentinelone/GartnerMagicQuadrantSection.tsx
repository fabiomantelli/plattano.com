'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function GartnerMagicQuadrantSection() {
  return (
    <section className="w-full py-24 bg-neutral-200 text-neutral-900 dark:bg-neutral-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-16 flex flex-col lg:flex-row items-center gap-16"
      >
        {/* Left Side: Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <Image
            src="/images/products/cybersecurity/sentinelone/sentinelone-gartner-magic-quadrant.webp" // Replace with actual image path
            alt="Gartner Magic Quadrant"
            width={600}
            height={400}
            className="rounded-xl"
          />
        </div>

        {/* Right Side: Text */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-primary">
            SENTINELONE FEATURES
          </h2>

          <div className="mt-6 space-y-6">
            <p className="text-lg md:text-xl font-medium leading-relaxed">
              SentinelOne is recognized for its industry-leading endpoint protection platform, providing businesses
              with next-gen security for today and the future.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-primary">SentinelOne Features:</h3>
              <ul className="list-none pl-0 space-y-2 text-neutral-700 dark:text-neutral-300">
                <li>Easy-to-deploy solution for any organization.</li>
                <li>Cloud-ready and prepared for workstations of all sizes.</li>
                <li>Strong results from MITRE ATT&CK.</li>
                <li>Unmatched customer support with a quality-first approach.</li>
              </ul>
            </div>

            <div className="mt-6 space-y-4">
              <h3 className="text-xl font-semibold text-primary">Critical Gartner Capabilities:</h3>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start"> {/* Added justify-center for centering on mobile */}
                <span className="bg-primary text-white py-2 px-4 rounded-full">Lean Forward Organization</span>
                <span className="bg-primary text-white py-2 px-4 rounded-full">Blended Approach Organization</span>
                <span className="bg-primary text-white py-2 px-4 rounded-full">Prevention Focused Organization</span>
              </div>
            </div>

            <p className="text-lg md:text-xl font-medium leading-relaxed mt-6">
              SentinelOne receives top marks for user cases in all types: A, B, and C from the 2021 Gartner Critical
              Capabilities for Endpoint Protection Platforms report. SentinelOne leads with flexible options that cater
              to all organization types.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}