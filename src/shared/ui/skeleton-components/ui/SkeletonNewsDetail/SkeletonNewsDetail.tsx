import { Skeleton } from '../Skeleton/Skeleton'

import s from './SkeletonNewsDetail.module.scss'

export function SkeletonNewsDetail() {
  return (
    <div className={s.card}>
      <Skeleton
        type="title"
        height={40}
        className={s.title}
      />
      <Skeleton
        type="text"
        height={20}
        className={s.date}
      />
      <Skeleton
        type="image"
        height={500}
        className={s.image}
      />
      <Skeleton
        type="text"
        height={80}
        className={s.description}
      />
    </div>
  )
}
