import React from 'react'
import { UserDropdown } from 'features/personal-profile'
import { Search } from 'features/search'
import { Icons } from '../../../../shared/ui/icons/ui/Icons'
import { Logo } from '../../../../shared/ui/logo/ui/Logo'
import { NavMenu } from '../../../../shared/ui/navMenu/ui/NavMenu'
import s from './Header.module.scss'

export function Header(): React.ReactElement {
  

  return (
    <header className={s.header}>
      <nav className={s.nav}>{<NavMenu />}</nav>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.actions}>
        {<Search />}
        {<UserDropdown />}
        {<Icons />}
      </div>
    </header>
  )
}
