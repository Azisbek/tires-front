import clsx from 'clsx'

import { useNavigate } from 'react-router-dom'

import { FavoriteBtn } from 'features/toggle-favorite'

import { ProductCard } from 'entities/product'

import { ProductType } from 'shared/types/CatalogpageTypes'
import { SkeletonProduct } from 'shared/ui/skeleton-components'

import s from './ProductList.module.scss'

interface ProductListProps {
  products?: ProductType[]
  className?: string
  isLoading?: boolean
}

export function ProductList({
  products,
  className,
  isLoading,
}: ProductListProps) {
  const navigate = useNavigate()

  const skeletons = [...new Array(6)].map((_, i) => <SkeletonProduct key={i} />)

  const handleClick = (id: number) => {
    navigate(`/catalog/${id}`)
  }

  return (
    <div className={clsx(s.list, className)}>
      {isLoading
        ? skeletons
        : products?.map((product) => (
            <ProductCard
              key={product.product_Id}
              product={product}
              onClick={() => handleClick(product.product_Id)}
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
