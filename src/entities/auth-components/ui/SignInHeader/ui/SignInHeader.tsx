import { Link } from 'react-router-dom'

import { Text, Title } from 'shared/ui/Text'

import s from './SignInHeader.module.scss'

export function SignInHeader() {
  return (
    <div className={s.singInHeader}>
      <Title size="lg-32">Вход</Title>

      <Text size="sm-14">
        Новый пользователь?{' '}
        <Link
          className={s.link}
          to={'/sign-up'}
        >
          Создать учетную запись
        </Link>
      </Text>
    </div>
  )
}
