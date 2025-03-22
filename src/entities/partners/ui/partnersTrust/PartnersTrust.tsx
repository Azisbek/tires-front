import clsx from 'clsx'

import { Title } from 'shared/ui/Text'

import s from './PartnersTrust.module.scss'

export function PartnersTrust() {
  return (
    <section className={s.partnersTrust}>
      <Title
        size="lg-32"
        className={s.title}
      >
        Нам доверяют
      </Title>
      <hr />
      <div className={clsx(s.marquee, s.marqueeAnimation)}>
        <img
          src="/src/shared/assets/icons/partners/ситек(1).svg"
          alt="sitec-logo"
        />
        <img
          className={s.marqueeImage}
          src="/src/shared/assets/icons/partners/turvana(2).svg"
          alt="Turvana-logo"
        />
        <img
          src="/src/shared/assets/icons/partners/gerat(3).svg"
          alt="Gerat-logo"
        />
        <img
          src="/src/shared/assets/icons/partners/liquimoly(4).svg"
          alt="LiquiMoly-logo"
        />
        <img
          src="/src/shared/assets/icons/partners/arb(5).svg"
          alt="ARB-logo"
        />
        <img
          src="/src/shared/assets/icons/partners/bushRanegr(6).svg"
          alt="BushRanger-logo"
        />
        <img
          src="/src/shared/assets/icons/partners/michelin(7).svg"
          alt="Michelin-logo"
        />
        <img
          src="/src/shared/assets/icons/partners/barum(8).svg"
          alt="Barum-logo"
        />
        <img
          src="/src/shared/assets/icons/partners/BFGoodrich(9).svg"
          alt="BFGoodrich-logo"
        />
        <img
          src="/src/shared/assets/icons/partners/ridegstome(10).svg"
          alt="Bridgestone-logo"
        />
      </div>
      <hr />
    </section>
  )
}
