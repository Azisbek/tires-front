import { useNavigate } from 'react-router-dom'

import { MainBanner } from 'widgets/banner'
import { HomeFilter } from 'widgets/home-filter/ui/HomeFilter'
import { Partners } from 'widgets/partners'
import { ProductList } from 'widgets/product-list'
import { NewsListWithSkeleton } from 'widgets/promotionList'

import { navigationMap } from 'shared/model/navigation'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { SkeletonPage } from 'shared/ui/skeleton-components'

import { useGetHomeProductQuery } from '../api'

import s from './Home.module.scss'

export function Home() {
  const { data } = useGetHomeProductQuery()
  const navigate = useNavigate()

  if (!data) return <SkeletonPage />

  return (
    <>
      <MainBanner />

      <HomeFilter filters={data?.filters} />

      {data?.popular.length > 0 && (
        <div className={s.section}>
          <h2 className={s.title}>Популярные шины</h2>

          <ProductList
            className={s.popularProducts}
            products={data?.popular}
          />

          <AppButton
            onClick={() => navigate(navigationMap.Catalog)}
            variant="border"
          >
            Посмотреть все шины
          </AppButton>
        </div>
      )}

      {data?.promotion.length > 0 && (
        <div className={s.promotion}>
          <NewsListWithSkeleton
            emptyTitle="Нет акций"
            title="Акции"
            data={[]}
            isLoading={false}
          />

          <AppButton
            className={s.btn}
            onClick={() => navigate(navigationMap.News)}
            variant="border"
          >
            Посмотреть все акции
          </AppButton>
        </div>
      )}

      <Partners />
    </>
  )
}
