// app/components/TrustedAdvisorSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Info } from 'lucide-react'

export default function PlattanoServicesTrustedAdvisorSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <motion.div
          className="flex flex-col md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Left: Text box */}
          <div className="w-full md:w-1/2">
            <div className="border border-primary rounded-lg p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-primary text-black rounded-full">
                  <Info className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-semibold">TRUSTED ADVISOR?</h3>
              </div>
              <p className="text-sm leading-relaxed">
                A Trusted Advisor in IT services is more than a simple technology‐solutions provider. They are
                a strategic partner who understands each client’s specific needs and offers specialized guidance
                to help businesses achieve their objectives. With deep market knowledge and experience, a Trusted
                Advisor enables informed decision‑making, minimizes risks, and maximizes innovation opportunities.
                They act as a reliable ally, delivering practical support and valuable insights for long‑term success.
              </p>
            </div>
          </div>

          {/* Right: Illustration */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/services/plattano-services/plattano-services-trusted.png"
              alt="Neon leaf representing growth and guidance"
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
