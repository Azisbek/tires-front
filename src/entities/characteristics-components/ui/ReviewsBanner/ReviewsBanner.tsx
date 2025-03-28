import { Text } from 'shared/ui/Text'

import s from './ReviewsBanner.module.scss'

export function ReviewsBanner() {
  return (
    <div className={s.reviewsBanner}>
      <div className={s.bannerContent}>
        <p className={s.number}>720</p>
        <Text>написано отзывов</Text>
      </div>

      <div className={s.bannerContent}>
        <p className={s.number}>4.8</p>
        <Text>средний рейтинг</Text>
      </div>
    </div>
  )
}
