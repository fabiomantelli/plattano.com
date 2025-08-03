'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function NutanixHeroSection() {
  return (
    <section className="w-full py-24 bg-white dark:bg-black text-neutral-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col-reverse lg:flex-row items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Left side: Text content */}
        <div className="flex-1 text-center lg:text-left space-y-6">
          <h1 className="text-5xl font-bold leading-tight">
            Nutanix Cloud Platform in Orlando <br />
            <span className="text-primary md:text-4xl text-3xl">Solving the Greatest Hybrid Cloud Challenges</span>
          </h1>

          <p className="text-lg md:text-md font-medium leading-relaxed font-ubuntu">
            Plattano Technologies delivers Nutanix hyperconverged and hybrid cloud solutions in Orlando. Combine the agility of public cloud with the performance, control, and security of private infrastructure—all through a unified platform.
          </p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">
              Nutanix: <span className="text-primary">Leader in HCI and Cloud Simplicity</span>
            </h3>
            <h3 className="text-xl font-semibold">
              Recognized in the <span className="text-primary">Forrester Wave™ 2023</span> for Hybrid Cloud Infrastructure
            </h3>
          </div>
        </div>

        {/* Right side: Image */}
        <div className="flex-1 mt-8 lg:mt-0">
          <Image
            src="/images/products/hybrid-multicloud/nutanix/nutanix-hero.png"
            alt="Nutanix hyperconverged and hybrid cloud infrastructure platform interface"
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
