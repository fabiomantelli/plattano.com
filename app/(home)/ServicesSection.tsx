// app/components/ServicesSection.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function ServicesSection() {
  return (
    <section className="w-full bg-white text-neutral-900 dark:bg-neutral-900 dark:text-white py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-24">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-center font-semibold text-4xl md:text-5xl mb-12">
            SERVICES
          </h2>
        </motion.div>

        {/* Content row */}
        <div className="flex flex-col md:flex-row items-center gap-16 lg:gap-32">
          {/* Desktop image */}
          <motion.div
            className="hidden md:block w-full md:w-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Image
              src="/images/home/services-image.png"
              alt="Managed services illustration"
              width={600}
              height={400}
              className="w-full"
            />
          </motion.div>

          {/* Mobile image under text */}
          <motion.div
            className="block md:hidden w-full mb-4 order-last"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <Image
              src="/images/home/services-image.png"
              alt="Managed services illustration"
              width={400}
              height={300}
              className="mx-auto"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            className="w-full md:w-1/2 flex flex-col gap-6 text-center md:text-left items-center md:items-start"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.6 }}
          >
            <p className="text-[36px] md:text-[48px] leading-tight font-semibold text-primary">
              FOCUS ON YOUR BUSINESS!
            </p>
            <p className="text-[22px]">
              Discover our managed services and how your company can benefit from them.
            </p>
            <Link
              href="#"
              className="inline-block px-8 py-3 rounded-md font-semibold shadow-lg transition-colors duration-200 bg-primary text-white hover:bg-transparent hover:text-primary border border-primary cursor-pointer"
            >
              EXPLORE OUR SERVICES
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}