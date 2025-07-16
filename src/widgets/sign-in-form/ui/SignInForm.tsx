import { FormEvent, useState } from 'react'

import { SignInHeader } from 'entities/auth-components/ui/SignInHeader/ui/SignInHeader'

import { SignInErrorTypes, SignInFormTypes } from 'shared/types/AuthTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Title } from 'shared/ui/Text'
import { Input, PasswordInput } from 'shared/ui/input-components'

import s from './SignInForm.module.scss'

interface Props {
  onSubmit: (data: SignInFormTypes) => void
  errors?: Partial<SignInErrorTypes>
}

export function SignInForm({ onSubmit, errors }: Props) {
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

      <div>
        {errors?.error && <p className={s.error}>{errors.error}</p>}
        <Input
          placeholder="Адрес электронной почты"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        {errors?.detail && <p className={s.error}>{errors.detail}</p>}
        <PasswordInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <AppButton
        type="submit"
        variant="accent"
      >
        Войти
      </AppButton>

      <Title>Войти с помощью</Title>
    </form>
  )
}
