import { PromotionCategory } from 'shared/ui/promotionCategory'

import iconca from '../../../shared/assets/icons/Icon_time.svg'

import s from './PromotionCard.module.scss'

interface Props {
  title: string
  category: string[]
  expiryDate: string
  imageUrl: string
}

export function PromotionCard({
  title,
  category,
  expiryDate,
  imageUrl,
}: Props) {
  return (
    <div className={s.promotion}>
      <img
        className={s.promotionImage}
        src={imageUrl}
        alt={title}
      />

      <div className={s.promotionContent}>
        <p className={s.title}>{title}</p>

        <PromotionCategory category={category} />

        <div className={s.promotionDate}>
          <img
            src={iconca}
            alt="Union-time iconca"
          />
          <p className={s.dataText}>
            Действует до: <span className={s.date}>{expiryDate}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
