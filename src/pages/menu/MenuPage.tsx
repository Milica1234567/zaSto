import type { CSSProperties } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MenuHeader } from '../../components/menu/MenuHeader/MenuHeader'
import { MenuAttribution } from '../../components/menu/MenuAttribution/MenuAttribution'
import { MenuNavigation } from '../../components/menu/MenuNavigation/MenuNavigation'
import { MenuSection } from '../../components/menu/MenuSection/MenuSection'
import { getRestaurantBySlug } from '../../data/restaurants'
import './MenuPage.css'

type RestaurantStyle = CSSProperties & Record<`--restaurant-${string}`, string>

export function MenuPage() {
  const { restaurantSlug = '' } = useParams()
  const restaurant = getRestaurantBySlug(restaurantSlug)

  if (!restaurant) return <main className="menu-not-found"><div><p>ZaSto</p><h1>Meni nije pronađen</h1><p>Proverite adresu ili se vratite na početnu stranicu.</p><Link to="/">Nazad na početnu</Link></div></main>

  const style: RestaurantStyle = {
    '--restaurant-primary': restaurant.theme.primaryColor,
    '--restaurant-background': restaurant.theme.backgroundColor,
    '--restaurant-text': restaurant.theme.textColor,
    '--restaurant-accent': restaurant.theme.accentColor,
  }

  return <div className="menu-page" style={style}>
    <MenuHeader name={restaurant.name} description={restaurant.description} logo={restaurant.logo} address={restaurant.address} instagram={restaurant.instagram} />
    <MenuNavigation key={restaurant.slug} categories={restaurant.categories} />
    <main className="menu-page__content">{restaurant.categories.map(category => <MenuSection key={category.id} category={category} currency={restaurant.currency} />)}</main>
    <MenuAttribution />
  </div>
}
