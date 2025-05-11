import { ProductList } from 'widgets/product-list'

import { Text, Title } from 'shared/ui/Text'
import { SkeletonPage } from 'shared/ui/skeleton-components'

import { useGetFavoritesQuery } from '../api'

import s from './FavoritePage.module.scss'

export function FavoritePage() {
  const { data } = useGetFavoritesQuery()

  if (!data) return <SkeletonPage />

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
        // products={data.favorites.map((favorite) => ({
        //   ...favorite,
        //   season: favorite.season.value, // Возможно временное решение, нужно будет исправить в будущем
        // }))}
      />
    </div>
  )
}
