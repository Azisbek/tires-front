import { useParams } from 'react-router-dom'

import { NewsDetails } from 'widgets/news-details'
import { PromotionList } from 'widgets/promotionList/ui/PromotionList'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { SkeletonNewsDetail } from 'shared/ui/skeleton-components'

import { useGetNewsByIdQuery } from '../api'

import s from './NewsPage.module.scss'

export function NewsPage() {
  const { id } = useParams<string>()
  const { data } = useGetNewsByIdQuery({ id: id || '' })

  if (!data) return <SkeletonNewsDetail />

  return (
    <section>
      <NewsDetails data={data} />

      <div className={s.container}>
        <PromotionList title="Похожие новости" />

        <div>
          <AppButton
            className={s.btn}
            variant="border"
          >
            Посмотреть все новости и статьи
          </AppButton>
        </div>
      </div>
    </section>
  )
}
