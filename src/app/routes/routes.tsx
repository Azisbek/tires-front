import { lazy } from 'react'
import { Navigate, createBrowserRouter } from 'react-router-dom'

import { Redirect } from 'app/lib/Redirect'

import { Reviews } from 'features/reviews'

import {
  GeneralInformation,
  Payment,
  Specs,
} from 'entities/characteristics-components'

import { navigationMap } from 'shared/model/navigation'

const Home = lazy(() => import('pages/home'))
const Catalog = lazy(() => import('pages/catalog'))
const ProductPage = lazy(() => import('pages/product-page'))
const About = lazy(() => import('pages/about') )

export const router = createBrowserRouter([
  {
    path: navigationMap.Base,
    children: [
      {
        path: navigationMap.Home,
        element: <Home />,
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
          { path: navigationMap.Home, element: <Home /> },
          { path: navigationMap.Catalog, element: <Catalog /> },
          { path: navigationMap.About, element: <About/>}
        ],
      },
    ],
  },
])

export default router
