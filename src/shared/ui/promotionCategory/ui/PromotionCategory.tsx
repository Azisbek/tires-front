import s from './PromotionCategory.module.scss'

interface Props {
  category: string[]
}

export function PromotionCategory({ category }: Props) {
  return (
    <div className={s.promotionCategory}>
      {category.map((category, index) => (
        <p
          key={index}
          className={s.category}
        >
          {category}
        </p>
      ))}
    </div>
  )
}
