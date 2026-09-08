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
    '--restaurant-font-heading': restaurant.theme.headingFontFamily ?? 'inherit',
    '--restaurant-font-brand': restaurant.theme.brandFontFamily ?? restaurant.theme.headingFontFamily ?? 'inherit',
    '--restaurant-brand-weight': restaurant.theme.brandFontWeight ?? '700',
    '--restaurant-font-body': restaurant.theme.bodyFontFamily ?? 'inherit',
    '--restaurant-content-width': restaurant.theme.contentWidth ?? '50rem',
    '--restaurant-header-padding': restaurant.theme.headerPadding ?? '3rem 1.25rem 2rem',
    '--restaurant-frame': restaurant.theme.frameColor ?? 'transparent',
  }

  const className = [
    'menu-page',
    restaurant.theme.frameColor && 'menu-page--framed',
    restaurant.theme.navigationStyle === 'underline' && 'menu-page--nav-underline',
  ].filter(Boolean).join(' ')

  return <div className={className} style={style}>
    <MenuHeader name={restaurant.name} menuLabel={restaurant.menuLabel} subtitle={restaurant.subtitle} tagline={restaurant.tagline} description={restaurant.description} logo={restaurant.logo} decoration={restaurant.headerDecoration} address={restaurant.address} instagram={restaurant.instagram} />
    <MenuNavigation key={restaurant.slug} categories={restaurant.categories} allLabel={restaurant.allCategoryLabel} />
    <main className="menu-page__content">{restaurant.categories.map(category => <MenuSection key={category.id} category={category} currency={restaurant.currency} />)}</main>
    <MenuAttribution restaurantName={restaurant.name} descriptor={restaurant.footerDescriptor} tagline={restaurant.tagline} />
  </div>
}
