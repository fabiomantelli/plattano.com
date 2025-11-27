export interface VeeamSolution {
  id: string
  title: string
  description: string
  features: string[]
  useCases: string[]
  icon: string
}

export const veeamSolutions: VeeamSolution[] = [
  {
    id: 'backup-replication',
    title: 'Veeam Backup & Replication',
    description: 'Complete backup for VMs, physical servers, and workstations.',
    icon: '💾',
    features: [
      'Incremental forever backup',
      'Instant VM recovery',
      'Replication for DR',
      'Support for VMware, Hyper-V, Nutanix',
      'Workstation backup',
    ],
    useCases: [
      'Companies with on-premises infrastructure',
      'Virtualized environments',
      'RTO < 15 minutes requirement',
    ],
  },
  {
    id: 'microsoft-365',
    title: 'Veeam for Microsoft 365',
    description: 'Complete backup of Exchange, SharePoint, OneDrive, and Teams.',
    icon: '📧',
    features: [
      'Protection for emails, files, and Teams',
      'Granular recovery (item-level)',
      'Unlimited retention',
      'Advanced eDiscovery',
      'Compliance (GDPR, HIPAA)',
    ],
    useCases: [
      '100% Microsoft 365 companies',
      'Compliance requirements',
      'Protection against accidental deletion',
    ],
  },
  {
    id: 'cloud-backup',
    title: 'Veeam Cloud Backup',
    description: 'Native backup for AWS, Azure, and Google Cloud.',
    icon: '☁️',
    features: [
      'Cloud VM backup',
      'Database backup (RDS, SQL)',
      'Snapshot management',
      'Cross-region replication',
      'Cost optimization',
    ],
    useCases: [
      'Cloud-native workloads',
      'Multi-cloud environments',
      'Cross-region disaster recovery',
    ],
  },
  {
    id: 'recovery-orchestrator',
    title: 'Veeam Recovery Orchestrator',
    description: 'Automated disaster recovery orchestration.',
    icon: '🔄',
    features: [
      'Automated DR plans',
      'Testing without impact',
      'Automatic failover/failback',
      'Compliance reporting',
      'Runbook automation',
    ],
    useCases: [
      'Companies with critical SLA',
      'Strict compliance',
      'Frequent DR testing',
    ],
  },
  {
    id: 'veeam-one',
    title: 'Veeam ONE',
    description: 'Monitoring and analytics for Veeam infrastructure.',
    icon: '📊',
    features: [
      '24/7 monitoring',
      'Capacity planning',
      'Performance optimization',
      'Proactive alerts',
      'Compliance dashboards',
    ],
    useCases: [
      'Large Veeam environments',
      'Need for visibility',
      'Cost optimization',
    ],
  },
]

export interface ManagedService {
  id: string
  title: string
  description: string
  features: string[]
  icon: string
}

export const managedServices: ManagedService[] = [
  {
    id: 'managed-backup',
    title: 'Managed Backup Service',
    description: 'Complete 24/7 management',
    icon: '🛡️',
    features: [
      'Proactive monitoring',
      'Dedicated support',
      'Guaranteed SLA',
      'Regular reporting',
    ],
  },
  {
    id: 'offsite-backup',
    title: 'Off-site Backup',
    description: 'Backup to our datacenter',
    icon: '🌐',
    features: [
      'Automatic replication',
      'Monthly restore tests',
      'Compliance included',
      'Secure storage',
    ],
  },
  {
    id: 'baas-cloud',
    title: 'BaaS for Cloud',
    description: 'Backup as a Service',
    icon: '☁️',
    features: [
      'Pay-as-you-go',
      'No CAPEX',
      'Scalable',
      'Managed by experts',
    ],
  },
]

export const dataProtectionStats = [
  { value: '60%', label: 'of companies suffer data loss annually' },
  { value: '$4.35M', label: 'average cost per incident' },
  { value: '$300K+', label: 'downtime cost per hour' },
  { value: '150%', label: 'increase in ransomware attacks (2024)' },
]

export const whyPlattano = [
  {
    icon: '🏆',
    title: 'Veeam Gold Partner',
    description: 'Maximum certification level',
  },
  {
    icon: '👨‍💻',
    title: 'Certified Team',
    description: '15+ Veeam engineers',
  },
  {
    icon: '📍',
    title: 'Local Support',
    description: 'Based in Florida, PT/EN support',
  },
  {
    icon: '⚡',
    title: 'Fast Response',
    description: '4-hour SLA',
  },
  {
    icon: '💰',
    title: 'Competitive Pricing',
    description: 'Up to 30% cheaper than competitors',
  },
]

export const caseStudies = [
  {
    industry: 'Healthcare',
    challenge: 'HIPAA compliance + 50TB backup',
    solution: 'Veeam B&R + Managed Service',
    result: '100% compliance, 10 min RTO',
  },
  {
    industry: 'Finance',
    challenge: 'M365 protection + eDiscovery',
    solution: 'Veeam for M365 + Archiving',
    result: '$50K/year savings in litigation',
  },
  {
    industry: 'Manufacturing',
    challenge: 'DR for critical plant',
    solution: 'Veeam + Recovery Orchestrator',
    result: 'Automated DR testing, RTO < 1 hour',
  },
]

export const faqs = [
  {
    question: 'How much does Veeam cost?',
    answer:
      'It depends on your environment. Licensing is per socket, instance, or workload. Request a personalized quote.',
  },
  {
    question: 'Does Veeam protect against ransomware?',
    answer:
      'Yes. Immutable backups, air-gap, and integration with SentinelOne.',
  },
  {
    question: 'Can I test before buying?',
    answer: 'Yes. 30-day trial or free POC.',
  },
  {
    question: 'How long does implementation take?',
    answer:
      'Basic implementation: 1-2 weeks. Complex environments: 4-6 weeks.',
  },
  {
    question: 'Do you offer training?',
    answer: 'Yes. Training included in implementation + documentation.',
  },
  {
    question: 'What is the support SLA?',
    answer: '24/7 support with 4-hour SLA (critical) and 24-hour (non-critical).',
  },
  {
    question: 'Can I migrate from another solution?',
    answer:
      'Yes. We offer assisted migration from Backup Exec, Commvault, etc.',
  },
]
