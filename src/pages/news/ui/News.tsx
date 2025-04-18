import { useState } from 'react'

import { PromotionCard } from 'entities/promotionCard'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Title } from 'shared/ui/Text'
import { SkeletonNews } from 'shared/ui/skeleton-components'

import { useGetNewsByQuery } from '../api'

import s from './News.module.scss'

export function News() {
  const { data, isLoading } = useGetNewsByQuery()
  const [visibleCount, setVisibleCount] = useState(9)

  const skeletons = [...new Array(9)].map((_, i) => <SkeletonNews key={i} />)

  return (
    <div className={s.container}>
      <Title
        size="xl-40"
        color="black"
        className={s.title}
      >
        Новости и статьи
      </Title>

      <div className={s.promotionContainer}>
        {isLoading
          ? skeletons
          : data?.NewsItem.slice(0, visibleCount).map((product) => (
              <PromotionCard
                id={product.id}
                key={product.id}
                title={product.news_title}
                date={product.news_time}
                imageUrl={product.news_image}
              />
            ))}
      </div>

      <AppButton
        className={s.btn}
        variant="border"
        onClick={() => setVisibleCount((prev) => prev + 6)}
      >
        Показать ещё
      </AppButton>
    </div>
  )
}
