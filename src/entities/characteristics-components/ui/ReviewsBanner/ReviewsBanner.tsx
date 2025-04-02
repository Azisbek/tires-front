import { Text } from 'shared/ui/Text'

import s from './ReviewsBanner.module.scss'

interface Props {
  average_rating: number
  comments_count: number
}

export function ReviewsBanner({ average_rating, comments_count }: Props) {
  return (
    <div className={s.reviewsBanner}>
      <div className={s.bannerContent}>
        <p className={s.number}>{comments_count}</p>
        <Text>написано отзывов</Text>
      </div>

      <div className={s.bannerContent}>
        <p className={s.number}>{average_rating}</p>
        <Text>средний рейтинг</Text>
      </div>
    </div>
  )
}
