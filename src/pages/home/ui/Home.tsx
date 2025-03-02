import { Partners } from '../../../widget/partners/ui/Partners';
import { MainBanner } from '../../../widget/banner'
import { HomeFilter } from '../../../widget/home-filter/ui/HomeFilter'

export function Home() {
  return (
    <>
      <MainBanner />

      <HomeFilter />
      
      <Partners />
    </>
  )
}
