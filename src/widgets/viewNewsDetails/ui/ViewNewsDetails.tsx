import { NewsSubTitle, NewsTitle, NewsTitleList } from 'entities/newstTitles'
import { PromotionCard } from 'entities/promotionCard'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Title } from 'shared/ui/Text'

import { SimilarNews } from '../api'
import { newsDate } from '../api'

import s from './ViewNewsDetails.module.scss'

export function ViewNewsDetails() {
  return (
    <div className={s.container}>
      <NewsTitle
        title={newsDate[0].title}
        date={newsDate[0].date}
        categories={newsDate[0].category}
        imgUrl={newsDate[0].imageUrl}
      />
      <NewsSubTitle
        subTitle={newsDate[0].subTitle}
        content={newsDate[0].content}
      />
      <NewsTitleList
        subheading={newsDate[0].subheading}
        subContent={newsDate[0].subContent}
        unorderedList={newsDate[0].unorderedList}
        orderedList={newsDate[0].orderedList}
      />

      {
        <div className={s.similarNews}>
          <Title
            className={s.title}
            size="lg-32"
          >
            Похожие новости
          </Title>

          <div className={s.card}>
            {SimilarNews.map((product) => (
              <PromotionCard
                key={product.id}
                title={product.title}
                category={product.category}
                imageUrl={product.imageUrl}
                date={product.date}
              />
            ))}
          </div>

          <AppButton
            className={s.btn}
            variant="border"
          >
            Посмотреть все новости и статьи
          </AppButton>
        </div>
      }
    </div>
  )
}
