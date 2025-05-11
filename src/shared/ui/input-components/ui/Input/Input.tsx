import clsx from 'clsx'

import s from './Input.module.scss'

interface Props {
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
  type?: 'text' | 'email' | 'tel' | 'number' | 'date'
  disabled?: boolean
}

export function Input({
  value = '',
  onChange,
  placeholder,
  className,
  type = 'text',
  disabled = false,
}: Props) {
  return (
    <div className={clsx(s.myInput, className)}>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={s.input}
        disabled={disabled}
      />
    </div>
  )
}
