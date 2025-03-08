import { MainBanner } from 'widgets/banner'
import { HomeFilter } from 'widgets/home-filter/ui/HomeFilter'
import { Partners } from 'widgets/partners'
import { PopularProducts } from 'widgets/popular-products'
import { Promotion } from 'widgets/promotion/ui/Promotion'

import { useGetHomeProductQuery } from '../api'

export function Home() {
  const { data } = useGetHomeProductQuery()

  console.log(data)

  return (
    <>
      <MainBanner />

      <HomeFilter />

      <PopularProducts />

      <Promotion />

      <Partners />
    </>
  )
}
