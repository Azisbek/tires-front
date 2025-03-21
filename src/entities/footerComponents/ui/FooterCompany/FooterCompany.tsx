import { Title } from 'shared/ui/Text'
import s from './FooterCompany.module.scss'

export function FooterCompany() {
  return (
    <div className={s.footerCompany}>
      <Title size="sm-18" color='orange'>Компания</Title>

      <li>О компании</li>
      <li>Оплата</li>
      <li> Подарочные сертификаты </li>

    </div>
  )
}
