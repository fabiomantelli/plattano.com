'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import {
  ServerCog,
  CloudSun,
  Rocket,
  Puzzle,
  ShieldHalf,
  ShieldCheck,
  Activity,
  Network,
  Gauge,
  TerminalSquare,
  Wrench,
  Monitor,
  Boxes,
  Cpu,
  BrainCircuit,
} from 'lucide-react';

const features = [
  {
    icon: ServerCog,
    title: 'Flexible Deployment & Consumption',
    description:
      'Choose from cloud-connected and disconnected deployment options, including subscription-based and as-a-service HCI. Leverage a broad portfolio of cloud compute services for admins and developers.',
  },
  {
    icon: CloudSun,
    title: 'Cloud-Capable IaaS',
    description:
      'Use standardized cloud building blocks and gain instant access to new features with cloud-connected VMware Cloud Foundation+.',
  },
  {
    icon: Rocket,
    title: 'Automated Provisioning',
    description:
      'Quickly provision VMs and containers using standardized HCI components, ensuring secure, consistent, cloud-ready deployments.',
  },
  {
    icon: Puzzle,
    title: 'Integrations & Services',
    description:
      'Full-stack extensible architecture supports an operational cloud model across data centers, edge, and public cloud environments.',
  },
  {
    icon: ShieldHalf,
    title: 'Cloud-Ready Networking',
    description:
      'Activate your virtual cloud network with L2-L7 network and security virtualization for scalable performance and cloud-level agility.',
  },
  {
    icon: ShieldCheck,
    title: 'Intrinsic Security',
    description:
      'Protect sensitive data using platform-based security and advanced protection from cyber threats, managed consistently.',
  },
  {
    icon: Activity,
    title: 'vSphere Eco Metrics',
    description:
      'Monitor energy consumption at host and VM levels. Discover insights to optimize efficiency and support sustainability goals.',
  },
  {
    icon: Network,
    title: 'Tanzu Mission Control Essentials',
    description:
      'Simplify Kubernetes cluster management across clouds with a central hub. Speed up deployments and DevOps velocity.',
  },
  {
    icon: Gauge,
    title: 'Capacity Service',
    description:
      'Monitor and optimize infrastructure capacity across your vSphere fleet. Plan effectively for future workload demands.',
  },
  {
    icon: TerminalSquare,
    title: 'Cloud Consumption Interface',
    description:
      'Empower DevOps teams with intuitive UIs and developer-friendly APIs to streamline IaaS access across environments.',
  },
  {
    icon: Wrench,
    title: 'Lifecycle Management Service',
    description:
      'Update your entire ESXi host fleet in a single operation across vCenters and clusters with centralized progress monitoring.',
  },
  {
    icon: Monitor,
    title: 'Centralized Cloud Console',
    description:
      'Enable IT administrators to manage all vSphere deployments in one place using the vSphere+ cloud console.',
  },
  {
    icon: Boxes,
    title: 'Tanzu Kubernetes Grid Integration',
    description:
      'Run Tanzu Kubernetes Grid Service directly within vSphere to simplify on-prem Kubernetes operations.',
  },
  {
    icon: Cpu,
    title: 'DPU Integration',
    description:
      'Boost performance by offloading network and security functions from CPUs to DPUs.',
  },
  {
    icon: BrainCircuit,
    title: 'AI/ML Workload Acceleration',
    description:
      'Enhance AI/ML workloads with support for up to 16 vGPUs per VM, 32 passthrough devices, and NVLink/NVSwitch tech.',
  },
];

export default function CloudFoundationFeaturesSection() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const isDark = resolvedTheme === 'dark';
  const sectionBg = isDark ? 'bg-neutral-900 text-white' : 'bg-neutral-200 text-neutral-900';
  const cardBg = isDark
    ? 'bg-white/5 border-white/10 backdrop-blur-sm'
    : 'bg-white/80 border-neutral-200 backdrop-blur-sm';

  return (
    <section className={`w-full py-24 ${sectionBg}`}>
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-24">
        {/* Título */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.5 }}
          className="text-[36px] md:text-[40px] font-extrabold text-center mb-16"
        >
          <span className="text-primary">Features</span> of VMware Cloud Foundation
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              viewport={{ once: true, amount: 0.4 }}
              className={`p-6 rounded-2xl shadow-md border transition-all duration-300 ${cardBg}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-6 h-6 text-primary" />
                <h3 className="text-lg font-bold text-primary">{item.title}</h3>
              </div>
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
