import { Title } from 'shared/ui/Text'

import s from './FooterAccount.module.scss'

export function FooterAccount() {
  return (
    <div className={s.footerAccount}>
      <Title
        size="sm-18"
        color="orange"
      >
        Личный кабинет
      </Title>

      <li>Корзина</li>
      <li>Баллы</li>
      <li>Гараж</li>
    </div>
  )
}
