import { ProductList } from 'widgets/product-list'

import { navigationMap } from 'shared/model/navigation'
import { Empty } from 'shared/ui/Empty'
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

      {data.favorites.length === 0 || !data ? (
        <Empty
          to={navigationMap.Catalog}
          title="Нет избранных товаров"
          description="Добавьте товары в избранное, чтобы они отображались здесь."
        />
      ) : (
        <ProductList
          className={s.productList}
          products={data.favorites}
        />
      )}
    </div>
  )
}
