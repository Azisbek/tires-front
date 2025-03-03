import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { store } from 'app/model/store'
import { router } from 'app/routes/routes'

import { RouterLayout } from '../layout/RouterLayout'

export function CombinedProviders() {
  return (
    <Provider store={store}>
      <RouterLayout>
        <RouterProvider router={router} />
      </RouterLayout>
    </Provider>
  )
}
