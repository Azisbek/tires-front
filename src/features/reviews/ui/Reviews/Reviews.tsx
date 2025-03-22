import { Review } from 'entities/review'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Text } from 'shared/ui/Text'

import s from './Reviews.module.scss'

export function Reviews() {
  return (
    <div className={s.reviews}>
      <div>
        <AppButton variant="accent">Добавить отзыв</AppButton>
      </div>

      <div className={s.productReviews}>
        <div className={s.productReview}>
          <p className={s.number}>720</p>
          <Text>написано отзывов</Text>
        </div>

        <div className={s.productReview}>
          <p className={s.number}>4.8</p>
          <Text>средний рейтинг</Text>
        </div>
      </div>

      <div className={s.reviewsList}>
        <Review />
        <Review />
      </div>

      <div>
        <AppButton variant="border">Показать ещё 3 из 5</AppButton>
      </div>
    </div>
  )
}
