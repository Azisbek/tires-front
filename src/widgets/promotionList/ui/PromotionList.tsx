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
            id={product.id}
            key={product.id}
            title={product.title}
            date={product.date}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
