// app/layout.tsx
import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import Header from './ui/layout/Header'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plattano Technologies | Secure IT, Backup & Cybersecurity Solutions in Orlando',
  description:
    'Plattano Technologies empowers businesses with secure IT solutions—from managed backup and cloud infrastructure to cybersecurity, ransomware protection, and partner services with Veeam, SentinelOne, ExaGrid, and Rainforest.tech.',
  keywords: [
    'Plattano Technologies',
    'cybersecurity Orlando',
    'IT services USA',
    'managed backup services',
    'Veeam partner Orlando',
    'SentinelOne reseller',
    'Rainforest.tech distributor',
    'ExaGrid backup appliances',
    'hot cloud storage',
    'hybrid cloud infrastructure',
    'secure IT services Florida',
  ],
  alternates: {
    canonical: 'https://plattano.com/',
  },
  openGraph: {
    title: 'Plattano Technologies | End-to-End Secure IT & Cloud Services in the U.S.',
    description:
      'IT services and cybersecurity for modern businesses: from secure backup and cloud to threat detection and partner integrations. Based in Orlando, serving clients nationwide.',
    url: 'https://plattano.com/',
    siteName: 'Plattano Technologies',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: [
      { url: '/images/home/favicon.ico', type: 'image/x-icon' },
      { url: '/images/home/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/images/home/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/images/home/apple-touch-icon.png', sizes: '180x180' }],
    other: [
      { rel: 'icon', url: '/images/home/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/images/home/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefer s-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            })();`,
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        <main className="pt-[100px]">{children}</main>
      </body>
    </html>
  )
}
