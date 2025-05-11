import { useEffect, useState } from 'react'

import { SearchIcon } from 'shared/assets/icons/SearchIcon/SearchIcon'
import { useAppDispatch, useAppSelector } from 'shared/lib/hooks'

import { clearSearch, setProductSearch, setSearch } from '../model/search.slice'

import s from './Search.module.scss'

export function Search() {
  const searchQuery = useAppSelector((state) => state.search.search)
  const [inputValue, setInputValue] = useState('')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(setSearch(inputValue))
  }, [inputValue, dispatch])

  useEffect(() => {
    if (searchQuery === '') {
      setInputValue('')
    }
  }, [searchQuery])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    dispatch(setProductSearch(inputValue))
    dispatch(clearSearch())
  }

  return (
    <div className={s.search}>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className={s.searchContainer}
      >
        <SearchIcon variant="orange" />

        <input
          autoComplete="off"
          className={s.searchInput}
          type="text"
          placeholder="Введите название товара или услуги"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
    </div>
  )
}
