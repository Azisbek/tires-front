import clsx from 'clsx'

import React from 'react'

import s from './Title.module.scss'

interface Props {
  children: React.ReactNode
  size?: 'xl-40' | 'lg-32' | 'md-24' | 'sm-18'
  className?: string
}

export function Title({ children, size = 'md-24', className }: Props) {
  return <p className={clsx(s.title, s[size], className)}>{children}</p>
}
