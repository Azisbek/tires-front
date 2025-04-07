import { Date } from 'entities/promotionCard'

import { Title } from 'shared/ui/Text'
import { PromotionCategory } from 'shared/ui/promotionCategory'

import s from './NewsTitle.module.scss'

interface Props {
  title: string
  date: string
  categories: string[]
  imgUrl: string
}

export function NewsTitle({ title, date, categories, imgUrl }: Props) {
  return (
    <div className={s.container}>
      <Title
        className={s.title}
        size="xl-40"
      >
        {title}
      </Title>

      <div className={s.date}>
        <Date date={date} />
        <PromotionCategory category={categories} />
      </div>

      <img
        className={s.img}
        src={imgUrl}
        alt="nonePhoto"
      />
    </div>
  )
}
