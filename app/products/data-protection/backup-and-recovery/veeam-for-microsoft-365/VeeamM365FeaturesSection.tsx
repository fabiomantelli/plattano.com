'use client';

import { motion } from 'framer-motion';
import {
  Cloud,
  Share2,
  Users,
  Database,
  LifeBuoy,
  Repeat,
  Search,
  FileCheck,
  Cpu,
  ShieldCheck,
  BarChart2,
  RefreshCw
} from 'lucide-react';

const features = [
  {
    icon: Cloud,
    title: 'Backup Office 365 Data',
    description:
      'Securely back up Exchange Online, SharePoint Online, OneDrive for Business and Teams with industry-leading RPOs.'
  },
  {
    icon: Share2,
    title: 'Protect SharePoint & OneDrive',
    description:
      'Safeguard sites, libraries and files with native SharePoint and OneDrive APIs.'
  },
  {
    icon: Users,
    title: 'Protect Microsoft Teams',
    description:
      'Use Microsoft Teams APIs for dedicated backup and control of all your collaboration data.'
  },
  {
    icon: Database,
    title: 'Deploy & Store Anywhere',
    description:
      'Deploy on-premises or to any S3-compatible object storage such as AWS S3 or Azure Blob.'
  },
  {
    icon: LifeBuoy,
    title: 'BaaS for Office 365',
    description:
      'Offload backup management to our managed-service ecosystem for total peace of mind.'
  },
  {
    icon: Repeat,
    title: '50+ Restore Options',
    description:
      'Granular item-level restores and bulk restores for any recovery scenario.'
  },
  {
    icon: Search,
    title: 'Advanced eDiscovery',
    description:
      'Leverage advanced search and export tools for regulatory and legal requirements.'
  },
  {
    icon: FileCheck,
    title: 'Rapid Compliance',
    description:
      'Quickly locate and restore data to meet legal and compliance requests in time.'
  },
  {
    icon: Cpu,
    title: 'Enterprise Scalability',
    description:
      'Scale effortlessly to protect the largest enterprise Microsoft 365 deployments.'
  },
  {
    icon: ShieldCheck,
    title: 'Built-in Security',
    description:
      'Immutable backups, multi-factor authentication, and encryption at rest.'
  },
  {
    icon: BarChart2,
    title: 'Monitoring & Reporting',
    description:
      'Real-time alerts and rich reports to guarantee SLA compliance and visibility.'
  },
  {
    icon: RefreshCw,
    title: 'Hybrid Backup Support',
    description:
      'Protect both Office 365 and on-premises Exchange & SharePoint in one solution.'
  }
];

export default function VeeamM365FeaturesSection() {
  return (
    <section className="w-full bg-white text-black dark:bg-black dark:text-white py-20 px-6 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold"
        >
          Resources of Veeam Backup for Microsoft 365
        </motion.h2>

        {/* subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center text-base sm:text-lg text-neutral-600 dark:text-neutral-400"
        >
          Veeam Backup for Microsoft 365 gives you the flexibility to back up your Office 365 data
          anywhere, restore with industry-leading speed and use advanced eDiscovery and compliance tools.
        </motion.p>

        {/* features grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center space-y-4 p-6 border border-primary rounded-xl"
            >
              <Icon className="h-8 w-8 text-primary" />
              <h3 className="text-lg font-semibold text-primary">{title}</h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                {description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
