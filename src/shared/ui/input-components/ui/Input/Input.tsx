import clsx from 'clsx'

import s from './Input.module.scss'

interface Props {
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  className?: string
  type?: 'text' | 'email' | 'tel' | 'number'
}

export function Input({
  value = '',
  onChange,
  placeholder,
  className,
  type = 'text',
}: Props) {
  return (
    <div className={clsx(s.myInput, className)}>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={s.input}
      />
    </div>
  )
}
