'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Cloud, Server, Shield, User, Lock, FileLock, BarChart, Activity } from 'lucide-react'; // Icons for the features

export default function SingularityXDRFeaturesSection() {
  return (
    <section className="w-full py-24 bg-white text-black dark:bg-black dark:text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold leading-tight">
            <span className="text-primary">Singularity</span> XDR Features
          </h2>
        </motion.div>

        {/* Hexagonal Icons Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-8 mt-12"
        >
          <FeatureCard icon={<Server size={40} />} title="Endpoint Protection" />
          <FeatureCard icon={<Activity size={40} />} title="Incident Response Tooling" />
          <FeatureCard icon={<Cloud size={40} />} title="Cloud Security" />
          <FeatureCard icon={<User size={40} />} title="Identity Detection & Response" />
          <FeatureCard icon={<Lock size={40} />} title="Insider Threat & Deception" />
          <FeatureCard icon={<FileLock size={40} />} title="Attack Surface Management" />
          <FeatureCard icon={<BarChart size={40} />} title="Security Data Analytics" />
          <FeatureCard icon={<Shield size={40} />} title="Managed Threat Services" />
        </motion.div>

        {/* Singularity XDR Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          {/* Light Mode Logo */}
          <Image
            src="/images/products/cybersecurity/sentinelone/singularity-xdr-light-logo.webp"  // Light logo
            alt="Singularity XDR Logo"
            width={300}
            height={150}
            className="mx-auto dark:hidden"  // Hide in dark mode
            priority
          />
          {/* Dark Mode Logo */}
          <Image
            src="/images/products/cybersecurity/sentinelone/singularity-xdr-dark-logo.webp"  // Dark logo
            alt="Singularity XDR Logo"
            width={300}
            height={150}
            className="mx-auto dark:block hidden"  // Hide in light mode
            priority
          />
        </motion.div>

        {/* Endpoint, Cloud, and Identity in Rectangles */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <FeatureRectangle title="Endpoint" icon={<Server size={40} />} />
          <FeatureRectangle title="Cloud" icon={<Cloud size={40} />} />
          <FeatureRectangle title="Identity" icon={<User size={40} />} />
        </motion.div>
      </div>
    </section>
  );
}

// Hexagonal Feature Card
function FeatureCard({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="w-20 h-20 flex items-center justify-center bg-primary text-white rounded-xl">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-primary">{title}</h3>
    </div>
  );
}

// Rectangle Feature Card for Endpoint, Cloud, and Identity
function FeatureRectangle({ title, icon }: { title: string; icon: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center justify-center p-8 border-2 border-primary bg-transparent space-y-4">
      <div className="w-16 h-16 flex items-center justify-center bg-primary text-white rounded-lg">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-primary">{title}</h3>
    </div>
  );
}