import { Rating } from 'react-simple-star-rating'

import { formatDate } from 'shared/lib/formatDate'
import { Text, Title } from 'shared/ui/Text'

import s from './Comment.module.scss'

interface Props {
  username: string
  rating: number
  date: string
  comment: string
}

export function Comment({ username, rating, date, comment }: Props) {
  return (
    <div className={s.comment}>
      <div className={s.commentUser}>
        <Title>{username}</Title>

        <div className={s.generalGrade}>
          <Rating
            initialValue={rating}
            readonly
            allowFraction
            size={25}
          />
        </div>

        <Text>{formatDate(date)}</Text>
      </div>

      <div className={s.commentContent}>
        <Title>Комментарий</Title>
        <Text className={s.description}>{comment}</Text>
      </div>
    </div>
  )
}
