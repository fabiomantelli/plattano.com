'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { CloudCog, PiggyBank, Layers, Boxes } from 'lucide-react';

const features = [
  {
    icon: CloudCog,
    title: 'MULTI-CLOUD',
    description:
      'Discover how a multi-cloud operating model starts with modernizing your on-prem cloud infrastructure to boost developer productivity with high-value hybrid cloud computing services.',
  },
  {
    icon: PiggyBank,
    title: 'LOWER COSTS',
    description:
      'Reduce CapEx, OpEx, and total cost of ownership (TCO) with optimized operations and the widest range of deployment options.',
  },
  {
    icon: Layers,
    title: 'SCALABLE & CONSISTENT ARCHITECTURE',
    description:
      'A full-stack extensible architecture offers a path to multi-cloud with a consistent cloud operating model. Accelerate adoption and migrate workloads across environments with unified management and visibility.',
  },
  {
    icon: Boxes,
    title: 'VM & CONTAINER MANAGEMENT',
    description:
      'Optimize performance, resilience, and availability of VMs and Kubernetes clusters with integrated container orchestration via VMware Cloud Foundation with Tanzu.',
  },
];

export default function CloudFoundationSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const sectionTextColor = isDark ? 'text-white' : 'text-neutral-900';
  const cardBg = isDark
    ? 'bg-white/5 border-white/10 backdrop-blur-sm'
    : 'bg-white/80 border-neutral-200 backdrop-blur-sm';

  return (
    <section className={`w-full py-24 ${sectionTextColor}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24 text-center">
        {/* Título principal */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[36px] md:text-[40px] font-extrabold mb-4"
        >
          VMware <span className="text-primary">Cloud Foundation</span>
        </motion.h2>

        {/* Subtexto 1 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[16px] md:text-[18px] font-ubuntu mb-4 max-w-3xl mx-auto"
        >
          Efficiently manage virtual machines and container workloads. Bring cloud benefits to your on-prem hyperconverged infrastructure (HCI) deployments.
        </motion.p>

        {/* Subtexto 2 */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[20px] md:text-[24px] font-semibold font-sofia mb-16 max-w-4xl mx-auto"
        >
          <span className="text-primary">Platform</span> ready for{' '}
          <span className="text-primary">multi-cloud</span> environments and{' '}
          <span className="text-primary">modern</span> applications.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.5 }}
              className={`flex flex-col items-center text-center p-6 rounded-2xl shadow-lg border transition-all duration-300 ${cardBg}`}
            >
              <item.icon className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-lg font-bold text-primary mb-2">
                {item.title}
              </h3>
              <p className="text-[15px] font-ubuntu leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
