export const navigationMap = {
  Base: '/',
  Home: '/',
  Catalog: '/catalog',
  CatalogItem: '/catalog/:id',
  News: '/news',
  NewsItem: '/news/:id',
  About: '/about',
  SingIn: '/sign-in',
  SingUp: '/sign-up',
} as const

export type NavigationMap = (typeof navigationMap)[keyof typeof navigationMap]
