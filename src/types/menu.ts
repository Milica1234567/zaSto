export interface RestaurantTheme {
  primaryColor: string
  backgroundColor: string
  textColor: string
  accentColor: string
  headingFontFamily?: string
  brandFontFamily?: string
  brandFontWeight?: string
  bodyFontFamily?: string
  contentWidth?: string
  headerPadding?: string
  frameColor?: string
  navigationStyle?: 'pill' | 'underline'
}

export type MenuItemTag =
  | 'Popularno'
  | 'Novo'
  | 'Vegan'
  | 'Vegetarijansko'
  | 'Ljuto'
  | "Chef's choice"
  | 'Preporuka kuće'

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

export interface MenuDecoration {
  image: string
  align?: 'left' | 'center' | 'right'
  size?: 'small' | 'medium' | 'large'
}

export interface MenuCategory {
  id: string
  name: string
  description?: string
  items: MenuItemData[]
  decoration?: MenuDecoration
}

export interface Restaurant {
  slug: string
  name: string
  logo?: string
  description: string
  subtitle?: string
  tagline?: string
  menuLabel?: string
  footerDescriptor?: string
  allCategoryLabel?: string
  headerDecoration?: string
  address?: string
  instagram?: string
  wifi?: string
  theme: RestaurantTheme
  categories: MenuCategory[]
  currency: string
}
