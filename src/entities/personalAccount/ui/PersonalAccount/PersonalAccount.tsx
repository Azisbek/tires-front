import { useAppSelector } from 'shared/lib/hooks'
import { Title } from 'shared/ui/Text'

import s from './PersonalAccount.module.scss'

export const PersonalAccount = () => {
  const { username, email, phone } = useAppSelector(
    (state) => state.signIn.user,
  )

  return (
    <div className={s.container}>
      <Title
        size="md-24"
        className={s.title}
      >
        Личные данные
      </Title>

      <section className={s.personalDetails}>
        <p>
          <span className={s.label}>Email:</span> {email}
        </p>
        <p>
          <span className={s.label}>Username:</span> {username}
        </p>
        <p>
          <span className={s.label}>Phone:</span> {phone}
        </p>
      </section>
    </div>
  )
}
