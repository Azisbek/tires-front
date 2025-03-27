import { Skeleton } from '../Skeleton/Skeleton'

import s from './SkeletonComment.module.scss'

export function SkeletonComment() {
  return (
    <div className={s.skeletonComment}>
      <Skeleton type="title" />

      <Skeleton type="text" />
      <Skeleton type="text" />
      <Skeleton type="text" />
    </div>
  )
}
