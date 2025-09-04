'use client'

import { useEffect } from 'react'
import Script from 'next/script'

interface MicrosoftClarityProps {
  projectId: string
}

export default function MicrosoftClarity({ projectId }: MicrosoftClarityProps) {
  useEffect(() => {
    // Initialize Clarity only if projectId is provided
    if (typeof window !== 'undefined' && projectId && !window.clarity) {
      window.clarity = window.clarity || function(...args: any[]) {
        (window.clarity.q = window.clarity.q || []).push(args)
      }
    }
  }, [projectId])

  // Don't render script if no projectId is provided
  if (!projectId) {
    return null
  }

  return (
    <>
      <Script
        id="microsoft-clarity"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${projectId}");
          `,
        }}
      />
    </>
  )
}

// Extend window interface for TypeScript
declare global {
  interface Window {
    clarity: {
      (...args: any[]): void
      q?: any[]
    }
  }
}