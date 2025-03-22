import clsx from 'clsx'

import s from './MenuLayout.module.scss'

interface Props {
  children?: React.ReactNode
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
}

export function MenuLayout({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
}: Props) {
  return (
    <div
      className={clsx(s.menuLayout, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={s.container}>{children}</div>
    </div>
  )
}
