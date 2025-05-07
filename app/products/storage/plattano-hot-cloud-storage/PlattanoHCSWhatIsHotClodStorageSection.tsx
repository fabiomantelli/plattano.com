// app/(plattano)/plattano-hot-cloud-storage/ui/WhatIsHotCloudStorageSection.tsx
'use client'

import { motion } from 'framer-motion'

export default function PlattanoHCSWhatIsHotCloudStorageSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-12 text-center">
        {/* Heading & Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-4"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            What Is <span className="text-primary">&ldquo;Hot&rdquo;</span> Cloud Storage?
          </h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto opacity-90">
            Hot Cloud Storage is incredibly cost-effective, high-speed object storage for
            any workload. It delivers blazing-fast writes, reads, and instant availability.
            We believe in keeping storage simple with a universal service that satisfies
            nearly all your cloud storage requirements.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Robust Protection */}
          <div className="flex flex-col h-full border border-primary rounded-xl p-6 bg-white/50 dark:bg-black/50 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-primary mb-3">Robust Protection</h3>
            <p className="text-sm flex-1 break-words">
              Plattano Hot Cloud Storage is engineered for extreme durability, data integrity,
              and security. We deliver eleven-9s object durability—on par with Amazon S3 Standard.
              Immutable storage protects against malware, bugs, and viruses, while active integrity
              checks every 90 days keep your data safe and compliant with HIPAA, FINRA, CJIS, GDPR,
              and more.
            </p>
          </div>

          {/* Unmatched Performance */}
          <div className="flex flex-col h-full border border-primary rounded-xl p-6 bg-white/50 dark:bg-black/50 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-primary mb-3">Unmatched Performance</h3>
            <p className="text-sm flex-1 break-words">
              Our pioneering parallelized architecture delivers industry-leading read and write
              throughput at scale. In benchmark tests, Plattano’s file-system design outperformed
              Amazon S3 in the majority of write (PUT) scenarios—so your applications stay
              responsive and efficient.
            </p>
          </div>

          {/* You Control Your Data */}
          <div className="flex flex-col h-full border border-primary rounded-xl p-6 bg-white/50 dark:bg-black/50 hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-primary mb-3">You Control Your Data</h3>
            <p className="text-sm flex-1 break-words">
              Security-first by design: only you hold the keys. Client-side credentials and
              two-factor authentication via our web management console ensure that you—and only
              you—can access or audit your storage at any time.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
