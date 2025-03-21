import { useParams } from 'react-router-dom'

import { popularProductsMock } from 'pages/home/api/data'

import { Characteristics, ViewProduct } from 'widgets/product-details'
import { ProductList } from 'widgets/product-list'

import { NavigateBtn } from 'features/navigate-button'

import { Space } from 'shared/ui/Space/Space'
import { Title } from 'shared/ui/Text'

import { useGetProductIdQuery } from '../api'

import s from './ProductPage.module.scss'

export function ProductPage() {
  const { id } = useParams()
  const { data } = useGetProductIdQuery({ id })

  console.log(data)

  return (
    <div className={s.productPage}>
      <ViewProduct />

      <Space h={24} />

      <Characteristics />

      <Space h={72} />

      <div className={s.productContainer}>
        <Title className={s.title} size="lg-32">Похожие товары</Title>

        <ProductList
          className={s.productList}
          products={popularProductsMock}
        />

        <NavigateBtn className={s.btn}>Посмотреть все шины</NavigateBtn>
      </div>
    </div>
  )
}
