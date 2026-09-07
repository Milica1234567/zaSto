import type { Restaurant } from '../../types/menu'
import { demoRestaurant } from './demo'
import { marinaRestaurant } from './marina'

const restaurants: Record<string, Restaurant> = {
  [demoRestaurant.slug]: demoRestaurant,
  [marinaRestaurant.slug]: marinaRestaurant,
}

export const getRestaurantBySlug = (slug: string): Restaurant | undefined => restaurants[slug]
