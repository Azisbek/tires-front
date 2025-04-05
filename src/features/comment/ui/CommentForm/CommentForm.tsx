import { memo } from 'react'
import { Rating } from 'react-simple-star-rating'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Text } from 'shared/ui/Text'

import s from './CommentForm.module.scss'

interface Props {
  onSubmit: (e: React.FormEvent) => void
  rating: number
  comment: string
  required: boolean
  setRating: (value: number) => void
  setComment: (value: string) => void
}

export const CommentForm = memo(function CommentForm({
  onSubmit,
  rating,
  comment,
  required,
  setComment,
  setRating,
}: Props) {
  return (
    <form
      className={s.addComment}
      onSubmit={(e) => onSubmit(e)}
    >
      <Rating
        initialValue={rating}
        readonly={false}
        allowFraction={false}
        size={40}
        onClick={setRating}
      />

      <textarea
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        className={s.textarea}
        placeholder="Написать отзыв..."
      />

      {required && <Text color="red">Комментарий или оценка не заполнены</Text>}

      <AppButton
        variant="accent"
        type="submit"
      >
        Разместить отзыв
      </AppButton>
    </form>
  )
})
