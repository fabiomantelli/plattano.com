'use client'

import { ReactNode } from 'react'
import { ThemeProvider } from 'next-themes'
import Header from '../layout/Header'

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
