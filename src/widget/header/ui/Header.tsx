import React from 'react'

import { BurgerMenu } from 'features/burger-menu'
import { UserDropdown } from 'features/personal-profile'
import { Search } from 'features/search'

import { User } from 'shared/ui/user/ui/User'

import { useScreenWidth } from '../../../shared/hooks/useScreenWidth'
import { Icons } from '../../../shared/ui/icons/ui/Icons'
import { Logo } from '../../../shared/ui/logo/ui/Logo'
import { NavMenu } from '../../../shared/ui/navMenu/ui/NavMenu'

import s from './Header.module.scss'

export function Header(): React.ReactElement {
  const { isMobile } = useScreenWidth()

  return (
    <header className={s.header}>
      <nav className={s.nav}>{isMobile ? <BurgerMenu /> : <NavMenu />}</nav>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.actions}>
        {isMobile ? null : <Search />}
        {isMobile ? null : <UserDropdown />}
        {isMobile ? <User /> : <Icons />}
      </div>
    </header>
  )
}
