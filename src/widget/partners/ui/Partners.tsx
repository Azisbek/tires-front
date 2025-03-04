import { OurPartners, PartnersTrust } from 'entities/partners'

import s from './Partners.module.scss'

export function Partners() {
  return (
    <>
      <div className={s.container}>
        <PartnersTrust />

        <OurPartners />
      </div>
    </>
  )
}
