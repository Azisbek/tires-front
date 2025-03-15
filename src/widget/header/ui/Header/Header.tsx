import React from 'react'
import { Search } from 'features/search'
import { Icons } from '../../../../shared/ui/icons/ui/Icons'
import { Logo } from '../../../../entities/logo/ui/Logo'
import { NavMenu } from '../../../../shared/ui/navMenu/ui/NavMenu'
import s from './Header.module.scss'
import { PersonalAccount } from '../PersonalAccount/PersonalAccount'

export function Header(): React.ReactElement {
  

  return (
    <header className={s.header}>
      <nav className={s.nav}>{<NavMenu />}</nav>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.actions}>
        {<Search />}
        {<PersonalAccount/>}
        {<Icons />}
      </div>
    </header>
  )
}
