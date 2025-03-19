import { useState } from 'react'

import { MenuButton } from 'entities/header-components'

import { useMenuAnimation } from 'shared/hooks/useMenuAnimation'
import { MenuLayout } from 'shared/ui/MenuLayout/ui/MenuLayout'

import s from './MenuNavigation.module.scss'

export function MenuNavigation() {
  const [nav, setNav] = useState({
    services: false,
    company: false,
  })

  const { openMenu, closeMenu } = useMenuAnimation<keyof typeof nav>((key) => {
    setNav(() => ({
      services: false,
      company: false,
      [key as string]: true,
    }))
  })

  return (
    <div className={s.menuNavigation}>
      <button className={s.navBtn}>
        <a href={'/catalog'}>Товары</a>
      </button>

      <MenuButton
        title="Услуги"
        value={nav.services}
        onMouseEnter={() => openMenu('services')}
        onMouseLeave={closeMenu}
      />
      <MenuButton
        title="Компания"
        value={nav.company}
        onMouseEnter={() => openMenu('company')}
        onMouseLeave={closeMenu}
      />

      {nav.services && <MenuLayout>nav-services</MenuLayout>}
      {nav.company && <MenuLayout>nav-company</MenuLayout>}
    </div>
  )
}
