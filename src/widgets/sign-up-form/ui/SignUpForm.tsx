import { FormEvent, useState } from 'react'

import { SignUpHeader } from 'entities/auth-components/ui/SignUpHeader'

import { SignUpFormTypes } from 'shared/types/AuthTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Input, PasswordInput } from 'shared/ui/input-components'

import s from './SignUpForm.module.scss'

interface Props {
  onSubmit: (data: SignUpFormTypes) => void
}

export function SignUpForm({ onSubmit }: Props) {
  const [formData, setFormData] = useState<SignUpFormTypes>({
    username: '',
    email: '',
    phone: '',
    password: '',
    confirm_password: '',
  })

  const handleChange = (name: keyof SignUpFormTypes, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  return (
    <form
      className={s.form}
      onSubmit={handleSubmit}
    >
      <SignUpHeader />

      <Input
        placeholder="Имя пользователя"
        value={formData.username}
        onChange={(e) => handleChange('username', e.target.value)}
      />

      <Input
        placeholder="Адрес электронной почты"
        type="email"
        value={formData.email}
        onChange={(e) => handleChange('email', e.target.value)}
      />

      <Input
        placeholder="Введите номер телефона"
        type="tel"
        value={formData.phone}
        onChange={(e) => handleChange('phone', e.target.value)}
      />

      <PasswordInput
        placeholder="Пароль"
        value={formData.password}
        onChange={(e) => handleChange('password', e.target.value)}
      />

      <PasswordInput
        placeholder="Подтвердите пароль"
        value={formData.confirm_password}
        onChange={(e) => handleChange('confirm_password', e.target.value)}
      />

      <AppButton
        type="submit"
        variant="accent"
      >
        Зарегистрироваться
      </AppButton>
    </form>
  )
}
