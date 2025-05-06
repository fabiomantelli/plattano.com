'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NutanixHeroSection() {
  return (
    <section className="w-full py-24 text-neutral-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Left side: Text content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-5xl font-bold leading-tight">
            <span className='text-primary'>SOLVING</span> THE <span className='text-primary'>GREATEST CLOUD CHALLENGES</span>
          </h2>
          <p className="text-lg md:text-md font-medium leading-relaxed font-ubuntu">
            Nutanix combines the simplicity and agility of public cloud with the performance and security of private cloud.
            Whether on-premises or hybrid, you can ensure business continuity through unified management, operations,
            and AI-driven automation.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">NUTANIX IS A <span className='text-primary'>LEADER IN HCI</span></h3>
            <h3 className="text-xl font-semibold">NUTANIX IS A LEADER IN THE <span className='text-primary'>FORRESTER WAVE™</span>: HYBRID INFRASTRUCTURE 2023</h3>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="flex-1 mt-8 lg:mt-0">
          <Image
            src="/images/products/hybrid-multicloud/nutanix/nutanix-hero.png"
            alt="Nutanix Solution"
            width={600}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
      </motion.div>
    </section>
  );
}