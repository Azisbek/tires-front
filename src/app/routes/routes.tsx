import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'

import { Redirect } from 'app/lib/Redirect'

import { navigationMap } from 'shared/model/navigation'

const Home = lazy(() => import('pages/home'))
const Catalog = lazy(() => import('pages/catalog'))

export const router = createBrowserRouter([
  {
    path: navigationMap.Base,
    children: [
      {
        path: navigationMap.Home,
        element: <Home />,
      },
      {
        element: <Redirect />,
        children: [
          { path: navigationMap.Home, element: <Home /> },
          { path: navigationMap.Catalog, element: <Catalog /> },
        ],
      },
    ],
  },
])

export default router
