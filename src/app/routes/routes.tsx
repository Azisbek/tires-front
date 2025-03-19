import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Redirect } from 'app/lib/Redirect'

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
