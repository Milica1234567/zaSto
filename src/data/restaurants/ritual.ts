import type { Restaurant } from '../../types/menu'

export const ritualRestaurant: Restaurant = {
  slug: 'ritual',
  name: 'Ritual',
  subtitle: 'DRINK',
  tagline: 'Every night has its ritual.',
  menuLabel: 'Cocktails · Wine · Late nights',
  footerDescriptor: 'DRINK',
  description: 'Signature cocktails, timeless classics and small plates for long evenings.',
  currency: 'RSD',
  theme: {
    primaryColor: '#292522',
    backgroundColor: '#f8f5ef',
    textColor: '#35302c',
    accentColor: '#c96f5b',
    headingFontFamily: 'Georgia, "Times New Roman", serif',
    brandFontFamily: '"Segoe Script", "Brush Script MT", cursive',
    brandFontWeight: '400',
    bodyFontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    contentWidth: '43rem',
    headerPadding: '2.25rem 1.25rem 1.5rem',
    frameColor: '#514943',
    navigationStyle: 'underline',
  },
  categories: [
    {
      id: 'signature',
      name: 'SIGNATURE',
      items: [
        { id: 'ritual-no-1', name: 'Ritual No. 1', description: 'gin, elderflower, lemon, basil', price: 890, tags: ['Preporuka kuće'] },
        { id: 'velvet-hour', name: 'Velvet Hour', description: 'vodka, raspberry, lime, vanilla', price: 920 },
        { id: 'golden-habit', name: 'Golden Habit', description: 'bourbon, passion fruit, honey, citrus', price: 950 },
        { id: 'after-sunset', name: 'After Sunset', description: 'tequila, grapefruit, hibiscus, sea salt', price: 930 },
        { id: 'green-room', name: 'Green Room', description: 'gin, cucumber, lime, mint', price: 890 },
        { id: 'midnight-fig', name: 'Midnight Fig', description: 'dark rum, fig, lime, aromatic bitters', price: 960 },
      ],
    },
    {
      id: 'classics',
      name: 'CLASSICS',
      items: [
        { id: 'negroni', name: 'Negroni', description: 'gin, Campari, sweet vermouth', price: 850 },
        { id: 'old-fashioned', name: 'Old Fashioned', description: 'bourbon, bitters, sugar', price: 890 },
        { id: 'espresso-martini', name: 'Espresso Martini', description: 'vodka, coffee liqueur, espresso', price: 880 },
        { id: 'margarita', name: 'Margarita', description: 'tequila, triple sec, lime', price: 850 },
        { id: 'pornstar-martini', name: 'Pornstar Martini', description: 'vodka, passion fruit, vanilla', price: 920 },
        { id: 'whiskey-sour', name: 'Whiskey Sour', description: 'bourbon, lemon, sugar, egg white', price: 890, allergens: ['eggs'] },
      ],
    },
    {
      id: 'spritz',
      name: 'SPRITZ',
      items: [
        { id: 'aperol-spritz', name: 'Aperol Spritz', description: 'Aperol, prosecco, soda', price: 790 },
        { id: 'hugo', name: 'Hugo', description: 'elderflower, prosecco, lime, mint', price: 790 },
        { id: 'limoncello-spritz', name: 'Limoncello Spritz', description: 'limoncello, prosecco, soda', price: 820 },
        { id: 'pink-spritz', name: 'Pink Spritz', description: 'grapefruit aperitivo, prosecco, citrus', price: 820, tags: ['Novo'] },
      ],
    },
    {
      id: 'zero-proof',
      name: 'ZERO PROOF',
      items: [
        { id: 'garden-tonic', name: 'Garden Tonic', description: 'cucumber, basil, lime, tonic', price: 590 },
        { id: 'pink-lemonade', name: 'Pink Lemonade', description: 'raspberry, lemon, soda', price: 560 },
        { id: 'tropical-zero', name: 'Tropical Zero', description: 'passion fruit, pineapple, lime', price: 620 },
      ],
    },
    {
      id: 'wine',
      name: 'WINE',
      items: [
        { id: 'prosecco-glass', name: 'Prosecco — glass', description: '0.15 l', price: 690 },
        { id: 'house-white', name: 'House white wine — glass', description: '0.15 l', price: 590 },
        { id: 'house-rose', name: 'House rosé — glass', description: '0.15 l', price: 620 },
        { id: 'house-red', name: 'House red wine — glass', description: '0.15 l', price: 620 },
      ],
    },
    {
      id: 'beer',
      name: 'BEER',
      items: [
        { id: 'craft-lager', name: 'Craft Lager', description: '0.33 l', price: 490 },
        { id: 'ipa', name: 'IPA', description: '0.33 l', price: 560 },
        { id: 'non-alcoholic-beer', name: 'Non-alcoholic beer', description: '0.33 l', price: 450 },
      ],
    },
    {
      id: 'bites',
      name: 'BITES',
      items: [
        { id: 'marinated-olives', name: 'Marinated olives', description: 'olive, citrus, herbs', price: 490, tags: ['Vegan'] },
        { id: 'truffle-fries', name: 'Truffle fries', description: 'fries, parmesan, truffle aioli', price: 650, allergens: ['milk', 'eggs'] },
        { id: 'burrata-toast', name: 'Burrata toast', description: 'burrata, tomato, basil', price: 790, allergens: ['gluten', 'milk'] },
        { id: 'mini-sliders', name: 'Mini sliders', description: 'beef, cheddar, house sauce', price: 890, allergens: ['gluten', 'milk', 'eggs'] },
        { id: 'cheese-charcuterie', name: 'Cheese & charcuterie', description: 'selection of cheese, cured meat, olives', price: 1290, allergens: ['milk'] },
      ],
    },
  ],
}
