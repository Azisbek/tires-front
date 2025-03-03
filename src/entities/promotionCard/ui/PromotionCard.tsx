import iconca from '../../../shared/assets/icon/Icon.png'
import s from './PromotionCard.module.scss'

interface Product {
  title: string
  tags: string[]
  expiryDate: string
  imageUrl: string
}

export function PromotionCard({title, tags, expiryDate, imageUrl}: Product) {
  return (
    <div className={s.promotion}>
      <img 
        src={imageUrl}
        alt={title}
      />
      <p>{title}</p>
        {tags.length > 0 && <button className={s.promotionBtn}>{tags[0]}</button>}
        {tags.length > 1 && <button className={s.promotionBtn}>{tags[1]}</button>}
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