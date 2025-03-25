import clsx from 'clsx'

import { FavoriteBtn } from 'features/toggle-favorite'

import { ProductCard } from 'entities/product'

import { ProductType } from 'shared/types/CatalogpageTypes'

import s from './ProductList.module.scss'

interface ProductListProps {
  products: ProductType[]
  className?: string
}

export function ProductList({ products, className }: ProductListProps) {
  const skeletons = [...new Array(6)].map((_, i) => (
    <div
      className={s.skeleton}
      key={i}
    />
  ))
  return (
    <div className={clsx(s.list, className)}>
      {products.length === 0
        ? skeletons
        : products.map((product) => (
            <ProductCard
              key={product.product_Id}
              product={product}
              FavoriteBtn={<FavoriteBtn isFavorite={product.is_favorite} />}
            />
          ))}
    </div>
  )
}
