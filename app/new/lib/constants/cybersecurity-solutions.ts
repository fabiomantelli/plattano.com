export interface CybersecuritySolution {
  id: string
  name: string
  tagline: string
  description: string
  features: {
    title: string
    description: string
    icon: string
  }[]
  useCases: string[]
  differentiators: string[]
}

export const sentinelOne: CybersecuritySolution = {
  id: 'sentinelone',
  name: 'SentinelOne',
  tagline: 'AI-Powered Endpoint Protection',
  description:
    'Industry-leading XDR platform with autonomous AI. Detection and response in less than 1 second.',
  features: [
    {
      icon: '🤖',
      title: 'Autonomous AI',
      description: 'Detection and response without human intervention',
    },
    {
      icon: '⚡',
      title: 'Instant Response',
      description: 'Blocking in < 1 second',
    },
    {
      icon: '🔍',
      title: 'XDR Platform',
      description: 'Complete visibility (endpoint, cloud, identity)',
    },
    {
      icon: '📱',
      title: 'Total Coverage',
      description: 'Windows, Mac, Linux, mobile, containers',
    },
    {
      icon: '🏆',
      title: 'Gartner Leader',
      description: '#1 in EPP and EDR',
    },
    {
      icon: '🔄',
      title: 'Automatic Rollback',
      description: 'Ransomware rollback without data loss',
    },
  ],
  useCases: [
    'Companies with distributed endpoints',
    'Need for automatic response',
    'Heterogeneous environments (multi-OS)',
    'Zero Trust security model',
  ],
  differentiators: [
    'No performance impact',
    'Automatic ransomware rollback',
    'Integrated threat hunting',
    'Compliance (PCI-DSS, HIPAA, SOC 2)',
  ],
}

export const rainforest: CybersecuritySolution = {
  id: 'rainforest',
  name: 'Rainforest',
  tagline: 'Brand Protection & Leak Detection',
  description:
    '24/7 brand monitoring and dark web leak detection. Protect your digital reputation.',
  features: [
    {
      icon: '🌐',
      title: 'Brand Intelligence',
      description: '24/7 brand monitoring',
    },
    {
      icon: '🔓',
      title: 'Leak Detection',
      description: 'Detection of leaked credentials',
    },
    {
      icon: '🎭',
      title: 'Fraud Protection',
      description: 'Protection against phishing and fraud',
    },
    {
      icon: '☁️',
      title: 'Cloud Security',
      description: 'Cloud app monitoring',
    },
    {
      icon: '🛡️',
      title: 'App Security',
      description: 'Vulnerability analysis',
    },
    {
      icon: '🚨',
      title: 'Takedown Service',
      description: 'Removal of fraudulent sites',
    },
  ],
  useCases: [
    'Companies with strong digital presence',
    'E-commerce and fintech',
    'Intellectual property protection',
    'Brand reputation management',
  ],
  differentiators: [
    'Dark web monitoring',
    'Fraudulent site takedown',
    'Real-time alerts',
    'Executive reports',
  ],
}

export const threatStats = [
  { value: '11s', label: 'Ransomware attack frequency' },
  { value: '$4.54M', label: 'Average cost per breach' },
  { value: '207 days', label: 'Average detection time' },
  { value: '+150%', label: 'Increase in sophisticated attacks' },
]

export const comparisonTable = [
  {
    need: 'Endpoint protection',
    sentinelone: true,
    rainforest: false,
  },
  {
    need: 'Brand monitoring',
    sentinelone: false,
    rainforest: true,
  },
  {
    need: 'Automatic response',
    sentinelone: true,
    rainforest: false,
  },
  {
    need: 'Leak detection',
    sentinelone: false,
    rainforest: true,
  },
  {
    need: 'Compliance',
    sentinelone: true,
    rainforest: true,
  },
]

export const caseStudies = [
  {
    industry: 'E-commerce',
    challenge: 'Phishing + credential stuffing',
    solution: 'SentinelOne + Rainforest',
    result: '99.8% blocking, $200K saved',
  },
  {
    industry: 'Healthcare',
    challenge: 'Ransomware + HIPAA compliance',
    solution: 'SentinelOne XDR',
    result: 'Zero breaches, audit approved',
  },
  {
    industry: 'Finance',
    challenge: 'Brand fraud + APTs',
    solution: 'Rainforest + SentinelOne',
    result: '15 fraudulent sites removed, 0 incidents',
  },
]

export const faqs = [
  {
    question: 'Does SentinelOne replace traditional antivirus?',
    answer:
      'Yes. It is a next-gen solution that replaces legacy AV with AI-powered protection.',
  },
  {
    question: 'Does Rainforest monitor the dark web?',
    answer:
      'Yes. 24/7 monitoring of forums, marketplaces, and leaks.',
  },
  {
    question: 'How much does it cost?',
    answer:
      'SentinelOne: per endpoint. Rainforest: per domain. Request a quote.',
  },
  {
    question: 'Can I test it?',
    answer: 'Yes. SentinelOne: 30 days. Rainforest: free scan.',
  },
  {
    question: 'Do you offer SOC?',
    answer: 'Yes. SOC as a Service with SentinelOne + 24/7 analysts.',
  },
  {
    question: 'What is the implementation time?',
    answer:
      'SentinelOne: 1-2 weeks. Rainforest: immediate after configuration.',
  },
]
