import { MainBanner } from '../../../widget/banner'
import { HomeFilter } from '../../../widget/home-filter/ui/HomeFilter'
import { Partners } from '../../../widget/partners'
import { PopularProducts } from '../../../widget/popular-products'
import { Promotion } from '../../../widget/promotion/ui/Promotion'

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
