import './MenuHeader.css'

interface MenuHeaderProps {
  name: string
  description: string
  subtitle?: string
  tagline?: string
  menuLabel?: string
  logo?: string
  decoration?: string
  address?: string
  instagram?: string
}

export function MenuHeader({ name, menuLabel = 'Meni', subtitle, tagline, description, logo, decoration, address, instagram }: MenuHeaderProps) {
  return <header className="menu-header" id="menu-top">
    {decoration && <img className="menu-header__decoration" src={decoration} alt="" aria-hidden="true" />}
    {logo && <img className="menu-header__logo" src={logo} alt={`${name} logo`} />}
    <p className="menu-header__eyebrow">{menuLabel}</p>
    <h1>{name}</h1>
    {subtitle && <p className="menu-header__subtitle">{subtitle}</p>}
    {tagline && <p className="menu-header__tagline">{tagline}</p>}
    <p className="menu-header__description">{description}</p>
    {(address || instagram) && <div className="menu-header__details">
      {address && <span>{address}</span>}
      {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
    </div>}
  </header>
}
