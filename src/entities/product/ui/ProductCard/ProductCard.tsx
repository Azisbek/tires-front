import { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

import { ProductPrice, ProductSeason } from 'entities/product'

import { ProductType } from 'shared/types/CatalogpageTypes'
import { CommentCounter } from 'shared/ui/CommentCount/CommentCount'
import { SwipingImage } from 'shared/ui/SwipingImage/ui/SwipingImage'
import { Text, Title } from 'shared/ui/Text'

import s from './ProductCard.module.scss'

interface Props {
  product: ProductType
  FavoriteBtn: ReactNode
  onClick?: () => void
}

export function ProductCard({ product, FavoriteBtn, onClick }: Props) {
  const {
    image,
    title,
    season,
    price,
    in_stock,
    comments_count,
    average_rating,
    product_Id,
    promotion,
    negotiable,
  } = product

  return (
    <div className={s.card}>
      <Link to={`/catalog/${product_Id}`}>
        <SwipingImage
          width={241}
          height={241}
          delay={6000}
          images={image}
        />
      </Link>

      <ProductSeason
        className={s.season}
        season={season}
      />

      <div className={s.info}>
        <div className={s.meta}>
          <CommentCounter comments_count={comments_count} />

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
          <Link
            to={`/catalog/${product_Id}`}
            className={s.color}
          >
            {title}
          </Link>
        </Title>
        <Text
          size="sm-14"
          className={s.stock}
        >
          {in_stock > 0 ? 'В наличии' : 'Нет в наличии'}
        </Text>

        <div className={s.buttonWrapper}>
          <ProductPrice
            price={price}
            promotion={promotion}
            negotiable={negotiable}
            className={s.price}
            onClick={onClick}
          />

          <div className={s.fav}>{FavoriteBtn}</div>
        </div>
      </div>
    </div>
  )
}
