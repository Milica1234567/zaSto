import type { Restaurant } from '../../types/menu'
import { demoRestaurant } from './demo'
import { fornoRestaurant } from './forno'
import { marinaRestaurant } from './marina'
import { ritualRestaurant } from './ritual'

const restaurants: Record<string, Restaurant> = {
  [demoRestaurant.slug]: demoRestaurant,
  [fornoRestaurant.slug]: fornoRestaurant,
  [marinaRestaurant.slug]: marinaRestaurant,
  [ritualRestaurant.slug]: ritualRestaurant,
}

export const getRestaurantBySlug = (slug: string): Restaurant | undefined => restaurants[slug]
