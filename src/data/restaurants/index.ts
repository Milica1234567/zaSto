import type { Restaurant } from '../../types/menu'
import { demoRestaurant } from './demo'
import { marinaRestaurant } from './marina'
import { ritualRestaurant } from './ritual'

const restaurants: Record<string, Restaurant> = {
  [demoRestaurant.slug]: demoRestaurant,
  [marinaRestaurant.slug]: marinaRestaurant,
  [ritualRestaurant.slug]: ritualRestaurant,
}

export const getRestaurantBySlug = (slug: string): Restaurant | undefined => restaurants[slug]
