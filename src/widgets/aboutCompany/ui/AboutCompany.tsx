import { CompanyDescription } from "entities/aboutCompany"
import s from './AboutCompany.module.scss'
import { PromotionList } from "widgets/promotionList/ui/PromotionList"


export const AboutCompany = () => {
  return (
    <div className={s.container}>
      <div>
        <CompanyDescription/>
       
      </div>
      
      <PromotionList/>
    </div>
  )
}
