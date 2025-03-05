import clsx from 'clsx'

import { useState } from 'react'

import s from './BurgerMenu.module.scss'

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <div className={s.burgerMenu}>
      <button
        className={clsx(s.burgerButton, { [s.open]: isOpen })}
        onClick={toggleMenu}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
        >
          <rect
            width="80"
            height="8"
            x="10"
            y="25"
            fill="white"
          />
          <rect
            width="70"
            height="8"
            x="10"
            y="45"
            fill="white"
          />
          <rect
            width="80"
            height="8"
            x="10"
            y="65"
            fill="white"
          />
        </svg>
        Меню
      </button>
      {isOpen && (
        <div className={s.menu}>
          <ul></ul>
        </div>
      )}
    </div>
  )
}
