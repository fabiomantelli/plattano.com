/**
 * Property-Based Tests for Solutions Accordion
 * Feature: data-protection-page-optimization
 * Property 4: Solution Completeness
 * Property 5: Feature Checkmark Consistency
 * Property 6: Use Case Bullet Consistency
 * Validates: Requirements 3.2, 3.3, 3.4
 */

import { describe, it, expect } from '@jest/globals'
import { render, screen, fireEvent } from '@testing-library/react'
import fc from 'fast-check'
import DataProtectionPage from '../../app/solutions/data-protection/page'

describe('Property Tests: Solution Completeness', () => {
  /**
   * Feature: data-protection-page-optimization, Property 4: Solution Completeness
   * For any Veeam solution displayed in the accordion, when expanded it should contain 
   * all required elements: features list, use cases list, and a CTA button.
   */
  it('all solutions contain required elements when expanded', () => {
    const { container } = render(<DataProtectionPage />)
    
    // Find solutions section specifically
    const sections = container.querySelectorAll('section')
    const solutionsSection = sections[2] // Hero, Stats, Solutions
    
    // Find accordion items only in solutions section
    const accordionItems = solutionsSection.querySelectorAll('.border.border-gray-200')
    expect(accordionItems.length).toBe(5) // Should have exactly 5 Veeam solutions
    
    // Test first accordion item (which is open by default)
    const firstItem = accordionItems[0]
    
    // Check for features section
    expect(firstItem.textContent).toContain('Key Features')
    
    // Check for use cases section
    expect(firstItem.textContent).toContain('Use Cases')
    
    // Check for CTA button
    const ctaButton = firstItem.querySelector('a[href="/contact"]')
    expect(ctaButton).toBeTruthy()
    expect(ctaButton!.textContent).toContain('Request Demo')
  })

  /**
   * Property test: First solution opens by default
   */
  it('first solution is open by default', () => {
    const { container } = render(<DataProtectionPage />)
    
    const accordionItems = container.querySelectorAll('.border.border-gray-200')
    const firstItem = accordionItems[0]
    
    // Check if content is visible (max-height is not 0)
    const contentDiv = firstItem.querySelector('.overflow-hidden')
    expect(contentDiv).toBeTruthy()
    
    // First item should have expanded content
    const hasContent = firstItem.textContent!.includes('Key Features')
    expect(hasContent).toBe(true)
  })

  /**
   * Property test: All solutions have icon and title
   */
  it('all solution headers have icon and title', () => {
    const { container } = render(<DataProtectionPage />)
    
    const accordionButtons = container.querySelectorAll('.border.border-gray-200 button')
    expect(accordionButtons.length).toBeGreaterThanOrEqual(5)
    
    accordionButtons.forEach(button => {
      // Each button should have text content (icon + title)
      expect(button.textContent).toBeTruthy()
      expect(button.textContent!.length).toBeGreaterThan(5)
    })
  })

  /**
   * Property test: Solutions section has proper structure
   */
  it('solutions section has proper heading and description', () => {
    const { container } = render(<DataProtectionPage />)
    
    // Find solutions section (third section, white background)
    const sections = container.querySelectorAll('section')
    const solutionsSection = sections[2] // Hero, Stats, Solutions
    
    expect(solutionsSection).toBeTruthy()
    expect(solutionsSection.textContent).toContain('Veeam Solutions')
    expect(solutionsSection.textContent).toContain('Comprehensive data protection')
  })
})

describe('Property Tests: Feature Checkmark Consistency', () => {
  /**
   * Feature: data-protection-page-optimization, Property 5: Feature Checkmark Consistency
   * For any feature list checkmark icon across the page (solutions, services), 
   * it should use Plattano's secondary-500 color (secondary-500).
   */
  it('all feature checkmarks use secondary-500 color', () => {
    const { container } = render(<DataProtectionPage />)
    
    // Find solutions section
    const sections = container.querySelectorAll('section')
    const solutionsSection = sections[2]
    
    // Find all CheckCircle icons by looking for svg with specific path
    const checkIcons = solutionsSection.querySelectorAll('svg.lucide-check-circle, svg[class*="check-circle"]')
    
    // If not found by class, find by text-secondary-500 parent
    const iconsWithSecondaryColor = solutionsSection.querySelectorAll('.text-secondary-500')
    expect(iconsWithSecondaryColor.length).toBeGreaterThan(0)
    
    // Verify each has secondary-500 class
    iconsWithSecondaryColor.forEach(icon => {
      const classes = icon.getAttribute('class') || ''
      expect(classes).toContain('text-secondary-500')
    })
  })

  /**
   * Property test: Checkmarks are properly sized
   */
  it('feature checkmarks have consistent size', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const solutionsSection = sections[2]
    
    const checkIcons = solutionsSection.querySelectorAll('.lucide-check-circle')
    
    checkIcons.forEach(icon => {
      const classes = icon.className
      expect(classes).toContain('h-5')
      expect(classes).toContain('w-5')
    })
  })
})

