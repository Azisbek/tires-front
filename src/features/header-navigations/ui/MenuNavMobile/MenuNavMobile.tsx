import clsx from 'clsx'

import { useRef, useState } from 'react'

import { useClickOutside } from 'shared/hooks/useClickOutside'
import { MenuLayout } from 'shared/ui/MenuLayout/ui/MenuLayout'

import s from './MenuNavMobile.module.scss'

export function MenuNavMobile() {
  const [isBurger, setIsBurger] = useState(false)

  const toggleBurger = () => setIsBurger((prev) => !prev)

  return (
    <>
      <div
        onClick={toggleBurger}
        className={s.menuNav}
      >
        <div className={clsx(s.burger, isBurger && s.active)}>
          <span className={s.line}></span>
          <span className={s.middle}></span>
          <span className={s.middle}></span>
          <span className={s.line}></span>
        </div>

        <p className={clsx(s.title, isBurger && s.active)}>
          {isBurger ? 'Закрыть' : 'Меню'}
        </p>
      </div>

      {isBurger && <MenuLayout>mobile</MenuLayout>}
    </>
  )
}
