import { SearchIcon } from 'shared/assets/icons/SearchIcon/SearchIcon'
import crossIcon from 'shared/assets/icons/cross.webp'

import s from './Search.module.scss'

interface Props {
  value?: boolean
  onClick?: (value: boolean) => void
}

export function Search({ value = false, onClick }: Props) {
  return (
    <div className={s.search}>
      {value && (
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
      )}

      <button
        onClick={() => onClick?.(!value)}
        className={s.searchBtn}
      >
        {value ? (
          <img
            src={crossIcon}
            alt="cross"
            width={14}
            height={14}
          />
        ) : (
          <SearchIcon variant="white" />
        )}
      </button>
    </div>
  )
}
