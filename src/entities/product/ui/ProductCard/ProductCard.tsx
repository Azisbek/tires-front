import { ReactNode } from 'react'
import { Rating } from 'react-simple-star-rating'

import { ProductImage, ProductPrice, ProductSeason } from 'entities/product'
import { ProductCardProps } from 'entities/product/types/types'

import { CommentCounter } from 'shared/ui/CommentCount/CommentCount'
import { Text, Title } from 'shared/ui/Text'

import s from './ProductCard.module.scss'

interface ProductCardItemProps {
  product: ProductCardProps
  FavoriteBtn: ReactNode
}

export function ProductCard({ product, FavoriteBtn }: ProductCardItemProps) {
  const { image, title, season, comment_quantity, rating, in_stock, price } =
    product
  const seasonLabel =
    season === 1 ? 'winter' : season === 2 ? 'summer' : 'allSeason'

  return (
    <div className={s.card}>
      <ProductImage
        src={image}
        alt={title}
      />

      <ProductSeason
        className={s.season}
        season={seasonLabel}
      />

      <div className={s.info}>
        <div className={s.meta}>
          <CommentCounter commentQuantity={comment_quantity || 0} />
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
          {title}
        </Title>
        <Text
          size="sm-14"
          className={s.stock}
        >
          {in_stock > 0 ? 'В наличии' : 'Нет в наличии'}
        </Text>

        <div className={s.buttonWrapper}>
          <ProductPrice>{price}</ProductPrice>
          <div className={s.fav}>{FavoriteBtn}</div>
        </div>
      </div>
    </div>
  )
}
