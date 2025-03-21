import { useState } from 'react'

import { Search } from 'features/search'

import {
  CartNavigate,
  FavoriteNavigate,
  MenuButton,
} from 'entities/header-components'

import { useMenuAnimation } from 'shared/hooks/useMenuAnimation'
import { MenuLayout } from 'shared/ui/MenuLayout/ui/MenuLayout'

import s from './PersonalNavigation.module.scss'

export function PersonalNavigation() {
  const [personalMenu, setPersonalMemu] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  const toggleSearch = () => setIsSearch((prev) => !prev)

  const { openMenu, closeMenu } = useMenuAnimation<boolean>(setPersonalMemu)

  return (
    <div className={s.personalNavigation}>
      <Search
        value={isSearch}
        onClick={toggleSearch}
      />

      <MenuButton
        title="Личный кабинет"
        to="/profile"
        value={personalMenu}
        onMouseEnter={() => openMenu(true)}
        onMouseLeave={closeMenu}
      />

      <FavoriteNavigate to="/favorites" />

      <CartNavigate to="/cart" />

      {personalMenu && <MenuLayout>personal-account</MenuLayout>}
    </div>
  )
}
