import { useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

import { AddComment } from 'features/comment'

import { ReviewsBanner } from 'entities/characteristics-components'

import { ProductDetailsTypes } from 'shared/types/ProductDetailsTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'

import { useGetProductCommentsQuery } from '../api'

import { CommentListWithSkeleton } from './CommentList/CommentList'
import s from './Reviews.module.scss'

export function Reviews() {
  const { id } = useParams()
  const [limit, setLimit] = useState(3)
  const productData = useOutletContext<ProductDetailsTypes>()

  const { data, isLoading, isFetching, refetch } = useGetProductCommentsQuery(
    { id: Number(id), limit },
    { refetchOnMountOrArgChange: false },
  )

  const handleLoadMore = () => setLimit((prev) => prev + 3)

  return (
    <section className={s.reviews}>
      <AddComment
        productId={id || ''}
        refetch={refetch}
      />

      <ReviewsBanner
        average_rating={productData.average_rating}
        comments_count={productData.comments_count}
      />

      <CommentListWithSkeleton
        data={data?.results}
        isLoading={isLoading}
        isFetching={isFetching}
      />

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
