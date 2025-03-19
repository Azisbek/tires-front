import { CompanyDescription, CompanyNews } from "entities/aboutCompany"
import s from './AboutCompany.module.scss'


export const AboutCompany = () => {
  return (
    <div className={s.container}>
      <div>
        <CompanyDescription/>
       
      </div>
      
      <CompanyNews/>
    </div>
  )
}
