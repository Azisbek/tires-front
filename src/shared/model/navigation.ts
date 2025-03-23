export const navigationMap = {
  Base: '/',
  Home: '/',
  Catalog: '/catalog',
  CatalogItem: '/catalog/:id',
  News: 'news',
} as const

export type NavigationMap = (typeof navigationMap)[keyof typeof navigationMap]
