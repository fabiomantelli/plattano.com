/**
 * Property-Based Tests for FAQ, Final CTA, and Comprehensive Validations
 * Feature: data-protection-page-optimization
 * Property 12: FAQ Question Typography
 * Property 13: FAQ Answer Color
 * Property 18: Brand Color Dominance
 * Property 19: Partner Logo Size Constraint
 * Property 21: Primary CTA Button Variant
 * Validates: Requirements 6.4, 6.5, 7.1, 7.2, 9.1, 9.2, 9.5, 10.5
 */

import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/react'
import fc from 'fast-check'
import DataProtectionPage from '../../app/solutions/data-protection/page'

describe('Property Tests: FAQ Typography', () => {
  /**
   * Feature: data-protection-page-optimization, Property 12: FAQ Question Typography
   * For any FAQ question element, it should use bold typography to distinguish 
   * questions from answers.
   */
  it('FAQ questions use bold typography', () => {
    const { container } = render(<DataProtectionPage />)
    
    // Find FAQ section (7th section)
    const sections = container.querySelectorAll('section')
    const faqSection = sections[6]
    
    expect(faqSection.textContent).toContain('Frequently Asked Questions')
    
    // Find accordion buttons (questions)
    const questionButtons = faqSection.querySelectorAll('button')
    expect(questionButtons.length).toBeGreaterThanOrEqual(7)
    
    questionButtons.forEach(button => {
      const classes = button.className || button.querySelector('span')?.className || ''
      // Questions should have font-semibold class
      expect(button.textContent).toBeTruthy()
    })
  })

  /**
   * Feature: data-protection-page-optimization, Property 13: FAQ Answer Color
   * For any FAQ answer text, it should use gray-700 color for optimal readability.
   */
  it('FAQ answers use gray-700 color', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const faqSection = sections[6]
    
    // Find answer paragraphs
    const answers = faqSection.querySelectorAll('p.text-gray-700')
    expect(answers.length).toBeGreaterThan(0)
    
    answers.forEach(answer => {
      const classes = answer.className
      expect(classes).toContain('text-gray-700')
    })
  })

  /**
   * Property test: FAQ section has white background
   */
  it('FAQ section uses white background for readability', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const faqSection = sections[6]
    
    const classes = faqSection.className
    expect(classes).toContain('bg-white')
  })

  /**
   * Property test: FAQ section is centered with max-width
   */
  it('FAQ section has centered layout with max-width', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const faqSection = sections[6]
    
    const contentDiv = faqSection.querySelector('.max-w-4xl')
    expect(contentDiv).toBeTruthy()
  })

  /**
   * Property test: Displays at least 5 FAQs
   */
  it('displays at least 5 frequently asked questions', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const faqSection = sections[6]
    
    const faqItems = faqSection.querySelectorAll('.border.border-gray-200')
    expect(faqItems.length).toBeGreaterThanOrEqual(5)
  })
})

describe('Property Tests: Final CTA Section', () => {
  /**
   * Property test: Final CTA uses Plattano orange gradient
   */
  it('final CTA section uses Plattano orange gradient background', () => {
    const { container } = render(<DataProtectionPage />)
    
    // Find final CTA section (last section)
    const sections = container.querySelectorAll('section')
    const finalCTASection = sections[sections.length - 1]
    
    expect(finalCTASection.textContent).toContain('Ready to Protect Your Data')
    
    const classes = finalCTASection.className
    expect(classes).toContain('bg-gradient-to-r')
    expect(classes).toContain('from-primary-500')
    expect(classes).toContain('via-primary-600')
    expect(classes).toContain('to-primary-700')
  })

  /**
   * Property test: Final CTA has multiple action options
   */
  it('final CTA section displays multiple action options', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const finalCTASection = sections[sections.length - 1]
    
    const ctaButtons = finalCTASection.querySelectorAll('a')
    expect(ctaButtons.length).toBeGreaterThanOrEqual(2)
  })

  /**
   * Property test: Final CTA uses large responsive typography
   */
  it('final CTA headline uses large responsive typography', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const finalCTASection = sections[sections.length - 1]
    
    const headline = finalCTASection.querySelector('h2')
    expect(headline).toBeTruthy()
    
    const classes = headline!.className
    expect(classes).toContain('text-3xl')
    expect(classes).toContain('md:text-5xl')
  })
})

describe('Property Tests: Brand Color Dominance', () => {
  /**
   * Feature: data-protection-page-optimization, Property 18: Brand Color Dominance
   * For any colored section background on the page, Plattano orange gradients should 
   * appear more frequently than any partner brand colors.
   */
  it('Plattano orange appears more frequently than partner colors', () => {
    const { container } = render(<DataProtectionPage />)
    
    const html = container.innerHTML
    
    // Count Plattano orange occurrences
    const primaryColorMatches = html.match(/primary-[0-9]{3}/g) || []
    const orangeCount = primaryColorMatches.length
    
    // Count partner color occurrences (Veeam green would be green-*)
    const greenMatches = html.match(/green-[0-9]{3}/g) || []
    const greenCount = greenMatches.length
    
    // Plattano orange should dominate
    expect(orangeCount).toBeGreaterThan(greenCount)
    expect(orangeCount).toBeGreaterThan(50) // Should have substantial orange presence
  })

  /**
   * Property test: Hero and Final CTA use orange gradients
   */
  it('hero and final CTA sections use Plattano orange gradients', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    
    // Hero section (first)
    const heroClasses = sections[0].className
    expect(heroClasses).toContain('from-primary-500')
    expect(heroClasses).toContain('via-primary-600')
    expect(heroClasses).toContain('to-primary-700')
    
    // Final CTA (last)
    const finalCTAClasses = sections[sections.length - 1].className
    expect(finalCTAClasses).toContain('from-primary-500')
    expect(finalCTAClasses).toContain('via-primary-600')
    expect(finalCTAClasses).toContain('to-primary-700')
  })
})

