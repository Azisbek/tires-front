import React from 'react'

import { FavoriteButton } from 'features/add-to-favorites'

import { Button } from 'shared/ui/button'

import { ProductCardProps } from '../model/types'

import CommentCounter from './CommentCounter'
import styles from './ProductCard.module.scss'
import { ProductInfo } from './ProductInfo'
import { ProductSeason } from './ProductSeason'

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const formattedPrice = product.price.toLocaleString('ru-RU')
  return (
    <div className={styles.card}>
      <img
        src={product.productImg}
        alt={product.productTitle}
        className={styles.image}
      />
      <ProductSeason
        className={styles.season}
        season={product.season}
      />
      <div className={styles.info}>
        <div className={styles.metaInfo}>
          <CommentCounter commentQuantity={product.commentQuantity} />
          <div>⭐⭐⭐⭐⭐</div>
        </div>
        <h3 className={styles.title}>{product.productTitle}</h3>

        <ProductInfo inStock={product.inStock} />
        <div className={styles.buttonWrapper}>
          <Button className={styles.button}>{formattedPrice} С</Button>
          <FavoriteButton size={'40px'} />
        </div>
      </div>
    </div>
  )
}
