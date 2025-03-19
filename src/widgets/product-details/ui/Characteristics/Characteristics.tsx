import { Link, Outlet, useLocation } from 'react-router-dom'

import s from './Characteristics.module.scss'

export function Characteristics() {
  const locate = useLocation()

  const isActive = (link: string) => locate.pathname.includes(link)

  return (
    <div className={s.characteristics}>
      <nav className={s.navigation}>
        <Link
          to={`./info`}
          className={isActive('info') ? s.active : s.navBtn}
        >
          Общая информация
        </Link>
        <Link
          to={`./specs`}
          className={isActive('specs') ? s.active : s.navBtn}
        >
          Характеристики
        </Link>
        <Link
          to={`./payment`}
          className={isActive('payment') ? s.active : s.navBtn}
        >
          Оплата
        </Link>
        <Link
          to={`./reviews`}
          className={isActive('reviews') ? s.active : s.navBtn}
        >
          Отзывы (2)
        </Link>
      </nav>

      <Outlet/>
    </div>
  )
}
