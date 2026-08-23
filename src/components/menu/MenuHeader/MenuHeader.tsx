import './MenuHeader.css'

interface MenuHeaderProps {
  name: string
  description: string
  logo?: string
  address?: string
  instagram?: string
}

export function MenuHeader({ name, description, logo, address, instagram }: MenuHeaderProps) {
  return <header className="menu-header">
    {logo && <img className="menu-header__logo" src={logo} alt={`${name} logo`} />}
    <p className="menu-header__eyebrow">Meni</p>
    <h1>{name}</h1>
    <p className="menu-header__description">{description}</p>
    {(address || instagram) && <div className="menu-header__details">
      {address && <span>{address}</span>}
      {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer">Instagram</a>}
    </div>}
  </header>
}
