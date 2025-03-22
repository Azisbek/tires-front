import clsx from 'clsx'

import { MenuNavigation, PersonalNavigation } from 'features/header-navigations'

import logoIcon from 'shared/assets/icons/logo/logo.svg'

import s from './Header.module.scss'

export function Header() {
  return (
    <header className={s.header}>
      <div className={clsx(s.headerContent, s.container)}>
        <MenuNavigation />

        <div className={s.logo}>
          <img
            src={logoIcon}
            alt="logo"
          />
        </div>

        {/* тестовый Search временно ! */}
        <PersonalNavigation />
      </div>
    </header>
  )
}
