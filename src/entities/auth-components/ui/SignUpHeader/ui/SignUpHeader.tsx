import { Link } from 'react-router-dom'

import { Text, Title } from 'shared/ui/Text'

import s from './SignUpHeader.module.scss'

interface Props {
  children?: React.ReactNode
}

export function SignUpHeader({ children }: Props) {
  return (
    <div className={s.signUpHeader}>
      <Title
        className={s.title}
        size="lg-32"
      >
        Создать учетную запись
      </Title>

      {children}

      <Text
        type="medium"
        color="black"
      >
        Зарегистрируйтесь с помощью электронной почты
      </Text>

      <Text
        className={s.textContent}
        size="sm-14"
        color="black"
      >
        У вас уже есть учетная запись?
        <Link
          className={s.link}
          to={'/sign-in'}
        >
          Войти
        </Link>
      </Text>
    </div>
  )
}
