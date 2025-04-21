import { Navigate, Outlet } from 'react-router-dom'

import TokenService from 'shared/lib/TokenService'
import { navigationMap } from 'shared/model/navigation'

export function Redirect() {
  const access = TokenService.getToken()

  if (!access)
    return (
      <Navigate
        to={navigationMap.SignIn}
        replace
      />
    )

  return <Outlet />
}
