'use client'

import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Evita mismatch entre SSR e CSR
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Se o tema for "system", respeita o sistema operacional
  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      aria-label="Alternar tema"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 focus:outline-none focus:ring transition text-black dark:text-primary"
    >
      {currentTheme === 'dark' ? (
        // ícone de Sol para modo claro
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364-6.364l-1.414 1.414M6.05 17.95l-1.414 1.414M17.95 17.95l-1.414-1.414M6.05 6.05L4.636 7.464M12 7a5 5 0 000 10 5 5 0 000-10z"
          />
        </svg>
      ) : (
        // ícone de Lua para modo escuro
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 118.646 3.646 7 7 0 0020.354 15.354z"
          />
        </svg>
      )}
    </button>
  )
}