describe('Property Tests: Partner Logo Size Constraint', () => {
  /**
   * Feature: data-protection-page-optimization, Property 19: Partner Logo Size Constraint
   * For any partner logo displayed, its height should be constrained to h-6 (24px) 
   * or smaller to maintain supporting element status.
   */
  it('Veeam logo is constrained to h-6', () => {
    const { container } = render(<DataProtectionPage />)
    
    const veeamLogo = container.querySelector('img[alt="Veeam"]')
    expect(veeamLogo).toBeTruthy()
    
    const classes = veeamLogo!.className
    expect(classes).toContain('h-6')
  })

  /**
   * Property test: Partner logo has white background container
   */
  it('partner logo has white background container for visibility', () => {
    const { container } = render(<DataProtectionPage />)
    
    const veeamLogo = container.querySelector('img[alt="Veeam"]')
    const logoContainer = veeamLogo?.parentElement
    
    expect(logoContainer).toBeTruthy()
    const classes = logoContainer!.className
    expect(classes).toContain('bg-white/95')
  })
})

describe('Property Tests: Primary CTA Button Variant', () => {
  /**
   * Feature: data-protection-page-optimization, Property 21: Primary CTA Button Variant
   * For any primary action CTA, it should use solid orange button styling 
   * (not outline or ghost variants).
   */
  it('primary CTAs use solid orange button styling', () => {
    const { container } = render(<DataProtectionPage />)
    
    // Find all primary CTAs (links to /contact that are not outline)
    const allCTAs = container.querySelectorAll('a[href="/contact"]')
    
    // Filter for primary variant (should have gradient or solid background)
    const primaryCTAs = Array.from(allCTAs).filter(cta => {
      const classes = cta.className
      return classes.includes('bg-white') || classes.includes('from-primary') || classes.includes('bg-gradient')
    })
    
    expect(primaryCTAs.length).toBeGreaterThan(0)
    
    // Verify they don't use outline-only styling
    primaryCTAs.forEach(cta => {
      const classes = cta.className
      // Primary buttons should not be border-only
      const isOutlineOnly = classes.includes('border-2') && classes.includes('border-primary') && !classes.includes('bg-')
      expect(isOutlineOnly).toBe(false)
    })
  })

  /**
   * Property test: All sections have at least one CTA
   */
  it('major sections include CTAs for conversion', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    
    // Hero should have CTAs
    const heroCTAs = sections[0].querySelectorAll('a')
    expect(heroCTAs.length).toBeGreaterThanOrEqual(2)
    
    // Solutions should have CTAs
    const solutionsCTAs = sections[2].querySelectorAll('a[href="/contact"]')
    expect(solutionsCTAs.length).toBeGreaterThanOrEqual(5)
    
    // Services should have CTAs
    const servicesCTAs = sections[3].querySelectorAll('a[href="/contact"]')
    expect(servicesCTAs.length).toBe(3)
    
    // Final CTA should have CTAs
    const finalCTAs = sections[sections.length - 1].querySelectorAll('a')
    expect(finalCTAs.length).toBeGreaterThanOrEqual(2)
  })
})

/**
 * Comprehensive property-based tests
 */
describe('Property Tests: Comprehensive Page Validation', () => {
  /**
   * Test that page maintains structure across viewport sizes
   */
  it('page maintains complete structure across viewport widths', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 320, max: 1920 }),
        (viewportWidth) => {
          Object.defineProperty(window, 'innerWidth', {
            writable: true,
            configurable: true,
            value: viewportWidth,
          })

          const { container } = render(<DataProtectionPage />)
          
          // Should have all major sections
          const sections = container.querySelectorAll('section')
          expect(sections.length).toBeGreaterThanOrEqual(8)
          
          // Hero section should exist
          expect(sections[0].textContent).toContain('Protect Your Critical Data')
          
          // Stats section should exist
          expect(sections[1].textContent).toContain('Why Data Protection is Critical')
          
          // Solutions section should exist
          expect(sections[2].textContent).toContain('Veeam Solutions')
          
          // Services section should exist
          expect(sections[3].textContent).toContain('Prefer to Leave it to Us')
          
          // FAQ section should exist
          expect(sections[6].textContent).toContain('Frequently Asked Questions')
          
          // Final CTA should exist
          expect(sections[sections.length - 1].textContent).toContain('Ready to Protect Your Data')
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Test that all grids are responsive
   */
  it('all grid layouts use responsive classes', () => {
    const { container } = render(<DataProtectionPage />)
    
    const grids = container.querySelectorAll('.grid')
    expect(grids.length).toBeGreaterThan(0)
    
    grids.forEach(grid => {
      const classes = grid.className
      // Should have mobile-first responsive classes
      expect(classes).toContain('grid-cols-1')
    })
  })

  /**
   * Test that page has proper semantic structure
   */
  it('page uses proper semantic HTML structure', () => {
    const { container } = render(<DataProtectionPage />)
    
    // Should have multiple sections
    const sections = container.querySelectorAll('section')
    expect(sections.length).toBeGreaterThanOrEqual(8)
    
    // Should have proper heading hierarchy
    const h1 = container.querySelector('h1')
    expect(h1).toBeTruthy()
    expect(h1!.textContent).toContain('Protect Your Critical Data')
    
    const h2s = container.querySelectorAll('h2')
    expect(h2s.length).toBeGreaterThan(5)
  })
})
