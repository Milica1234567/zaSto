import type { Restaurant } from '../../types/menu'
import { demoRestaurant } from './demo'

const restaurants: Record<string, Restaurant> = { [demoRestaurant.slug]: demoRestaurant }

export const getRestaurantBySlug = (slug: string): Restaurant | undefined => restaurants[slug]
