import { Skeleton } from '../Skeleton/Skeleton'

import s from './SkeletonPage.module.scss'

export function SkeletonPage() {
  return (
    <div className={s.skeletonPages}>
      <Skeleton
        type="image"
        height={380}
      />

      <div className={s.textContainer}>
        <Skeleton
          type="title"
          height={40}
        />
        <Skeleton
          type="text"
          height={40}
        />
        <Skeleton
          type="text"
          height={40}
        />
        <Skeleton
          type="text"
          height={40}
        />
        <Skeleton
          type="text"
          height={40}
        />
        <Skeleton
          type="text"
          height={40}
        />
        <Skeleton
          type="text"
          height={40}
        />
      </div>

      <Skeleton
        className={s.secondBox}
        type="image"
        height={380}
      />
    </div>
  )
}
