import { AboutCompany } from 'widgets/aboutCompany'
import { PromotionList } from 'widgets/promotionList/ui/PromotionList'

import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Space } from 'shared/ui/Space/Space'

import s from './About.module.scss'

export const About = () => {
  return (
    <div className={s.container}>
      <AboutCompany />

      <Space h={40} />

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
