// app/layout.tsx
import './globals.css'
import { Geist, Geist_Mono } from 'next/font/google'
import { Sofia_Sans, Ubuntu } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import Header from './ui/layout/Header'
import { SafeAnalytics } from './ui/analytics/SafeAnalytics' // ✅ versão segura com Suspense
import PreloadImages from './components/PreloadImages'
import CriticalCSS from './components/CriticalCSS'
import AdvancedResourceHints from './components/AdvancedResourceHints'
import MicrosoftClarity from './components/MicrosoftClarity'

const geistSans = Geist({ 
  variable: '--font-geist-sans', 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})
const geistMono = Geist_Mono({ 
  variable: '--font-geist-mono', 
  subsets: ['latin'],
  display: 'swap',
  preload: true
})
const sofiaSans = Sofia_Sans({
  variable: '--font-sofia',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  display: 'swap',
  preload: true
})
const ubuntu = Ubuntu({
  variable: '--font-ubuntu',
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'Plattano Technologies',
  description:
    'Plattano Technologies, based in Orlando, Florida, specializes in tailored IT services, including data protection, hybrid cloud infrastructure, and cybersecurity.',
    keywords: [
      'Plattano Technologies',
      'IT services',
      'data protection',
      'hybrid cloud',
      'cybersecurity',
      'managed services',
      'cloud backup',
      'digital transformation',
      'VMware by Broadcom',
      'Veeam',
      'ExaGrid',
      'SentinelOne',
      'Rainforest QA',
      'Orlando IT company',
      'Orlando cybersecurity',
    ],    
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon' },
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
        {/* ✅ Google Analytics tag safe for SSR */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                send_page_view: false
              });
            `,
          }}
        />

        {/* ✅ Theme detection script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function() {
              try {
                const theme = localStorage.getItem('theme');
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
              } catch (_) {}
            })();`,
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Plattano Technologies",
              "image": "https://plattano.com/images/home/apple-touch-icon.png", // ou outro logo da empresa
              "url": "https://plattano.com",
              "telephone": "+1-321-313-8762", // substitua com o telefone real
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "7345 W Sand Lake Rd Ste 210 Office 6438", // substitua com seu endereço real
                "addressLocality": "Orlando",
                "addressRegion": "FL",
                "postalCode": "32819",
                "addressCountry": "US"
              },
              "description": "Plattano Technologies is a trusted provider of IT services, including cybersecurity, cloud infrastructure, and data protection. We are official resellers of VMware by Broadcom, Veeam, ExaGrid, SentinelOne and Rainforest QA.",
              "sameAs": [
                "https://www.linkedin.com/company/plattano-technologies/",
                "https://www.youtube.com/@plattanotechnologies8157",
                "https://www.instagram.com/plattanotechnologies.us/"
              ]
            }),
          }}
        />

      </head>
 <body className={`${geistSans.variable} ${geistMono.variable} ${sofiaSans.variable} ${ubuntu.variable} antialiased`}>
        <CriticalCSS />
        <AdvancedResourceHints />
        <PreloadImages />
        <Header />
          <main className="pt-[100px]">{children}</main>
          <SafeAnalytics />
          <MicrosoftClarity projectId={process.env.NEXT_PUBLIC_CLARITY_ID || ''} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                if ('serviceWorker' in navigator) {
                  window.addEventListener('load', function() {
                    navigator.serviceWorker.register('/sw.js')
                      .then(function(registration) {
                        console.log('SW registered: ', registration);
                      })
                      .catch(function(registrationError) {
                        console.log('SW registration failed: ', registrationError);
                      });
                  });
                }
              `
            }}
          />
        </body>
    </html>
  )
}
