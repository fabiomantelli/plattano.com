'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function SolutionsSection() {
  return (
    <section className="w-full bg-black text-white px-12">
      <div className="mx-auto max-w-7xl px-4 py-24">
        {/* Centered title */}
        <h2 className="text-white text-center font-semibold text-4xl md:text-5xl mb-12">
          SOLUTIONS
        </h2>

        {/* First content row */}
        <div className="flex flex-col md:flex-row items-center gap-32 mb-24">
          {/* Image on the left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="w-full md:w-1/2 mx-auto"
          >
            <Image
              src="/solution-image.webp"
              alt="Cloud illustration"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Text and button on the right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left items-center md:items-start"
          >
            <p className="text-[38px] leading-tight">
              <span className="text-primary font-semibold">BOOST YOUR EFFICIENCY</span>{' '}
              AND COMPETITIVENESS WITH OUR SOLUTIONS.
            </p>
            <p className="text-[18px]">And navigate your way out of problems.</p>
            <Link
              href="#"
              className="inline-block self-center md:self-start px-8 py-3 rounded-md bg-primary text-white font-semibold shadow-lg transition-colors duration-200 hover:bg-white hover:text-primary"
            >
              CLICK HERE
            </Link>
          </motion.div>
        </div>

        {/* Second content row */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-32">
          {/* Image on the right (but first in DOM for mobile) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="w-full md:w-1/2 mx-auto"
          >
            <Image
              src="/solution2-image.webp"
              alt="Partner illustration"
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </motion.div>

          {/* Text and button on the left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left items-center md:items-start"
          >
            <p className="text-[38px] leading-tight">
              <span className="text-primary font-semibold">GENERATE NEW RECURRING REVENUE </span>
              WITH OUR SOLUTIONS AND SERVICES-BECOME OUR BUSINESS PARTNER.
            </p>
            <Link
              href="#"
              className="inline-block self-center md:self-start px-8 py-3 rounded-md bg-primary text-white font-semibold shadow-lg transition-colors duration-200 hover:bg-white hover:text-primary"
            >
              CLICK HERE
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
