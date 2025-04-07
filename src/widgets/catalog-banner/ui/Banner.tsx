import { BannerImg } from 'entities/info-banner'
import { BannerTitle } from 'entities/info-banner'

import s from './Banner.module.scss'

export function Banner() {
  return (
    <section className={s.container}>
      <BannerImg />
      <BannerTitle />
    </section>
  )
}
