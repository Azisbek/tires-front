import s from './UserDropdown.module.scss'

export function UserDropdown() {
  return (
    <div className={s.dropdown}>
      <button className={s.dropdownButton}>Личный кабинет</button>
    </div>
  )
}


