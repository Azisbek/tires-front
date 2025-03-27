import { useParams } from 'react-router-dom'

import { AddComment, Comment } from 'features/comment'

import { ReviewsBanner } from 'entities/characteristics-components'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { SkeletonComment } from 'shared/ui/skeleton-components'

import { useGetProductCommentsQuery } from '../api'

import s from './Reviews.module.scss'

export function Reviews() {
  const { id } = useParams()

  const { data, isLoading, refetch } = useGetProductCommentsQuery(
    { id },
    { refetchOnMountOrArgChange: false },
  )

  if (!id) return <p>Product ID is missing</p>

  // console.log(data)

  return (
    <section className={s.reviews}>
      <AddComment
        productId={id}
        refetch={refetch}
      />

      <ReviewsBanner />

      <div className={s.reviewsList}>
        {data?.map((item: any) => (
          <Comment
            key={item.id}
            username="Termos"
            date={item.created_at}
            rating={item.rating}
            comment={item.comment}
          />
        ))}

        {isLoading && (
          <>
            <SkeletonComment />
            <SkeletonComment />
            <SkeletonComment />
          </>
        )}
      </div>

      <div>
        <AppButton variant="border">Показать ещё 3 из 5</AppButton>
      </div>
    </section>
  )
}
