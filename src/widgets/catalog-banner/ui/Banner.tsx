import { BannerImg, BannerTitle } from 'entities/info-banner'

import s from './Banner.module.scss'

export function Banner() {
  return (
    <section className={s.container}>
      <BannerImg />
      <BannerTitle />
    </section>
  )
}
