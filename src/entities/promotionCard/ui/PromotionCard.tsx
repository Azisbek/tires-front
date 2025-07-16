import { Link } from 'react-router-dom'

import { formatPromotionDate } from 'shared/lib/formatDate'
import { SwipingImage } from 'shared/ui/SwipingImage/ui/SwipingImage'

import { Date } from './Date/Date'
import s from './PromotionCard.module.scss'

interface Props {
  id: string
  title: string
  expiryDate?: boolean
  imageUrl: string[]
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
        <SwipingImage
          images={imageUrl}
          className={s.image}
          width="100%"
          maxWidth={392}
          height={272}
        />
      </Link>

      <div className={s.promotionContent}>
        <Link to={`${id}`}>
          <p className={s.title}>{title}</p>
        </Link>

        <Date
          date={newDate}
          className={s.date}
          expiryDate={expiryDate}
        />
      </div>
    </div>
  )
}
