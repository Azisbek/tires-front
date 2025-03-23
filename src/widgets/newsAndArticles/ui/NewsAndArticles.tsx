import { NewsAndArticlesCard } from 'entities/newsAndArticles'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Title } from 'shared/ui/Text'

import { newsData } from '../api/data'

import s from './NewsAndArticles.module.scss'

export function NewsAndArticles() {
  return (
    <section className={s.newsSection}>
      <Title
        color="black"
        size="xl-40"
        className={s.title}
      >
        Новости и статьи
      </Title>

      <div className={s.newsGrid}>
        {newsData.map((product) => (
          <NewsAndArticlesCard
            key={product.id}
            title={product.title}
            category={product.category}
            expiryDate={product.expiryDate}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
      <AppButton
        variant="border"
        className={s.loadMore}
      >
        Показать ещё
      </AppButton>
    </section>
  )
}
