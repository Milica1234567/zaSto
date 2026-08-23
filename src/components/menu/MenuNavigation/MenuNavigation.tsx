import { useEffect, useRef, useState } from 'react'
import type { MenuCategory } from '../../../types/menu'
import './MenuNavigation.css'

interface MenuNavigationProps { categories: MenuCategory[] }

export function MenuNavigation({ categories }: MenuNavigationProps) {
  const [activeId, setActiveId] = useState(categories[0]?.id ?? '')
  const linkRefs = useRef(new Map<string, HTMLAnchorElement>())

  useEffect(() => {
    const sections = categories
      .map(({ id }) => document.getElementById(id))
      .filter((section): section is HTMLElement => section !== null)

    const observer = new IntersectionObserver((entries) => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible[0]) setActiveId(visible[0].target.id)
    }, { rootMargin: '-96px 0px -65% 0px', threshold: 0 })

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [categories])

  useEffect(() => {
    linkRefs.current.get(activeId)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
  }, [activeId])

  return <nav className="menu-navigation" aria-label="Kategorije menija">
    <div>{categories.map(({ id, name }) => <a
      key={id}
      href={`#${id}`}
      ref={node => { if (node) linkRefs.current.set(id, node); else linkRefs.current.delete(id) }}
      className={activeId === id ? 'is-active' : undefined}
      aria-current={activeId === id ? 'location' : undefined}
      onClick={() => setActiveId(id)}
    >{name}</a>)}</div>
  </nav>
}
