'use client'

/**
 * MobileNavigation Component
 * 
 * Full-screen mobile navigation overlay with hamburger menu.
 * Includes close button and smooth animations.
 * 
 * Requirements: 5.1, 5.2, 5.3
 */

import { useEffect } from 'react'
import Link from 'next/link'
import { navigationConfig } from '../../config/navigation'

export interface MobileNavigationProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileNavigation({ isOpen, onClose }: MobileNavigationProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 md:hidden"
      data-testid="mobile-navigation-overlay"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-gray-900 bg-opacity-50 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div className="absolute inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl">
        <div className="flex flex-col h-full">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <div className="text-xl font-bold text-primary-700">
              Plattano
            </div>
            <button
              type="button"
              onClick={onClose}
              className="p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
              data-testid="mobile-menu-close-button"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-4">
            <ul className="space-y-2">
              {navigationConfig.mainNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block px-4 py-3 text-lg font-medium text-gray-700 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                    {...(link.external && {
                      target: '_blank',
                      rel: 'noopener noreferrer'
                    })}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CTA Button */}
          <div className="p-4 border-t border-gray-200">
            <Link
              href={navigationConfig.ctaButton.href}
              onClick={onClose}
              className="block w-full px-6 py-3 bg-accent-500 text-white text-center rounded-lg hover:bg-accent-600 transition-colors font-semibold"
              data-testid="mobile-nav-cta-button"
            >
              {navigationConfig.ctaButton.text}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
