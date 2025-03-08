import { Promotion } from 'widgets/promotion/ui/Promotion'
import { MainBanner } from 'widgets/banner'
import { HomeFilter } from 'widgets/home-filter/ui/HomeFilter'
import { Partners } from 'widgets/partners'
import { PopularProducts } from 'widgets/popular-products'

export function Home() {
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
