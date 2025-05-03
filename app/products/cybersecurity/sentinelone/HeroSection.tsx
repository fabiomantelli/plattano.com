'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="relative w-full" style={{ height: 'calc(100vh - 100px)' }}>
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/products/cybersecurity/sentinelone/sentinelone-hero.png"
          alt="Background Image"
          fill
          style={{ objectFit: 'cover' }}
          className="opacity-50"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 dark:bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-6 sm:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 flex flex-col items-center justify-center"
        >
          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-center">
            <span className="text-primary">SECURITY</span> THAT PROTECTS YOUR WORLD
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl font-medium leading-relaxed text-center">
            From endpoint to cloud. From IoT devices to containers – we provide the resources and technology to protect your business like never before.
          </p>
        </motion.div>
      </div>
    </section>
  );
}