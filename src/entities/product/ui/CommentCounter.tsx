import React from 'react'

import commentIcon from 'shared/assets/icon/comment-icon.svg'

import styles from './CommentCounter.module.scss'

const CommentCounter = ({ commentQuantity }: { commentQuantity: number }) => {
  return (
    <div className={styles.comment}>
      <img
        src={commentIcon}
        alt="comment"
      />
      {commentQuantity}
    </div>
  )
}

export default CommentCounter
