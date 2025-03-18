import { ReactNode } from 'react'
import { Rating } from 'react-simple-star-rating'

import { ProductImage, ProductPrice, ProductSeason } from 'entities/product'
import { ProductCardProps } from 'entities/product/types/types'
import { CommentCounter } from 'entities/product/ui/CommentCount'

import { Text, Title } from 'shared/ui/Text'

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

        <Title
          size="md-24"
          className={s.title}
        >
          {productTitle}
        </Title>
        <Text
          size="sm-14"
          className={s.stock}
        >
          {inStock > 0 ? 'В наличии' : 'Нет в наличии'}
        </Text>

        <div className={s.buttonWrapper}>
          <ProductPrice>{price}</ProductPrice>
          <div className={s.fav}>{FavoriteBtn}</div>
        </div>
      </div>
    </div>
  )
}
