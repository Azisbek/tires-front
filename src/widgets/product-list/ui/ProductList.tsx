import clsx from 'clsx'

import { FavoriteBtn } from 'features/toggle-favorite'

import { ProductCard } from 'entities/product'
import { ProductCardProps } from 'entities/product/types/types'

import s from './ProductList.module.scss'

interface ProductListProps {
  products: ProductCardProps[]
  className?: string
}

export function ProductList({ products, className }: ProductListProps) {
  return (
    <div className={clsx(s.list, className)}>
      {products.map((product) => (
        <ProductCard
          key={product.productId}
          product={product}
          FavoriteBtn={<FavoriteBtn isFavorite={product.isFavorite} />}
        />
      ))}
    </div>
  )
}
