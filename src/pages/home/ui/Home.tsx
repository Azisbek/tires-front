import { popularProductsMock } from 'pages/home/api/data'

import { MainBanner } from 'widgets/banner'
import { HomeFilter } from 'widgets/home-filter/ui/HomeFilter'
import { Partners } from 'widgets/partners'
import { ProductList } from 'widgets/product-list'
import { Promotion } from 'widgets/promotion/ui/Promotion'

import { NavigateBtn } from 'features/navigate-button'

import { useGetHomeProductQuery } from '../api'

import s from './Home.module.scss'

export function Home() {
  const products = popularProductsMock
  const { data } = useGetHomeProductQuery()

  console.log(data)

  return (
    <>
      <MainBanner />

      <HomeFilter />

      <section className={s.section}>
        <h2 className={s.title}>Популярные шины</h2>
        <ProductList products={products} />
        <NavigateBtn>Посмотреть все шины</NavigateBtn>
      </section>

      <Promotion />

      <Partners />
    </>
  )
}
