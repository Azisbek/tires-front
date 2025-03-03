import { PromotionCard } from 'entities/promotionCard/ui/PromotionCard'

import foto from '../../../shared/assets/img/Rectangle.png'

import s from './Promotion.module.scss'

// Временно пока нет бека
const PromitionData = [
  {
    id: 1,
    title: 'Тормозные колодки со скидкой 10%',
    tags: ['Диски', 'Шины'],
    expiryDate: '30.09.2021',
    imageUrl: foto,
  },
  {
    id: 2,
    title: 'Тормозные колодки со скидкой 10%',
    tags: ['Диски', 'Шины'],
    expiryDate: '30.09.2021',
    imageUrl: foto,
  },
  {
    id: 3,
    title: 'Тормозные колодки со скидкой 10%',
    tags: ['Диски', 'Шины'],
    expiryDate: '30.09.2021',
    imageUrl: foto,
  },
]

export function Promotion() {
  return (
    <div className={s.promotion}>
      <p className={s.promotionSpan}>Акции</p>
      <div className={s.promotionContainer}>
        {PromitionData.map((product) => (
          <PromotionCard
            key={product.id}
            title={product.title}
            tags={product.tags}
            expiryDate={product.expiryDate}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  )
}
