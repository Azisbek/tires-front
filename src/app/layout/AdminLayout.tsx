import { Outlet, useNavigate } from 'react-router-dom'

import s from 'shared/styles/AdminLayout.module.scss'
import { ErrorBoundary, ErrorScreen } from 'shared/ui/error-boundary'

export function AdminLayout() {
  const navigate = useNavigate()

  // Тут будет логика входа только для админов !

  return (
    <ErrorBoundary fallback={<ErrorScreen />}>
      <div className={s.adminLayout}>
        <button
          className={s.adminBackBtn}
          onClick={() => navigate(-1)}
        >
          Назад
        </button>

        <Outlet />
      </div>
    </ErrorBoundary>
  )
}
