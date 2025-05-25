'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

export default function PlattanoAsAServiceSection() {
  const benefits = [
    'Offer your clients complete turnkey solutions.',
    'Improve your margins while saving your clients money.',
    'Make your product more attractive with customizable pricing models.',
    'Use your own brand to resell our solutions.',
    'Flexibility to collaborate directly with the end client.',
    'Simplify purchasing and provisioning.',
    'Increase recurring revenue.'
  ];

  return (
    <section className="w-full bg-white dark:bg-black text-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left column - text */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2 text-center md:text-left space-y-6"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            GAIN THE <span className="text-primary">ADVANTAGE</span><br />
            WITH <span className="text-primary">PLATTANO AS A SERVICE</span>
          </h2>

          <p className="text-base sm:text-lg text-neutral-700 dark:text-neutral-200">
            Leverage our full power and expertise to always stay ahead of your competitors.
          </p>

          <p className="text-sm sm:text-base font-semibold">
            The Plattano OEM program enables your company to:
          </p>

          <ul className="space-y-4 text-sm sm:text-base text-left max-w-lg mx-auto md:mx-0">
            {benefits.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <ChevronRight className="h-5 w-5 text-primary mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Right column - image */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="md:w-1/2 w-full"
        >
          <Image
            src="/images/partnership/paas-graph.png"
            alt="Plattano As A Service graph"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}
