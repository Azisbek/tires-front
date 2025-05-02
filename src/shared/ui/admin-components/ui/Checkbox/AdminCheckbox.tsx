import clsx from 'clsx'

import s from './AdminCheckbox.module.scss'

interface Props {
  label: string
  checked: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export function AdminCheckbox({ label, checked, onChange, className }: Props) {
  return (
    <label className={clsx(s.checkbox, className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className={s.customCheckbox}></span>
      {label}
    </label>
  )
}
