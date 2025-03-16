import clsx from 'clsx'

import { MenuNavMobile } from 'features/header-navigations'
import { Search } from 'features/search'

import s from './HeaderMobile.module.scss'

export function HeaderMobile() {
  return (
    <header className={s.header}>
      <div className={clsx(s.headerContent, s.container)}>
        <MenuNavMobile />

        <img
          className={s.logo}
          src="src/shared/assets/icons/logo/logo.svg"
          alt="logo"
        />

        {/* тестовый Search временно ! */}
        <Search />
      </div>
    </header>
  )
}
