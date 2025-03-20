import { PromotionCard } from 'entities/promotionCard'

import { PromotionData } from '../api'

import s from './PromotionList.module.scss'

interface Props {
  title?: string
}

export function PromotionList({ title }: Props) {
  return (
    <div className={s.promotion}>
      <p className={s.title}>{title}</p>

      <div className={s.promotionContainer}>
        {PromotionData.map((product) => (
          <PromotionCard
            key={product.id}
            title={product.title}
            category={product.category}
            expiryDate={product.expiryDate}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
