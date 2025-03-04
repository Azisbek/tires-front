import React from 'react'
import { Rating } from 'react-simple-star-rating'

import { formatPrice } from 'shared/lib/utils'
import { AppButton } from 'shared/ui/AppButton/AppButton'

import { ProductCardProps } from '../types/types'

import s from './ProductCard.module.scss'
import { CommentCounter } from './comment-counter'
import { ProductSeason } from './product-season'

const stockMessages = ['Нет в наличии', 'В наличии']

export const ProductCard: React.FC<ProductCardProps> = ({
  season,
  productImg,
  rating,
  commentQuantity,
  productTitle,
  inStock,
  price,
  children,
}) => {
  return (
    <div className={s.card}>
      <img
        src={productImg}
        alt={productTitle}
      />
      <ProductSeason
        className={s.season}
        season={season}
      />
      <div className={s.info}>
        <div className={s.meta}>
          <CommentCounter commentQuantity={commentQuantity} />
          <Rating
            initialValue={rating}
            readonly
            allowFraction
            size={20}
          />
        </div>
        <h3>{productTitle}</h3>
        <p className={s.stock}>{stockMessages[inStock > 0 ? 1 : 0]}</p>
        <div className={s.buttonWrapper}>
          <AppButton
            variant="accent"
            className={s.button}
          >
            {formatPrice(price)}
          </AppButton>
          <div className={s.fav}>{children}</div>
        </div>
      </div>
    </div>
  )
}
