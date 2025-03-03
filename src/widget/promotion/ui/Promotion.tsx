import { PromotionCard } from 'entities/promotionCard/ui/PromotionCard'

import s from './Stocks.module.scss'

// Временно пока нет бека
const StockData = [
  {
    id: 1,
    title: 'Тормозные колодки со скидкой 10%',
    tags: ['Диски', 'Шины'],
    expiryDate: '30.09.2021',
    imageUrl: '',
  },
  {
    id: 2,
    title: 'Тормозные колодки со скидкой 10%',
    tags: ['Диски', 'Шины'],
    expiryDate: '30.09.2021',
    imageUrl: '',
  },
  {
    id: 3,
    title: 'Тормозные колодки со скидкой 10%',
    tags: ['Диски', 'Шины'],
    expiryDate: '30.09.2021',
    imageUrl: '',
  },
]

export const Promotion = () => {
  return (
    <div className={s.stocks}>
      <p className={s.stocksSpan}>Акции</p>

      <div className={s.stocksContainer}>
        {StockData.map((product) => (
          <PromotionCard
            key={product.id}
            product={{ ...product }}
          />
        ))}
      </div>
    </div>
  )
}
