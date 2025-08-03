'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function PlattanoServicesHeroSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 flex flex-col-reverse md:flex-row items-center gap-12">

        {/* Text Column */}
        <motion.div
          className="md:w-1/2 w-full space-y-6 text-center md:text-left"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Tiny Logo */}
          <div className="mx-auto md:mx-0 w-32 h-auto">
            <div className="block dark:hidden">
              <Image
                src="/images/services/plattano-services/plattano-logo-black.webp"
                alt="Plattano Technologies logo (light background)"
                width={128}
                height={32}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="hidden dark:block">
              <Image
                src="/images/services/plattano-services/plattano-logo.webp"
                alt="Plattano Technologies logo (dark background)"
                width={128}
                height={32}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Strategic IT Services in Orlando<br />
            <span className="text-primary md:text-4xl text-3xl">One Partner for Everything</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl font-semibold text-primary">
            Simplify your infrastructure with one trusted team.
          </p>

          {/* Supporting Text */}
          <p className="text-base sm:text-lg max-w-lg mx-auto md:mx-0 opacity-90">
            From licensing and implementation to data protection and cloud transformation—Plattano handles every layer with technical precision and business focus.
          </p>
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
            src="/images/services/plattano-services/plattano-services-hero.png"
            alt="Illustration of strategic IT services and support by Plattano Technologies"
            width={800}
            height={500}
            className="w-full h-auto object-cover rounded-md"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
