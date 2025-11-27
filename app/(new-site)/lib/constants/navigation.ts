export interface NavLink {
  label: string
  href: string
  external?: boolean
}

export const mainNav: NavLink[] = [
  {
    label: 'Solutions',
    href: '#solutions',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
]

export const ctaButton = {
  text: 'Get Started',
  href: '/contact',
}

export const footerNav = {
  solutions: [
    {
      label: 'Data Protection',
      href: '/solutions/data-protection',
    },
    {
      label: 'Cybersecurity',
      href: '/solutions/cybersecurity',
    },
    {
      label: 'Storage',
      href: '/solutions/storage',
    },
  ],
  company: [
    {
      label: 'About Us',
      href: '/about',
    },
    {
      label: 'Contact',
      href: '/contact',
    },
  ],
  legal: [
    {
      label: 'Privacy Policy',
      href: '/privacy',
    },
  ],
}
