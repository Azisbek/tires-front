import { MainBanner } from '../../../widget/banner'
import { HomeFilter } from '../../../widget/home-filter/ui/HomeFilter'
import { Promotion } from '../../../widget/promotion/ui/Promotion'

export function Home() {
  return (
    <>
      <MainBanner />

      <HomeFilter />
        
        <Promotion />
    </>
  )
}
