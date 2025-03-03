import React from 'react'

import { FavoriteButton } from 'features/add-to-favorites'
import { GoToCatalogButton } from 'features/go-to-catalog-button'

import { ProductCard } from 'entities/product'
import { popularProductsMock } from 'entities/product/mocks/popularProducts.mock'

import s from './PopularProductsList.module.scss'

export const PopularProductsList: React.FC = () => {
  const products = popularProductsMock

  return (
    <section className={s.section}>
      <h2 className={s.title}>Популярные шины</h2>
      <div className={s.list}>
        {products.map((product) => (
          <ProductCard
            FavoriteButton={FavoriteButton}
            key={product.productId}
            product={{
              ...product,
              season: product.season as 'winter' | 'summer' | 'allSeason',
            }}
          />
        ))}
      </div>

      <GoToCatalogButton />
    </section>
  )
}
