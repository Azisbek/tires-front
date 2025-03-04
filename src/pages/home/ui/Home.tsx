import { MainBanner } from '../../../widget/banner'
import { HomeFilter } from '../../../widget/home-filter/ui/HomeFilter'
import { Partners } from '../../../widget/partners'

export function Home() {
  return (
    <>
      <MainBanner />

      <HomeFilter />

      <Partners />
    </>
  )
}
