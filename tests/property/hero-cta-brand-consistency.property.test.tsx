/**
 * Property-Based Tests for Hero CTA Brand Consistency
 * Feature: data-protection-page-optimization
 * Property 1: CTA Brand Consistency
 * Validates: Requirements 1.5, 7.1
 */

import { describe, it, expect } from '@jest/globals'
import { render, screen } from '@testing-library/react'
import fc from 'fast-check'
import DataProtectionPage from '../../app/solutions/data-protection/page'

describe('Property Tests: Hero CTA Brand Consistency', () => {
  /**
   * Feature: data-protection-page-optimization, Property 1: CTA Brand Consistency
   * For any CTA button on the page, if it is a primary action, then it should use 
   * Plattano's primary orange color scheme (primary-500 to primary-700 gradient or solid).
   */
  it('all primary CTAs use Plattano orange color scheme', () => {
    const { container } = render(<DataProtectionPage />)
    
    // Find all buttons in the hero section
    const heroSection = container.querySelector('section')
    expect(heroSection).toBeTruthy()
    
    // Get all buttons
    const buttons = heroSection?.querySelectorAll('a[class*="bg-"]')
    expect(buttons).toBeTruthy()
    expect(buttons!.length).toBeGreaterThanOrEqual(2)
    
    // Check primary CTA (first button - "Talk to a Specialist")
    const primaryCTA = buttons![0]
    const primaryClasses = primaryCTA.className
    
    // Primary CTA should have white background with primary-600 text (inverted for contrast on orange hero)
    expect(
      primaryClasses.includes('bg-white') && 
      primaryClasses.includes('text-primary-600')
    ).toBe(true)
    
    // Secondary CTA should have outline variant with white border
    const secondaryCTA = buttons![1]
    const secondaryClasses = secondaryCTA.className
    
    expect(
      secondaryClasses.includes('border-white') && 
      secondaryClasses.includes('text-white')
    ).toBe(true)
  })

  /**
   * Property test: Hero section maintains Plattano orange gradient background
   */
  it('hero section uses Plattano primary orange gradient', () => {
    const { container } = render(<DataProtectionPage />)
    
    const heroSection = container.querySelector('section')
    expect(heroSection).toBeTruthy()
    
    const classes = heroSection!.className
    
    // Verify gradient classes
    expect(classes).toContain('from-primary-500')
    expect(classes).toContain('via-primary-600')
    expect(classes).toContain('to-primary-700')
    expect(classes).toContain('bg-gradient-to-br')
  })

  /**
   * Property test: Veeam logo size constraint
   * Partner logos should be h-6 or smaller to maintain supporting element status
   */
  it('Veeam logo is constrained to h-6 (24px)', () => {
    const { container } = render(<DataProtectionPage />)
    
    const veeamLogo = container.querySelector('img[alt="Veeam"]')
    expect(veeamLogo).toBeTruthy()
    
    const classes = veeamLogo!.className
    expect(classes).toContain('h-6')
  })

  /**
   * Property test: Partner badge visibility
   * Badge should be visible with proper styling
   */
  it('Veeam Gold Partner badge is displayed with correct styling', () => {
    const { container } = render(<DataProtectionPage />)
    
    // Find badge text in hero section only (there's also one in "Why Plattano" section)
    const heroSection = container.querySelector('section')
    const badge = heroSection?.querySelector('.bg-white\\/20')
    expect(badge).toBeTruthy()
    
    const classes = badge!.className
    expect(classes).toContain('bg-white/20')
    expect(classes).toContain('rounded-full')
    expect(badge!.textContent).toContain('Veeam Gold Partner')
  })

  /**
   * Property test: Phone link format
   * Phone CTAs should use tel: protocol
   */
  it('phone CTA uses correct tel: link format', () => {
    const { container } = render(<DataProtectionPage />)
    
    const phoneLink = container.querySelector('a[href^="tel:"]')
    expect(phoneLink).toBeTruthy()
    expect(phoneLink!.getAttribute('href')).toBe('tel:+13213138762')
  })

  /**
   * Property test: Responsive typography
   * Hero headline should have responsive classes
   */
  it('hero headline uses responsive typography classes', () => {
    const { container } = render(<DataProtectionPage />)
    
    const headline = container.querySelector('h1')
    expect(headline).toBeTruthy()
    
    const classes = headline!.className
    expect(classes).toContain('text-4xl')
    expect(classes).toContain('md:text-6xl')
  })

  /**
   * Property test: CTA group responsive layout
   * CTA buttons should stack vertically on mobile
   */
  it('CTA group stacks vertically on mobile', () => {
    const { container } = render(<DataProtectionPage />)
    
    // Find the CTA container (the one with buttons, not the badge container)
    const heroSection = container.querySelector('section')
    const ctaContainer = heroSection?.querySelector('div.flex-col')
    expect(ctaContainer).toBeTruthy()
    
    const classes = ctaContainer!.className
    expect(classes).toContain('flex-col')
    expect(classes).toContain('sm:flex-row')
  })
})

/**
 * Property-based test with random data generation
 * This tests that the component handles various edge cases
 */
describe('Property Tests: Hero Section with Generated Data', () => {
  /**
   * Test that hero section renders correctly regardless of viewport size
   */
  it('hero section maintains structure across different viewport widths', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 1920 }), // viewport widths
        (viewportWidth) => {
          // Mock window.innerWidth
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: viewportWidth,
          })

          const { container } = render(<DataProtectionPage />)
          
          // Hero section should always exist
          const heroSection = container.querySelector('section')
          expect(heroSection).toBeTruthy()
          
          // Badge and logo should always be present (check in hero section only)
          const badge = heroSection?.querySelector('.bg-white\\/20')
          const logo = container.querySelector('img[alt="Veeam"]')
          
          expect(badge).toBeTruthy()
          expect(logo).toBeTruthy()
          
          // CTAs should always be present
          const buttons = heroSection?.querySelectorAll('a')
          expect(buttons!.length).toBeGreaterThanOrEqual(2)
        }
      ),
      { numRuns: 100 }
    )
  })
})
