import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackPageView } from '../../../analytics/analytics'

let lastTrackedPathname: string | null = null

export function AnalyticsPageView() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (lastTrackedPathname === pathname) return
    lastTrackedPathname = pathname
    trackPageView(pathname)
  }, [pathname])

  return null
}

