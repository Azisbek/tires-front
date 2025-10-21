import { AddProductForm } from 'widgets/add-product-form'

import { Title } from 'shared/ui/Text'

import s from './AddProduct.module.scss'

export function AddProduct() {
  return (
    <div className={s.addProduct}>
      <Title
        size="xl-40"
        color="orange"
        className={s.title}
      >
        Добавить товар
      </Title>

      <AddProductForm />
    </div>
  )
}
