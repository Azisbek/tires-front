import React from 'react'
import { Rating } from 'react-simple-star-rating'

import { AppButton } from 'shared/ui/AppButton/AppButton'

import { ProductCardProps } from '../model/types'

import { CommentCounter } from './CommentCounter'
import { ProductInfo } from './ProductInfo'
import { ProductSeason } from './ProductSeason'

import s from './ProductCard.module.scss'

interface ProductCardComponentProps {
  product: ProductCardProps
  FavoriteButton: React.FC<{ size: string }>
}
export const ProductCard: React.FC<ProductCardComponentProps> = ({
  product,
  FavoriteButton,
}) => {
  const formattedPrice = product.price.toLocaleString('ru-RU')
  return (
    <div className={s.card}>
      <img
        src={product.productImg}
        alt={product.productTitle}
        className={s.image}
      />
      <ProductSeason
        className={s.season}
        season={product.season}
      />
      <div className={s.info}>
        <div className={s.metaInfo}>
          <CommentCounter commentQuantity={product.commentQuantity} />
          <Rating
            initialValue={product.rating}
            readonly
            allowFraction
            size={20}
            emptyColor="#fff"
            fillColor="#EFD8C3"
            SVGstorkeWidth={2}
            SVGstrokeColor="#EFD8C3"
          />
        </div>
        <h3 className={s.title}>{product.productTitle}</h3>
        <ProductInfo inStock={product.inStock} />
        <div className={s.buttonWrapper}>
          <AppButton
            variant="accent"
            className={s.button}
          >
            {formattedPrice} С
          </AppButton>
          <FavoriteButton size={'40px'} />
        </div>
      </div>
    </div>
  )
}
