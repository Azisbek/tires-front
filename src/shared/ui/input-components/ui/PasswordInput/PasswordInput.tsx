import clsx from 'clsx'

import { useState } from 'react'

import EyeIcon from 'shared/assets/icons/eye.webp'
import EyeOffIcon from 'shared/assets/icons/eyeoff.webp'

import s from './PasswordInput.module.scss'

interface Props {
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
}

export function PasswordInput({
  value = '',
  onChange,
  placeholder = 'Введите пароль',
  className,
}: Props) {
  const [isVisible, setIsVisible] = useState(true)

  return (
    <div className={clsx(s.passwordInput, className)}>
      <input
        value={value}
        onChange={onChange}
        type={isVisible ? 'text' : 'password'}
        placeholder={placeholder}
        className={s.input}
      />
      <button
        type="button"
        className={s.btn}
        onClick={() => setIsVisible(!isVisible)}
      >
        <img
          src={isVisible ? EyeIcon : EyeOffIcon}
          alt="eye-img"
          width={24}
          height={24}
        />
      </button>
    </div>
  )
}
