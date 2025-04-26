import { Link } from 'react-router-dom'

import { formatPromotionDate } from 'shared/lib/formatDate'

import { Date } from './Date/Date'
import s from './PromotionCard.module.scss'

interface Props {
  id: string
  title: string
  expiryDate?: boolean
  imageUrl: string
  date: string
}

export function PromotionCard({
  id,
  title,
  expiryDate,
  imageUrl,
  date,
}: Props) {
  const newDate = formatPromotionDate(date)

  return (
    <div className={s.promotion}>
      <Link to={`${id}`}>
        <img
          className={s.promotionImage}
          src={imageUrl}
          alt={title}
        />
      </Link>

      <div className={s.promotionContent}>
        <Link to={`${id}`}>
          <p className={s.title}>{title}</p>
        </Link>

        <Date
          date={newDate}
          expiryDate={expiryDate}
        />
      </div>
    </div>
  )
}
