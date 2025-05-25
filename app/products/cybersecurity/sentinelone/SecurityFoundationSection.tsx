'use client';

import { motion } from 'framer-motion';
import { Eye, Shield, Cpu } from 'lucide-react'; // Icons for the features

export default function SecurityFoundationSection() {
  return (
    <section className="w-full py-24 bg-black/9 text-black dark:bg-neutral-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold leading-tight">
            THE FOUNDATION FOR <span className="text-primary">AUTONOMOUS BUSINESS SECURITY</span>
          </h2>
          <p className="text-lg md:text-xl font-medium leading-relaxed">
            The leading companies worldwide use Singularity to prevent, detect, and respond to cyber-attacks at machine speed, with greater scale and precision across endpoints, clouds, and identities.
          </p>
        </motion.div>

        {/* Feature Cards Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-12"
        >
          <FeatureCard icon={<Eye size={40} />} title="SEE" description="Maximize visibility across all your business assets." />
          <FeatureCard icon={<Shield size={40} />} title="PROTECT" description="Defend your business with unmatched speed, coverage, and efficiency." />
          <FeatureCard icon={<Cpu size={40} />} title="RESOLVE" description="Leverage AI to respond in real-time across the connected security ecosystem." />
        </motion.div>
      </div>
    </section>
  );
}

// Feature Card Component
function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 border-2 border-primary bg-transparent space-y-4">
      <div className="w-16 h-16 flex items-center justify-center bg-primary text-white rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
      <p className="text-sm text-neutral-700 dark:text-neutral-300">{description}</p>
    </div>
  );
}