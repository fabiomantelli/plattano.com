// app/layout.tsx
import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import ClientRoot from './ui/shared/ClientRoot'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plattano Technologies – Empowering Businesses with Secure IT Solutions',
  description:
    'Plattano Technologies specializes in tailored IT services, including data protection, hybrid cloud infrastructure, and cybersecurity, to drive business innovation and resilience.',
  keywords: [
    'Plattano Technologies',
    'IT services',
    'data protection',
    'hybrid cloud',
    'cybersecurity',
    'managed services',
    'cloud backup',
    'digital transformation',
  ],
  icons: {
    icon: [
      { url: '/images/home/favicon.ico', type: 'image/x-icon' },
      { url: '/images/home/favicon-16x16.png', type: 'image/png', sizes: '16x16' },
      { url: '/images/home/favicon-32x32.png', type: 'image/png', sizes: '32x32' },
    ],
    apple: [{ url: '/images/home//apple-touch-icon.png', sizes: '180x180' }],
    other: [
      { rel: 'icon', url: '/images/home/android-chrome-192x192.png', sizes: '192x192' },
      { rel: 'icon', url: '/images/home/android-chrome-512x512.png', sizes: '512x512' },
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientRoot>
          {/* main content with padding for fixed header */}
          <main className="pt-[100px]">{children}</main>
        </ClientRoot>
      </body>
    </html>
  )
}
