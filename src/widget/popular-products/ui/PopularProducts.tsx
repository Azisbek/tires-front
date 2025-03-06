import React from 'react'

import { CatalogBtn } from 'features/catalog-button'

import { popularProductsMock } from 'entities/product/mocks/popularProducts.mock'

import { useScreenWidth } from 'shared/hooks/useScreenWidth'

import { ProductCard } from '../../product-card'

import s from './PopularProducts.module.scss'

export const PopularProducts: React.FC = () => {
  const products = popularProductsMock
  const { isMobile } = useScreenWidth()

  return (
    <section className={s.section}>
      <h2>Популярные шины</h2>
      <div className={s.list}>
        {products.map((product) => (
          <ProductCard
            key={product.productId}
            product={product}
          />
        ))}
      </div>
      {!isMobile && <CatalogBtn />}
    </section>
  )
}
