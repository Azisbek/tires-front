import { PromotionCard } from 'entities/promotionCard/ui/PromotionCard'

import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './Promotion.module.scss'

// Временно пока нет бека
const StockData = [
  {
    id: 1,
    title: 'Тормозные колодки со скидкой 10%',
    tags: ['Диски', 'Шины'],
    expiryDate: '30.09.2021',
    imageUrl: 'src/shared/assets/imgs/noneImage.png',
  },
  {
    id: 2,
    title: 'Тормозные колодки со скидкой 10%',
    tags: ['Диски', 'Шины'],
    expiryDate: '30.09.2021',
    imageUrl: 'src/shared/assets/imgs/noneImage.png',
  },
  {
    id: 3,
    title: 'Тормозные колодки со скидкой 10%',
    tags: ['Диски', 'Шины'],
    expiryDate: '30.09.2021',
    imageUrl: 'src/shared/assets/imgs/noneImage.png',
  },
]

export const Promotion = () => {
  return (
    <div className={s.promotion}>
      <p className={s.title}>Акции</p>

      <div className={s.promotionContainer}>
        {StockData.map((product) => (
          <PromotionCard
            key={product.id}
            title={product.title}
            tags={product.tags}
            expiryDate={product.expiryDate}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>

      <AppButton className={s.btn} variant="borderWhite">Посмотреть все шины</AppButton>
    </div>
  )
}
