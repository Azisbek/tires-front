import { FavoriteBtn } from 'features/toggle-favorite'

import { ProductCard } from 'entities/product'
import { ProductCardProps } from 'entities/product/types/types'

import s from './ProductList.module.scss'

interface ProductListProps {
  products: ProductCardProps[]
}

export function ProductList({ products }: ProductListProps) {
  return (
    <div className={s.list}>
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
