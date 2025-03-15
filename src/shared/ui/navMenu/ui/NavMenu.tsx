import { CompanyList } from '../CompanyList/CompanyList'
import { ProductsMenu } from '../ProductsMenu/ProductsMenu'
import { ServicesList } from '../ServicesList/ServicesList'
import s from './NavMenu.module.scss'

export function NavMenu() {
  return (
    <nav className={s.menu}>
      <li>
        <button className={s.menuButton}><ProductsMenu/></button>
      </li>
      <button className={s.servicesButton}><ServicesList/></button>
      <button className={s.companyButton}><CompanyList/></button>
    </nav>
  )
}
