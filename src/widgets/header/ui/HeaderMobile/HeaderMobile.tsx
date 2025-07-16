import clsx from 'clsx'

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { AutoComplete } from 'features/autocomplete'
import { MenuNavMobile } from 'features/header-navigations'
import { Search } from 'features/search'

import { SearchIcon } from 'shared/assets/icons/SearchIcon/SearchIcon'
import logoIcon from 'shared/assets/icons/logo/logo.webp'
import { navigationMap } from 'shared/model/navigation'
import { MenuLayout } from 'shared/ui/MenuLayout/ui/MenuLayout'

import s from './HeaderMobile.module.scss'

export function HeaderMobile() {
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
    <header className={s.header}>
      <div className={clsx(s.headerContent, s.container)}>
        <MenuNavMobile />

        <div className={s.logo}>
          <a href="/">
            <img
              src={logoIcon}
              alt="logo"
            />
          </a>
        </div>

        <button
          className={s.btn}
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
      </div>
    </header>
  )
}
