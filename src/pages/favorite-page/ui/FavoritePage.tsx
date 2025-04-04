import { ProductList } from 'widgets/product-list'

import { Text, Title } from 'shared/ui/Text'
import { SkeletonPage } from 'shared/ui/skeleton-components'

import { mapProductToCardProps } from '../FavoriteTypes'
import { useGetFavoritesQuery } from '../api'

import s from './FavoritePage.module.scss'

export function FavoritePage() {
  const { data } = useGetFavoritesQuery()

  if (!data) return <SkeletonPage />

  // Преобразуем данные с помощью mapProductToCardProps !!!!!!!!!!
  const transformedProducts = data.favorites.map(mapProductToCardProps)

  return (
    <div className={s.container}>
      <Title
        className={s.title}
        size="lg-32"
      >
        Избранное
      </Title>

      <Text
        className={s.text}
        size="sm-14"
        color="gray"
      >
        Товаров: {data.total_favorites}
      </Text>

      <ProductList
        className={s.productList}
        products={transformedProducts}
      />
    </div>
  )
}
