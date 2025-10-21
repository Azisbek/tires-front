import { Skeleton } from '../Skeleton/Skeleton'

import s from './SkeletonNews.module.scss'

export function SkeletonNews() {
  return (
    <div className={s.container}>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          className={s.card}
          key={index}
        >
          <Skeleton
            type="image"
            height={210}
          />
          <div className={s.details}>
            <Skeleton
              type="title"
              height={80}
              className={s.title}
            />
            <Skeleton
              type="text"
              height={22}
              className={s.date}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
