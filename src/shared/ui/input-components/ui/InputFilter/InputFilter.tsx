import clsx from 'clsx'

import React from 'react'

import s from './InputFilter.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string
  type?: 'text' | 'number' | 'checkbox' | 'radio' | 'password' | 'email'
}

export function InputFilter({ className, type = 'text', ...props }: Props) {
  return (
    <input
      className={clsx(s.input, className)}
      type={type}
      {...props}
    />
  )
}
