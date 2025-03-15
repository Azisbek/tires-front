import { ReactNode } from 'react'
import { Rating } from 'react-simple-star-rating'

import { ProductImage, ProductPrice, ProductSeason } from 'entities/product'
import { ProductCardProps } from 'entities/product/types/types'

import { CommentCounter } from 'shared/ui/CommentCount/CommentCount'

import s from './ProductCard.module.scss'

interface ProductCardItemProps {
  product: ProductCardProps
  FavoriteBtn: ReactNode
}

export function ProductCard({ product, FavoriteBtn }: ProductCardItemProps) {
  const {
    productImg,
    productTitle,
    season,
    commentQuantity,
    rating,
    inStock,
    price,
  } = product

  return (
    <div className={s.card}>
      <ProductImage
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

        <p className={s.title}>{productTitle}</p>
        <p className={s.stock}>{inStock > 0 ? 'В наличии' : 'Нет в наличии'}</p>

        <div className={s.buttonWrapper}>
          <ProductPrice>{price}</ProductPrice>
          <div className={s.fav}>{FavoriteBtn}</div>
        </div>
      </div>
    </div>
  )
}
