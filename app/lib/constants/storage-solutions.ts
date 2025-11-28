export interface StorageSolution {
  id: string
  name: string
  tagline: string
  description: string
  features: {
    title: string
    description: string
    icon: string
  }[]
  idealFor: string[]
  pricing: string
}

export const exagrid: StorageSolution = {
  id: 'exagrid',
  name: 'ExaGrid',
  tagline: 'Backup Storage Appliance',
  description:
    'Market-leading backup storage appliance with deduplication. Up to 95% data reduction.',
  features: [
    {
      icon: '🗜️',
      title: 'Advanced Deduplication',
      description: 'Up to 95% reduction',
    },
    {
      icon: '⚡',
      title: 'Ultra-Fast Performance',
      description: 'Fastest backup/restore',
    },
    {
      icon: '📈',
      title: 'Linear Scalability',
      description: 'Add appliances as needed',
    },
    {
      icon: '🔒',
      title: 'Retention Lock',
      description: 'Ransomware protection',
    },
    {
      icon: '🤝',
      title: 'Native Integration',
      description: 'Veeam, Commvault, Veritas',
    },
    {
      icon: '🎯',
      title: 'Tiered Storage',
      description: 'Landing zone + repository',
    },
  ],
  idealFor: [
    'Large Veeam environments (>10TB)',
    'Need for performance',
    'Predictable growth',
    'On-premises infrastructure',
  ],
  pricing: 'Starting at $X/TB/month',
}

export const plattanoHot: StorageSolution = {
  id: 'plattano-hot',
  name: 'Plattano Hot Cloud Storage',
  tagline: 'S3-Compatible Cloud Storage',
  description:
    'S3-compatible cloud storage with integrated ransomware protection. Transparent pricing.',
  features: [
    {
      icon: '☁️',
      title: 'S3 Compatible',
      description: 'Drop-in replacement',
    },
    {
      icon: '🛡️',
      title: 'Ransomware Protection',
      description: 'Integrated immutability',
    },
    {
      icon: '💰',
      title: 'Transparent Pricing',
      description: 'No surprises',
    },
    {
      icon: '🚀',
      title: 'Guaranteed Performance',
      description: '99.9% SLA',
    },
    {
      icon: '🌐',
      title: 'Multi-Region',
      description: 'Global availability',
    },
    {
      icon: '📊',
      title: 'Usage Analytics',
      description: 'Real-time monitoring',
    },
  ],
  idealFor: [
    'Cloud-first workloads',
    'Off-site backup',
    'Unpredictable growth',
    'No CAPEX requirement',
  ],
  pricing: '$X/TB/month (flat rate)',
}

export const storageStats = [
  { value: '40%', label: 'Annual data growth' },
  { value: '60%', label: 'Potential savings with deduplication' },
  { value: '3x', label: 'Faster backups with ExaGrid' },
  { value: '99.9%', label: 'Uptime SLA' },
]

export const comparisonTable = [
  {
    criterion: 'Deployment',
    exagrid: 'On-premises',
    plattanoHot: 'Cloud',
  },
  {
    criterion: 'CAPEX',
    exagrid: 'Yes',
    plattanoHot: 'No',
  },
  {
    criterion: 'Scalability',
    exagrid: 'Linear',
    plattanoHot: 'Unlimited',
  },
  {
    criterion: 'Performance',
    exagrid: 'Ultra-fast',
    plattanoHot: 'Fast',
  },
  {
    criterion: 'Maintenance',
    exagrid: 'Minimal',
    plattanoHot: 'Zero',
  },
  {
    criterion: 'Ideal for',
    exagrid: '>10TB on-prem',
    plattanoHot: 'Cloud-first',
  },
]

export const caseStudies = [
  {
    industry: 'Manufacturing',
    challenge: '50TB backups, 30% annual growth',
    solution: 'ExaGrid + Veeam',
    result: '60% savings, 3x faster backup',
  },
  {
    industry: 'SaaS Startup',
    challenge: 'Expensive cloud storage, unpredictable growth',
    solution: 'Plattano Hot Storage',
    result: '40% savings, guaranteed scalability',
  },
  {
    industry: 'Enterprise',
    challenge: 'Hybrid (on-prem + cloud)',
    solution: 'ExaGrid (on-prem) + Plattano Hot (cloud)',
    result: 'Best of both worlds, cross-site DR',
  },
]

export const faqs = [
  {
    question: 'Does ExaGrid work with Veeam?',
    answer: 'Yes. Native and certified integration.',
  },
  {
    question: 'Is Plattano Hot S3 compatible?',
    answer: 'Yes. 100% compatible with S3 API.',
  },
  {
    question: 'What is the cost of ExaGrid?',
    answer: 'Depends on the model. Starting at $X for 10TB.',
  },
  {
    question: 'Does Plattano Hot have lock-in?',
    answer: 'No. Standard S3 API, easy migration.',
  },
  {
    question: 'Do you offer POC?',
    answer: 'Yes. Free 30-day POC for both solutions.',
  },
  {
    question: 'Can I use both together?',
    answer:
      'Yes. Hybrid architecture with ExaGrid on-prem and Plattano Hot for cloud/DR.',
  },
]

export const savingsCalculator = {
  title: 'Calculate Your Savings',
  description: 'See how much you can save with intelligent storage',
  inputs: [
    { label: 'Data volume (TB)', placeholder: '50' },
    { label: 'Annual growth (%)', placeholder: '30' },
    { label: 'Current cost ($/TB)', placeholder: '100' },
  ],
}
