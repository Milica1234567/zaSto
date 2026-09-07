import type { MenuCategory } from '../../../types/menu'
import { MenuItem } from '../MenuItem/MenuItem'
import './MenuSection.css'

interface MenuSectionProps { category: MenuCategory; currency: string }

export function MenuSection({ category, currency }: MenuSectionProps) {
  return <section className="menu-section" id={category.id} aria-labelledby={`${category.id}-title`}>
    <h2 id={`${category.id}-title`}>{category.name}</h2>
    {category.description && <p className="menu-section__description">{category.description}</p>}
    <div>{category.items.map(item => <MenuItem key={item.id} item={item} currency={currency} />)}</div>
    {category.decoration && <div className={`menu-section__decoration menu-section__decoration--${category.decoration.align ?? 'center'} menu-section__decoration--${category.decoration.size ?? 'medium'}`} aria-hidden="true">
      <img src={category.decoration.image} alt="" />
    </div>}
  </section>
}
