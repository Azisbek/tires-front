import { FilterTypes } from 'features/filter-types'

import s from './HomeFilter.module.scss'

export function HomeFilter() {

  return (
    <div className={s.container}>
      <p className={s.title}>
        Подберём <span>шины по марке автомобиля</span> или{' '}
        <a href="#">параметрам товара</a>
      </p>

      <FilterTypes />
    </div>
  )
}
