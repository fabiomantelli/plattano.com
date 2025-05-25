'use client';

import { motion } from 'framer-motion';

export default function PartnershipSection() {
  return (
    <section className="w-full py-20 bg-white dark:bg-black text-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-10">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.3 }}
            className="md:w-1/2 space-y-5 text-center md:text-left"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold">SHALL WE GROW TOGETHER?</h2>

            <p className="text-base md:text-lg font-medium text-primary">
              What matters most — the journey or the destination...? <br /> It’s the company you keep!
            </p>

            <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
              At Plattano, we couldn’t agree more with that statement.
            </p>

            <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300">
              Our Partner Program is designed to share the best of what we offer so that you and your company are well accompanied throughout your business journey.
            </p>

            <p className="text-sm md:text-base font-medium text-primary">
              Increase revenue, <span className="text-black dark:text-white">improve customer satisfaction</span> and <span className="text-black dark:text-white">boost adoption by integrating Plattano solutions into your business.</span>
            </p>
          </motion.div>

          {/* Right Column (Card) */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full md:w-1/2"
          >
            <div className="w-full bg-primary text-black rounded-lg p-6 shadow-lg text-center md:text-left">
              <h3 className="text-lg font-semibold flex items-center gap-2 mb-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-current" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                OEM PARTNER?
              </h3>
              <p className="text-sm leading-relaxed">
                The Plattano Partner Network OEM program is built for tech and service providers who want to integrate Plattano solutions with their own intellectual property or third-party apps. Deliver integrated, repeatable, and user-friendly offers — priced and commercialized your way.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
