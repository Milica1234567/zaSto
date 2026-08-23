export interface RestaurantTheme {
  primaryColor: string
  backgroundColor: string
  textColor: string
  accentColor: string
}

export type MenuItemTag =
  | 'Popularno'
  | 'Novo'
  | 'Vegan'
  | 'Vegetarijansko'
  | 'Ljuto'
  | "Chef's choice"

export type Allergen =
  | 'gluten'
  | 'milk'
  | 'eggs'
  | 'nuts'
  | 'soy'
  | 'fish'
  | 'shellfish'
  | 'sesame'

export interface MenuItemData {
  id: string
  name: string
  description: string
  price: number
  image?: string
  tags?: MenuItemTag[]
  allergens?: Allergen[]
  available?: boolean
}

export interface MenuCategory {
  id: string
  name: string
  description?: string
  items: MenuItemData[]
}

export interface Restaurant {
  slug: string
  name: string
  logo?: string
  description: string
  address?: string
  instagram?: string
  wifi?: string
  theme: RestaurantTheme
  categories: MenuCategory[]
  currency: string
}
