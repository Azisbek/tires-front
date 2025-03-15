// import clsx from 'clsx'
// import { useState } from 'react'
// import s from './BurgerMenu.module.scss'
// import BurgerIcon from '../../../shared/assets/icons/burgerMenu/burger-icon.svg'

// export function BurgerMenu() {
//   const [isOpen, setIsOpen] = useState(false)

//   const toggleMenu = () => setIsOpen((prev) => !prev)

//   return (
//     <div className={s.burgerMenu}>
//       <button
//         className={clsx(s.burgerButton, { [s.open]: isOpen })}
//         onClick={toggleMenu}
//       >
//         {isOpen ? (
//           <>
//             <span className={s.closeIcon}>✖</span> Закрыть
//           </>
//         ) : (
//           <>
//             <img src={BurgerIcon} alt="Burger Icon" />
//             Меню
//           </>
//         )}
//       </button>
      
//       {isOpen && (
//         <div className={s.menu}>
//           <ul className={s.menuList}>
//             <li className={s.menuItem}>Товары</li>
//             <li className={s.menuItem}>Услуги</li>
//             <li className={s.menuItem}>Компания</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }

import clsx from 'clsx';
import { useState } from 'react';
import s from './BurgerMenu.module.scss';

export function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <div className={s.burgerMenu}>
      <button className={clsx(s.burgerButton, { [s.open]: isOpen })} onClick={toggleMenu}>
        <div className={clsx(s.burgerIcon, { [s.open]: isOpen })}>
          <span className={s.line}></span>
          <span className={s.line}></span>
          <span className={s.line}></span>
        </div>
        <p className={s.burgerDescription}>Меню</p>
      </button>
      {isOpen && (
        <div className={s.menu}>
          <ul className={s.menuList}>
            <li className={s.menuItem}>Товары</li>
            <li className={s.menuItem}>Услуги</li>
            <li className={s.menuItem}>Компания</li>
          </ul>
        </div>
      )}
    </div>
  );
}
