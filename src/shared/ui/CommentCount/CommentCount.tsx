import { CommentIcon } from 'shared/assets/icons/CommentIcon'

import s from './CommentCount.module.scss'

interface Props {
  comments_count: number
}

export function CommentCounter({ comments_count }: Props) {
  return (
    <div className={s.comment}>
      <CommentIcon />
      {comments_count}
    </div>
  )
}
