import clsx from 'clsx'

import { useState } from 'react'
import { Link } from 'react-router-dom'

import { navigationMap } from 'shared/model/navigation'
import { MenuLayout } from 'shared/ui/MenuLayout/ui/MenuLayout'

import s from './MenuNavMobile.module.scss'

export function MenuNavMobile() {
  const [isBurger, setIsBurger] = useState(false)

  const toggleBurger = () => setIsBurger((prev) => !prev)

  const handleNavClick = () => setIsBurger(false)

  return (
    <>
      <div
        onClick={toggleBurger}
        className={s.menuNav}
      >
        <div className={clsx(s.burger, isBurger && s.active)}>
          <span className={s.line}></span>
          <span className={s.middle}></span>
          <span className={s.middle}></span>
          <span className={s.line}></span>
        </div>

        <p className={clsx(s.title, isBurger && s.active)}>
          {isBurger ? 'Закрыть' : 'Меню'}
        </p>
      </div>

      {isBurger && (
        <MenuLayout>
          <div className={s.navList}>
            <Link
              className={s.navLink}
              to={navigationMap.Catalog}
              onClick={handleNavClick}
            >
              Товары
            </Link>

            <Link
              className={s.navLink}
              to={navigationMap.About}
              onClick={handleNavClick}
            >
              О нас
            </Link>

            <Link
              className={s.navLink}
              to={navigationMap.News}
              onClick={handleNavClick}
            >
              Новости
            </Link>

            <Link
              className={s.navLink}
              to={navigationMap.Contacts}
              onClick={handleNavClick}
            >
              Контакты
            </Link>

            <Link
              className={s.navLink}
              to={navigationMap.ProfilePage}
              onClick={handleNavClick}
            >
              Личный кабинет
            </Link>

            <Link
              className={s.navLink}
              to={navigationMap.Cart}
              onClick={handleNavClick}
            >
              Корзина
            </Link>

            <Link
              className={s.navLink}
              to={navigationMap.Favorite}
              onClick={handleNavClick}
            >
              Избранные
            </Link>
          </div>
        </MenuLayout>
      )}
    </>
  )
}
