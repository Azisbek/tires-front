import { NewsSubTitle, NewsTitle } from 'entities/news-components'

import { newsDate } from '../api'

import s from './NewsDetails.module.scss'

export function NewsDetails() {
  return (
    <div className={s.container}>
      <NewsTitle
        title={newsDate.title}
        date={newsDate.date}
        categories={newsDate.category}
        imgUrl={newsDate.imageUrl}
      />

      <NewsSubTitle
        subTitle={newsDate.subTitle}
        content={newsDate.description}
      />
    </div>
  )
}
