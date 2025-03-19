import { CommentIcon } from 'shared/assets/icons/CommentIcon'

import s from './CommentCount.module.scss'

interface Props {
  commentQuantity: number
}

export function CommentCounter({ commentQuantity }: Props) {
  return (
    <div className={s.comment}>
      <CommentIcon />
      {commentQuantity}
    </div>
  )
}
