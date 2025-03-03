import iconca from '../../../shared/assets/icon/Icon.png'

import s from './PromotionCard.module.scss'

interface Product {
  title: string
  tags: string[]
  expiryDate: string
  imageUrl: string
}

export function PromotionCard({ title, tags, expiryDate, imageUrl }: Product) {
  return (
    <div className={s.promotion}>
      <img
        src={imageUrl}
        alt={title}
      />
      <p>{title}</p>
      {tags.map((tag, index) => (
        <button
          key={index}
          className={s.promotionBtn}
        >
          {tag}
        </button>
      ))}
      <div>
        <img
          src={iconca}
          alt="Union iconca"
        />
        Действует до: <b>{expiryDate}</b>
      </div>
    </div>
  )
}
