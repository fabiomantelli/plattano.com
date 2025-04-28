'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-24">
        {/* Centered title */}
        <h2 className="text-white text-center font-semibold text-4xl md:text-5xl mb-12">
          SERVICES
        </h2>

        {/* Content row */}
        <div className="flex flex-col md:flex-row items-center gap-32">
          {/* Text and button on the left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left items-center md:items-start"
          >
            <p className="text-[48px] leading-tight font-semibold text-primary">
              FOCUS ON YOUR BUSINESS!
            </p>
            <p className="text-[22px]">
              Discover our managed services and how your company can benefit from them.
            </p>
            <Link
              href="#"
              className="inline-block self-center md:self-start px-8 py-3 rounded-md bg-primary text-white font-semibold shadow-lg transition-colors duration-200 hover:bg-white hover:text-primary"
            >
              EXPLORE OUR SERVICES
            </Link>
          </motion.div>

          {/* Image on the right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
            className="w-full md:w-1/2"
          >
            <Image
              src="/services-image.webp"
              alt="Managed services illustration"
              width={600}
              height={400}
              className="w-full h-auto mx-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
