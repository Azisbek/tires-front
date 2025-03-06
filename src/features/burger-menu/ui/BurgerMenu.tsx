import clsx from 'clsx'
import { useState } from 'react'
import s from './BurgerMenu.module.scss'
import BuregerIcon from '../../../shared/assets/icon/burgerMenu/burger-icon.svg'

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen((prev) => !prev)

  return (
    <div className={s.burgerMenu}>
      <button
        className={clsx(s.burgerButton, { [s.open]: isOpen })}
        onClick={toggleMenu}
      >
        <img src={BuregerIcon} alt="BurgerIcon " />
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
