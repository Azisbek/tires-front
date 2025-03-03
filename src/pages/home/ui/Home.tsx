
import { MainBanner } from '../../../widget/banner'
import { HomeFilter } from '../../../widget/home-filter/ui/HomeFilter'
import { PopularProductsList } from '../../../widget/popular-products'

export function Home() {
  return (
    <>
      <MainBanner />
      <HomeFilter />
      <PopularProductsList />
    </>
  )
}
