import { PromotionCategory } from 'shared/ui/promotionCategory'

import iconca from '../../../shared/assets/icons/Icon_time.svg'

import s from './NewsAndArticlesCard.module.scss'

interface Props {
  title: string
  category: string[]
  expiryDate: string
  imageUrl: string
}

export function NewsAndArticlesCard({
  title,
  category,
  expiryDate,
  imageUrl,
}: Props) {
  return (
    <div className={s.card}>
      <img
        className={s.image}
        src={imageUrl}
        alt={title}
      />

      <div className={s.content}>
        <div className={s.titleCard}>
          <p className={s.title}>{title}</p>
        </div>

        <PromotionCategory category={category} />

        <div className={s.newsData}>
          <img
            src={iconca}
            alt="Union-time iconca"
          />
          <span className={s.date}>{expiryDate}</span>
        </div>
      </div>
    </div>
  )
}
