import { PromotionCategory } from 'shared/ui/promotionCategory'

import { Date } from './Date/Date'

import s from './PromotionCard.module.scss'

interface Props {
  title: string
  category: string[]
  expiryDate?: boolean
  imageUrl: string
  date: string
}

export function PromotionCard({
  title,
  category,
  expiryDate,
  imageUrl,
  date,
}: Props) {
  return (
    <div className={s.promotion}>
      <img
        className={s.promotionImage}
        src={imageUrl}
        alt={title}
      />

      <div className={s.promotionContent}>
        <div className={s.content}>
          <p className={s.title}>{title}</p>
          <PromotionCategory category={category} />
        </div>

        <Date
          date={date}
          boolean={expiryDate}
        />
      </div>
    </div>
  )
}
