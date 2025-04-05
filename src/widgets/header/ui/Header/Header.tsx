import clsx from 'clsx'

import { MenuNavigation, PersonalNavigation } from 'features/header-navigations'

import logoIcon from 'shared/assets/icons/logo/logo.webp'

import s from './Header.module.scss'

export function Header() {
  return (
    <header className={s.header}>
      <div className={clsx(s.headerContent, s.container)}>
        <MenuNavigation />

        <div className={s.logo}>
          <a href="/">
            <img
              src={logoIcon}
              alt="logo"
            />
          </a>
        </div>

        <PersonalNavigation />
      </div>
    </header>
  )
}
