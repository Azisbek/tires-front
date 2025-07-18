import clsx from 'clsx'

import s from './Input.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string | number
  className?: string
  border?: boolean
}

export function Input({
  value = '',
  className,
  border = false,
  ...props
}: Props) {
  return (
    <div className={clsx(s.myInput, className)}>
      <input
        value={value}
        className={clsx(border ? s.border : s.input)}
        {...props}
      />
    </div>
  )
}
