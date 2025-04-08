import { OrderHistory, PersonalAccount } from 'entities/personalAccount'

import { AppButton } from 'shared/ui/AppButton/AppButton'

import s from './ProfilePage.module.scss'

export function ProfilePage() {
  return (
    <div className={s.container}>
      <PersonalAccount />
      <div className={s.btns}>
        <AppButton variant="accent">Сохранить </AppButton>
        <AppButton variant="border">Отмена </AppButton>
      </div>
      <div className={s.orderHistory}>
        <OrderHistory />
      </div>
    </div>
  )
}
