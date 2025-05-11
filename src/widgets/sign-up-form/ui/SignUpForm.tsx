import { FormEvent, useState } from 'react'

import { SignUpHeader } from 'entities/auth-components/ui/SignUpHeader'

import { SignUpFormTypes } from 'shared/types/AuthTypes'
import { AppButton } from 'shared/ui/AppButton/AppButton'
import { Input, PasswordInput } from 'shared/ui/input-components'

import s from './SignUpForm.module.scss'

interface Props {
  onSubmit: (data: SignUpFormTypes) => void
  errors?: Partial<SignUpFormTypes>
}

export function SignUpForm({ onSubmit, errors }: Props) {
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

      <div>
        {errors?.username && <p className={s.error}>{errors.username}</p>}
        <Input
          placeholder="Имя пользователя"
          value={formData.username}
          onChange={(e) => handleChange('username', e.target.value)}
        />
      </div>

      <div>
        {errors?.email && <p className={s.error}>{errors.email}</p>}
        <Input
          placeholder="Адрес электронной почты"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
        />
      </div>

      <div>
        {errors?.phone && <p className={s.error}>{errors.phone}</p>}
        <Input
          placeholder="Введите номер телефона"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
        />
      </div>

      <div>
        {errors?.password && <p className={s.error}>{errors.password}</p>}
        <PasswordInput
          placeholder="Пароль"
          value={formData.password}
          onChange={(e) => handleChange('password', e.target.value)}
        />
      </div>

      <div>
        {errors?.confirm_password && (
          <p className={s.error}>{errors.confirm_password}</p>
        )}
        <PasswordInput
          placeholder="Подтвердите пароль"
          value={formData.confirm_password}
          onChange={(e) => handleChange('confirm_password', e.target.value)}
        />
      </div>

      <AppButton
        type="submit"
        variant="accent"
      >
        Зарегистрироваться
      </AppButton>
    </form>
  )
}
