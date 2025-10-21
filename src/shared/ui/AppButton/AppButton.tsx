import clsx from 'clsx'

import React from 'react'

import s from './AppButton.module.scss'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  variant: 'accent' | 'white' | 'border'
  className?: string
  type?: 'submit' | 'reset' | 'button' | undefined
}

export function AppButton({
  onClick,
  children,
  variant,
  className,
  type,
  ...props
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(s[variant], className)}
      {...props}
    >
      {children}
    </button>
  )
}
