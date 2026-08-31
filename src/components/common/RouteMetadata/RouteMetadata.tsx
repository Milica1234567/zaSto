import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const siteUrl = 'https://zasto.rs'
const homepageTitle = 'ZaSto | Digitalni meni za restorane i kafiće'

export function RouteMetadata() {
  const { pathname } = useLocation()

  useEffect(() => {
    const robots = document.querySelector<HTMLMetaElement>('meta[name="robots"]')
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    const isMenuRoute = pathname.startsWith('/m/')

    document.title = isMenuRoute ? 'Digitalni meni | ZaSto' : homepageTitle
    robots?.setAttribute('content', isMenuRoute ? 'noindex, follow' : 'index, follow')
    canonical?.setAttribute('href', isMenuRoute ? `${siteUrl}${pathname}` : `${siteUrl}/`)
  }, [pathname])

  return null
}
