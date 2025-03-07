import SearchIcon from '../../../shared/assets/icon/search/search.svg'

import s from './Search.module.scss'

export function Search() {
  return (
    <img
      className={s.icon}
      src={SearchIcon}
      alt="search"
    />
  )
}
