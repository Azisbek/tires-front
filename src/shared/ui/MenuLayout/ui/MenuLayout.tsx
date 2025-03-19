import clsx from 'clsx'

import s from './MenuLayout.module.scss'

interface Props {
  ref?: React.RefObject<HTMLDivElement | null>
  children?: React.ReactNode
  className?: string
}

export function MenuLayout({ ref, children, className }: Props) {
  return (
    <div className={clsx(s.menuLayout, className)}>
      <div
        ref={ref}
        className={s.container}
      >
        {children}
      </div>
    </div>
  )
}
