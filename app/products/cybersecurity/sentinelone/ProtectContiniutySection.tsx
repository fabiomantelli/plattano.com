'use client';

import { motion } from 'framer-motion';

const features = [
  {
    title: 'Singularity For Endpoint',
    description: 'Manage your assets with security on every attack surface with EPP, EDR, and XDR powered by AI.',
  },
  {
    title: 'Singularity For Cloud',
    description: 'Simplify security for your containers and VMs, regardless of location, for maximum agility, security, and compliance.',
  },
  {
    title: 'Singularity For Identity',
    description: 'Enhance your detection and response resources for identity-based attack surfaces like AD and Azure AD.',
  },
];

export default function ProtectContinuitySection() {
  return (
    <section className="w-full py-24 bg-neutral-200 text-black dark:bg-neutral-900 dark:text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl flex flex-col items-center gap-16 px-8 sm:px-12 lg:px-24"
      >
        {/* Title */}
        <div className="text-center space-y-4">
          <h2 className="text-[36px] font-sofia font-bold">
            <span className="text-primary">PROTECT</span> CONTINUITY
          </h2>
          <p className="text-lg font-medium">
            Protect all surfaces with Singularity™. Go beyond endpoints with a platform for threats across all attack surfaces.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl p-6 text-center shadow-md transition-all border bg-neutral-100 border-neutral-300 dark:bg-white/10 dark:border-white/20"
            >
              <h3 className="text-lg font-semibold text-primary mb-2">{feature.title}</h3>
              <p className="text-sm leading-relaxed mb-4">{feature.description}</p>
              <div className="text-lg font-semibold text-primary">FEATURES</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}