import { Stocks } from '../../../widget/promotion/ui/Stocks'
import { MainBanner } from '../../../widget/banner'
import { HomeFilter } from '../../../widget/home-filter/ui/HomeFilter'

export function Home() {
  return (
    <>
      <MainBanner />

      <HomeFilter />
      
      <Stocks />
    </>
  )
}
