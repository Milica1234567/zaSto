import type { Restaurant } from '../../types/menu'

export const fornoRestaurant: Restaurant = {
  slug: 'forno',
  name: 'FORNO',
  subtitle: 'Pizza • Pasta • Aperitivo',
  tagline: 'Impasto lento. Fuoco vivo.',
  menuLabel: 'Pizzeria Italiana',
  description: 'Moderan italijanski meni inspirisan dugom fermentacijom, vatrom i jednostavnim sastojcima.',
  currency: 'RSD',
  theme: {
    primaryColor: '#a33b2f',
    backgroundColor: '#fbf5e9',
    textColor: '#2f302b',
    accentColor: '#6f7850',
    headingFontFamily: 'Georgia, "Times New Roman", serif',
    brandFontFamily: 'Georgia, "Times New Roman", serif',
    brandFontWeight: '700',
    bodyFontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    contentWidth: '47rem',
    headerPadding: '2.75rem 1.25rem 2rem',
  },
  categories: [
    {
      id: 'antipasti',
      name: 'ANTIPASTI',
      items: [
        { id: 'bruschetta-pomodoro', name: 'Bruschetta al Pomodoro', description: 'Paradajz, beli luk, bosiljak i ekstra devičansko maslinovo ulje.', price: 490, tags: ['Vegan'], allergens: ['gluten'] },
        { id: 'burrata', name: 'Burrata', description: 'Burrata, cherry paradajz, pesto i maslinovo ulje.', price: 890, tags: ['Vegetarijansko'], allergens: ['milk', 'nuts'] },
        { id: 'focaccia', name: 'Focaccia', description: 'Maslinovo ulje, ruzmarin i morska so.', price: 390, tags: ['Vegan'], allergens: ['gluten'] },
        { id: 'carpaccio', name: 'Carpaccio di Manzo', description: 'Tanko sečena junetina, rukola, parmezan, kapar i limun.', price: 1090, allergens: ['milk'] },
      ],
    },
    {
      id: 'pizze-classiche',
      name: 'PIZZE CLASSICHE',
      description: 'Testo fermentiše 48 sati i peče se na visokoj temperaturi.',
      items: [
        { id: 'margherita', name: 'Margherita', description: 'Pelat, mozzarella, bosiljak.', price: 790, tags: ['Vegetarijansko'], allergens: ['gluten', 'milk'] },
        { id: 'marinara', name: 'Marinara', description: 'Pelat, beli luk, origano, maslinovo ulje.', price: 690, tags: ['Vegan'], allergens: ['gluten'] },
        { id: 'capricciosa', name: 'Capricciosa', description: 'Pelat, mozzarella, šunka, pečurke, masline.', price: 990, allergens: ['gluten', 'milk'] },
        { id: 'diavola', name: 'Diavola', description: 'Pelat, mozzarella, pikantna salama.', price: 990, tags: ['Ljuto'], allergens: ['gluten', 'milk'] },
        { id: 'quattro-formaggi', name: 'Quattro Formaggi', description: 'Mozzarella i izbor italijanskih sireva.', price: 1090, allergens: ['gluten', 'milk'] },
      ],
    },
    {
      id: 'pizze-speciali',
      name: 'PIZZE SPECIALI',
      items: [
        { id: 'mortadella-pistacchio', name: 'Mortadella & Pistacchio', description: 'Mozzarella, mortadella, pesto od pistaća, stracciatella.', price: 1290, allergens: ['gluten', 'milk', 'nuts'] },
        { id: 'prosciutto-burrata', name: 'Prosciutto & Burrata', description: 'Pelat, prosciutto crudo, burrata i rukola.', price: 1390, allergens: ['gluten', 'milk'] },
        { id: 'tartufo', name: 'Tartufo', description: 'Mozzarella, pečurke, krema od tartufa i parmezan.', price: 1290, tags: ['Vegetarijansko'], allergens: ['gluten', 'milk'] },
        { id: 'forno-signature', name: 'Forno', description: 'Pelat, fior di latte, spianata piccante, pečena paprika, dimljena scamorza i maslinovo ulje.', price: 1390, tags: ['Forno izbor', 'Ljuto'], allergens: ['gluten', 'milk'] },
      ],
    },
    {
      id: 'pasta',
      name: 'PASTA',
      items: [
        { id: 'cacio-pepe', name: 'Cacio e Pepe', description: 'Tonnarelli, pecorino romano i sveže mleveni biber.', price: 890, tags: ['Vegetarijansko'], allergens: ['gluten', 'milk'] },
        { id: 'carbonara', name: 'Carbonara', description: 'Spaghetti, guanciale, pecorino, žumance i biber.', price: 990, allergens: ['gluten', 'milk', 'eggs'] },
        { id: 'tagliatelle-ragu', name: 'Tagliatelle al Ragù', description: 'Sveža pasta i sporo kuvani juneći ragù.', price: 1090, allergens: ['gluten', 'eggs'] },
        { id: 'pesto-genovese', name: 'Pesto Genovese', description: 'Trofie, bosiljak, pinjoli, parmezan i maslinovo ulje.', price: 950, tags: ['Vegetarijansko'], allergens: ['gluten', 'milk', 'nuts'] },
      ],
    },
    {
      id: 'dolci',
      name: 'DOLCI',
      items: [
        { id: 'tiramisu', name: 'Tiramisu', description: 'Mascarpone, espresso, kakao i piškote.', price: 590, tags: ['Preporuka kuće'], allergens: ['gluten', 'milk', 'eggs'] },
        { id: 'panna-cotta', name: 'Panna Cotta', description: 'Vanila i coulis od sezonskog voća.', price: 520, allergens: ['milk'] },
        { id: 'cannoli', name: 'Cannoli', description: 'Hrskavo testo, ricotta, citrus i pistaći.', price: 560, allergens: ['gluten', 'milk', 'nuts'] },
      ],
    },
    {
      id: 'bevande',
      name: 'BEVANDE',
      items: [
        { id: 'acqua-naturale', name: 'Acqua naturale', description: 'Negazirana voda, 0.33 l.', price: 250 },
        { id: 'acqua-frizzante', name: 'Acqua frizzante', description: 'Gazirana voda, 0.33 l.', price: 250 },
        { id: 'coca-cola', name: 'Coca-Cola', description: '0.25 l.', price: 290 },
        { id: 'coca-cola-zero', name: 'Coca-Cola Zero', description: '0.25 l.', price: 290 },
        { id: 'san-pellegrino-aranciata', name: 'San Pellegrino Aranciata', description: '0.20 l.', price: 390 },
        { id: 'espresso', name: 'Espresso', description: 'Kratki ili produženi.', price: 220 },
      ],
    },
  ],
}
