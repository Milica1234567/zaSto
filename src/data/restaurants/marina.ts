import type { Restaurant } from '../../types/menu'
import marinaLogo from '../../assets/marina-assets/logo.png'
import oliveBranch from '../../assets/marina-assets/marina-olive-branch.png'
import lobster from '../../assets/marina-assets/marina-lobster.png'
import tomatoes from '../../assets/marina-assets/marina-tomatoes.png'
import citrusBranch from '../../assets/marina-assets/marina-citrus-branch.png'
import cocktail from '../../assets/marina-assets/marina-cocktail.png'

export const marinaRestaurant: Restaurant = {
  slug: 'marina',
  name: 'MARINA',
  logo: marinaLogo,
  subtitle: 'Mediteranska kuhinja',
  tagline: 'Dobra hrana. Duži razgovori.',
  description: 'Ukusi Mediterana, jednostavni sastojci i obroci koji se ne žure.',
  allCategoryLabel: 'Sve',
  headerDecoration: oliveBranch,
  currency: 'RSD',
  theme: {
    primaryColor: '#173b67',
    backgroundColor: '#fffdf7',
    textColor: '#202a34',
    accentColor: '#d9c9ae',
    headingFontFamily: 'Georgia, "Times New Roman", serif',
    bodyFontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
    contentWidth: '46rem',
  },
  categories: [
    {
      id: 'predjela',
      name: 'Predjela',
      items: [
        { id: 'bruskete-paradajz', name: 'Bruskete sa paradajzom', description: 'Hrskavi hleb, paradajz, bosiljak, maslinovo ulje.', price: 590, tags: ['Vegetarijansko'], allergens: ['gluten'] },
        { id: 'burrata', name: 'Burrata', description: 'Burrata, paradajz, pesto od bosiljka, maslinovo ulje.', price: 890, tags: ['Preporuka kuće'], allergens: ['milk', 'nuts'] },
        { id: 'grilovane-masline', name: 'Grilovane masline', description: 'Masline, citrusi, ruzmarin, morska so.', price: 490, tags: ['Vegan'] },
        { id: 'tartar-tuna', name: 'Tartar od tune', description: 'Tuna, avokado, limeta, susam.', price: 1190, allergens: ['fish', 'sesame'] },
      ],
      decoration: { image: lobster, align: 'right', size: 'medium' },
    },
    {
      id: 'riba-morski-plodovi',
      name: 'Riba i morski plodovi',
      items: [
        { id: 'lignje-zar', name: 'Lignje na žaru', description: 'Lignje, blitva, krompir, beli luk.', price: 1490, allergens: ['shellfish'] },
        { id: 'brancin', name: 'Brancin', description: 'File brancina, povrće sa grila, limun, maslinovo ulje.', price: 1790, tags: ['Preporuka kuće'], allergens: ['fish'] },
        { id: 'hobotnica', name: 'Hobotnica', description: 'Grilovana hobotnica, krompir, masline, kapar.', price: 1890, allergens: ['shellfish'] },
        { id: 'skampi-vino', name: 'Škampi u belom vinu', description: 'Škampi, beli luk, peršun, belo vino.', price: 1690, allergens: ['shellfish'] },
      ],
    },
    {
      id: 'pasta-rizoto',
      name: 'Pasta i rižoto',
      items: [
        { id: 'linguine-kozice', name: 'Linguine sa kozicama', description: 'Linguine, kozice, čeri paradajz, beli luk.', price: 1390, tags: ['Novo'], allergens: ['gluten', 'shellfish'] },
        { id: 'crni-rizoto', name: 'Crni rižoto', description: 'Sipa, pirinač, crnilo sipe, maslinovo ulje.', price: 1290, allergens: ['shellfish'] },
        { id: 'ravioli-ricotta', name: 'Ravioli sa ricottom', description: 'Ricotta, spanać, puter, žalfija.', price: 1190, tags: ['Vegetarijansko'], allergens: ['gluten', 'eggs', 'milk'] },
      ],
      decoration: { image: tomatoes, align: 'left', size: 'small' },
    },
    {
      id: 'glavna-jela',
      name: 'Glavna jela',
      items: [
        { id: 'pileci-mediterraneo', name: 'Pileći file Mediterraneo', description: 'Pileći file, povrće sa grila, sos od limuna.', price: 1190 },
        { id: 'jagnjetina-ruzmarin', name: 'Jagnjetina sa ruzmarinom', description: 'Sporo pečena jagnjetina, krompir, ruzmarin.', price: 1790 },
        { id: 'biftek-povrce', name: 'Biftek sa mediteranskim povrćem', description: 'Biftek, tikvice, paprika, maslinovo ulje.', price: 2390 },
      ],
    },
    {
      id: 'salate',
      name: 'Salate',
      items: [
        { id: 'grcka-salata', name: 'Grčka salata', description: 'Paradajz, krastavac, feta, masline, crveni luk.', price: 690, tags: ['Vegetarijansko'], allergens: ['milk'] },
        { id: 'rukola-parmezan', name: 'Rukola i parmezan', description: 'Rukola, parmezan, čeri paradajz, balsamico.', price: 650, allergens: ['milk'] },
      ],
      decoration: { image: citrusBranch, align: 'center', size: 'small' },
    },
    {
      id: 'dezerti',
      name: 'Dezerti',
      items: [
        { id: 'limun-tart', name: 'Limun tart', description: 'Krem od limuna, prhko testo.', price: 590, allergens: ['gluten', 'eggs', 'milk'] },
        { id: 'maslinovo-ulje-cokolada', name: 'Maslinovo ulje & čokolada', description: 'Čokoladni mousse, maslinovo ulje, morska so.', price: 650, tags: ['Preporuka kuće'], allergens: ['eggs', 'milk'] },
        { id: 'panna-cotta', name: 'Panna cotta', description: 'Vanila, citrus, sezonsko voće.', price: 590, allergens: ['milk'] },
      ],
      decoration: { image: cocktail, align: 'right', size: 'medium' },
    },
    {
      id: 'pice',
      name: 'Piće',
      items: [
        { id: 'espresso', name: 'Espresso', description: 'Kratki ili produženi.', price: 220 },
        { id: 'cappuccino', name: 'Cappuccino', description: 'Espresso i mlečna pena.', price: 290, allergens: ['milk'] },
        { id: 'limunada', name: 'Domaća limunada', description: 'Limun, nana i malo meda.', price: 390 },
        { id: 'aperol-spritz', name: 'Aperol Spritz', description: 'Aperol, prosecco, soda, pomorandža.', price: 690 },
        { id: 'hugo', name: 'Hugo', description: 'Prosecco, zova, soda, nana.', price: 690 },
        { id: 'gin-tonic', name: 'Gin tonic', description: 'Gin, tonic i citrus.', price: 750 },
        { id: 'belo-vino', name: 'Čaša kućnog belog vina', description: 'Pažljivo odabrano vino, 0.15 l.', price: 590 },
        { id: 'crveno-vino', name: 'Čaša kućnog crvenog vina', description: 'Pažljivo odabrano vino, 0.15 l.', price: 590 },
        { id: 'mineralna-voda', name: 'Mineralna voda 0.75 l', description: 'Gazirana ili negazirana.', price: 390 },
      ],
    },
  ],
}
