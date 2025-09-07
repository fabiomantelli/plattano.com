'use client';

import { motion } from 'framer-motion';
import { Shield, Database, Zap, HardDrive } from 'lucide-react';

export default function ExagridFeaturesSection() {
  const features = [
    {
      icon: <Database className="h-8 w-8 text-primary" />,
      title: 'Tiered Backup Storage',
      description: 'Unique disk-cache Landing Zone with long-term retention repository for optimal performance and storage efficiency.',
      image: '/images/products/storage/exagrid/exagrid-tiered-storage.webp'
    },
    {
      icon: <HardDrive className="h-8 w-8 text-primary" />,
      title: 'Scale-Out Architecture',
      description: 'Scale to 6PB without forklift upgrades or performance degradation. Simply add appliances as data grows.',
      image: '/images/products/storage/exagrid/exagrid-scale-out.webp'
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: 'Ransomware Recovery',
      description: 'Only non-network-facing tier with delayed deletes and immutable deduplication objects for complete protection.',
      image: '/images/products/storage/exagrid/exagrid-security.webp'
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: 'Landing Zone Technology',
      description: 'Latest backup copy stored in high-speed disk cache for instant VM boots and 20x faster restores.',
      image: '/images/products/storage/exagrid/exagrid-landing-zone.webp'
    }
  ];

  return (
    <section className="w-full py-20 bg-white text-black dark:bg-black dark:text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-12 lg:px-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-sofia-sans mb-6">
            Why ExaGrid? <span className="text-primary">It Just Works.</span>
          </h2>
          <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            With ExaGrid Tiered Backup Storage, each appliance brings not only disk, but also memory, 
            bandwidth, and processing power – all elements needed to maintain high backup performance.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="group"
            >
              <div className="bg-neutral-50 dark:bg-white/5 rounded-2xl p-6 border border-neutral-200 dark:border-white/10 hover:border-primary/30 dark:hover:border-primary/30 transition-all duration-300 hover:shadow-xl text-center h-full flex flex-col">
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold font-sofia-sans mb-4 text-center">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed flex-grow text-center">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-lg font-semibold text-primary mb-4">
            Ready to experience the ExaGrid difference?
          </p>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-700 dark:text-neutral-300">
            Contact Plattano Technologies for ExaGrid deployment and support in Orlando.
          </p>
        </motion.div>
      </div>
    </section>
  );
}