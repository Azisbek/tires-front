import { TireInfoSectionImg } from 'entities/tireInfoSection'
import { TireInfoSectionTitle } from 'entities/tireInfoSection'

import s from './TireInfoSection.module.scss'

export function TireInfoSection() {
  return (
    <section className={s.sectionContainer}>
      <TireInfoSectionImg />
      <TireInfoSectionTitle />
    </section>
  )
}