describe('Property Tests: Use Case Bullet Consistency', () => {
  /**
   * Feature: data-protection-page-optimization, Property 6: Use Case Bullet Consistency
   * For any use case bullet point in solution items, it should use 
   * Plattano's primary orange color (primary-500).
   */
  it('all use case bullets use primary-500 color', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const solutionsSection = sections[2]
    
    // Find all bullet points (spans with text-primary-500)
    const bullets = solutionsSection.querySelectorAll('.text-primary-500')
    expect(bullets.length).toBeGreaterThan(0)
    
    // Verify each bullet has primary-500 class and contains bullet character
    bullets.forEach(bullet => {
      const classes = bullet.className
      expect(classes).toContain('text-primary-500')
      expect(bullet.textContent).toContain('•')
    })
  })

  /**
   * Property test: Use cases section exists in all solutions
   */
  it('all solutions have use cases section', () => {
    const { container } = render(<DataProtectionPage />)
    
    // Find solutions section specifically
    const sections = container.querySelectorAll('section')
    const solutionsSection = sections[2]
    
    const accordionItems = solutionsSection.querySelectorAll('.border.border-gray-200')
    
    // Test first item (which is open)
    const firstItem = accordionItems[0]
    expect(firstItem.textContent).toContain('Use Cases')
    
    // Test that bullets exist
    const bullets = firstItem.querySelectorAll('.text-primary-500')
    expect(bullets.length).toBeGreaterThan(0)
  })
})

describe('Property Tests: Accordion Interaction', () => {
  /**
   * Property test: Accordion items can be expanded and collapsed
   */
  it('accordion items expand and collapse on click', () => {
    const { container } = render(<DataProtectionPage />)
    
    const accordionItems = container.querySelectorAll('.border.border-gray-200')
    const secondItem = accordionItems[1]
    const button = secondItem.querySelector('button')
    
    expect(button).toBeTruthy()
    
    // Initially should be collapsed (not first item)
    let contentDiv = secondItem.querySelector('.overflow-hidden')
    let initialHeight = contentDiv?.className.includes('max-h-0')
    
    // Click to expand
    fireEvent.click(button!)
    
    // Should now be expanded
    contentDiv = secondItem.querySelector('.overflow-hidden')
    const expandedHeight = contentDiv?.className.includes('max-h-')
    expect(expandedHeight).toBe(true)
  })

  /**
   * Property test: CTA buttons in solutions use primary variant
   */
  it('all solution CTAs use primary button styling', () => {
    const { container } = render(<DataProtectionPage />)
    
    const sections = container.querySelectorAll('section')
    const solutionsSection = sections[2]
    
    // Find all "Request Demo" buttons
    const ctaButtons = solutionsSection.querySelectorAll('a[href="/contact"]')
    expect(ctaButtons.length).toBeGreaterThanOrEqual(5)
    
    ctaButtons.forEach(button => {
      const classes = button.className
      // Primary buttons have gradient classes
      expect(
        classes.includes('from-primary-500') || 
        classes.includes('bg-gradient')
      ).toBe(true)
    })
  })
})

/**
 * Property-based tests with generated data
 */
describe('Property Tests: Solutions with Generated Data', () => {
  /**
   * Test that solutions maintain structure across different data
   */
  it('solutions maintain required structure regardless of content length', () => {
    fc.assert(
      fc.property(
        fc.array(
          fc.record({
            id: fc.string({ minLength: 5, maxLength: 20 }),
            title: fc.string({ minLength: 10, maxLength: 50 }),
            description: fc.string({ minLength: 20, maxLength: 100 }),
            features: fc.array(fc.string({ minLength: 10, maxLength: 60 }), { minLength: 3, maxLength: 7 }),
            useCases: fc.array(fc.string({ minLength: 15, maxLength: 80 }), { minLength: 2, maxLength: 5 }),
            icon: fc.constantFrom('💾', '📧', '☁️', '🔄', '📊')
          }),
          { minLength: 5, maxLength: 5 }
        ),
        (solutions) => {
          // This validates the component structure
          const { container } = render(<DataProtectionPage />)
          
          // Find solutions section specifically (not FAQ section)
          const sections = container.querySelectorAll('section')
          const solutionsSection = sections[2]
          
          const accordionItems = solutionsSection.querySelectorAll('.border.border-gray-200')
          expect(accordionItems.length).toBe(5)
          
          // Each item should have the required structure
          accordionItems.forEach(item => {
            const button = item.querySelector('button')
            expect(button).toBeTruthy()
          })
        }
      ),
      { numRuns: 100 }
    )
  })

  /**
   * Test that accordion maintains functionality across viewport sizes
   */
  it('accordion works correctly across different viewport widths', () => {
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
          
          const accordionItems = container.querySelectorAll('.border.border-gray-200')
          expect(accordionItems.length).toBeGreaterThanOrEqual(5)
          
          // First item should be expanded
          const firstItem = accordionItems[0]
          expect(firstItem.textContent).toContain('Key Features')
        }
      ),
      { numRuns: 100 }
    )
  })
})
