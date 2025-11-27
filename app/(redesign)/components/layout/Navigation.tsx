'use client'

/**
 * Navigation Component
 * 
 * Responsive navigation with sticky scroll behavior.
 * Displays logo, navigation links, and CTA button.
 * 
 * Requirements: 3.1, 7.5
 */

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { navigationConfig } from '../../config/navigation'
import MobileNavigation from './MobileNavigation'

export interface NavigationProps {
  variant?: 'transparent' | 'solid'
  sticky?: boolean
}

export default function Navigation({ 
  variant = 'solid', 
  sticky = true 
}: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    if (!sticky) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [sticky])

  const navClasses = `
    w-full transition-all duration-300 z-50
    ${sticky ? 'sticky top-0' : 'relative'}
    ${isScrolled || variant === 'solid' 
      ? 'bg-white shadow-md' 
      : 'bg-transparent'
    }
  `

  return (
    <nav className={navClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center space-x-2"
            aria-label="Plattano Home"
          >
            <div className="text-2xl font-bold text-primary-700">
              Plattano
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationConfig.mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                {...(link.external && { 
                  target: '_blank', 
                  rel: 'noopener noreferrer' 
                })}
              >
                {link.label}
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href={navigationConfig.ctaButton.href}
              className="px-6 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors font-semibold"
              data-testid="nav-cta-button"
            >
              {navigationConfig.ctaButton.text}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
              aria-label="Open menu"
              data-testid="mobile-menu-button"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <MobileNavigation 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
      />
    </nav>
  )
}
