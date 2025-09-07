// app/layout.tsx
import './globals.css'
import localFont from 'next/font/local'
import type { Metadata } from 'next'
import './globals.css'
import Header from './ui/layout/Header'
import { SafeAnalytics } from './ui/analytics/SafeAnalytics' // ✅ versão segura com Suspense
import PreloadImages from './components/PreloadImages'
import CriticalCSS from './components/CriticalCSS'
import AdvancedResourceHints from './components/AdvancedResourceHints'
import MicrosoftClarity from './components/MicrosoftClarity'
import { ThemeProvider } from './providers/ThemeProvider'
import ThemeScript from './components/ThemeScript'

const sofiaSans = localFont({
  src: [
    {
      path: '../public/fonts/SofiaSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/SofiaSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../public/fonts/SofiaSans-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../public/fonts/SofiaSans-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-sofia',
  display: 'swap',
  fallback: ['system-ui', 'arial', 'sans-serif']
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

        <link rel="manifest" href="/manifest.json" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const theme = localStorage.getItem('theme') || 'dark';
                  const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  const shouldBeDark = theme === 'dark' || (theme === 'system' && systemPrefersDark);
                  
                  if (shouldBeDark) {
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })()
            `,
          }}
        />
      </head>
 <body className={`${sofiaSans.variable} font-sans antialiased`}>
        <ThemeScript />
        <CriticalCSS />
        <AdvancedResourceHints />
        <PreloadImages />
        <ThemeProvider>
          <Header />
          <main className="pt-[100px]">{children}</main>
        </ThemeProvider>
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
