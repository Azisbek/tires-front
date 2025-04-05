import { FormEvent, useState } from 'react'

import { GoogleAuthBtn } from 'features/social-login-btns'

import { SignInHeader } from 'entities/auth-components/ui/SignInHeader/ui/SignInHeader'

import { SignInFormTypes } from 'shared/types/AuthTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Title } from 'shared/ui/Text'
import { Input, PasswordInput } from 'shared/ui/input-components'

import s from './SignInForm.module.scss'

interface Props {
  onSubmit: (data: SignInFormTypes) => void
}

export function SignInForm({ onSubmit }: Props) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit?.({ email, password })
  }

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit}
    >
      <SignInHeader />

      <Input
        placeholder="Адрес электронной почты"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <AppButton
        type="submit"
        variant="accent"
      >
        Войти
      </AppButton>

      <Title>Войти с помощью</Title>

      <GoogleAuthBtn />
    </form>
  )
}
