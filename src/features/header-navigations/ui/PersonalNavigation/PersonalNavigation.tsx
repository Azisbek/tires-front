import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { AutoComplete } from 'features/autocomplete'
import { Search } from 'features/search'

import { CartNavigate, FavoriteNavigate } from 'entities/header-components'

import { SearchIcon } from 'shared/assets/icons/SearchIcon/SearchIcon'
import { navigationMap } from 'shared/model/navigation'
import { MenuLayout } from 'shared/ui/MenuLayout/ui/MenuLayout'

import s from './PersonalNavigation.module.scss'

export function PersonalNavigation() {
  const [isSearch, setIsSearch] = useState(false)
  const navigate = useNavigate()

  const toggleSearch = () => {
    setIsSearch((prev) => !prev)

    if (!isSearch) {
      navigate(navigationMap.Catalog)
    } else {
      navigate(-1)
    }
  }

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
          <AutoComplete />
        </MenuLayout>
      )}

      <button className={s.navBtn}>
        <Link to={navigationMap.ProfilePage}>Личный кабинет</Link>
      </button>

      <FavoriteNavigate to={navigationMap.Favorite} />

      <CartNavigate to={navigationMap.Cart} />
    </div>
  )
}
