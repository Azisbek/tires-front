import { Link } from 'react-router-dom'

import { FilterTypes } from 'features/filter-types'

import { HomeFilterTypes } from 'shared/types/HomepageTypes'

import { filtersOptions } from '../api/data'

import s from './HomeFilter.module.scss'

export function HomeFilter({ filters }: HomeFilterTypes) {
  return (
    <div className={s.container}>
      <p className={s.title}>
        Подберём <span>шины по марке автомобиля</span> или{' '}
        <Link to={`#`}>параметрам товара</Link>
      </p>

      <FilterTypes filters={filters} />
    </div>
  )
}
