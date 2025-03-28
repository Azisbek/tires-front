import clsx from 'clsx'

import s from './MenuLayout.module.scss'

interface Props {
  children?: React.ReactNode
  className?: string
  onMouseEnter?: () => void
  onMouseLeave?: () => void
  paddingVertical?: number
  ref?: React.Ref<HTMLDivElement>
}

export function MenuLayout({
  children,
  className,
  onMouseEnter,
  onMouseLeave,
  paddingVertical = 40,
  ref,
}: Props) {
  return (
    <div
      className={clsx(s.menuLayout, className)}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ padding: `${paddingVertical}px 20px` }}
    >
      <div
        className={s.container}
        ref={ref}
      >
        {children}
      </div>
    </div>
  )
}
