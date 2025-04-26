import { useMemo } from 'react'

import { popularProductsMock } from 'pages/home/api/data'

import { MainBanner } from 'widgets/banner'
import { HomeFilter } from 'widgets/home-filter/ui/HomeFilter'
import { Partners } from 'widgets/partners'
import { ProductList } from 'widgets/product-list'
import { NewsListWithSkeleton } from 'widgets/promotionList'
import { PromotionData } from 'widgets/promotionList/api'

import { NavigateBtn } from 'features/navigate-button'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { SkeletonPage } from 'shared/ui/skeleton-components'

import { useGetHomeProductQuery } from '../api'

import s from './Home.module.scss'

export function Home() {
  const { data } = useGetHomeProductQuery()

  const filters = useMemo(() => data?.filters, [data])

  if (!data) return <SkeletonPage />

  return (
    <>
      <MainBanner />

      <HomeFilter filters={filters} />

      <div className={s.section}>
        <h2 className={s.title}>Популярные шины</h2>

        <ProductList
          className={s.popularProducts}
          products={popularProductsMock}
        />

        <NavigateBtn>Посмотреть все шины</NavigateBtn>
      </div>

      <div className={s.promotion}>
        <NewsListWithSkeleton
          title="Акции"
          data={PromotionData}
          isLoading={false}
        />

        <AppButton
          className={s.btn}
          variant="border"
        >
          Посмотреть все шины
        </AppButton>
      </div>

      <Partners />
    </>
  )
}
