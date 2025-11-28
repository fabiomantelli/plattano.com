'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone, Mail } from 'lucide-react'
import { mainNav, ctaButton } from '../../lib/constants/navigation'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <nav
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'py-2 glass-effect shadow-modern' 
            : 'py-4 bg-white/80 backdrop-blur-md shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={cn(
            'flex justify-between items-center transition-all duration-300',
            isScrolled ? 'h-14' : 'h-16 md:h-20'
          )}>
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center flex-shrink-0"
              aria-label="Plattano Home"
            >
              <Image
                src="/images/home/logo-black.webp"
                alt="Plattano logo"
                width={isScrolled ? 140 : 180}
                height={isScrolled ? 40 : 50}
                className={cn(
                  'h-auto w-auto transition-all duration-300',
                  isScrolled ? 'max-h-10' : 'max-h-12'
                )}
                priority
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {mainNav.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
                  {...(link.external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  {link.label}
                </Link>
              ))}

              {/* CTA Button */}
              <Button asChild>
                <Link href={ctaButton.href}>{ctaButton.text}</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-600 hover:bg-gray-100 transition-colors"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay - Modern Slide-in */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm z-40 md:hidden animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-in Menu Panel */}
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white z-50 md:hidden shadow-2xl animate-slide-in-right">
            {/* Menu Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <div className="text-xl font-bold text-gray-900">Menu</div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-6 w-6 text-gray-600" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="flex flex-col h-[calc(100%-80px)] overflow-y-auto">
              {/* Navigation Links */}
              <nav className="flex-1 px-4 py-6 space-y-2">
                {mainNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mr-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </Link>
                ))}
              </nav>

              {/* Bottom Section */}
              <div className="p-6 border-t border-gray-100 space-y-4">
                {/* CTA Button */}
                <Button asChild className="w-full" size="lg">
                  <Link
                    href={ctaButton.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {ctaButton.text}
                  </Link>
                </Button>

                {/* Contact Info */}
                <div className="pt-4 space-y-3 text-sm text-gray-600">
                  <a
                    href="tel:+15551234567"
                    className="flex items-center hover:text-primary-600 transition-colors"
                  >
                    <Phone className="h-4 w-4 mr-2" />
                    (555) 123-4567
                  </a>
                  <a
                    href="mailto:info@plattano.com"
                    className="flex items-center hover:text-primary-600 transition-colors"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    info@plattano.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}
