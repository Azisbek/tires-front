import { FilterTypesMobile } from 'features/filter-types'
import { FilterTypes } from 'features/filter-types'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'

import s from './HomeFilter.module.scss'

export function HomeFilter() {
  const { isMobile } = useScreenWidth()

  return (
    <div className={s.container}>
      <p className={s.title}>
        Подберём <span>шины по марке автомобиля</span> или{' '}
        <a href="#">параметрам товара</a>
      </p>

      {isMobile ? <FilterTypesMobile /> : <FilterTypes />}
    </div>
  )
}
