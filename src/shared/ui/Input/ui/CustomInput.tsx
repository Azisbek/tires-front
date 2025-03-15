import React from 'react'

import s from './CustomInput.module.scss'

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  className?: string
  type?: 'text' | 'number' | 'checkbox' | 'radio' | 'password' | 'email'
}

export function CustomInput({
  label,
  className,
  type = 'text',
  ...props
}: CustomInputProps) {
  return (
      <input
        className={s.input}
        type={type}
        {...props}
      />
  )
}
