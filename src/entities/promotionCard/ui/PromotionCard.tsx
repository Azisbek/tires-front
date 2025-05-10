import iconca from '../../../shared/assets/icon/Union.png'

import s from './PromotionCard.module.scss'

interface Props {
  title: string
  tags: string[]
  expiryDate: string
  imageUrl: string
}

export function PromotionCard({ title, tags, expiryDate, imageUrl }: Props) {
  return (
    <div className={s.promotion}>
      <img
        className={s.promotionImage}
        src={imageUrl}
        alt={title}
      />

      <div className={s.promotionContent}>
        <p className={s.title}>{title}</p>

        <div className={s.promotionTags}>
          {tags.map((tag, index) => (
            <p
              key={index}
              className={s.tag}
            >
              {tag}
            </p>
          ))}
        </div>

        <div className={s.promotionDate}>
          <img
            src={iconca}
            alt="Union iconca"
          />
          <p>
            Действует до: <span>{expiryDate}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
