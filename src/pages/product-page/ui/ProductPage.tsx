import { ViewProduct } from 'widgets/product-details'

import s from './ProductPage.module.scss'

export function ProductPage() {
  return (
    <div className={s.productPage}>
      <ViewProduct />
    </div>
  )
}
