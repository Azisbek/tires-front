import { useParams } from 'react-router-dom'

import { Characteristics, ViewProduct } from 'widgets/product-details'
import { ProductList } from 'widgets/product-list'

import { NavigateBtn } from 'features/navigate-button'

import { ProductType } from 'shared/types/CatalogpageTypes'
import { SimilarProductTypes } from 'shared/types/ProductDetailsTypes'
import { Space } from 'shared/ui/Space/Space'
import { Title } from 'shared/ui/Text'
import { SkeletonPage } from 'shared/ui/skeleton-components'

import { useGetProductIdQuery } from '../api'

import s from './ProductPage.module.scss'

const mapSimilarProductToCard = (
  product: SimilarProductTypes,
): ProductType => ({
  product_Id: product.id,
  image: product.image_url,
  average_rating: product.rating,
  comments_count: product.comments_count,
  title: product.title,
  in_stock: product.in_stock,
  price: Number(product.price),
  is_favorite: product.favorite,
  season: product.season as 'summer' | 'winter' | 'all_seasons',
})

export function ProductPage() {
  const { id } = useParams<string>()
  const { data } = useGetProductIdQuery({ id: id || '' })

  console.log(data) // Вренно консоль, чтобы проверять данные с бэка

  if (!data) return <SkeletonPage />

  return (
    <div className={s.productPage}>
      <ViewProduct data={data} />

      <Space h={24} />

      <Characteristics data={data} />

      <Space h={72} />

      <div className={s.productContainer}>
        <Title
          className={s.title}
          size="lg-32"
        >
          Похожие товары
        </Title>

        <ProductList
          products={data.similar_products.map(mapSimilarProductToCard)}
        />

        <NavigateBtn className={s.btn}>Посмотреть все шины</NavigateBtn>
      </div>
    </div>
  )
}
