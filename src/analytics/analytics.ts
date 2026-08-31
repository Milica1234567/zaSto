const measurementId = 'G-WY54R75Y4P'

type AnalyticsValue = string | number | boolean
type AnalyticsParameters = Record<string, AnalyticsValue | undefined>

declare global {
  interface Window {
    dataLayer?: unknown[][]
    gtag?: (...args: unknown[]) => void
  }
}

const analyticsEnabled = import.meta.env.PROD

export function initializeAnalytics() {
  if (!analyticsEnabled || window.gtag) return

  window.dataLayer = window.dataLayer ?? []
  window.gtag = (...args: unknown[]) => {
    window.dataLayer?.push(args)
  }

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  script.dataset.zastoAnalytics = 'true'
  document.head.append(script)

  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: false })
}

export function trackPageView(pathname: string) {
  if (!analyticsEnabled || !window.gtag) return

  window.gtag('event', 'page_view', {
    page_location: `${window.location.origin}${pathname}`,
    page_path: pathname,
    page_title: document.title,
  })
}

export function trackEvent(eventName: 'view_demo' | 'select_pricing' | 'contact_email' | 'contact_instagram', parameters: AnalyticsParameters = {}) {
  if (!analyticsEnabled || !window.gtag) return
  window.gtag('event', eventName, parameters)
}

