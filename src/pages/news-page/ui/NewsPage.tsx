import { NewsDetails } from 'widgets/news-details'
import { PromotionList } from 'widgets/promotionList/ui/PromotionList'

import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './NewsPage.module.scss'

export function NewsPage() {
  return (
    <section>
      <NewsDetails />

      <div className={s.container}>
        <PromotionList title="Похожие новости" />

        <div>
          <AppButton
            className={s.btn}
            variant="border"
          >
            Посмотреть все новости и статьи
          </AppButton>
        </div>
      </div>
    </section>
  )
}
