import s from './PromotionCategory.module.scss'

interface Props {
  category: string[]
  className?: string
}

export function PromotionCategory({ category, className }: Props) {
  return (
    <div className={`${s.promotionCategory} ${className}`}>
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
