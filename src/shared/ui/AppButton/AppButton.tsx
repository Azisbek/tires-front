import clsx from 'clsx'

import React from 'react'

import s from './AppButton.module.scss'

interface Props {
  children: React.ReactNode
  onClick?: () => void
  variant: 'accent' | 'white' | 'borderWhite'
  className?: string
}

export function AppButton({ onClick, children, variant, className }: Props) {
  return (
    <button
      onClick={onClick}
      className={clsx(s[variant], className)}
    >
      {children}
    </button>
  )
}
