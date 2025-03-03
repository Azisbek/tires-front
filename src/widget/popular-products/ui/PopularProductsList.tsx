import React from 'react'

import { ProductCard } from 'entities/product'
import { popularProductsMock } from 'entities/product/mocks/popularProducts.mock'

import styles from './PopularProductsList.module.scss'
import { GoToCatalogButton } from 'features/go-to-catalog-button'

export const PopularProductsList: React.FC = () => {
  const products = popularProductsMock

  return (
    <section className={styles.section}>  
      <h2 className={styles.title}>Популярные шины</h2>
      <div className={styles.list}>
        {products.map((product) => (
          <ProductCard
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
