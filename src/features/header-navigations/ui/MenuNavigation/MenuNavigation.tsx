import { useState } from 'react'
import { Link } from 'react-router-dom'

import { MenuButton } from 'entities/header-components'

import { navigationMap } from 'shared/model/navigation'
import { MenuLayout } from 'shared/ui/MenuLayout/ui/MenuLayout'

import s from './MenuNavigation.module.scss'

export function MenuNavigation() {
  const [isCompanyOpen, setIsCompanyOpen] = useState(false)

  return (
    <div className={s.menuNavigation}>
      <button>
        <Link
          className={s.navLink}
          to={navigationMap.Home}
        >
          Главная
        </Link>
      </button>

      <button className={s.navBtn}>
        <Link to={navigationMap.Catalog}>Каталог</Link>
      </button>

      <MenuButton
        title="Компания"
        value={isCompanyOpen}
        onMouseEnter={setIsCompanyOpen}
        onMouseLeave={setIsCompanyOpen}
      />

      {isCompanyOpen && (
        <MenuLayout
          onMouseEnter={() => setIsCompanyOpen(true)}
          onMouseLeave={() => setIsCompanyOpen(false)}
        >
          <Link
            className={s.navLink}
            to={navigationMap.About}
          >
            О компании
          </Link>
          <Link
            className={s.navLink}
            to={navigationMap.Contacts}
          >
            Контакты
          </Link>
          <Link
            className={s.navLink}
            to={navigationMap.News}
          >
            Новости
          </Link>
        </MenuLayout>
      )}
    </div>
  )
}
