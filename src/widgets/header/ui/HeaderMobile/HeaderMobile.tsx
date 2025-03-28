import clsx from 'clsx'

import { useState } from 'react'

import { MenuNavMobile } from 'features/header-navigations'

import { Search } from 'entities/search'

import { SearchIcon } from 'shared/assets/icons/SearchIcon/SearchIcon'
import logoIcon from 'shared/assets/icons/logo/logo.webp'
import { MenuLayout } from 'shared/ui/MenuLayout/ui/MenuLayout'

import s from './HeaderMobile.module.scss'

export function HeaderMobile() {
  const [isSearch, setIsSearch] = useState(false)

  const toggleSearch = () => setIsSearch((prev) => !prev)

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
          </MenuLayout>
        )}
      </div>
    </header>
  )
}
