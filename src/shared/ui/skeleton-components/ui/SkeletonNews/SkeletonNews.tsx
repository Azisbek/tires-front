import { Skeleton } from '../Skeleton/Skeleton'

import s from './SkeletonNews.module.scss'

export function SkeletonNews() {
  return (
    <div className={s.card}>
      <Skeleton
        type="image"
        height={230}
      />
      <div className={s.details}>
        <Skeleton
          type="title"
          height={70}
          className={s.title}
        />
        <Skeleton
          type="text"
          height={22}
          className={s.date}
        />
      </div>
    </div>
  )
}
