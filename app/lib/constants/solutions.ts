export interface Solution {
  id: string
  icon: string
  title: string
  description: string
  stat: string
  href: string
}

export const solutions: Solution[] = [
  {
    id: 'data-protection',
    icon: '💾',
    title: 'Data Protection',
    description: 'Protect your data against ransomware, failures and disasters. Recovery in minutes, not hours.',
    stat: '99.9% uptime',
    href: '/solutions/data-protection',
  },
  {
    id: 'cybersecurity',
    icon: '🛡️',
    title: 'Cybersecurity',
    description: 'AI-powered defense against threats. Automatic detection and response 24/7.',
    stat: '99.8% threat blocking',
    href: '/solutions/cybersecurity',
  },
  {
    id: 'storage',
    icon: '📦',
    title: 'Storage',
    description: 'Scalable storage with deduplication. Save up to 60% on costs.',
    stat: 'Up to 60% savings',
    href: '/solutions/storage',
  },
]

export interface Partner {
  name: string
  logo: string
}

export const partners: Partner[] = [
  { name: 'Veeam', logo: '/images/partners/veeam-logo.svg' },
  { name: 'SentinelOne', logo: '/images/partners/sentinelone-logo.svg' },
  { name: 'ExaGrid', logo: '/images/partners/exagrid-logo.svg' },
  { name: 'Rainforest', logo: '/images/partners/rainforest-logo.svg' },
]

export interface Stat {
  value: string
  label: string
}

export const stats: Stat[] = [
  { value: '15+', label: 'Years of Experience' },
  { value: '500+', label: 'Protected Clients' },
  { value: '40%', label: 'Average Savings' },
]

export interface Testimonial {
  quote: string
  author: string
  role: string
  company: string
}

export const testimonials: Testimonial[] = [
  {
    quote: 'Plattano helped us reduce backup costs by 40% and improve our security. Extremely professional team.',
    author: 'John Smith',
    role: 'CTO',
    company: 'Tech Corp',
  },
  {
    quote: 'The implementation was smooth and the support is outstanding. We feel much more secure now.',
    author: 'Maria Garcia',
    role: 'IT Director',
    company: 'Healthcare Plus',
  },
  {
    quote: 'Best decision we made for our IT infrastructure. ROI was achieved in less than 6 months.',
    author: 'David Chen',
    role: 'VP of Operations',
    company: 'Finance Solutions',
  },
]
