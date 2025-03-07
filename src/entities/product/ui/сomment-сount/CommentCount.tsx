import commentIcon from 'shared/assets/icon/comment-icon.svg'

import s from './CommentCount.module.scss'

export const CommentCounter = ({
  commentQuantity,
}: {
  commentQuantity: number
}) => {
  return (
    <div className={s.comment}>
      <img
        src={commentIcon}
        alt="number of comments"
      />
      {commentQuantity}
    </div>
  )
}
