import { AboutCompany } from 'widgets/aboutCompany'

import { Space } from 'shared/ui/Space/Space'

import s from './About.module.scss'

export const About = () => {
  return (
    <div className={s.container}>
      <AboutCompany />

      <Space h={40} />

      {/* {data && (
        <div className={s.promotionList}>
          <NewsListWithSkeleton
            emptyTitle="Нет новостей"
            isLoading={false}
            data={PromotionData}
            title="Новости и статьи"
          />

          <AppButton
            className={s.btn}
            variant="border"
          >
            Посмотреть все новости и статьи
          </AppButton>
        </div>
      )} */}
    </div>
  )
}
