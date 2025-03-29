export const navigationMap = {
  Base: '/',
  Home: '/',
  Catalog: '/catalog',
  CatalogItem: '/catalog/:id',
  News: '/news',
  About: '/about',
  Favorite: '/favorite',
} as const

export type NavigationMap = (typeof navigationMap)[keyof typeof navigationMap]
