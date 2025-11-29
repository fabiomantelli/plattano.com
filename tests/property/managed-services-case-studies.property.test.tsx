/**
 * Property-Based Tests for Managed Services and Case Studies
 * Feature: data-protection-page-optimization
 * Property 7: Service Card Completeness
 * Property 8: Service CTA Variant
 * Property 9: Case Study Completeness
 * Property 10: Case Study Result Styling
 * Property 11: Case Study Industry Styling
 * Validates: Requirements 4.2, 4.4, 5.2, 5.3, 5.5
 */

import { describe, it, expect } from '@jest/globals'
import { render } from '@testing-library/react'
import fc from 'fast-check'
import DataProtectionPage from '../../app/solutions/data-protection/page'

describe('Property Tests: Service Card Completeness', () => {
  /**
   * Feature: data-protection-page-optimization, Property 7: Service Card Completeness
   * For any managed service card displayed, it should contain all required elements: 
   * icon, title, description, and feature list.
   */
  it('all service cards contain required elements', () => {
    const { container } = render(<DataProtectionPage />)
    
    // Find managed services section (4th section)
    const sections = container.querySelectorAll('section')
    const servicesSection = sections[3] // Hero, Stats, Solutions, Services
    
    expect(servicesSection.textContent).toContain('Prefer to Leave it to Us')
    
    // Find all service cards
    const cards = servicesSection.querySelectorAll('.rounded-2xl')
    expect(cards.length).toBe(3) // Should have 3 service cards
    
    cards.forEach(card => {
      // Check for icon (emoji, text-5xl)
      const icon = card.querySelector('.text-5xl')
      expect(icon).toBeTruthy()
      
      // Check for title (h3)
      const title = card.querySelector('h3')
      expect(title).toBeTruthy()
      
      // Check for description (p tag in CardDescription)
      const description = card.querySelector('p')
      expect(description).toBeTruthy()
      
      // Check for feature list (ul with checkmarks)
      const featureList = card.querySelector('ul')
      expect(featureList).toBeTruthy()
      
      // Check for CTA button
      const ctaButton = card.querySelector('a[href="/contact"]')
      expect(ctaButton).toBeTruthy()
    })
  })

  /**
   * Property test: Service cards use gray-50 background
   */
  it('services section uses gray-50 background', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const servicesSection = sections[3]
    
    const classes = servicesSection.className
    expect(classes).toContain('bg-gray-50')
  })

  /**
   * Property test: Service cards have hover effect
   */
  it('service cards have hover effect classes', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const servicesSection = sections[3]
    
    const cards = servicesSection.querySelectorAll('.rounded-2xl')
    
    cards.forEach(card => {
      const classes = card.className
      // Cards should have transition classes for hover effect
      expect(classes).toContain('transition')
    })
  })

  /**
   * Property test: Service cards display at least 3 services
   */
  it('displays at least 3 managed services', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const servicesSection = sections[3]
    
    const cards = servicesSection.querySelectorAll('.rounded-2xl')
    expect(cards.length).toBeGreaterThanOrEqual(3)
  })
})

describe('Property Tests: Service CTA Variant', () => {
  /**
   * Feature: data-protection-page-optimization, Property 8: Service CTA Variant
   * For any CTA button within a service card, it should use the outline variant 
   * to maintain visual hierarchy.
   */
  it('all service CTAs use outline variant', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const servicesSection = sections[3]
    
    const ctaButtons = servicesSection.querySelectorAll('a[href="/contact"]')
    expect(ctaButtons.length).toBe(3)
    
    ctaButtons.forEach(button => {
      const classes = button.className
      // Outline buttons have border-2 and border-primary classes
      expect(classes).toContain('border-2')
      expect(classes).toContain('border-primary-500')
    })
  })

  /**
   * Property test: Service checkmarks use secondary-500
   */
  it('service feature checkmarks use secondary-500 color', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const servicesSection = sections[3]
    
    const checkmarks = servicesSection.querySelectorAll('.text-secondary-500')
    expect(checkmarks.length).toBeGreaterThan(0)
    
    checkmarks.forEach(checkmark => {
      const classes = checkmark.getAttribute('class') || ''
      expect(classes).toContain('text-secondary-500')
    })
  })
})

