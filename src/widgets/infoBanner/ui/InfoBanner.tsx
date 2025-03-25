import { BannerImg } from 'entities/infoBanner'
import { BannerTitle } from 'entities/infoBanner'

import s from './InfoBanner.module.scss'

export function InfoBanner() {
  return (
    <section className={s.sectionContainer}>
      <BannerImg />
      <BannerTitle />
    </section>
  )
}
