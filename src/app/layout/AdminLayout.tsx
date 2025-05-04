import { Outlet } from 'react-router-dom'

import s from 'shared/styles/AdminLayout.module.scss'
import { ErrorBoundary, ErrorScreen } from 'shared/ui/error-boundary'

export function AdminLayout() {
  // Тут будет логика входа только для админов !

  return (
    <ErrorBoundary fallback={<ErrorScreen />}>
      <div className={s.adminLayout}>
        <Outlet />
      </div>
    </ErrorBoundary>
  )
}
