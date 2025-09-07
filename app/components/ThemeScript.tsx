'use client'

import { useEffect, useState } from 'react'

export default function ThemeScript() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    // Execute theme script on client side only
    try {
      const theme = localStorage.getItem('theme') || 'dark';
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      const shouldBeDark = theme === 'dark' || (theme === 'system' && systemPrefersDark);
      
      if (shouldBeDark) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } catch (e) {
      // Fallback to dark theme if there's an error
      document.documentElement.classList.add('dark');
    }
  }, [])

  // Don't render anything during SSR to prevent hydration mismatch
  if (!mounted) {
    return null
  }

  return null
}