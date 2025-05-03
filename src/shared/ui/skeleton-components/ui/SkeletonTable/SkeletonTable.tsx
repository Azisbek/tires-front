import { Skeleton } from '../Skeleton/Skeleton'

import s from './SkeletonTable.module.scss'

interface Props {
  column: number
}

export function SkeletonTable({ column = 3 }: Props) {
  return (
    <div className={s.skeletonTable}>
      {Array.from({ length: column }).map((_, index) => (
        <div
          key={index}
          className={s.row}
        >
          <Skeleton type="title" />
          <Skeleton type="text" />
          <Skeleton type="text" />
        </div>
      ))}
    </div>
  )
}
