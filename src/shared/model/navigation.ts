export const navigationMap = {
  Base: '/',
  Home: '/',
  Catalog: '/catalog',
  CatalogItem: '/catalog/:id',
  NewsDetails: '/newsDetails',
} as const

export type NavigationMap = (typeof navigationMap)[keyof typeof navigationMap]
