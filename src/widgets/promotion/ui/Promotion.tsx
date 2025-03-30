import { PromotionCard } from 'entities/promotionCard'

import { PromotionData } from '../api'

import s from './Promotion.module.scss'

interface Props {
  title?: string
}

export function Promotion({ title }: Props) {
  const limitedData = PromotionData.slice(0, 3);

  return (
    <div className={s.promotion}>
      <p className={s.title}>{title}</p>

      <div className={s.promotionContainer}>
        {limitedData.map((product) => (
          <PromotionCard
            key={product.id}
            title={product.title}
            category={product.category}
            date={product.date}
            imageUrl={product.imageUrl}
            expiryDate={true}
          />
        ))}
      </div>
    </div>
  )
}
