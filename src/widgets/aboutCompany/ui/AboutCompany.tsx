import { CompanyDescription } from "entities/aboutCompany"
import s from './AboutCompany.module.scss'
import { PromotionList } from "widgets/promotionList/ui/PromotionList"
import { Anchor } from "shared/ui/Anchor/Anchor"
import { AppButton } from "shared/ui/AppButton/AppButton"




export const AboutCompany = () => {
  const sections = [
    { id: 'history', title: 'Работаем с 2018 года' },
    { id: 'values', title: 'Ценности компании',},
    { id: 'clients', title: 'Работаем для клиентов',  }
  ];
  return (
    <div className={s.container}>
      <div>
        <CompanyDescription/>
        <Anchor sections={sections} />
      </div>
      <div className={s.promotionList}>
         <PromotionList title="Новости и статьи"/>
      <AppButton
      className={s.btn}
      variant="border">Посмотреть все новости и статьи</AppButton>
      </div>
    </div>
  )
}
