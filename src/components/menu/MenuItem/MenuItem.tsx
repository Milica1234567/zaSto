import type { Allergen, MenuItemData } from '../../../types/menu'
import { formatPrice } from '../../../utils/formatPrice'
import './MenuItem.css'

interface MenuItemProps { item: MenuItemData; currency: string }

const allergenLabels: Record<Allergen, string> = {
  gluten: 'gluten',
  milk: 'mleko',
  eggs: 'jaja',
  nuts: 'orašasti plodovi',
  soy: 'soja',
  fish: 'riba',
  shellfish: 'školjke',
  sesame: 'susam',
}

export function MenuItem({ item, currency }: MenuItemProps) {
  const unavailable = item.available === false

  return <article className={`menu-item${unavailable ? ' menu-item--unavailable' : ''}`} aria-disabled={unavailable || undefined}>
    <div className="menu-item__content"><div className="menu-item__title"><h3>{item.name}</h3><strong>{formatPrice(item.price, currency)}</strong></div>
      <p>{item.description}</p>
      {item.tags && <ul className="menu-item__tags" aria-label="Oznake">{item.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>}
      {item.allergens && item.allergens.length > 0 && <p className="menu-item__allergens"><span>Alergeni:</span> {item.allergens.map(allergen => allergenLabels[allergen]).join(', ')}</p>}
      {unavailable && <p className="menu-item__availability">Trenutno nedostupno</p>}
    </div>
    {item.image && <img src={item.image} alt={item.name} loading="lazy" />}
  </article>
}
