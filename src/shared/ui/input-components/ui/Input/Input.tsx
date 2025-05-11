import clsx from 'clsx'

import s from './Input.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string | number
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  className?: string
}

export function Input({ value = '', onChange, className, ...props }: Props) {
  return (
    <div className={clsx(s.myInput, className)}>
      <input
        value={value}
        onChange={onChange}
        className={s.input}
        {...props}
      />
    </div>
  )
}
