import { NewsItemTypes } from 'pages/news/types/types'

import { PromotionCard } from 'entities/promotionCard'

import withSkeleton from 'shared/hocs/withSkeleton'
import { Title } from 'shared/ui/Text'

import s from './PromotionList.module.scss'

interface Props {
  data?: NewsItemTypes[]
  title?: string
}

function NewsList({ data, title }: Props) {
  return (
    <div className={s.container}>
      <Title
        size="xl-40"
        className={s.title}
      >
        {title}
      </Title>

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
    </div>
  )
}

export const NewsListWithSkeleton = withSkeleton(NewsList, 'news')
