'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Fallback timer to ensure content shows even if Intersection Observer fails
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full py-12 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl flex flex-col-reverse md:flex-row items-center justify-center gap-12 px-6 sm:px-12 lg:px-24 md:min-h-[calc(100vh-150px)]">

        {/* Text block */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 space-y-6 md:space-y-8 text-center md:text-left"
        >
          {/* VMware Logo (desktop only) */}
          <div className="hidden md:block mb-4">
            <Image
              src="/images/products/hybrid-multicloud/vmware/vmware-light-logo.png"
              alt="VMware by Broadcom logo light"
              width={300}
              height={103}
              className="block dark:hidden h-auto w-auto"
              priority
            />
            <Image
              src="/images/products/hybrid-multicloud/vmware/vmware-dark-logo.webp"
              alt="VMware by Broadcom logo dark"
              width={300}
              height={103}
              className="hidden dark:block h-auto w-auto"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold font-sofia leading-tight">
            VMware Cloud Foundation in Orlando<br />
            <span className="text-primary md:text-4xl text-3xl">Modern Multicloud Infrastructure by Broadcom</span>
          </h1>

          <p className="text-lg font-ubuntu leading-relaxed">
            Plattano Technologies delivers VMware Cloud Foundation solutions in Orlando. Gain full-stack infrastructure, workload mobility, and secure cloud operations for hybrid and multicloud environments—on-prem or across clouds.
          </p>
        </motion.div>

        {/* Image block */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex-1 w-full flex flex-col items-center md:items-end"
        >
          {/* VMware Logo (mobile only) */}
          <div className="block md:hidden mb-6">
            <Image
              src="/images/products/hybrid-multicloud/vmware/vmware-light-logo.png"
              alt="VMware by Broadcom logo light"
              width={300}
              height={103}
              className="mx-auto h-auto w-auto block dark:hidden"
              priority
            />
            <Image
              src="/images/products/hybrid-multicloud/vmware/vmware-dark-logo.webp"
              alt="VMware by Broadcom logo dark"
              width={300}
              height={103}
              className="mx-auto h-auto w-auto hidden dark:block"
              priority
            />
          </div>

          {/* Hero Image */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-full mt-6 md:mt-0">
            <Image
              src="/images/products/hybrid-multicloud/vmware/vmware-hero.png"
              alt="VMware Cloud Foundation multicloud architecture and platform dashboard"
              width={600}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
