import { AboutCompany } from 'widgets/aboutCompany'
import { PromotionList } from 'widgets/promotionList/ui/PromotionList'

import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './About.module.scss'

export const About = () => {
  return (
    <div className={s.container}>
      <AboutCompany />

      <div className={s.promotionList}>
        <PromotionList title="Новости и статьи" />

        <AppButton
          className={s.btn}
          variant="border"
        >
          Посмотреть все новости и статьи
        </AppButton>
      </div>
    </div>
  )
}
