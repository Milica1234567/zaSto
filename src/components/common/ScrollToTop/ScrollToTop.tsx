import { useLayoutEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollToTop() {
  const { pathname, hash } = useLocation()
  const previousPathname = useRef<string | null>(null)

  useLayoutEffect(() => {
    const pathnameChanged = previousPathname.current === null || previousPathname.current !== pathname
    previousPathname.current = pathname

    if (pathnameChanged && !hash) {
      const root = document.documentElement
      const previousScrollBehavior = root.style.scrollBehavior

      root.style.scrollBehavior = 'auto'
      window.scrollTo({ top: 0, left: 0 })
      root.style.scrollBehavior = previousScrollBehavior
    }
  }, [pathname, hash])

  return null
}
