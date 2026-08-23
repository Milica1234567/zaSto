import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import './Button.css'

interface ButtonProps { to: string; children: ReactNode }

export function Button({ to, children }: ButtonProps) {
  return <Link className="button" to={to}>{children}</Link>
}
