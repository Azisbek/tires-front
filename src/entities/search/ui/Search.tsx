import { SearchIcon } from 'shared/assets/icons/SearchIcon/SearchIcon'

import s from './Search.module.scss'

export function Search() {
  return (
    <div className={s.search}>
      <div className={s.searchContainer}>
        <SearchIcon variant="orange" />

        <input
          id="searchInput"
          className={s.searchInput}
          type="text"
          placeholder="Введите название товара или услуги"
        />

        <button className={s.btn}>Найти</button>
      </div>
    </div>
  )
}
