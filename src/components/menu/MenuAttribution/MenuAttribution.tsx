import { Link } from 'react-router-dom'
import './MenuAttribution.css'

interface MenuAttributionProps { restaurantName?: string; tagline?: string }

export function MenuAttribution({ restaurantName, tagline }: MenuAttributionProps) {
  return <footer className="menu-attribution">
    {tagline && <div className="menu-attribution__restaurant"><strong>{restaurantName}</strong><span>{tagline}</span></div>}
    <span>{tagline ? 'Powered by ' : 'Digitalni meni pokreće '}<Link to="/">ZaSto</Link></span>
  </footer>
}