describe('Property Tests: Case Study Completeness', () => {
  /**
   * Feature: data-protection-page-optimization, Property 9: Case Study Completeness
   * For any case study card displayed, it should contain all required fields: 
   * industry, challenge, solution, and measurable result.
   */
  it('all case study cards contain required fields', () => {
    const { container } = render(<DataProtectionPage />)
    
    // Find case studies section (6th section)
    const sections = container.querySelectorAll('section')
    const caseStudiesSection = sections[5] // Hero, Stats, Solutions, Services, Why Plattano, Case Studies
    
    expect(caseStudiesSection.textContent).toContain('Success Stories')
    
    // Find all case study cards
    const cards = caseStudiesSection.querySelectorAll('.rounded-2xl')
    expect(cards.length).toBe(3) // Should have 3 case studies
    
    cards.forEach(card => {
      // Check for industry (CardTitle)
      const industry = card.querySelector('h3')
      expect(industry).toBeTruthy()
      
      // Check for challenge
      expect(card.textContent).toContain('Challenge:')
      
      // Check for solution
      expect(card.textContent).toContain('Solution:')
      
      // Check for result
      expect(card.textContent).toContain('Result:')
    })
  })

  /**
   * Property test: Case studies section has gradient background
   */
  it('case studies section uses orange gradient background', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const caseStudiesSection = sections[5]
    
    const classes = caseStudiesSection.className
    expect(classes).toContain('bg-gradient-to-br')
    expect(classes).toContain('from-orange-50')
  })

  /**
   * Property test: Displays at least 3 case studies
   */
  it('displays at least 3 case studies', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const caseStudiesSection = sections[5]
    
    const cards = caseStudiesSection.querySelectorAll('.rounded-2xl')
    expect(cards.length).toBeGreaterThanOrEqual(3)
  })
})

describe('Property Tests: Case Study Styling', () => {
  /**
   * Feature: data-protection-page-optimization, Property 10: Case Study Result Styling
   * For any result label in case study cards, it should use Plattano's secondary color 
   * (secondary-600) to highlight outcomes.
   */
  it('case study result labels use secondary-600 color', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const caseStudiesSection = sections[5]
    
    // Find all result labels
    const resultLabels = Array.from(caseStudiesSection.querySelectorAll('p')).filter(
      p => p.textContent?.includes('Result:')
    )
    
    expect(resultLabels.length).toBeGreaterThan(0)
    
    resultLabels.forEach(label => {
      const classes = label.className
      expect(classes).toContain('text-secondary-600')
    })
  })

  /**
   * Feature: data-protection-page-optimization, Property 11: Case Study Industry Styling
   * For any industry title in case study cards, it should use Plattano's primary color 
   * (primary-600) for brand consistency.
   */
  it('case study industry titles use primary-600 color', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const caseStudiesSection = sections[5]
    
    // Find all industry titles (h3 elements in cards)
    const industryTitles = caseStudiesSection.querySelectorAll('h3')
    expect(industryTitles.length).toBe(3)
    
    industryTitles.forEach(title => {
      const classes = title.className
      expect(classes).toContain('text-primary-600')
    })
  })

  /**
   * Property test: Result values are bold
   */
  it('case study results are displayed in bold', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const caseStudiesSection = sections[5]
    
    const cards = caseStudiesSection.querySelectorAll('.rounded-2xl')
    
    cards.forEach(card => {
      // Find the result value (should be font-semibold)
      const resultValue = Array.from(card.querySelectorAll('p')).find(
        p => p.className.includes('font-semibold') && p.className.includes('text-gray-900')
      )
      expect(resultValue).toBeTruthy()
    })
  })
})

/**
 * Property-based tests with generated data
 */
describe('Property Tests: Services and Case Studies with Generated Data', () => {
  /**
   * Test that services maintain structure across viewport sizes
   */
  it('services section maintains structure across viewport widths', () => {
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
          
          const sections = container.querySelectorAll('section')
          const servicesSection = sections[3]
          
          // Should always have 3 service cards
          const cards = servicesSection.querySelectorAll('.rounded-2xl')
          expect(cards.length).toBe(3)
          
          // Each card should have CTA
          cards.forEach(card => {
            const cta = card.querySelector('a[href="/contact"]')
            expect(cta).toBeTruthy()
          })
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Test that case studies maintain structure across viewport sizes
   */
  it('case studies maintain structure across viewport widths', () => {
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
          
          const sections = container.querySelectorAll('section')
          const caseStudiesSection = sections[5]
          
          // Should always have 3 case studies
          const cards = caseStudiesSection.querySelectorAll('.rounded-2xl')
          expect(cards.length).toBe(3)
          
          // Each card should have industry title
          cards.forEach(card => {
            const title = card.querySelector('h3')
            expect(title).toBeTruthy()
          })
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Test grid responsiveness
   */
  it('service and case study grids are responsive', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    
    // Services section grid
    const servicesGrid = sections[3].querySelector('.grid')
    expect(servicesGrid).toBeTruthy()
    const servicesClasses = servicesGrid!.className
    expect(servicesClasses).toContain('grid-cols-1')
    expect(servicesClasses).toContain('md:grid-cols-3')
    
    // Case studies section grid
    const caseStudiesGrid = sections[5].querySelector('.grid')
    expect(caseStudiesGrid).toBeTruthy()
    const caseStudiesClasses = caseStudiesGrid!.className
    expect(caseStudiesClasses).toContain('grid-cols-1')
    expect(caseStudiesClasses).toContain('md:grid-cols-3')
  })
})
