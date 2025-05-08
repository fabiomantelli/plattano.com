// app/components/EternalLearningSection.tsx
'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Infinity } from 'lucide-react'

export default function PlattanoServicesEternalLearningSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="/images/services/plattano-services/plattano-services-eternal.png"
              alt="Infinity loop glowing illustration"
              width={800}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            {/* Heading with Infinity icon */}
            <div className="flex items-center justify-center md:justify-start text-2xl font-bold text-primary gap-2">
              <Infinity className="w-6 h-6" />
              <span>We Are in Constant Evolution…</span>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-4 italic space-y-2">
              <p>
                “Work with someone below you to learn by teaching. <br />
                Work with someone at your level to challenge yourself. <br />
                Work with someone above you to learn by being taught.”
              </p>
            </blockquote>

            {/* Moral */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-primary">Moral of the Story:</h3>
              <p>
                We place ourselves in the role of eternal learners.
              </p>
              <p>
                At Plattano we have sailed many seas and, throughout our journey, acquired vast field
                experience—which we now share with our clients and partners to truly add value and make
                a difference in their business.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
