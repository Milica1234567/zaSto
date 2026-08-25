import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/images/logo.png'
import './LandingHeader.css'

const navigation = [
  { label: 'Kako radi', href: '#how-it-works' },
  { label: 'Prednosti', href: '#benefits' },
  { label: 'Demo', href: '#demo' },
  { label: 'Cene', href: '#pricing' },
  { label: 'Kontakt', href: '#contact' },
]

export function LandingHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 8)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [menuOpen])

  const closeMenu = () => setMenuOpen(false)

  return <header className={`landing-header${scrolled ? ' landing-header--scrolled' : ''}`}>
    <div className="landing-header__inner">
      <Link className="landing-header__logo" to="/" aria-label="ZaSto početna" onClick={closeMenu}>
        <img src={logo} alt="ZaSto" />
      </Link>

      <nav className="landing-header__desktop-nav" aria-label="Glavna navigacija">
        {navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}
      </nav>

      <a className="landing-header__cta landing-header__desktop-cta" href="#contact">Zatraži meni</a>

      <button
        className={`landing-header__toggle${menuOpen ? ' is-open' : ''}`}
        type="button"
        aria-label={menuOpen ? 'Zatvori navigaciju' : 'Otvori navigaciju'}
        aria-expanded={menuOpen}
        aria-controls="mobile-navigation"
        onClick={() => setMenuOpen(open => !open)}
      >
        <span /><span /><span />
      </button>
    </div>

    <nav
      id="mobile-navigation"
      className={`landing-header__mobile-nav${menuOpen ? ' is-open' : ''}`}
      aria-label="Mobilna navigacija"
      aria-hidden={!menuOpen}
    >
      <div>
        {navigation.map(item => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
        <a className="landing-header__cta" href="#contact" onClick={closeMenu}>Zatraži meni</a>
      </div>
    </nav>
  </header>
}
