import clsx from 'clsx'

import s from './Text.module.scss'

interface Props {
  children: React.ReactNode
  size?: 'md-16' | 'sm-14'
  type?: 'regular' | 'medium'
  className?: string
}

export function Text({
  children,
  size = 'md-16',
  type = 'regular',
  className,
}: Props) {
  return <p className={clsx(s.text, s[size], s[type], className)}>{children}</p>
}
