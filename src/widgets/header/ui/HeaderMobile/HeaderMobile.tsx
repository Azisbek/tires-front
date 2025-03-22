import clsx from 'clsx'

import { MenuNavMobile } from 'features/header-navigations'
import { Search } from 'features/search'

import logoIcon from 'shared/assets/icons/logo/logo.svg'

import s from './HeaderMobile.module.scss'

export function HeaderMobile() {
  return (
    <header className={s.header}>
      <div className={clsx(s.headerContent, s.container)}>
        <MenuNavMobile />

        <div className={s.logo}>
          <img
            src={logoIcon}
            alt="logo"
          />
        </div>

        {/* тестовый Search временно ! */}
        <Search />
      </div>
    </header>
  )
}
