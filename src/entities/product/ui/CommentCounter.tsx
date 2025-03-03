import React from 'react'

import commentIcon from 'shared/assets/icon/comment-icon.svg'

import s from './CommentCounter.module.scss'

export const CommentCounter = ({ commentQuantity }: { commentQuantity: number }) => {
  return (
    <div className={s.comment}>
      <img
        src={commentIcon}
        alt="comment"
      />
      {commentQuantity}
    </div>
  )
}


