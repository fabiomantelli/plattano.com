// app/components/Providers.tsx
'use client'

import { ReactNode } from "react"
import { ThemeProvider } from "next-themes"

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="light"   // ou 'system' se quiser default seguindo SO
      enableSystem={false}   // <— desliga o modo automático do sistema
      enableColorScheme={false}
    >
      {children}
    </ThemeProvider>
  )
}
