import React from 'react'

import { FavBtn } from 'features/add-to-fav'
import { CatalogBtn } from 'features/catalog-button'

import { ProductCard } from 'entities/product'
import { popularProductsMock } from 'entities/product/mocks/popularProducts.mock'
import { SeasonType } from 'entities/product/types/types'

import s from './PopularProductsList.module.scss'

export const PopularProductsList: React.FC = () => {
  const products = popularProductsMock

  return (
    <section className={s.section}>
      <h2 className={s.title}>Популярные шины</h2>
      <div className={s.list}>
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            season={product.season as SeasonType}
            productId={product.productId}
            productImg={product.productImg}
            rating={product.rating}
            commentQuantity={product.commentQuantity}
            productTitle={product.productTitle}
            inStock={product.inStock}
            price={product.price}
          >
            <FavBtn
              isFavorite={product.isFavorite}
            />
          </ProductCard>
        ))}
      </div>

      <CatalogBtn />
    </section>
  )
}
