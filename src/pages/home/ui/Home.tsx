import { popularProductsMock } from 'pages/home/api/data'

import { MainBanner } from 'widgets/banner'
import { HomeFilter } from 'widgets/home-filter/ui/HomeFilter'
import { Partners } from 'widgets/partners'
import { ProductList } from 'widgets/product-list'
import { Promotion } from 'widgets/promotion'

import { NavigateBtn } from 'features/navigate-button'

import { AppButton } from 'shared/ui/AppButton/AppButton'

import { useGetHomeProductQuery } from '../api'

import s from './Home.module.scss'

export function Home() {
  const { data } = useGetHomeProductQuery()

  console.log(data)

  return (
    <>
      <MainBanner />

      <HomeFilter filters={data?.filters} />

      <div className={s.section}>
        <h2 className={s.title}>Популярные шины</h2>
        <ProductList
          className={s.popularProducts}
          products={popularProductsMock}
        />
        <NavigateBtn>Посмотреть все шины</NavigateBtn>
      </div>

      <div className={s.promotion}>
        <Promotion title="Акции" />

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
