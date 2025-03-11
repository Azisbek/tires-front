import { CommentIcon } from 'shared/assets/icon/CommentIcon'

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
