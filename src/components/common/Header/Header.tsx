import { Link } from 'react-router-dom'
import './Header.css'

export function Header() {
  return <header className="site-header"><Link to="/" aria-label="ZaSto početna">ZaSto</Link></header>
}
