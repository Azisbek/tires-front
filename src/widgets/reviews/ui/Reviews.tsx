import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { AddComment, Comment } from 'features/comment'

import { ReviewsBanner } from 'entities/characteristics-components'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { LoaderComment } from 'shared/ui/loader-components'
import { SkeletonComment } from 'shared/ui/skeleton-components'

import { useGetProductCommentsQuery } from '../api'

import s from './Reviews.module.scss'

export function Reviews() {
  const { id } = useParams()
  const [limit, setLimit] = useState(3)

  const { data, isLoading, isFetching, refetch } = useGetProductCommentsQuery(
    { id: Number(id), limit },
    { refetchOnMountOrArgChange: false },
  )

  const handleLoadMore = () => setLimit((prev) => prev + 3)

  console.log(data)
  if (!id) return <p>Product ID is missing</p>

  return (
    <section className={s.reviews}>
      <AddComment
        productId={id}
        refetch={refetch}
      />

      <ReviewsBanner />

      <div className={s.reviewsList}>
        {data?.results?.map((item) => (
          <Comment
            key={item.id}
            username="Termos"
            date={item.created_at}
            rating={item.rating}
            comment={item.comment}
          />
        ))}

        {isFetching && !isLoading && <LoaderComment />}

        {isLoading && (
          <>
            <SkeletonComment />
            <SkeletonComment />
            <SkeletonComment />
          </>
        )}
      </div>

      {data?.next && (
        <div>
          <AppButton
            variant="border"
            onClick={handleLoadMore}
          >
            Показать ещё
          </AppButton>
        </div>
      )}
    </section>
  )
}
