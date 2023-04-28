type MapCategory = {
  [key: string]: string
}

export const Categories = [
  { label: 'Compras', value: 'shopping', icon: 'shopping-cart' },
  { label: 'Geral', value: 'general', icon: 'list' }
]

export const MapCategoryTitle: MapCategory = {
  'general': 'Geral',
  'shopping': 'Compras'
}

export const MapCategoryScreen: MapCategory = {
  'general': 'TaskGeneral',
  'shopping': 'TaskShopping'
}