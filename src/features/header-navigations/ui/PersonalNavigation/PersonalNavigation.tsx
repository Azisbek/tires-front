import { useRef, useState } from 'react'

import { Search } from 'features/search'

import {
  CartNavigate,
  FavoriteNavigate,
  MenuButton,
} from 'entities/header-components'

import { useClickOutside } from 'shared/hooks/useClickOutside'
import { MenuLayout } from 'shared/ui/MenuLayout/ui/MenuLayout'

import s from './PersonalNavigation.module.scss'

export function PersonalNavigation() {
  const [personalMenu, setPersonalMemu] = useState(false)
  const [isSearch, setIsSearch] = useState(false)

  const toggleSearch = () => setIsSearch((prev) => !prev)

  const personalRef = useRef<HTMLDivElement>(null)

  useClickOutside(personalRef, () => setPersonalMemu(false), personalMenu)

  return (
    <div className={s.personalNavigation}>
      <Search
        value={isSearch}
        onClick={toggleSearch}
      />

      {/* <div className={s.navContainer}> */}
        <MenuButton
          title="Личный кабинет"
          to="/profile"
          value={personalMenu}
          onClick={() => setPersonalMemu((prev) => !prev)}
        />

        <FavoriteNavigate to="/favorites" />

        <CartNavigate to="/cart" />

        {personalMenu && (
          <MenuLayout ref={personalRef}>personal-account</MenuLayout>
        )}
      </div>
    // </div>
  )
}
