import { MainBanner } from '../../../widget/banner'
import { HomeFilter } from '../../../widget/home-filter/ui/HomeFilter'
import { Promotion } from '../../../widget/promotion/ui/Promotion'
import { Partners } from '../../../widget/partners'

export function Home() {
  return (
    <>
      <MainBanner />

      <HomeFilter />
      
      <Promotion />

      <Partners />
    </>
  )
}
