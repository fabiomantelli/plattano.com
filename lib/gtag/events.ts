import { GA_MEASUREMENT_ID } from './constants'

type GTagEvent = {
  action: 'click' | 'form_submit' | 'cta_click' | 'download' | 'conversion' | string
  category: 'contact' | 'navigation' | 'footer' | 'product' | 'form' | 'page' | string
  label: string
  value?: number
}

export const event = ({ action, category, label, value }: GTagEvent) => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID && 'gtag' in window) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value,
    })
  }
}