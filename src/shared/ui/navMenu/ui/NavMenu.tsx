import s from './NavMenu.module.scss'

export function NavMenu() {
  return (
    <nav className={s.menu}>
      <li>
        <button className={s.menuButton}>Товары </button>
      </li>
      <button className={s.servicesButton}>Услуги</button>
      <button className={s.company}>Компания</button>
    </nav>
  )
}
