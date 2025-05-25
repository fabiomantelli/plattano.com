'use client'

import { motion } from 'framer-motion'

export default function PlattanoHCSSecuritySection() {
  return (
    <section className="w-full bg-black/9 text-black dark:bg-neutral-900 dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 space-y-12">
        {/* Title */}
        <motion.h2
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          How <span className="text-primary">Secure</span> Is My Data?
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left column: description */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-300">
              Hot Cloud Storage is <span className='text-primary'>secure by design</span>. All stored data is 
              automatically <span className='text-primary'>encrypted</span> at rest—even if it was already encrypted 
              by the application before sending. We follow industry-leading security models and 
              <span className='text-primary'>best practices</span>. Example security features include:
            </p>
          </div>

          {/* Right column: bullet list */}
          <div className="md:w-1/2 space-y-4 text-center md:text-left">
            <ul className="space-y-4 text-center md:text-left">
              {[
                'HTTPS for secure data upload and download',
                'Automatic encryption of data at rest',
                'Buckets accessible only to the bucket and object creators',
                'User authentication to control data access',
                'Bucket policies and ACLs to grant selective permissions',
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-start justify-center md:justify-start gap-3"
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
