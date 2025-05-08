import { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

import { meLoader } from 'app/lib/MeLoader'
import { Redirect } from 'app/lib/Redirect'

import { Reviews } from 'widgets/reviews'

import {
  GeneralInformation,
  Payment,
  Specs,
} from 'entities/characteristics-components'

import { navigationMap } from 'shared/model/navigation'
import { ErrorScreen } from 'shared/ui/error-boundary'

const Home = lazy(() => import('pages/home'))
const Catalog = lazy(() => import('pages/catalog'))
const ProductPage = lazy(() => import('pages/product-page'))
const News = lazy(() => import('pages/news'))
const About = lazy(() => import('pages/about'))
const ProfilePage = lazy(() => import('pages/profilePage'))
const NewsPage = lazy(() => import('pages/news-page'))
const SignInPage = lazy(() => import('pages/sign-in'))
const SignUpPage = lazy(() => import('pages/sign-up'))
const FavoritePage = lazy(() => import('pages/favorite-page'))
const Contacts = lazy(() => import('pages/contacts'))
const AddProduct = lazy(() => import('pages/admin/AddProduct'))
const AdminPage = lazy(() => import('pages/admin-page'))
const ApplicationsList = lazy(() => import('pages/applications-page'))
const OrderPage = lazy(() => import('pages/order'))

export const router = createBrowserRouter([
  {
    path: navigationMap.Base,
    errorElement: <ErrorScreen />,
    children: [
      {
        path: navigationMap.Home,
        element: <Home />,
      },
      { path: navigationMap.Catalog, element: <Catalog /> },
      { path: navigationMap.News, element: <News /> },
      { path: navigationMap.About, element: <About /> },
      { path: navigationMap.NewsItem, element: <NewsPage /> },
      { path: navigationMap.Contacts, element: <Contacts /> },
      { path: navigationMap.AdminPage, element: <AdminPage /> },
      { path: navigationMap.ApplicationsList, element: <ApplicationsList /> },
      { path: navigationMap.Order, element: <OrderPage /> },
      {
        path: navigationMap.SignIn,
        element: <SignInPage />,
      },
      {
        path: navigationMap.SignUp,
        element: <SignUpPage />,
      },

      {
        path: navigationMap.CatalogItem,
        element: <ProductPage />,
        children: [
          {
            index: true, // <-- если зашли на /catalog/:id, срабатывает этот редирект
            element: (
              <Navigate
                to="info"
                replace
              />
            ),
          },
          { path: `info`, element: <GeneralInformation /> },
          { path: `specs`, element: <Specs /> },
          { path: `payment`, element: <Payment /> },
          { path: `reviews`, element: <Reviews /> },
        ],
      },

      {
        element: <Redirect />,
        children: [
          { path: navigationMap.ProfilePage, element: <ProfilePage /> },
          { path: navigationMap.Favorite, element: <FavoritePage /> },
        ].map((config) => ({
          ...config,
          loader: meLoader,
        })),
      },
    ],
  },
  {
    path: navigationMap.Admin,
    children: [
      {
        path: navigationMap.AddProduct,
        element: <AddProduct />,
      },
    ],
  },
])

export default router
