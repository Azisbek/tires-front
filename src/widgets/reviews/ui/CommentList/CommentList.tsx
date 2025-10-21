import { CommentTypes } from 'widgets/reviews/types/types'

import { Comment } from 'features/comment'

import withSkeleton from 'shared/hocs/withSkeleton'
import { Empty } from 'shared/ui/Empty'
import { LoaderComment } from 'shared/ui/loader-components'

import s from './CommentList.module.scss'

interface Props {
  data: CommentTypes[]
  isFetching: boolean
}

function CommentList({ data, isFetching }: Props) {
  return (
    <div className={s.commentList}>
      {isFetching && <LoaderComment />}

      {data.length === 0 ? (
        <Empty
          title="Комментариев ещё нет"
          description="Будьте первым, кто оставит комментарий!"
          className={s.empty}
        />
      ) : (
        data?.map((item) => (
          <Comment
            key={item.id}
            username={item.username}
            date={item.created_at}
            rating={item.rating}
            comment={item.comment}
          />
        ))
      )}
    </div>
  )
}

export const CommentListWithSkeleton = withSkeleton(CommentList, 'comments')
