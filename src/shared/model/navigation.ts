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
  Order: '/basket/order',

  // Admin routes
  Admin: '/admin',
  AddProduct: 'add-product',
  ApplicationsList: 'applications',
  TiresTypeList: 'add-tires-type',
  BodyTypeList: 'add-body-type',
  AddNews: 'add-news',
} as const

export type NavigationMap = (typeof navigationMap)[keyof typeof navigationMap]
