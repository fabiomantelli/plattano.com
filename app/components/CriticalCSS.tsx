'use client'

import { useEffect, useState } from 'react'

export default function CriticalCSS() {
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    // Detect mobile on client side
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Inject critical CSS for above-the-fold content
    const criticalCSS = `
      /* Critical CSS for above-the-fold content */
      .hero-section {
        contain: layout style paint;
        content-visibility: auto;
      }
      
      /* Mobile-specific optimizations */
      ${isMobile ? `
        .hero-section {
          height: 50vh !important;
        }
        
        .hero-section h1 {
          font-size: 1.5rem !important;
          line-height: 1.3 !important;
        }
        
        .hero-section p {
          font-size: 0.9rem !important;
          margin-top: 1rem !important;
        }
        
        /* Reduce motion on mobile for better performance */
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
        
        /* Optimize background for mobile */
        .bg-optimized {
          background-attachment: scroll !important;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
      ` : ''}
      
      /* Performance optimizations */
      .animate-pulse {
        animation: pulse 1.5s ease-in-out infinite;
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 0.4; }
        50% { opacity: 0.6; }
      }
      
      /* Preload optimization */
      .preload-hint {
        content-visibility: auto;
        contain-intrinsic-size: 0 500px;
      }
    `

    // Create and inject style element
    const styleElement = document.createElement('style')
    styleElement.id = 'critical-css'
    styleElement.textContent = criticalCSS
    
    // Remove existing critical CSS if any
    const existingStyle = document.getElementById('critical-css')
    if (existingStyle) {
      existingStyle.remove()
    }
    
    document.head.appendChild(styleElement)

    return () => {
      const element = document.getElementById('critical-css')
      if (element) {
        element.remove()
      }
    }
  }, [isMobile])

  return null
}