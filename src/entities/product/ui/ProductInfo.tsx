import React from 'react'
import { ProductInfoType } from '../model/types'
import styles from './ProductInfo.module.scss'

export const ProductInfo: React.FC<ProductInfoType> = ({inStock}) => {
  return (
    <p className={styles.stock}>
      {inStock > 0 ? 'В наличии' : 'Нет в наличии'}
    </p>
  )
}
