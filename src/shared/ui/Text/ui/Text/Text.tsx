import clsx from 'clsx'

import s from './Text.module.scss'

interface Props {
  children: React.ReactNode
  size?: 'md-16' | 'sm-14'
  type?: 'regular' | 'medium' | 'bold'
  color?: 'black' | 'gray'
  className?: string
}

export function Text({
  children,
  color = 'gray',
  size = 'md-16',
  type = 'regular',

  className,
}: Props) {
  return (
    <p className={clsx(s.text, s[size], s[type], s[color], className)}>
      {children}
    </p>
  )
}
