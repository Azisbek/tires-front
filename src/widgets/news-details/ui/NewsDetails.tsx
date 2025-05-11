import { Date } from 'entities/promotionCard'

import { formatNewsDate } from 'shared/lib/formatDate'
import { Text, Title } from 'shared/ui/Text'

import s from './NewsDetails.module.scss'

interface Props {
  data?: {
    id: string
    news_image: string
    news_title: string
    news_time: string
    news_description: string
    related_news: string[]
  }
}

export function NewsDetails({ data }: Props) {
  const date = formatNewsDate(data?.news_time ?? '')

  return (
    <div className={s.container}>
      <Title
        className={s.title}
        size="xl-40"
      >
        {data?.news_title}
      </Title>

      <Date date={date} />

      <img
        className={s.img}
        src={data?.news_image}
        alt={data?.news_title}
      />

      <Text className={s.text}>{data?.news_description}</Text>
    </div>
  )
}
