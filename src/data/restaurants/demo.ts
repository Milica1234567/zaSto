import type { Restaurant } from '../../types/menu'

export const demoRestaurant: Restaurant = {
  slug: 'demo',
  name: 'Bistro Jutro',
  description: 'Sveži lokalni sastojci, poznati ukusi i malo modernog šmeka.',
  address: 'Kralja Petra 24, Beograd',
  instagram: 'https://www.instagram.com/',
  wifi: 'JutroGosti',
  currency: 'RSD',
  theme: {
    primaryColor: '#873f2d',
    backgroundColor: '#fffaf2',
    textColor: '#29231f',
    accentColor: '#d99b62',
  },
  categories: [
    {
      id: 'dorucak',
      name: 'Doručak',
      description: 'Služimo svakog dana do 13 časova.',
      items: [
        { id: 'omlet', name: 'Baštenski omlet', description: 'Tri jaja, mladi sir, spanać, paradajz i tostirani hleb.', price: 590, tags: ['Vegetarijansko'], allergens: ['eggs', 'milk', 'gluten'] },
        { id: 'ustipci', name: 'Domaći uštipci', description: 'Topli uštipci, kajmak, ajvar i sezonska salata.', price: 620, tags: ["Chef's choice"], allergens: ['gluten', 'milk', 'eggs'] },
        { id: 'granola', name: 'Granola i jogurt', description: 'Domaća granola, grčki jogurt, med i sveže voće.', price: 520, tags: ['Vegetarijansko'], allergens: ['gluten', 'milk', 'nuts'] },
        { id: 'avokado-tost', name: 'Avokado tost', description: 'Hleb od kiselog testa, avokado, poširano jaje i čili.', price: 690, tags: ['Popularno'], allergens: ['gluten', 'eggs', 'sesame'] },
      ],
    },
    {
      id: 'predjela',
      name: 'Predjela',
      items: [
        { id: 'brusketi', name: 'Brusketi', description: 'Paradajz, bosiljak, beli luk i ekstra devičansko maslinovo ulje.', price: 540, tags: ['Vegan'], allergens: ['gluten'] },
        { id: 'daska', name: 'Daska domaćih sireva', description: 'Izbor lokalnih sireva, orasi, grožđe i džem od smokve.', price: 890, allergens: ['milk', 'nuts'] },
        { id: 'humus', name: 'Humus od pečene paprike', description: 'Leblebije, pečena paprika, tahini i hrskava pita.', price: 560, tags: ['Vegan', 'Novo'], allergens: ['sesame', 'gluten'] },
      ],
    },
    {
      id: 'glavna-jela',
      name: 'Glavna jela',
      description: 'Jela pripremamo po porudžbini.',
      items: [
        { id: 'piletina', name: 'Piletina sa žara', description: 'Krem od celera, grilovano povrće i sos od začinskog bilja.', price: 1190, allergens: ['milk'] },
        { id: 'burger', name: 'Jutro burger', description: 'Juneće meso, dimljeni sir, karamelizovani luk i domaći krompirići.', price: 1290, tags: ['Popularno'], allergens: ['gluten', 'milk', 'eggs', 'sesame'] },
        { id: 'losos', name: 'Losos na puteru', description: 'File lososa, pire od graška, blitva i limun.', price: 1790, tags: ["Chef's choice"], allergens: ['fish', 'milk'], available: false },
        { id: 'karfiol', name: 'Pečeni karfiol', description: 'Krem od leblebije, salsa verde, badem i nar.', price: 980, tags: ['Vegan'], allergens: ['nuts', 'sesame'] },
      ],
    },
    {
      id: 'pasta',
      name: 'Pasta',
      items: [
        { id: 'pasta-pecurke', name: 'Tagliatelle sa pečurkama', description: 'Šumske pečurke, parmezan, beli luk i ulje tartufa.', price: 1090, tags: ['Vegetarijansko'], allergens: ['gluten', 'eggs', 'milk'] },
        { id: 'ragu', name: 'Pappardelle ragu', description: 'Sporo kuvana junetina, paradajz, crveno vino i parmezan.', price: 1240, allergens: ['gluten', 'eggs', 'milk'] },
        { id: 'arrabbiata', name: 'Penne arrabbiata', description: 'Paradajz, beli luk, čili i sveži peršun.', price: 890, tags: ['Vegan', 'Ljuto'], allergens: ['gluten'] },
      ],
    },
    {
      id: 'dezerti',
      name: 'Dezerti',
      items: [
        { id: 'torta', name: 'Čokoladna torta', description: 'Crna čokolada, lešnik i slana karamela.', price: 510, tags: ['Popularno'], allergens: ['gluten', 'milk', 'eggs', 'nuts'] },
        { id: 'pita', name: 'Pita sa jabukama', description: 'Topla pita, cimet i kugla sladoleda od vanile.', price: 490, allergens: ['gluten', 'milk', 'eggs'] },
        { id: 'panna-cotta', name: 'Panna cotta', description: 'Vanila, malina i pistaći.', price: 520, tags: ['Novo'], allergens: ['milk', 'nuts'] },
      ],
    },
    {
      id: 'kafa',
      name: 'Kafa',
      description: 'Naša mešavina je 100% arabika.',
      items: [
        { id: 'espresso', name: 'Espresso', description: 'Kratki ili produženi.', price: 220 },
        { id: 'cappuccino', name: 'Cappuccino', description: 'Espresso i kremasta mlečna pena.', price: 290, allergens: ['milk'] },
        { id: 'flat-white', name: 'Flat white', description: 'Dupli espresso i fino teksturisano mleko.', price: 340, allergens: ['milk'] },
        { id: 'cold-brew', name: 'Cold brew', description: 'Hladno ekstrahovana kafa, servirana preko leda.', price: 360, tags: ['Novo'] },
      ],
    },
    {
      id: 'pice',
      name: 'Piće',
      items: [
        { id: 'limunada', name: 'Domaća limunada', description: 'Limun, nana i med.', price: 330 },
        { id: 'sok', name: 'Ceđeni sok', description: 'Pomorandža, grejp ili sezonska kombinacija.', price: 420 },
        { id: 'voda', name: 'Mineralna voda', description: 'Gazirana ili negazirana, 0.75 l.', price: 390 },
        { id: 'vino', name: 'Vino kuće', description: 'Belo ili crveno, 0.15 l.', price: 420 },
      ],
    },
  ],
}
