// app/layout.tsx
import './globals.css'
import ClientRoot from './components/ClientRoot'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({ variable: '--font-geist-mono', subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientRoot>
          {/* espaço reservado para header fixo de 100px */}
          <main className="pt-[100px]">
            {children}
          </main>
        </ClientRoot>
      </body>
    </html>
  )
}
