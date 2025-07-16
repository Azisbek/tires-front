import { NewsItemTypes } from 'pages/news/types/types'

import { PromotionCard } from 'entities/promotionCard'

import withSkeleton from 'shared/hocs/withSkeleton'
import { Empty } from 'shared/ui/Empty'
import { Title } from 'shared/ui/Text'

import s from './PromotionList.module.scss'

interface Props {
  data?: NewsItemTypes[]
  title?: string
  emptyTitle: string | undefined
}

function NewsList({ data, title, emptyTitle }: Props) {
  return (
    <div className={s.container}>
      <Title
        size="xl-40"
        className={s.title}
      >
        {title}
      </Title>

      {data?.length === 0 ? (
        <Empty
          className={s.empty}
          title={emptyTitle || 'Ошибка (Empty)'}
        />
      ) : (
        <div className={s.content}>
          {data?.map((product) => (
            <PromotionCard
              id={product.id}
              key={product.id}
              title={product.news_title}
              date={product.news_time}
              imageUrl={product.news_image}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export const NewsListWithSkeleton = withSkeleton(NewsList, 'news')
