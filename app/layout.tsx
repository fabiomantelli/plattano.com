// app/layout.tsx
import './globals.css';
import ClientRoot from './components/ClientRoot';
import { Geist, Geist_Mono } from 'next/font/google';
import type { Metadata } from 'next';

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] });
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Plattano Technologies – Empowering Businesses with Secure IT Solutions',
  description: 'Plattano Technologies specializes in tailored IT services, including data protection, hybrid cloud infrastructure, and cybersecurity, to drive business innovation and resilience.',
  keywords: [
    'Plattano Technologies',
    'IT services',
    'data protection',
    'hybrid cloud',
    'cybersecurity',
    'managed services',
    'Veeam',
    'VMware',
    'SentinelOne',
    'Rainforest',
    'cloud storage',
    'backup solutions',
    'Brazil IT company',
    'technology solutions',
    'digital transformation'
  ],
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
    other: [
      { rel: 'icon', url: '/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
};
