import { OrderHistory, PersonalAccount } from 'entities/personalAccount'

import { Title } from 'shared/ui/Text'

import s from './ProfilePage.module.scss'

export function ProfilePage() {
  return (
    <div className={s.container}>
      <Title
        size="xl-40"
        className={s.description}
      >
        Личный кабинет
      </Title>
      <PersonalAccount />

      <div className={s.orderHistory}>
        <OrderHistory />
      </div>
    </div>
  )
}
