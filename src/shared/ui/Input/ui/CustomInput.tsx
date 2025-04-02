import clsx from 'clsx'

import React from 'react'

import s from './CustomInput.module.scss'

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  type?: 'text' | 'number' | 'checkbox' | 'radio' | 'password' | 'email'
}

export function CustomInput({
  className,
  type = 'text',
  ...props
}: CustomInputProps) {
  return (
    <input
      className={clsx(s.input, className)}
      type={type}
      {...props}
    />
  )
}
