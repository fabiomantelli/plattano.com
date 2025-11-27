/**
 * Property-Based Tests for Navigation Component
 * 
 * Feature: site-redesign-2025, Property 5: Navigation consistency
 * Validates: Requirements 7.5
 * 
 * Property: For any page in the application, the navigation menu should display 
 * the same set of links and CTA button, sourced from a single configuration, 
 * ensuring consistency across the site.
 */

import { render, screen } from '@testing-library/react'
import fc from 'fast-check'
import Navigation from '../Navigation'
import { navigationConfig } from '../../../config/navigation'

describe('Property 5: Navigation consistency', () => {
  it('should display consistent navigation links from centralized config across all render variations', () => {
    fc.assert(
      fc.property(
        // Generate random combinations of props
        fc.record({
          variant: fc.constantFrom('transparent' as const, 'solid' as const),
          sticky: fc.boolean(),
        }),
        (props) => {
          const { container } = render(<Navigation {...props} />)
          
          // Property: All navigation links from config should be present
          navigationConfig.mainNav.forEach((link) => {
            const linkElement = screen.getByText(link.label)
            expect(linkElement).toBeInTheDocument()
            expect(linkElement).toHaveAttribute('href', link.href)
          })
          
          // Property: CTA button should always be present with config values
          const ctaButton = screen.getByTestId('nav-cta-button')
          expect(ctaButton).toBeInTheDocument()
          expect(ctaButton).toHaveTextContent(navigationConfig.ctaButton.text)
          expect(ctaButton).toHaveAttribute('href', navigationConfig.ctaButton.href)
          
          // Property: Logo link should always point to home
          const logoLink = screen.getByLabelText('Plattano Home')
          expect(logoLink).toBeInTheDocument()
          expect(logoLink).toHaveAttribute('href', '/')
          
          // Cleanup for next iteration
          container.remove()
        }
      ),
      { numRuns: 100 }
    )
  })

  it('should maintain navigation structure consistency regardless of scroll state', () => {
    fc.assert(
      fc.property(
        fc.boolean(), // sticky prop
        fc.boolean(), // variant affects initial state
        (sticky, useSolidVariant) => {
          const variant = useSolidVariant ? 'solid' : 'transparent'
          const { container } = render(
            <Navigation variant={variant} sticky={sticky} />
          )
          
          // Property: Number of navigation links should match config
          const navLinks = screen.getAllByRole('link').filter(link => 
            navigationConfig.mainNav.some(configLink => 
              link.textContent === configLink.label
            )
          )
          expect(navLinks).toHaveLength(navigationConfig.mainNav.length)
          
          // Property: CTA button should always be present
          const ctaButton = screen.getByTestId('nav-cta-button')
          expect(ctaButton).toBeInTheDocument()
          
          // Cleanup
          container.remove()
        }
      ),
      { numRuns: 100 }
    )
  })

  it('should render all navigation items with correct accessibility attributes', () => {
    fc.assert(
      fc.property(
        fc.record({
          variant: fc.constantFrom('transparent' as const, 'solid' as const),
          sticky: fc.boolean(),
        }),
        (props) => {
          const { container } = render(<Navigation {...props} />)
          
          // Property: All links should be accessible
          navigationConfig.mainNav.forEach((link) => {
            const linkElement = screen.getByText(link.label)
            expect(linkElement.tagName).toBe('A')
            expect(linkElement).toHaveAttribute('href')
          })
          
          // Property: Logo should have aria-label
          const logoLink = screen.getByLabelText('Plattano Home')
          expect(logoLink).toHaveAttribute('aria-label')
          
          // Property: Mobile menu button should have aria-label
          const mobileMenuButton = screen.getByTestId('mobile-menu-button')
          expect(mobileMenuButton).toHaveAttribute('aria-label')
          
          // Cleanup
          container.remove()
        }
      ),
      { numRuns: 100 }
    )
  })
})
