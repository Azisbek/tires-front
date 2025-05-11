import { useMemo } from 'react'

import {
  clearSearch,
  setProductSearch,
} from 'features/search/model/search.slice'

import { useAppDispatch, useAppSelector } from 'shared/lib/hooks'

import { useGetSearchProductQuery } from '../api'

import s from './AutoComplete.module.scss'

export function AutoComplete() {
  const searchQuery = useAppSelector((state) => state.search.search)
  const { data = [] } = useGetSearchProductQuery(searchQuery)

  const dispatch = useAppDispatch()

  const filteredData = useMemo(() => {
    return data.filter((item) =>
      String(item).toLowerCase().includes(searchQuery.toLowerCase()),
    )
  }, [data, searchQuery])

  const handleItemClick = (item: string) => {
    dispatch(setProductSearch(item))
    dispatch(clearSearch())
  }

  return (
    <>
      {searchQuery && (
        <ul className={s.autoComplete}>
          {filteredData.map((item, index) => (
            <li
              key={index}
              onClick={() => handleItemClick(item)}
              className={s.item}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </>
  )
}
