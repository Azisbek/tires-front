import { Rating } from 'react-simple-star-rating'

import { FavoriteBtn } from 'features/toggle-favorite'

import { ProductImage, ProductPrice, ProductSeason } from 'entities/product'
import { ProductCardProps } from 'entities/product/model/types'
import { CommentCounter } from 'entities/product/ui/сomment-сount'

import s from './ProductCard.module.scss'

export const ProductCard = ({ product }: { product: ProductCardProps }) => {
  const {
    productImg,
    productTitle,
    season,
    commentQuantity,
    rating,
    inStock,
    price,
    isFavorite,
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
        <h3>{productTitle}</h3>
        <p className={s.stock}>{inStock > 0 ? 'В наличии' : 'Нет в наличии'}</p>
        <div className={s.buttonWrapper}>
          <ProductPrice>{price}</ProductPrice>
          <div className={s.fav}>
          <FavoriteBtn isFavorite={isFavorite} />

          </div>
        </div>
      </div>
    </div>
  )
}
