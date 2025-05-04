export const navigationMap = {
  // Cient routes
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

  // Admin routes
  Admin: '/admin',
  AddProduct: 'add-product',
  ApplicationsList: 'applications',
} as const

export type NavigationMap = (typeof navigationMap)[keyof typeof navigationMap]
