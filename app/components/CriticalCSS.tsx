'use client'

import { useEffect, useState } from 'react'

export default function CriticalCSS() {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    // Detect mobile on client side
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Only inject CSS on client after mount to prevent hydration mismatch
    if (!mounted) return
    
    // Inject critical CSS for above-the-fold content
    const criticalCSS = `
      /* Critical CSS for above-the-fold content - LCP optimization */
      .hero-section {
        contain: layout style paint;
        content-visibility: auto;
        will-change: transform;
      }
      
      /* Prevent FOUC - ensure correct background from start (desktop only) */
      @media (min-width: 640px) {
        /* Specific HeroSection background fix - more specific selector */
        section.relative.w-full.h-\[65vh\][class*="bg-gradient-to-b"] {
          background: linear-gradient(to bottom, #f9fafb, #ffffff) !important;
        }
      }
      
      @media (min-width: 640px) and (prefers-color-scheme: dark) {
        /* Specific HeroSection background fix - more specific selector */
        section.relative.w-full.h-\[65vh\][class*="bg-gradient-to-b"] {
          background: linear-gradient(to bottom, #111827, #000000) !important;
        }
      }
      
      /* Font loading optimization */
      .font-sofia {
        font-display: swap;
        font-feature-settings: 'kern' 1;
      }
      
      /* Hero text optimization for LCP */
      .hero-title {
        contain: layout style;
        transform: translateZ(0);
        backface-visibility: hidden;
      }
      
      /* Mobile-specific optimizations */
      ${isMobile ? `
        .hero-section {
          height: 50vh !important;
          background-attachment: scroll !important;
        }
        
        .hero-section h1 {
          font-size: 1.5rem !important;
          line-height: 1.3 !important;
          will-change: auto;
        }
        
        .hero-section p {
          font-size: 0.9rem !important;
          margin-top: 1rem !important;
        }
        
        /* Mobile-first typography optimizations */
        @media (max-width: 768px) {
          h1 { 
            font-size: 1.5rem !important; 
            line-height: 1.3 !important;
            font-weight: 700 !important; /* Reduce from 800 to 700 */
          }
          h2 { font-size: 1.25rem !important; }
          h3 { font-size: 1.125rem !important; }
          .text-6xl { font-size: 1.875rem !important; }
          .text-4xl { font-size: 1.5rem !important; }
          .text-2xl { font-size: 1.25rem !important; }
          
          /* Disable expensive effects on mobile */
          .drop-shadow-\[0_0_2px_rgba\(237\,110\,0\,0\.8\)\] {
            filter: none !important;
          }
          
          /* Optimize animations for mobile */
          * {
            animation-duration: 0.2s !important;
            transition-duration: 0.2s !important;
          }
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
  }, [mounted, isMobile])

  // Don't render anything during SSR to prevent hydration mismatch
  if (!mounted) {
    return null
  }
  
  return null
}