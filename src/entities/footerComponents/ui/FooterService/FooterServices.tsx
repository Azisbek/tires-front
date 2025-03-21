import { Title } from 'shared/ui/Text'
import s from './FooterService.module.scss'

export function FooterServices() {
  return (
    <div className={s.footerService}>
      <Title size="sm-18" color='orange'>Услуги</Title>

      <li>Шиномонтаж</li>
      <li>Всё для шиномонтажа</li>
      <li>Ремонт и правка дисков </li>

    </div>
  )
}
