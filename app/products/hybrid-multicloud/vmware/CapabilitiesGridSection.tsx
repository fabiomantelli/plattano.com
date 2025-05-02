'use client';

import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import {
  Cloud,
  LayoutDashboard,
  Users,
  ShieldCheck,
  MoveRight,
  ShieldAlert,
} from 'lucide-react';

const items = [
  {
    icon: Cloud,
    title: 'Unified Multi-Cloud Operating Model',
    description:
      'Extend your on-prem infrastructure and operations to any public cloud. Run enterprise apps with a consistent operating model and unified toolset across public clouds, data centers, and edge environments.',
  },
  {
    icon: LayoutDashboard,
    title: 'Full-Stack App Modernization',
    description:
      'Deliver great software products faster. Build and run modern apps on any cloud, and streamline Kubernetes operations with VMware Tanzu’s comprehensive app development and deployment tools.',
  },
  {
    icon: Users,
    title: 'Integrated Workforce Solutions',
    description:
      'Fully meet the needs of today’s distributed workforce. Combine unified endpoint management, desktop and app virtualization, secure access service edge, and endpoint security services to enable seamless, secure access from any device.',
  },
  {
    icon: ShieldCheck,
    title: 'Connected Security with End-to-End Visibility',
    description:
      'Deliver security as a built-in service across your entire tech stack. Protect the full application lifecycle—from code to production—and automate consistent policies across workloads in virtual, private, and multi-cloud environments.',
  },
  {
    icon: MoveRight,
    title: 'Seamless Migration to Any Cloud',
    description:
      'Migrate workloads at least 40% faster while keeping infrastructure consistent across clouds. Unlock the full power of hyperscale clouds in 4,000+ locations worldwide to deliver any app, anywhere.',
  },
  {
    icon: ShieldAlert,
    title: 'Reliable Ransomware Recovery',
    description:
      'Quickly recover from modern ransomware attacks with a fully managed solution using an isolated recovery environment (IRE) and built-in behavioral analysis of active workloads.',
  },
];

export default function CapabilitiesGridSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const sectionBg = isDark ? 'bg-black text-white' : 'bg-gray-50 text-neutral-900';
  const cardBg = isDark
    ? 'bg-white/5 border-white/10 backdrop-blur-sm'
    : 'bg-white/80 border-neutral-200 backdrop-blur-sm';

  return (
    <section className={`w-full py-24 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-4xl md:text-5xl font-semibold text-center mb-16"
        >
          POWERFUL CAPABILITIES
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true, amount: 0.4 }}
              className={`flex flex-col items-center text-center p-8 rounded-2xl shadow-xl border transition-all duration-300 ${cardBg} hover:scale-[1.02] hover:shadow-2xl`}
            >
              <item.icon className="w-10 h-10 mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 uppercase">{item.title}</h3>
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
