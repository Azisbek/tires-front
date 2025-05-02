import { Input } from 'shared/ui/input-components'

import s from './AdminInputBlock.module.scss'

interface Props {
  label: string
  value: string | number
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: 'number' | 'text' | 'email' | 'tel' | 'date'
  disabled?: boolean
  error?: string
}

export function AdminInputBlock({
  label,
  value,
  onChange,
  type = 'text',
  disabled = false,
  error,
}: Props) {
  return (
    <div className={s.inputBlock}>
      <label>{label}</label>
      <Input
        className={s.input}
        type={type}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      {error && <p className={s.error}>{error}</p>}
    </div>
  )
}
