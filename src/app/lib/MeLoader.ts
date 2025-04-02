import { redirect } from 'react-router-dom'

import { store } from 'app/model/store'

import { signInApi } from 'pages/sign-in/api'

import TokenService from 'shared/lib/TokenService'
import { navigationMap } from 'shared/model/navigation'

export async function meLoader() {
  const token = TokenService.getToken()

  if (!token) {
    return redirect(navigationMap.SingIn)
  }

  try {
    await store.dispatch(signInApi.endpoints.getMe.initiate(undefined))
    return null
  } catch (e) {
    if (e instanceof Error) {
      console.error('Error:', e.message)
    } else {
      console.error('Unexpected error:', e)
    }
    TokenService.clearToken()
    return redirect(navigationMap.Home)
  }
}
