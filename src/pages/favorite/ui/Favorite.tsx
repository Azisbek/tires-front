
import s from './Favorite.module.scss'
import { Text, Title } from 'shared/ui/Text'
import { ProductList } from 'widgets/product-list'
import { popularProductsMock } from 'pages/home/api/data'

export function Favorite() {
  return (
    <div className={s.container}>

      <Title
        className={s.title}
        size="lg-32"
      >
        Избранное
      </Title>

      <Text className={s.text} size='sm-14' color='gray'>Товаров: </Text>
      <ProductList
        className={s.productList}
        products={popularProductsMock}
      />

    </div>

  )
}
