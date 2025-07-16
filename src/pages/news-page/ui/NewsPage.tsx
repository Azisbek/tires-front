import { useNavigate, useParams } from 'react-router-dom'

import { NewsDetails } from 'widgets/news-details'
import { NewsListWithSkeleton } from 'widgets/promotionList'

import { navigationMap } from 'shared/model/navigation'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { SkeletonNewsDetail } from 'shared/ui/skeleton-components'

import { useGetNewsByIdQuery } from '../api'

import s from './NewsPage.module.scss'

export function NewsPage() {
  const { id } = useParams<string>()
  const { data } = useGetNewsByIdQuery({ id: id || '' })
  const navigate = useNavigate()

  if (!data) return <SkeletonNewsDetail />

  return (
    <div className={s.container}>
      <NewsDetails data={data} />

      {data && data.related_news.length > 0 && (
        <div className={s.container}>
          <NewsListWithSkeleton
            emptyTitle="Похожие новости отсутствуют"
            title="Похожие новости"
            data={[]}
            isLoading={false}
          />

          <div>
            <AppButton
              className={s.btn}
              onClick={() => navigate(navigationMap.News)}
              variant="border"
            >
              Посмотреть все новости и статьи
            </AppButton>
          </div>
        </div>
      )}
    </div>
  )
}
