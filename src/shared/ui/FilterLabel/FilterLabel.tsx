import { ReactNode } from 'react'

import s from './FilterLabel.module.scss'

interface FilterLabelProps {
  label: string
  children: ReactNode
}
export function FilterLabel({ label, children }: FilterLabelProps) {
  return (
    <div className={s.filterGroup}>
      <label className={s.filterLabel}>{label}</label>
      {children}
    </div>
  )
}
