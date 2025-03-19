import clsx from 'clsx'

import { MenuNavigation, PersonalNavigation } from 'features/header-navigations'

import s from './Header.module.scss'

export function Header() {
  return (
    <header className={s.header}>
      <div className={clsx(s.headerContent, s.container)}>
        <MenuNavigation />

        <img
          className={s.logo}
          src="src/shared/assets/icons/logo/logo.svg"
          alt="logo"
        />

        {/* тестовый Search временно ! */}
        <PersonalNavigation />
      </div>
    </header>
  )
}
