import { popularProductsMock } from 'widgets/popular-products/api/data'

import { NavigateBtn } from 'features/navigate-button'

import { ProductList } from 'widgets/product-list'

import s from './PopularProducts.module.scss'

export function PopularProducts () {
  const products = popularProductsMock

  return (
    <section className={s.section}>
      <h2 className={s.title}>Популярные шины</h2>
      <ProductList products={products} />
      <NavigateBtn>Посмотреть все шины</NavigateBtn>
    </section>
  )
}
