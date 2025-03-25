import { ReactNode } from 'react'
import { Rating } from 'react-simple-star-rating'

import { ProductImage, ProductPrice, ProductSeason } from 'entities/product'

import { ProductType } from 'shared/types/CatalogpageTypes'
import { CommentCounter } from 'shared/ui/CommentCount/CommentCount'
import { Text, Title } from 'shared/ui/Text'

import s from './ProductCard.module.scss'

interface ProductCardItemProps {
  product: ProductType
  FavoriteBtn: ReactNode
}

export function ProductCard({ product, FavoriteBtn }: ProductCardItemProps) {
  const {
    image,
    average_rating,
    comments_count,
    title,
    in_stock,
    price,
    season,
  } = product

  return (
    <div className={s.card}>
      <ProductImage
        src={image}
        alt={title}
      />

      <ProductSeason
        className={s.season}
        season={season}
      />

      <div className={s.info}>
        <div className={s.meta}>
          <CommentCounter commentQuantity={comments_count} />

          <Rating
            initialValue={average_rating}
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
