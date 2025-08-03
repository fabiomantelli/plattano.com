export {}

declare global {
  interface Window {
    gtag: (
      type: 'config' | 'event',
      idOrEventName: string,
      config?: Record<string, unknown>
    ) => void
  }
}