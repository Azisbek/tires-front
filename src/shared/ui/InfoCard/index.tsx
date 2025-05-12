import clsx from 'clsx'

import { ReactNode } from 'react'

import s from './InfoCard.module.scss'

interface Props {
  className?: string
  children: ReactNode
}
export function InfoCard({ children, className }: Props) {
  return <div className={clsx(s.root, className)}>{children}</div>
}
