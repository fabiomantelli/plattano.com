/**
 * Property-Based Tests for MobileNavigation Component
 * 
 * Feature: site-redesign-2025, Property 9: Mobile navigation state management
 * Validates: Requirements 5.1, 5.2, 5.3
 * 
 * Property: For any mobile viewport, when the hamburger menu is tapped, 
 * the navigation overlay should expand to full screen with a close button, 
 * and when closed, should return to the collapsed state without page scroll.
 */

import { render, screen, fireEvent } from '@testing-library/react'
import fc from 'fast-check'
import MobileNavigation from '../MobileNavigation'
import { navigationConfig } from '../../../config/navigation'

describe('Property 9: Mobile navigation state management', () => {
  beforeEach(() => {
    // Reset body overflow before each test
    document.body.style.overflow = 'unset'
  })

  afterEach(() => {
    // Cleanup after each test
    document.body.style.overflow = 'unset'
  })

  it('should render overlay when isOpen is true and hide when false', () => {
    fc.assert(
      fc.property(
        fc.boolean(), // isOpen state
        (isOpen) => {
          const mockOnClose = jest.fn()
          const { container } = render(
            <MobileNavigation isOpen={isOpen} onClose={mockOnClose} />
          )

          if (isOpen) {
            // Property: Overlay should be visible when open
            const overlay = screen.getByTestId('mobile-navigation-overlay')
            expect(overlay).toBeInTheDocument()

            // Property: Close button should be present
            const closeButton = screen.getByTestId('mobile-menu-close-button')
            expect(closeButton).toBeInTheDocument()
            expect(closeButton).toHaveAttribute('aria-label', 'Close menu')
          } else {
            // Property: Overlay should not be in DOM when closed
            const overlay = screen.queryByTestId('mobile-navigation-overlay')
            expect(overlay).not.toBeInTheDocument()
          }

          // Cleanup
          container.remove()
        }
      ),
      { numRuns: 100 }
    )
  })

  it('should display all navigation links from config when open', () => {
    fc.assert(
      fc.property(
        fc.constant(true), // Always open for this test
        () => {
          const mockOnClose = jest.fn()
          const { container } = render(
            <MobileNavigation isOpen={true} onClose={mockOnClose} />
          )

          // Property: All navigation links should be present
          navigationConfig.mainNav.forEach((link) => {
            const linkElement = screen.getByText(link.label)
            expect(linkElement).toBeInTheDocument()
            expect(linkElement).toHaveAttribute('href', link.href)
          })

          // Property: CTA button should be present
          const ctaButton = screen.getByTestId('mobile-nav-cta-button')
          expect(ctaButton).toBeInTheDocument()
          expect(ctaButton).toHaveTextContent(navigationConfig.ctaButton.text)

          // Cleanup
          container.remove()
        }
      ),
      { numRuns: 100 }
    )
  })

  it('should prevent body scroll when open and restore when closed', () => {
    fc.assert(
      fc.property(
        fc.boolean(), // isOpen state
        (isOpen) => {
          const mockOnClose = jest.fn()
          const { container, rerender } = render(
            <MobileNavigation isOpen={isOpen} onClose={mockOnClose} />
          )

          if (isOpen) {
            // Property: Body scroll should be prevented when menu is open
            expect(document.body.style.overflow).toBe('hidden')
          } else {
            // Property: Body scroll should be restored when menu is closed
            expect(document.body.style.overflow).toBe('unset')
          }

          // Test state transition
          rerender(<MobileNavigation isOpen={!isOpen} onClose={mockOnClose} />)

          if (!isOpen) {
            // After opening
            expect(document.body.style.overflow).toBe('hidden')
          } else {
            // After closing
            expect(document.body.style.overflow).toBe('unset')
          }

          // Cleanup
          container.remove()
          document.body.style.overflow = 'unset'
        }
      ),
      { numRuns: 100 }
    )
  })

  it('should call onClose when close button is clicked', () => {
    fc.assert(
      fc.property(
        fc.constant(true), // Always open for this test
        () => {
          const mockOnClose = jest.fn()
          const { container } = render(
            <MobileNavigation isOpen={true} onClose={mockOnClose} />
          )

          // Property: Clicking close button should trigger onClose
          const closeButton = screen.getByTestId('mobile-menu-close-button')
          fireEvent.click(closeButton)
          expect(mockOnClose).toHaveBeenCalledTimes(1)

          // Cleanup
          container.remove()
          mockOnClose.mockClear()
        }
      ),
      { numRuns: 100 }
    )
  })

  it('should call onClose when backdrop is clicked', () => {
    fc.assert(
      fc.property(
        fc.constant(true), // Always open for this test
        () => {
          const mockOnClose = jest.fn()
          const { container } = render(
            <MobileNavigation isOpen={true} onClose={mockOnClose} />
          )

          // Property: Clicking backdrop should trigger onClose
          const overlay = screen.getByTestId('mobile-navigation-overlay')
          const backdrop = overlay.querySelector('[aria-hidden="true"]')
          expect(backdrop).toBeInTheDocument()
          
          if (backdrop) {
            fireEvent.click(backdrop)
            expect(mockOnClose).toHaveBeenCalledTimes(1)
          }

          // Cleanup
          container.remove()
          mockOnClose.mockClear()
        }
      ),
      { numRuns: 100 }
    )
  })

  it('should call onClose when navigation link is clicked', () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 0, max: navigationConfig.mainNav.length - 1 }), // Random link index
        (linkIndex) => {
          const mockOnClose = jest.fn()
          const { container } = render(
            <MobileNavigation isOpen={true} onClose={mockOnClose} />
          )

          // Property: Clicking any navigation link should trigger onClose
          const targetLink = navigationConfig.mainNav[linkIndex]
          const linkElement = screen.getByText(targetLink.label)
          fireEvent.click(linkElement)
          expect(mockOnClose).toHaveBeenCalledTimes(1)

          // Cleanup
          container.remove()
          mockOnClose.mockClear()
        }
      ),
      { numRuns: 100 }
    )
  })
})
