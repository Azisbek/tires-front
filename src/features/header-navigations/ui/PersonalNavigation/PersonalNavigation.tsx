import { useState } from 'react'

import { CartNavigate, FavoriteNavigate } from 'entities/header-components'
import { Search } from 'entities/search'

import { SearchIcon } from 'shared/assets/icons/SearchIcon/SearchIcon'
import { MenuLayout } from 'shared/ui/MenuLayout/ui/MenuLayout'

import s from './PersonalNavigation.module.scss'

export function PersonalNavigation() {
  const [isSearch, setIsSearch] = useState(false)

  const toggleSearch = () => setIsSearch((prev) => !prev)

  return (
    <div className={s.personalNavigation}>
      <button
        className={s.navBtn}
        onClick={toggleSearch}
      >
        <SearchIcon variant="white" />
      </button>

      {isSearch && (
        <MenuLayout paddingVertical={10}>
          <Search />
        </MenuLayout>
      )}

      <button className={s.navBtn}>
        <a href={'/catalog'}>Личный кабинет</a>
      </button>

      <FavoriteNavigate to="/favorites" />

      <CartNavigate to="/cart" />
    </div>
  )
}
