import { useParams } from 'react-router-dom'

import { NewsDetails } from 'widgets/news-details'
import { NewsListWithSkeleton } from 'widgets/promotionList'
import { PromotionData } from 'widgets/promotionList/api'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { SkeletonNewsDetail } from 'shared/ui/skeleton-components'

import { useGetNewsByIdQuery } from '../api'

import s from './NewsPage.module.scss'

export function NewsPage() {
  const { id } = useParams<string>()
  const { data } = useGetNewsByIdQuery({ id: id || '' })

  if (!data) return <SkeletonNewsDetail />

  return (
    <>
      <NewsDetails data={data} />

      <div className={s.container}>
        <NewsListWithSkeleton
          title="Похожие новости"
          data={PromotionData}
          isLoading={false}
        />

        <div>
          <AppButton
            className={s.btn}
            variant="border"
          >
            Посмотреть все новости и статьи
          </AppButton>
        </div>
      </div>
    </>
  )
}
