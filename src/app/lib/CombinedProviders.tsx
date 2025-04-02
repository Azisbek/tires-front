import { GoogleOAuthProvider } from '@react-oauth/google'

import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { store } from 'app/model/store'
import { router } from 'app/routes/routes'

import { RouterLayout } from '../layout/RouterLayout'

const clientId =
  '363530121640-qj4s87otesqlda6d9f1rq4jedalqc4m1.apps.googleusercontent.com'

export function CombinedProviders() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Provider store={store}>
        <RouterLayout>
          <RouterProvider router={router} />
        </RouterLayout>
      </Provider>
    </GoogleOAuthProvider>
  )
}
