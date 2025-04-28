// app/components/ClientRoot.tsx
'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import Header from './Header'

export default function ClientRoot({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      enableColorScheme={false}
    >
      <Header />
      {children}
    </ThemeProvider>
  )
}
