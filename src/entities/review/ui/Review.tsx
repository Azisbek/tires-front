import { Rating } from 'react-simple-star-rating'

import { Text, Title } from 'shared/ui/Text'

import s from './Review.module.scss'

export function Review() {
  return (
    <div className={s.review}>
      <div className={s.reviewUser}>
        <Title>UserName</Title>

        <div className={s.generalGrade}>
          <Text className={s.gradeTitle}>Общая оценка</Text>
          <Rating
            initialValue={4.5}
            readonly
            allowFraction
            size={25}
          />
        </div>

        <Text>30.03.2021</Text>
      </div>

      <div className={s.comment}>
        <Title>Комментарий</Title>
        <Text>
          После первого же сезона все 4 колеса пошли трещинами сбоку от
          протектора. Думал, что связано с низкими температурами (машина стоит
          на улице в -50 и ниже), но судя по отзывам у многих такая проблема.
          Очень хорошо держит дорогу благодаря разным формам шипов и их большому
          количеству. Пробовал уйти в занос на зимнике, не получается.
        </Text>
      </div>
    </div>
  )
}
