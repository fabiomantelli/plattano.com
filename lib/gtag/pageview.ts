import { GA_MEASUREMENT_ID } from './constants'

export const pageview = (url: string) => {
  if (typeof window !== 'undefined' && GA_MEASUREMENT_ID && 'gtag' in window) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
    })
  }
}