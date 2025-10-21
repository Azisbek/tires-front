import { Suspense } from 'react'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { store } from 'app/model/store'
import { router } from 'app/routes/routes'

export function CombinedProviders() {
  return (
    <Provider store={store}>
      <Suspense>
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  )
}
