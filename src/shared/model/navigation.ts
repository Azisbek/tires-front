export const navigationMap = {
  Base: '/',
  Home: '/',
  Catalog: '/catalog',
  CatalogItem: '/catalog/:id',
  News: '/news',
  NewsItem: '/news/:id',
  About: '/about',
  ProfilePage: '/profile',
  SignIn: '/sign-in',
  SignUp: '/sign-up',
  Favorite: '/favorites',
  Contacts: '/contacts',

  Admin: '/admin',
  AddProducts: '/admin/add-products',
} as const

export type NavigationMap = (typeof navigationMap)[keyof typeof navigationMap]
