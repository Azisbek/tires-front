import { Input } from 'shared/ui/input-components'

import s from './InputBlock.module.scss'

interface Props {
  label: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: 'number' | 'text' | 'email' | 'tel' | 'date'
  disabled?: boolean
}

export function InputBlock({
  label,
  value,
  onChange,
  type = 'text',
  disabled = false,
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
    </div>
  )
}
