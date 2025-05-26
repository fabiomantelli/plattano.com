'use client';

import { motion } from 'framer-motion';
import { Cpu, Wifi, CheckCircle } from 'lucide-react'; // Example icons from lucide-react

export default function NutanixMultiCloudExecutionSection() {
  return (
    <section className="w-full py-24 text-white dark:bg-black bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col md:flex-row gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Left text */}
        <div className="w-full md:w-1/2 text-[38px] leading-tight font-semibold text-center md:text-left dark:text-white text-neutral-900">
          <span className="dark:text-primary text-black">CREATE AND EXECUTE HYBRID MULTI-CLOUDS</span>
          <span className="dark:text-primary text-black">WITH NUTANIX TECHNOLOGY</span>
        </div>

        {/* Right list */}
        <div className="w-full md:w-1/2 space-y-4 text-lg text-center md:text-left">
          <div className="flex items-center space-x-4 justify-center md:justify-start">
            <Cpu className="w-6 h-6 text-black dark:text-primary" />
            <p className='text-neutral-900 dark:text-white'>Modernize your datacenter</p>
          </div>
          <div className="flex items-center space-x-4 justify-center md:justify-start">
            <Wifi className="w-6 h-6 text-black dark:text-primary" />
            <p className='text-neutral-900 dark:text-white'>Unify all clouds with hybrid multi-cloud</p>
          </div>
          <div className="flex items-center space-x-4 justify-center md:justify-start">
            <CheckCircle className="w-6 h-6 text-black dark:text-primary" />
            <p className='text-neutral-900 dark:text-white'>Execute any App, in any scale and location</p>
          </div>
          <div className="flex items-center space-x-4 justify-center md:justify-start">
            <CheckCircle className="w-6 h-6 text-black dark:text-primary" />
            <p className='text-neutral-900 dark:text-white'>Performance, simplicity, availability, choose all three</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}