import { useRef, useState } from 'react'

import { MenuButton } from 'entities/header-components'

import { useClickOutside } from 'shared/hooks/useClickOutside'
import { MenuLayout } from 'shared/ui/MenuLayout/ui/MenuLayout'

import s from './MenuNavigation.module.scss'

export function MenuNavigation() {
  const [nav, setNav] = useState({
    services: false,
    company: false,
  })

  const menuRef = useRef<HTMLDivElement>(null)

  const toggleNavList = (key: keyof typeof nav, value: boolean) => {
    setNav(() => ({
      services: false,
      company: false,
      [key]: value,
    }))
  }

  const isAnyMenuOpen = Object.values(nav).some((isOpen) => isOpen)
  useClickOutside(
    menuRef,
    () => setNav({ services: false, company: false }),
    isAnyMenuOpen,
  )

  return (
    <div className={s.menuNavigation}>
      <button className={s.navBtn}>
        <a href={'#'}>Товары</a>
      </button>

      <MenuButton
        title="Услуги"
        value={nav.services}
        onClick={() => toggleNavList('services', !nav.services)}
      />
      <MenuButton
        title="Компания"
        value={nav.company}
        onClick={() => toggleNavList('company', !nav.company)}
      />

      {nav.services && <MenuLayout ref={menuRef}>nav-services</MenuLayout>}
      {nav.company && <MenuLayout ref={menuRef}>nav-company</MenuLayout>}
    </div>
  )
}
