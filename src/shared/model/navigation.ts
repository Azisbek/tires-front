export const navigationMap = {
  Base: '/',
  Home: '/',
  Catalog: '/catalog',
  CatalogItem: '/catalog/:id',
  News:'/news'
  About: '/about'
} as const

export type NavigationMap = (typeof navigationMap)[keyof typeof navigationMap]
