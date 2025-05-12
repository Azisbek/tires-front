import clsx from 'clsx'

import { ReactNode } from 'react'

import { Text } from 'shared/ui/Text'

import s from './Checkbox.module.scss'

interface CheckboxProps {
  children: ReactNode
  onChange: (value: boolean) => void
  checked: boolean
  className?: string
}

export function Checkbox({
  children,
  onChange,
  checked,
  className,
}: CheckboxProps) {
  return (
    <label className={clsx(s.checkbox, className)}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => onChange(!checked)}
      />
      <span className={s.customCheckbox}></span>
      <Text size="sm-14">{children}</Text>
    </label>
  )
}
