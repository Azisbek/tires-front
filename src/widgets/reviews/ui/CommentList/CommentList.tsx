import { CommentTypes } from 'widgets/reviews/types/types'

import { Comment } from 'features/comment'

import withSkeleton from 'shared/hocs/withSkeleton'
import { LoaderComment } from 'shared/ui/loader-components'

import s from './CommentList.module.scss'

interface Props {
  data: CommentTypes[] | undefined
  isFetching: boolean
}

function CommentList({ data, isFetching }: Props) {
  return (
    <div className={s.commentList}>
      {data?.map((item) => (
        <Comment
          key={item.id}
          username={item.username}
          date={item.created_at}
          rating={item.rating}
          comment={item.comment}
        />
      ))}

      {isFetching && <LoaderComment />}
    </div>
  )
}

export const CommentListWithSkeleton = withSkeleton(CommentList, 'comments')
