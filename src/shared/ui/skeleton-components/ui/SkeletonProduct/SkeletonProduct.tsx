import { Skeleton } from '../Skeleton/Skeleton'

import s from './SkeletonProduct.module.scss'

export function SkeletonProduct() {
  return (
    <div className={s.card}>
      <Skeleton
        type="image"
        height={246}
        className={s.image}
      />
      <div className={s.details}>
        <div className={s.top}>
          <Skeleton
            type="text"
            height={14}
            className={s.reviews}
          />
          <Skeleton
            type="text"
            height={14}
            className={s.rating}
          />
        </div>
        <Skeleton
          type="title"
          height={50}
          className={s.name}
        />
        <Skeleton
          type="text"
          height={12}
          className={s.availability}
        />
        <div className={s.bottom}>
          <Skeleton
            type="text"
            height={40}
            className={s.price}
          />
          <Skeleton
            type="avatar"
            height={40}
            className={s.favorite}
          />
        </div>
      </div>
    </div>
  )
}
