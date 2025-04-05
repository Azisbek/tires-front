import clsx from 'clsx'

import { FavoriteBtn } from 'features/toggle-favorite'

import { ProductCard } from 'entities/product'

import { ProductType } from 'shared/types/CatalogpageTypes'
import {  SkeletonProduct } from 'shared/ui/skeleton-components'

import s from './ProductList.module.scss'

interface ProductListProps {
  products: ProductType[]
  className?: string
  isLoading?: boolean
}

export function ProductList({
  products,
  className,
  isLoading,
}: ProductListProps) {
  const skeletons = [...new Array(6)].map((_, i) => <SkeletonProduct key={i}/>)
  return (
    <div className={clsx(s.list, className)}>
      {isLoading
        ? skeletons
        : products.map((product) => (
            <ProductCard
              key={product.product_Id}
              product={product}
              FavoriteBtn={
                <FavoriteBtn
                  product_Id={product.product_Id}
                  is_favorite={product.is_favorite}
                />
              }
            />
          ))}
    </div>
  )
}
